import React from 'react'
import {Link} from "react-router-dom"
function List({data}) {
    return (
    <div>
        {
            data.map(dataelement=>(
                <Link to={`detail/${dataelement.id}`} className="listelement" key={dataelement.id}>
                    <h1>{dataelement.title}</h1>
                </Link>
            ))
        }
    </div>
  )
}

export default List