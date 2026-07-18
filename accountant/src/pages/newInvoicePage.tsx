const NewInvoicePage = () => {
	return <div className="flex flex-col items-center justify-center h-full">
		  <h2 className="text-3xl self-start -translate-x-100 m-5">فاتورة جديدة</h2>
		  <form className="flex flex-col items-center justify-center gap-5 border rounded-xl p-8 h-2/3 w-1/2">
		  {/* item name be a search field that shows the available items in the inventory. 
		      total price should be auto calculated from the single item price and the total count, and it should apply any taxes if available
		  */}
		      <input className="ring-none px-5 py-2 border border-slate-300 rounded-lg focus:border-slate-500 outline-none w-2/3" type="text" placeholder="أدخل اسم المنتج"/>
		      <input className="ring-none px-5 py-2 border border-slate-300 rounded-lg focus:border-slate-500 outline-none w-2/3" type="number" placeholder="أدخل الكمية المطلوبة"/>
		      <input className="ring-none px-5 py-2 border border-slate-300 rounded-lg focus:border-slate-500 outline-none w-2/3" type="text" placeholder="أدخل سعر القطعة"/>
		      <input className="ring-none px-5 py-2 border border-slate-300 rounded-lg focus:border-slate-500 outline-none w-2/3" type="text" placeholder="أدخل قيمة الضرائب الإضافية (إن وجدت)"/>
		      <input className="ring-none px-5 py-2 border border-slate-300 rounded-lg focus:border-slate-500 outline-none w-2/3" type="text" placeholder="أدخل السعر الإجمالي"/>
		      <input className="ring-none px-5 py-2 border border-slate-300 rounded-lg focus:border-slate-500 outline-none w-2/3" type="text" placeholder="أدخل اسم العميل"/>
		      <button
		          className="mt-8 border rounded-lg px-5 py-2 text-lg hover:bg-black/70 hover:text-white/100 cursor-pointer transition-all duration-300"
		          onClick={() => {}}>
			  تأكيد و حفظ
		      </button>
		      <button
		          className="border rounded-lg px-5 py-1 text-lg hover:bg-black/70 hover:text-white/100 cursor-pointer transition-all duration-300"
		          onClick={() => {}}>
			  إلغاء
		      </button>
		  </form> 
	       </div>
}

export default NewInvoicePage
