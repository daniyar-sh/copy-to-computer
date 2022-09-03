import React from 'react'

function Left () {
    const dataf = [{
        name: 'Все рейтинги Москвы'
    },{
        name: 'Русские рестораны',
        kitchen: 141
    },{
        name: 'Итальянские рестораны',
        kitchen: 131
    },{
        name: 'Восточные рестораны',
        kitchen: 129
    },{
        name: 'Кавказские рестораны',
        kitchen: 129
    },{
        name: 'Китайские рестораны',
        kitchen: 129
    },{
        name: 'Где есть стейки',
        kitchen: 129
    },{
        name: 'Бары',
        kitchen: 129
    },
    ]
     
    const handleKitchen = (a) => [
        console.log(a)
    ]

    const itemSections = dataf.map((item , i) => <div className='left'>
        <div  key={i}><p onClick={() => handleKitchen(item.kitchen)}>{item.name}</p></div>
    </div>)

  return (
    <div className='wrapperLeft'>{itemSections}</div>
  )
}

export default Left
