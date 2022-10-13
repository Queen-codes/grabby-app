
function ProductCard(props) {
  return (
    <section className='text-2xl bg-white dark:bg-black shadow-lg mb-4 w-11/12 m-auto p-3'>
    <div className='flex items-center border-b-2 pb-3 pt-2'>
        <span className='text-real-color text-base'>04/06/22</span>
        <span className='ml-auto text-real-color font-bold'>{props.customerID}</span>
    </div>

    <div>
        <section className='flex items-center  pb-3 pt-2 bg-slate-100 mt-7 px-3'>
            <span className='text-real-color font-normal text-base'>Product Name</span>
            <span className='ml-auto text-real-color font-bold text-lg'>{props.name}</span>
        </section>
        
        <section className='flex items-center  pb-3 pt-2 px-3'>
            <span className='text-real-color font-normal text-base '>Brand</span>
            <span className='ml-auto text-real-color font-bold text-lg'>{props.brand}</span>
        </section>

        <section className='flex items-center  bg-slate-100 pb-3 pt-2 px-3'>
            <span className='text-real-color font-normal text-base'>Category</span>
            <span className='ml-auto text-real-color font-bold text-lg'>{props.category}</span>
        </section>

        <section className='flex items-center  pb-3 pt-2 px-3'>
            <span className='text-real-color font-normal text-base'>Amount</span>
            <span className='ml-auto text-real-color font-bold text-lg'>{props.amount}</span>
        </section>

        <section className='flex items-center   pb-3 pt-2 bg-slate-100  px-3'>
            <span className='text-real-color font-normal text-base'>Stock</span>
            <span className='ml-auto text-real-color font-bold text-lg'>{props.stock}</span>
        </section>

        <section className='flex items-center   pb-3 pt-2  px-3'>
            <span className='text-real-color font-normal text-base'>Sold</span>
            <span className='ml-auto text-real-color  font-bold text-lg'>{props.sold}</span>
        </section>

        <section className='flex items-center   pb-3 pt-2 bg-slate-100  px-3'>
            <span className='text-real-color font-normal text-base'>Revenue</span>
            <span className='ml-auto text-real-color font-bold text-lg'>{props.revenue}</span>
        </section>
    </div>


</section>
  )
}

export default ProductCard