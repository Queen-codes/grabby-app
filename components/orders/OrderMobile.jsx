import React from 'react'
import OrderCard from './OrderCard'

import {OrderData} from '../../data/OrderData'
function OrderMobile() {

  return (
    <section className='lg:hidden'>
        {OrderData.map((card, id) => {
            return (
                <OrderCard
                key={id}
                product={card.product}
                status={card.status}
                amount={card.amount}
                mode={card.mode}
                trackingId={card.tackingId}
                date={card.date}
                orderId={card.id}
                quantity={card.qunatity}
                sold={card.sold}
                
                />
            )
        })}
    </section>
  )
}

export default OrderMobile;

