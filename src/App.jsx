import Header from './components/Header'
import Categories from './components/Categories'
import Footer from './components/Footer'
import './styles/App.scss'
import { useState } from 'react'

const foods = [
  {category:'Fruits', price:'5$', stocked:true, name:'Apple', image:'/src/assets/Apple.png'},
  {category:'Fruits', price:'10$', stocked:false, name:'Star Fruit', image:'/src/assets/starfruit.png'},
  {category:'Fruits', price:'3$', stocked:true, name:'StarFruit', image:'/src/assets/strawberry.png'},
  {category:'Vegetables', price:'8$', stocked:true, name:'Potato', image:'/src/assets/Potato.png'},
  {category:'Fruits', price:'7$', stocked:true, name:'Abricot', image:'/src/assets/Abricot.png'},
  {category:'Vegetables', price:'3$', stocked:true, name:'Spinach', image:'/src/assets/Spinach.png'},
  {category:'Vegetables', price:'6$', stocked:false, name:'Pumpkin', image:'/src/assets/Pumpkin.png'},
  {category:'Vegetables', price:'2$', stocked:true, name:'Onion', image:'/src/assets/onion.png'},
  {category:'Vegetables', price:'4$', stocked:true, name:'Tomato', image:'/src/assets/tomato.png'},
  {category:'Fruits', price:'12$', stocked:true, name:'Orange', image:'/src/assets/Orange.png'},
  {category:'Bakeries', price:'20$', stocked:true, name:'Banana', image:'/src/assets/Banana.png'},
  {category:'Bakeries', price:'9$', stocked:true, name:'Baguette', image:'/src/assets/Baguette.png'},
  {category:'Bakeries', price:'12$', stocked:false, name:'Breadstick', image:'/src/assets/Breadstick.png'},
  {category:'Bakeries', price:'12$', stocked:true, name:'Brioche', image:'/src/assets/Brioche.png'},
  {category:'Bakeries', price:'22$', stocked:true, name:'Challah', image:'/src/assets/Challah.png'},
]

function App() {
  const [filt, setFilt] = useState(false)
  const [search, setSearch] = useState('')
  const [notFound, setNotFound] = useState('')
  return (
    <>
      <Header filt={filt} setFilt={setFilt} search={search} setSearch={setSearch}/>
      <Categories Foods={foods} filt={filt} search={search}/>
      <Footer/>
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