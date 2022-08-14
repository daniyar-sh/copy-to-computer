import React from 'react'



function Main() {

  const asd = [
    {img: "./img/95b745f6ce6a45903c3ed254afd72e46-w550-27.png",
    name: 'Макдоналдс — Газетный',
    rating: 8.5},
    {img: "./img/95b745f6ce6a45903c3ed254afd72e46-w550-02.png",
    name: 'DimSum & Co — ЦДМ',
    rating: 8.5},
    {img: "./img/95b745f6ce6a45903c3ed254afd72e46-w550-03.png",
    name: 'ДвижОК — Манежна',
    rating: 8.5},
    {img: "./img/95b745f6ce6a45903c3ed254afd72e46-w550-04.png",
    name: 'Я — NHA',
    rating: 8.5},
    {img: "./img/95b745f6ce6a45903c3ed254afd72e46-w550-27.png",
    name: 'Макдоналдс — Газетный',
    rating: 8.5},
    {img: "./img/95b745f6ce6a45903c3ed254afd72e46-w550-02.png",
    name: 'DimSum & Co — ЦДМ',
    rating: 8.5},
    {img: "./img/95b745f6ce6a45903c3ed254afd72e46-w550-03.png",
    name: 'ДвижОК — Манежна',
    rating: 8.5},
    {img: "./img/95b745f6ce6a45903c3ed254afd72e46-w550-04.png",
    name: 'Я — NHA',
    rating: 8.5},
    {img: "./img/95b745f6ce6a45903c3ed254afd72e46-w550-27.png",
    name: 'Макдоналдс — Газетный',
    rating: 8.5},
    {img: "./img/95b745f6ce6a45903c3ed254afd72e46-w550-02.png",
    name: 'DimSum & Co — ЦДМ',
    rating: 8.5},
    {img: "./img/95b745f6ce6a45903c3ed254afd72e46-w550-03.png",
    name: 'ДвижОК — Манежна',
    rating: 8.5},
    {img: "./img/95b745f6ce6a45903c3ed254afd72e46-w550-04.png",
    name: 'Я — NHA',
    rating: 8.5},
    
    
]

  const itemres = asd.map((item, i ) => 
  <div key={i} className="products-block">
  <div>
      <div>
          <img src={item.img} width="317.94" height="200" alt="macdon"/>
          <p className="title">{item.name}</p>
      </div>
      <p className="desc"><button>бронироват</button></p>
      <p className="time"> рейтинг: {item.rating}</p>
  </div>
  </div>
  )

  return (
    <div className='main'>
        <h1>список рестаранов</h1>
        поиск
        <input/>
        <div className='wrapperProducts'>
        {itemres}
        </div>
        
    </div>
  )
}

export default Main