import React from 'react'
//import { CustomerOrder } from '../../data/CustomersData'
import { SupppliersData } from '../../data/SuppliersData'
//import CustomerCard from './CustomerCard'
import SuppliersCard from "./SuppliersCard"
function CustomersMobile() {
  return (
    <section className='lg:hidden'>
        {SupppliersData.map((card, id) => {
            return (
                <SuppliersCard
                key={id}
                name={card.name}
                lastUpdated={card.lastUpdated}
                phone={card.phone}
                email={card.email}
                id={card.id}
                />
            )
        })}
    </section>
  )
}

export default CustomersMobile