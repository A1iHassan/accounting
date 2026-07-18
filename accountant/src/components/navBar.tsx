import {Boxes, Newspaper, History, BanknoteArrowUp, Users, Menu} from 'lucide-react'

const NavBar = () => {
	return <nav className="ml-5 group flex flex-col border-l-1 border-slate-100 shadow-[0_10px_6px_-1px_rgba(0,0,0,0.1)] gap-20 m-2 pr-5 pt-5 pl-5 w-20 hover:w-64 transition-all duration-300 ease-in-out overflow-hidden ">
		<div className="flex items-center gap-4 px-1">
        		<Menu className="shrink-0" />
        		<span className="text-3xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          			حساباتي
        		</span>
      		</div>
		<aside>
        		<ul className="flex flex-col gap-8">
          <li className="flex items-center gap-4 px-1 cursor-pointer hover:text-blue-400">
            <Boxes className="shrink-0" />
            <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">مخزن</span>
          </li>
          <li className="flex items-center gap-4 px-1 cursor-pointer hover:text-blue-400">
            <Newspaper className="shrink-0" />
            <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">فاتورة جديدة</span>
          </li>
          <li className="flex items-center gap-4 px-1 cursor-pointer hover:text-blue-400">
            <History className="shrink-0" />
            <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">تاريخ الفواتير</span>
          </li>
          <li className="flex items-center gap-4 px-1 cursor-pointer hover:text-blue-400">
            <Users className="shrink-0" />
            <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">المساهمون</span>
          </li>
          <li className="flex items-center gap-4 px-1 cursor-pointer hover:text-blue-400">
            <BanknoteArrowUp className="shrink-0" />
            <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">الحركة المالية</span>
          </li>
        		</ul>
      		</aside>
	</nav>
}

export default NavBar;
