type StockStatus = 'In Stock' | 'Low Stock' | 'Out of Stock';

interface TableRowData {
  id: number;
  name: string;
  count: number;
  price: number;
  barcode: string;
  status: StockStatus;
}

const tableData: TableRowData[] = [
  {
    id: 1,
    name: "Mechanical Keyboard",
    count: 45,
    price: 120.50,
    barcode: "192837465012",
    status: "In Stock"
  },
  {
    id: 2,
    name: "Wireless Mouse",
    count: 8,
    price: 45.00,
    barcode: "987654321098",
    status: "Low Stock"
  },
  {
    id: 3,
    name: "27-inch 4K Monitor",
    count: 0,
    price: 350.00,
    barcode: "112233445566",
    status: "Out of Stock"
  },
  {
    id: 4,
    name: "USB-C Docking Station",
    count: 112,
    price: 89.99,
    barcode: "667788990011",
    status: "In Stock"
  },
  {
    id: 5,
    name: "Ergonomic Office Chair",
    count: 3,
    price: 249.99,
    barcode: "554433221100",
    status: "Low Stock"
  }
];


const InventoryPage = () => {
	return (
    <table className="w-full h-full rounded-lg overflow-hidden border-spacing-0">
      <thead className="bg-slate-50">
        <tr>
          <th className="text-center">ID</th>
          <th className="text-center">Name</th>
          <th className="text-center">Count</th>
          <th className="text-center">Price</th>
          <th className="text-center">Barcode</th>
          <th className="text-center">Status</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((item) => (
          <tr key={item.id}>
            <td className="text-center">{item.id}</td>
            <td className="text-center">{item.name}</td>
            <td className="text-center">{item.count}</td>
            <td className="text-center">{item.price}</td>
            <td className="text-center">{item.barcode}</td>
            <td className="text-center">{item.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default InventoryPage;
