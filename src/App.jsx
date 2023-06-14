import Header from './components/Header'
import Categories from './components/Categories'
import './styles/App.scss'
import { useState } from 'react'

const foods = [
  {category:'Fruits', price:'5$', stocked:true, name:'Apple', image:'/src/assets/Apple.png'},
  {category:'Vegetables', price:'8$', stocked:true, name:'Potato', image:'/src/assets/Potato.png'},
  {category:'Fruits', price:'7$', stocked:false, name:'Abricot', image:'/src/assets/Abricot.png'},
  {category:'Vegetables', price:'3$', stocked:true, name:'Spinach', image:'/src/assets/Spinach.png'},
  {category:'Vegetables', price:'6$', stocked:false, name:'Pumpkin', image:'/src/assets/Pumpkin.png'},
  {category:'Fruits', price:'12$', stocked:true, name:'Orange', image:'/src/assets/Orange.png'},
]

function App() {
  let [filt, setFilt] = useState(false)
  const [search, setSearch] = useState('')
  return (
    <>
      <Header filt={filt} setFilt={setFilt} search={search} setSearch={setSearch}/>
      <Categories Foods={foods} filt={filt} search={search}/>
    </>
  )
}

export default App

// const arr = [1,2,3,4,5];
// arr.forEach(ele => {
//   if (ele == 2){
//     return;
//   }
//   console.log(ele)
// }); 