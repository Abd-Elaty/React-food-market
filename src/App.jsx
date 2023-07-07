import Header from './components/Header'
import Categories from './components/Categories'
import './styles/App.scss'

const foods = [
  {category:'Fruits', price:'5$', stocked:true, name:'Apple', image:'/src/assets/Apple.png'},
  {category:'Vegetables', price:'8$', stocked:true, name:'Potato', image:'/src/assets/Potato.png'},
  {category:'Fruits', price:'7$', stocked:false, name:'Abricot', image:'/src/assets/Abricot.png'},
  {category:'Vegetables', price:'3$', stocked:true, name:'Spinach', image:'/src/assets/Spinach.png'},
  {category:'Vegetables', price:'6$', stocked:false, name:'Pumpkin', image:'/src/assets/Pumpkin.png'},
  {category:'Fruits', price:'12$', stocked:true, name:'Orange', image:'/src/assets/Orange.png'},
]

function App() {
  return (
    <>
      <Header/>
      <Categories Foods={foods}/>
    </>
  )
}

export default App
