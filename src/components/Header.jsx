function Search () {
  return(
    <>
      <input type="search"></input>
    </>
  )
}

function Filter () {
  return(
    <>
      <input type="checkbox"></input>
      <span>Show only on stock</span>
    </>
  )
}

function Header (){
  return(
    <>
      <Search/>
      <Filter/>
    </>
  )
}

export default Header