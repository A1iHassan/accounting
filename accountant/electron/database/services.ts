import db from './database';
import { InventoryItem, Shareholder } from '../../types/types';

export const inventoryService = {
  getAll(): InventoryItem[] {
    const stmt = db.prepare('SELECT * FROM Inventory');
    return stmt.all() as InventoryItem[];
  },

  getById(id: number): InventoryItem | undefined {
    const stmt = db.prepare('SELECT * FROM Inventory WHERE id = ?');
    return stmt.get(id) as InventoryItem | undefined;
  },

  create(item: Omit<InventoryItem, 'id'>): number | string | bigint {
    const stmt = db.prepare(
      'INSERT INTO Inventory (name, sku, price, stock_quantity) VALUES (?, ?, ?, ?)'
    );
    const result = stmt.run(item.name, item.sku, item.price, item.stock_quantity);
    return result.lastInsertRowid;
  },

  update(id: number, item: Partial<InventoryItem>): boolean {
    const stmt = db.prepare(`
      UPDATE Inventory 
      SET name = COALESCE(?, name),
          sku = COALESCE(?, sku),
          price = COALESCE(?, price),
          stock_quantity = COALESCE(?, stock_quantity)
      WHERE id = ?
    `);
    const result = stmt.run(item.name, item.sku, item.price, item.stock_quantity, id);
    return result.changes > 0;
  },

  delete(id: number): boolean {
    const stmt = db.prepare('DELETE FROM Inventory WHERE id = ?');
    const result = stmt.run(id);
    return result.changes > 0;
  }
};

export const shareholderService = {
  getAll(): Shareholder[] {
    const stmt = db.prepare('SELECT * FROM Shareholders');
    return stmt.all() as Shareholder[];
  }
  // Add other shareholder methods here...
};
