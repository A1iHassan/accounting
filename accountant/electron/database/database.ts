import Database from 'better-sqlite3';
import path from 'path';
import { app } from 'electron';

// Explicit type assertion for better-sqlite3 instance
const dbPath: string = path.join(app.getPath('userData'), 'accounting.sqlite');
const db: Database.Database = new Database(dbPath);

// Apply performance optimization and integrity pragmas
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

function initDB(): void {
  const schema = `
    CREATE TABLE IF NOT EXISTS Users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS Inventory (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      sku TEXT UNIQUE,
      price REAL NOT NULL,
      stock_quantity INTEGER DEFAULT 0
    );

    CREATE TABLE IF NOT EXISTS Shareholders (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      shares REAL NOT NULL,
      contact_info TEXT
    );

    CREATE TABLE IF NOT EXISTS Invoices (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      created_by INTEGER NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      total_amount REAL NOT NULL,
      FOREIGN KEY (created_by) REFERENCES Users (id)
    );

    CREATE TABLE IF NOT EXISTS Invoice_Items (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      invoice_id INTEGER NOT NULL,
      item_id INTEGER NOT NULL,
      quantity INTEGER NOT NULL,
      unit_price REAL NOT NULL,
      FOREIGN KEY (invoice_id) REFERENCES Invoices (id) ON DELETE CASCADE,
      FOREIGN KEY (item_id) REFERENCES Inventory (id)
    );

    CREATE TABLE IF NOT EXISTS Cash_Processes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      shareholder_id INTEGER NOT NULL,
      process_type TEXT CHECK(process_type IN ('deposit', 'withdrawal', 'dividend')) NOT NULL,
      amount REAL NOT NULL,
      processed_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (shareholder_id) REFERENCES Shareholders (id)
    );
  `;

  db.exec(schema);
}

// Run schema generation
initDB();

export default db;
