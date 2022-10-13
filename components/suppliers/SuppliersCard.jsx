
function SuppliersCard(props) {
  return (
    <section className='text-2xl bg-white dark:bg-blacke shadow-lg mb-4 w-11/12 m-auto p-3'>
    <div className='flex items-center border-b-2 pb-3 pt-2'>
        <span className='text-real-color text-base'>{props.lastUpdated}</span>
        <span className='ml-auto text-real-color font-bold'>{props.id}</span>
    </div>

    <div>
        <section className='flex items-center  pb-3 pt-2 bg-slate-100 mt-7 px-3'>
            <span className='text-real-color font-normal text-base'>Company</span>
            <span className='ml-auto text-real-color font-bold text-lg'>{props.name}</span>
        </section>
        
        <section className='flex items-center  pb-3 pt-2 px-3'>
            <span className='text-real-color font-normal text-base'>Phone</span>
            <span className='ml-auto text-real-color font-bold text-lg'>{props.phone}</span>
        </section>


        <section className='flex items-center  bg-slate-100 pb-3 pt-2 px-3'>
            <span className='text-real-color font-normal text-base'>Email</span>
            <span className='ml-auto text-real-color font-bold text-lg'>{props.email}</span>
        </section>



    </div>


</section>
  )
}

export default SuppliersCard