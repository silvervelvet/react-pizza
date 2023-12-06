import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';


export const FullPizza: React.FC = () => {
    const [pizza, setPizza] = useState<{
        imageUrl: string,
        title: string,
        price: number
    }>();

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchPizza() {
            try {
                const {data} = await axios.get('https://655f9061879575426b458852.mockapi.io/items/' + id)
                setPizza(data)
            } catch (error) {
                alert('erroe pizza');
                navigate('/')
            }
        }

        fetchPizza();
    },[]);

    if (!pizza) {
        return <>'Loading.....'</>
    }

  return (
    <div className='container'>
        <img src={pizza.imageUrl} />
        <h2>{pizza.title}</h2>
        <h3>{pizza.price}</h3>
        <p></p>
    </div>
  )
}

