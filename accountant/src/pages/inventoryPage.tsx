import { ChevronDown, Play } from "lucide-react";
import { useState } from "react";

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
	const [order, setOrder] = useState<boolean>(false)
	return (
	<>	
	<h2 className="text-3xl m-5">المخزن</h2>

	<div className="flex gap-10 items-center mb-5">
		<button
		    className="px-5 py-2 h-fit text-lg border-1 rounded-lg hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
		    onClick={() => {}}
		>إضافة بضاعة</button>
		<div className="relative group">
		    <span className="flex gap-2 items-center px-5 py-2 h-fit text-lg border-1 rounded-lg group-hover:rounded-b-none
		    		     hover:bg-black hover:text-white transition-all duration-300 cursor-pointer
		    "><ChevronDown />فلتر حسب</span>
		    <ul 
		        className="absolute top-11 opacity-0 pointer-events-none transition-all duration-300 delay-200 group-hover:opacity-100
				   group-hover:pointer-events-auto w-full bg-white/100  border-1 rounded-b-xl
			">
		        <li className="border-b px-5 py-2 hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">السعر</li>
		        <li className="border-b px-5 py-2 hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">التاريخ</li>
		        <li className="px-5 py-2 hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">الكمية</li>
		    </ul>
		</div>
		<div className="relative group">
		    <span className="flex gap-2 items-center px-5 py-2 h-fit text-lg border-1 rounded-lg group-hover:rounded-b-none
		    		     hover:bg-black hover:text-white transition-all duration-300 cursor-pointer
		    "><ChevronDown />العملة</span>
		    <ul 
		        className="absolute top-11 opacity-0 pointer-events-none transition-all duration-300 delay-200 group-hover:opacity-100
				   group-hover:pointer-events-auto w-full bg-white/100  border-1 rounded-b-xl
			">
		        <li className="border-b px-5 py-2 hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">دولار</li>
		        <li className="border-b px-5 py-2 hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">ليرة سورية</li>
		        <li className="px-5 py-2 hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">ليرة تركية</li>
		    </ul>
		</div>
		<Play 
		    onMouseEnter={(e) => {e.currentTarget.setAttribute("fill", "black")}}
		    onMouseLeave={(e) => {e.currentTarget.setAttribute("fill", "white")}}
		    className={`${order ? "rotate-90" : "-rotate-90"} transition-all duration-200 cursor-pointer`}
		    onMouseDown={() => {setOrder(prev => !prev)}}
		/>

	</div>

	{/* table of content */}
    <table className="w-full h-full rounded-lg overflow-hidden border-spacing-0">
      <thead className="bg-slate-50 h-14">
        <tr>
          <th className="text-center">ID</th>
          <th className="text-center">الاسم</th>
          <th className="text-center">الكمية</th>
          <th className="text-center">سعر القطعة</th>
          <th className="text-center">باركود</th>
          <th className="text-center">حالة المخزن</th>
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
    </>
  );
}

export default InventoryPage;
