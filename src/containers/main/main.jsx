import React from 'react'
import * as resActions from '../../actions/restaurantActions'
import {useEffect, useState} from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Navbar from './navbar/navbar';
import Pogination from './pogination';
import Left from '../left/left';




function Main (props) {
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState('')
  const [list, setList] = useState(props.restaurants)
  const onSearch = e => {
    setPage(1)
    setQuery(e.target.value)
}



const handlePage = (data) => {
  setPage(data)
  console.log(data)
}
 useEffect(() => {

  setList(props.restaurants)
 },[props.restaurants, query])

  useEffect(() => {
    props.resActions.getRestaurants({query, page})
}, [query, page])


const data = list


  const itemres = data.map((item, i ) => 
  <div key={i} className="products-block">
      <div className='mainImg'>
          <img src={`http://185.125.46.93:9000/${item.image}`} width="150" height="150" alt="картинка нету"/>
      </div>
      <div className='productTitle'>
      <p className="title">{item.name}</p>
      <p className="desc">Большой ресторанный комплекс русской кухни в Таганском районе</p>
      <p className="time"> номер: {item.phone}</p>
      </div>
      <p className='reiting'>{item.id}</p>
  </div>
  )

  return (

    <div className='main'>
      <Navbar onSearch={onSearch}/>
        <div className='wrapperProducts'>
        <Left />
        <div>
        <h1 className='h1'>список рестаранов</h1>
          {itemres}
          </div>
        </div>
        <Pogination page={page} handlePage={handlePage} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  isLoading: state.resReducer.isLoading,
  restaurants: state.resReducer.restaurants,
  total: state.resReducer.total,
})

const mapDispatchToProps = (dispatch) => ({
  resActions: bindActionCreators(resActions, dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(Main)