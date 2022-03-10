import React from 'react'
import Item from "./Item"


const ItemList = ({info}) => {
    return (
        <div className="container">
            

                {info.map((producto) => (
                    <Item key={producto.id} info={producto} />
                ))}
        </div>
    );
  };


export default ItemList


