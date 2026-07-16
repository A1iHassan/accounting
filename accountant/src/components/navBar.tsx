import {Boxes, Newspaper, History, BanknoteArrowUp, Users, Menu} from 'lucide-react'

const NavBar = () => {
	return <nav className="group flex flex-col gap-20 m-2 pr-5 pt-5 w-14 hover:w-64 transition-all duration-300 ease-in-out overflow-hidden rounded-lg">
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
