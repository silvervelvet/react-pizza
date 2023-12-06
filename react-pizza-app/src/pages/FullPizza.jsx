import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const FullPizza = () => {
    const [pizza, setPizza] = useState()
    const { id } = useParams();

    useEffect(() => {
        async function fetchPizza() {
            try {
                const {data} = await axios.get('https://655f9061879575426b458852.mockapi.io/items/' + id)
                setPizza(data)
            } catch (error) {
                alert('erroe pizza')
            }
        }

    fetchPizza();
    },[]);

    if (!pizza) {
        return 'Loading.....'
    }

  return (
    <div className='container'>
        <img src={pizza.imageURL} />
        <h2>{pizza.title}</h2>
        <h3>{pizza.price}</h3>
        <p></p>
    </div>
  )
}

