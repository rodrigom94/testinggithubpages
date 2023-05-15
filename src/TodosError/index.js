import React from 'react'

function TodosError({error}){
    return (
        <p>Error: {error.message}</p>
    )
}

export {TodosError}