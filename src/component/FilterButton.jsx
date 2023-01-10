
import React from 'react'

export default function FilterButton( props) {




 const handleFilter =(f)=>{
props.setFilter(f)
props.Process(f)
  
 }

 


  return (
    <div className='filterButton'>
      <button value='all' onClick={(e)=> handleFilter(e.target.value)} className={ props.filter==='all' ? 'selected' : ''}> ALL </button>
      <button value='complited' onClick={(e)=> handleFilter(e.target.value)} className={ props.filter==='complited' ? 'selected' : ''}> COMPLETED </button>
      <button value='uncomplited' onClick={(e)=> handleFilter(e.target.value)} className={ props.filter==='uncomplited' ? 'selected' : ''}> UNCMPLETED </button>
    </div>
  )
}

