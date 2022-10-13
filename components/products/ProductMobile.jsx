import ProductCard from './ProductCard'
import {Productdata} from '../../data/Productdata'
function ProductMobile() {
  return (
    <section className='lg:hidden'>
    {Productdata.map((card, id) => {
        return (
            <ProductCard
            key={id}
            name={card.phoneName}
            customerID={card.id}
            brand={card.brand}
            category={card.category}
            stock={card.stock}
            sold={card.sold}
            revenue={card.revenue}
            amount={card.amount}
            
            />
        )
    })}
</section>
  )
}

export default ProductMobile