import '../styles/category.scss'

function Categories ({Foods, filt, search}) {
  const categories = []
  Foods.forEach(
    (e) => {
      if (e.name.toLowerCase().indexOf(search.toLowerCase()) == -1){
        return
      }
      if (filt == true){
        if(e.stocked == true) {
          categories.push(e.category)
        }
      }else {
        categories.push(e.category)
      }
  });
  let foodTypes = [...new Set(categories)];
  const cats =[]
  foodTypes.forEach(e => {
    cats.push(<Category key={e} myCat={e} Foods={Foods} filt={filt} search={search}/>)
  })
  const not = cats.length
  return (
    <div className="categories">
      {cats}
      <div className="not" >
        {!not && <NotFound/>}
      </div>
    </div>
  )
}
  
function Category ({myCat, Foods, filt, search}) {
  const els = [];
  Foods.forEach((el)=> {
    if (search !== '' && el.name.toLowerCase().indexOf(search.toLowerCase()) == -1 ){
      return
    }
    if (el.category == myCat ) {
      if (filt == true && el.stocked == true){
        els.push(<Element key={el.name} el={el}/>)
      }else if(filt == false){
        els.push(<Element key={el.name} el={el}/>)
      }
    }
  })
  return(
    <div className='category' >
      <h2>
        <span>{myCat}</span>
      </h2>
      <div className="elements">
        {els}
      </div>
    </div>
  )
}

function Element ({el}) {
  let cn =''
  if (el.stocked == true){
    cn = 'stocked'
  } else {
    cn = 'unavilable'
  }
  return (
    <>
      <div className={cn}>
        <img src={el.image} alt={el.name} />
        <div className='disc'>
          <p>{el.name}</p>
          <p>price: {el.price}</p>
          <p className='btn'>buy</p>
        </div>
      </div>
    </>
  )
}

function NotFound () {
  return (
    <h2 id='NotFound'>
      NO Products Found
    </h2>
  )
}

export default Categories