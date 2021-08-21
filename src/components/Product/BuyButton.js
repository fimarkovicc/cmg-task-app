import React from 'react'

function BuyButton(props) {
    const [title, currentSize] = props.item
    
    const handleClick = () => alert(`You bought ${currentSize ? currentSize + 'pcs of ' : ''} ${title}.`)
    
    return (
        <button onClick={handleClick} className="product__data__buy">Buy Now</button>
    )
}

export default BuyButton
