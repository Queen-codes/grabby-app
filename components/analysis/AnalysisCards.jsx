import React from 'react'

import Card from './Card'
import CardData from '../../data/CardData'
import Button from '../Button'
function AnalysisCards() {
  return (
    <>
     <div className='flex justify-between mb-4 items-center'>
        <h3 className='font-bold text-blue-card text-xl  dark:text-white tracking-wide'>Analytics</h3>
          <Button>This Month</Button>
      </div>
    <section className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 place-items-center  ">
      {CardData.map((card, id) => {
        return (
            <Card
              title={card.title}
              key={card.id}
              volume={card.volume}
              price={card.price}
              increase={card.priceIncrease}
              background={card.colors.backGround}
              color={card.colors.barColor}
              image={card.priceImage}
              />
        )
      })}
    </section>
    </>
  )
}

export default AnalysisCards

//components/analysis/Card.jsx
