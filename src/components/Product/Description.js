import React from 'react'

function Description({desc}) {
    return (
        <p>{desc ? desc : "No description available"}</p>
    )
}

export default Description
