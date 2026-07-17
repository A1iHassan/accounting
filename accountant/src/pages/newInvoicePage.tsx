const NewInvoicePage = () => {
	return <div className="flex items-center justify-center h-full">
		  <form className="flex flex-col gap-4 border rounded-xl p-5">
		  {/* item name be a search field that shows the available items in the inventory. 
		      total price should be auto calculated from the single item price and the total count, and it should apply any taxes if available
		  */}
		      <input type="text" placeholder="أدخل اسم المنتج"/>
		      <input type="number" placeholder="أدخل الكمية المطلوبة"/>
		      <input type="text" placeholder="أدخل سعر القطعة"/>
		      <input type="text" placeholder="أدخل السعر الإجمالي"/>
		      <input type="text" placeholder="أدخل اسم العميل"/>
		  </form> 
	       </div>
}

export default NewInvoicePage
