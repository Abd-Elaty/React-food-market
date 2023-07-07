
function Categories ({Foods}) {
  const categories = []
  Foods.forEach(e => {
    categories.push(e.category)
  });
  let foodTypes = [...new Set(categories)];
  const cats =[]
  foodTypes.forEach(e => {
    cats.push(<Category key={e} myCat={e} Foods={Foods}/>)
  })
  return (
    <>
      {cats}
    </>
  )
}

function Category ({myCat, Foods}) {
  const els = [];
  Foods.forEach((el)=> {
    if (el.category == myCat) {
      els.push(<Element key={el.name} el={el}/>)
    }
  })
  return(
    <div id={myCat} >
      <h2>{myCat}</h2>
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
        <span>{el.name}</span>
        <span>{el.price}</span>
      </div>
    </>
  )
}
export default Categories