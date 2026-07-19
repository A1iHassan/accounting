import { useState } from "react";
import { Play, ChevronDown } from "lucide-react";

type InvoiceStatus = 'تام' | 'مرتجعة' | 'مراجعة';

interface TableRowData {
  id: number;
  customerName: string;
  total: number;
  date: string;
  currency: string;
  status: InvoiceStatus;
}

const mockTableData: TableRowData[] = [
  {
    id: 1,
    customerName: "Acme Corp",
    total: 1250.50,
    date: "2026-07-15",
    currency: "USD",
    status: "تام"
  },
  {
    id: 2,
    customerName: "Global Industries",
    total: 4300.00,
    date: "2026-07-18",
    currency: "EUR",
    status: "تام"
  },
  {
    id: 3,
    customerName: "TechStart Inc",
    total: 850.25,
    date: "2026-06-01",
    currency: "USD",
    status: "مرتجعة"
  },
  {
    id: 4,
    customerName: "Nexus Logistics",
    total: 310.00,
    date: "2026-07-19",
    currency: "GBP",
    status: "تام"
  },
  {
    id: 5,
    customerName: "Vanguard Systems",
    total: 5600.75,
    date: "2026-07-10",
    currency: "USD",
    status: "تام"
  },
  {
    id: 6,
    customerName: "Horizon Retail",
    total: 1420.00,
    date: "2026-07-19",
    currency: "CAD",
    status: "تام"
  },
  {
    id: 7,
    customerName: "Apex Ventures",
    total: 980.00,
    date: "2026-05-14",
    currency: "EUR",
    status: "مراجعة"
  }
];

const InvoicesPage = () => {
	const [order, setOrder] = useState<boolean>(false)
	return (
	<>	
	<h2 className="text-3xl m-5">المخزن</h2>

	<div className="flex gap-10 items-center mb-5">
		<button
		    className="px-5 py-2 h-fit text-lg border-1 rounded-lg hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
		    onClick={() => {}}
		>فاتورة جديدة</button>
		<div className="relative group">
		    <span className="flex gap-2 items-center px-5 py-2 h-fit text-lg border-1 rounded-lg group-hover:rounded-b-none
		    		     hover:bg-black hover:text-white transition-all duration-300 cursor-pointer
		    "><ChevronDown />فلتر حسب</span>
		    <ul 
		        className="absolute top-11 opacity-0 pointer-events-none transition-all duration-300 delay-200 group-hover:opacity-100
				   group-hover:pointer-events-auto w-full bg-white/100  border-1 rounded-b-xl
			">
		        <li className="border-b px-5 py-2 hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">الأجمالي</li>
		        <li className="px-5 py-2 hover:bg-black hover:text-white transition-all duration-300 cursor-pointer rounded-b-xl">التاريخ</li>
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
		        <li className="border-b px-5 py-2 hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">ليرة تركية</li>
		        <li className="rounded-b-xl px-5 py-2 hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">الكل</li>
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
          <th className="text-center">الأجمالي</th>
          <th className="text-center">التاريخ</th>
          <th className="text-center">العملة</th>
          <th className="text-center">حالة الفاتورة</th>
        </tr>
      </thead>
      <tbody>
        {mockTableData.map((item) => (
          <tr key={item.id}>
            <td className="text-center">{item.id}</td>
            <td className="text-center">{item.customerName}</td>
            <td className="text-center">{item.total}</td>
            <td className="text-center">{item.date}</td>
            <td className="text-center">{item.currency}</td>
            <td className="text-center">{item.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
}

export default InvoicesPage;
