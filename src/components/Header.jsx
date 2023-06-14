import '../styles/header.scss'

function Search ({search,setSearch}) {
  return(
    <>
      <input 
        type="text" 
        placeholder='Search..'
        value={search}
        onChange={e =>{setSearch(e.target.value)}}
      >
      </input>
    </>
  )
}

function Filter ({filt,setFilt}) {
  
  return(
    <div className='filter'>
      <label className="switch">
        <input type="checkbox" checked={filt} onChange={(e)=> {setFilt(e.target.checked)}} ></input>
        <span className="slider"></span>
      </label>
      <p>Only show in stock</p>
    </div>
  )
}

function Header ({filt, setFilt, search,setSearch}){
  return(
    <div className='header'>
      <Search search={search} setSearch={setSearch}/>
      <Filter filt={filt} setFilt={setFilt}/>
    </div>
  )
}

export default Header