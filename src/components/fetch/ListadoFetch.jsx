import React, { useState,useEffect } from 'react'


const ListadoFetch = () => {

    const [ listado, setListado ] = useState([])
    const [ page, setPage ] = useState(0)

    const getDatos = async (uri) => {
        try {
            const pokemons = await fetch(uri)
            const jsonPokemons = await pokemons.json()
            console.log(jsonPokemons)
            setListado(jsonPokemons.results)
        } catch (error) {
            console.error(error)
        }
    }
    // console.log(listado)

    useEffect( () => {
        //componentDiDmount
        if( listado.length == 0 || listado.length == undefined ){
            getDatos("https://pokeapi.co/api/v2/pokemon")
        }else{
            //componentDidUpdate
            const offset = page * 20
            getDatos(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
        }
        return () => {
            console.log("unmount")
        }
    }, [page] )

    return (
        <ul>
            {/* <button onClick={getDatos} >hacer Fetch</button> */}
            <button onClick={ () => setPage( page + 1 ) } >Siguiente pagina { page }</button>
            {
                listado.map( (pokemon, indice) => {
                    return <li key={indice} >{pokemon.name}</li>
                } )
            }
        </ul>
    )
}

export default ListadoFetch