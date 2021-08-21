import React from 'react'

function Title({title}) {
    return (
        <h1>{title ? title : "No title available"}</h1>
    )
}

export default Title
