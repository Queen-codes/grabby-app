import React from 'react'
import { CustomerOrder } from '../../data/CustomersData'
import CustomerCard from './CustomerCard'
function CustomersMobile() {
  return (
    <section className='lg:hidden'>
        {CustomerOrder.map((card, id) => {
            return (
                <CustomerCard
                key={id}
                name={card.name}
                status={card.status}
                spent={card.spent}
                customerID={card.customerId}
                lastOrdered={card.lastOrdered}
                phone={card.phone}
                email={card.email}
                />
            )
        })}
    </section>
  )
}

export default CustomersMobile