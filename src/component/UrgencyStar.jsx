import React from 'react'

export default function UrgencyStar(props) {
    console.log (props + 'star')
    if (props.i==='3') { return <p> ⭐ ⭐ ⭐ </p>}
       else if (props.i ==='2'){return <p> ⭐ ⭐ </p>}
       else {return <p>  ⭐ </p>}
    

}





