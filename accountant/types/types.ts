export interface User {
  id: number;
  username: string;
  password_hash: string;
}

export interface InventoryItem {
  id: number;
  name: string;
  sku: string | null;
  price: number;
  stock_quantity: number;
}

export interface Shareholder {
  id: number;
  name: string;
  shares: number;
  contact_info: string | null;
}

export interface Invoice {
  id: number;
  created_by: number;
  created_at: string;
  total_amount: number;
}

export interface InvoiceItem {
  id: number;
  invoice_id: number;
  item_id: number;
  quantity: number;
  unit_price: number;
}

export type CashProcessType = 'deposit' | 'withdrawal' | 'dividend';

export interface CashProcess {
  id: number;
  shareholder_id: number;
  process_type: CashProcessType;
  amount: number;
  processed_at: string;
}
