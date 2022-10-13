import React from 'react'
import { CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp} from  '@fortawesome/free-solid-svg-icons'
import Image from 'next/image';
function Card({title, volume, price, increase, background, image}) {

  //console.log(color)
  return (
    <div style={{
      background:background
    }} className="rounded-xl px-4 w-11/12 xl:w-auto m-auto mb-7 2xl:w-11/12">
      <h3 className='text-center text-blue-card text-xl pb-4'>{title}</h3>

      <div className='flex items-center gap-12 xl:gap-3 2xl:justify-center 2xl:gap-14'>
        <section className="lg:w-16 2xl:w-auto">
           <Image src={image} alt='volume' width='110' height= '110' />
        </section>

        <section className="price">
            <div className="mb-2">
              <h4 className='text-price-color font-bold'>{price}</h4>
              <p className='text-xs dark:text-black'>This month</p>
            </div>

            <div className="pb-4">
              <h4 className='text-increase-color text-sm'> 
                <span><FontAwesomeIcon icon={faArrowUp} /> </span>
                {increase}
                </h4>
              <p className='text-xs dark:text-black'>last month</p>
            </div>
        </section>

        </div>
    </div>
  )
}

export default Card