import Header from './components/Header'
import Categories from './components/Categories'
import './styles/App.scss'

const foods = [
  {category:'Fruits', price:'5$', stocked:true, name:'Apple'},
  {category:'Vegetables', price:'8$', stocked:true, name:'Potato'},
  {category:'Fruits', price:'7$', stocked:false, name:'Abricot'},
  {category:'Vegetables', price:'3$', stocked:true, name:'Spinach'},
  {category:'Vegetables', price:'6$', stocked:false, name:'Pumpkin'},
  {category:'Fruits', price:'12$', stocked:true, name:'Orange'},
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
