import {Boxes, Newspaper, History, BanknoteArrowUp, Users} from 'lucide-react'

const NavBar = () => {
	return <nav className='flex flex-col gap-3d m-2 p-2'>
		<span className='text-3xl'>حساباتي</span>
		<aside className='flex gap-3'>
		<ul className='flex flex-col gap-1'>
			<li><Boxes /></li>
			<li><Newspaper /></li>
			<li><History /></li>
			<li><Users /></li>
			<li><BanknoteArrowUp /></li>
		</ul>
		<ul className='flex flex-col gap-1'>
			<li>مخزن</li>
			<li>فاتورة جديدة</li>
			<li>تاريخ الفواتير</li>
			<li>المساهمون</li>
			<li>الحركة المالية</li>
		</ul>
		</aside>
	</nav>
}

export default NavBar;
