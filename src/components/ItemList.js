import React from 'react'
import Item from "./Item"


const ItemList = ({info}) => {
    return (
        <div className='row gap-3 justify-content-center'>

                {info.map((producto) => (
                    <Item key={producto.id} info={producto} />
                ))}
        </div>
    );
  };


export default ItemList


