import React from 'react'

function CustomerCard(props) {
    function handleColor(status) {
        if(status === 'Delivered') {
            return{
                color: '#03670B'
            }
        }else if(status === 'Pending') {
            return {
                color: '#774B66'
            }
        }else{
            return {
                color: '#A71D1D'
            }
        }
    }
  return (
    <section className='text-2xl bg-white dark:bg-black shadow-lg mb-4 w-11/12 m-auto p-3'>
        <div className='flex items-center border-b-2 pb-3 pt-2'>
            <span className='text-real-color text-base'>{props.date}</span>
            <span className='ml-auto text-real-color font-bold'>{props.orderId}</span>
        </div>

        <div>
            <section className='flex items-center  pb-3 pt-2 bg-slate-100 mt-7 px-3'>
                <span className='text-real-color font-normal text-base'>Product</span>
                <span className='ml-auto text-real-color font-bold text-lg'>{props.product}</span>
            </section>
            
            <section className='flex items-center  pb-3 pt-2 px-3'>
                <span className='text-real-color font-normal text-base '>Amount</span>
                <span className='ml-auto text-real-color font-bold text-lg'>{props.amount}</span>
            </section>

            <section className='flex items-center  bg-slate-100 pb-3 pt-2 px-3'>
                <span className='text-real-color font-normal text-base'>Mode</span>
                <span className='ml-auto text-real-color font-bold text-lg'>{props.mode}</span>
            </section>

            <section className='flex items-center  pb-3 pt-2 px-3'>
                <span className='text-real-color font-normal text-base'>Tracking ID</span>
                <span className='ml-auto text-real-color font-bold text-lg'>{props.trackingId}</span>
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

