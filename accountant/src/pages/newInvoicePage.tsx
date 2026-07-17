const NewInvoicePage = () => {
	return <div className="flex items-center justify-center h-full">
		  <form className="flex flex-col items-center justify-center gap-4 border rounded-xl p-5 w-1/2 h-1/2">
		  {/* item name be a search field that shows the available items in the inventory. 
		      total price should be auto calculated from the single item price and the total count, and it should apply any taxes if available
		  */}
		      <input className="ring-none px-3 py-1 border border-slate-300 rounded-lg focus:border-slate-500 outline-none w-2/3" type="text" placeholder="أدخل اسم المنتج"/>
		      <input className="ring-none px-3 py-1 border border-slate-300 rounded-lg focus:border-slate-500 outline-none w-2/3" type="number" placeholder="أدخل الكمية المطلوبة"/>
		      <input className="ring-none px-3 py-1 border border-slate-300 rounded-lg focus:border-slate-500 outline-none w-2/3" type="text" placeholder="أدخل سعر القطعة"/>
		      <input className="ring-none px-3 py-1 border border-slate-300 rounded-lg focus:border-slate-500 outline-none w-2/3" type="text" placeholder="أدخل قيمة الضرائب الإضافية (إن وجدت)"/>
		      <input className="ring-none px-3 py-1 border border-slate-300 rounded-lg focus:border-slate-500 outline-none w-2/3" type="text" placeholder="أدخل السعر الإجمالي"/>
		      <input className="ring-none px-3 py-1 border border-slate-300 rounded-lg focus:border-slate-500 outline-none w-2/3" type="text" placeholder="أدخل اسم العميل"/>
		  </form> 
	       </div>
}

export default NewInvoicePage
