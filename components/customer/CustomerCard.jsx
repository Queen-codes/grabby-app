function CustomerCard(props) {
    function handleColor(status) {
        if(status === 'Active') {
            return{
                color: '#03670B'
            }
        }else{
            return {
                color: '#A71D1D'
            }
        }
    }
  return (
    <section className='text-2xl bg-white  dark:bg-black shadow-lg mb-4 w-11/12 m-auto p-3'>
        <div className='flex items-center border-b-2 pb-3 pt-2'>
            <span className='text-real-color text-base'>{props.lastOrdered}</span>
            <span className='ml-auto text-real-color font-bold'>{props.customerID}</span>
        </div>

        <div>
            <section className='flex items-center  pb-3 pt-2 bg-slate-100 mt-7 px-3'>
                <span className='text-real-color font-normal text-base'>Customer</span>
                <span className='ml-auto text-real-color font-bold text-lg'>{props.name}</span>
            </section>
            
            <section className='flex items-center  pb-3 pt-2 px-3'>
                <span className='text-real-color font-normal text-base '>Spent</span>
                <span className='ml-auto text-real-color font-bold text-lg'>{props.spent}</span>
            </section>

            <section className='flex items-center  bg-slate-100 pb-3 pt-2 px-3'>
                <span className='text-real-color font-normal text-base'>Email</span>
                <span className='ml-auto text-real-color font-bold text-lg'>{props.email}</span>
            </section>

            <section className='flex items-center  pb-3 pt-2 px-3'>
                <span className='text-real-color font-normal text-base'>Phone</span>
                <span className='ml-auto text-real-color font-bold text-lg'>{props.phone}</span>
            </section>

            <section className='flex items-center   pb-3 pt-2 bg-slate-100  px-3'>
                <span className='text-real-color font-normal text-base'>Status</span>
                <span style={handleColor(props.status)} className='ml-auto font-bold text-lg'>{props.status}</span>
            </section>
        </div>


    </section>
  )

}

export default CustomerCard