import '../styles/header.scss'

function Search () {
  return(
    <>
      <input type="text" placeholder='Search..'></input>
    </>
  )
}

function Filter () {
  return(
    <div className='filter'>
      <label className="switch">
        <input type="checkbox"></input>
        <span className="slider"></span>
      </label>
      <p>Show only on stock</p>
    </div>
  )
}

function Header (){
  return(
    <div className='header'>
      <Search/>
      <Filter/>
    </div>
  )
}

export default Header