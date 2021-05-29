import axios from 'axios'
import React, {useState, useEffect} from 'react'
import AxiosLoader from './AxiosLoader'
import Card from './Card'
import CardForm from './CardForm'

const CategoryShowSSR = (props) => {
    const { id } = props

    const [cards, setCards] = useState([])
    const [category, setCategory] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(()=>{
        getCards()
    },[])

    const addCard = (card) => {
        setCards([card, ...cards])
    }

    const removeCard = (id) => {
        let updateCards = cards.filter(c => c.id !== id)
        setCards(updateCards)
    }

    const updateCard = (card) => {
        let updatedCards = cards.map(c => c.id === card.id ? card : c )
        setCards(updatedCards)
    }

    const getCards = async()=>{
        try {
            let res =  await axios.get(`/categories/${id}/cards/`)
            // let res1 =  await axios.get(` https://reqres.in/api/users?delay=10`)
            setLoading(false)
            console.log(res.data)
            setCards(res.data.cards)
            setCategory(res.data.category)
        } catch(err){
            console.log(err)
            console.log(err.response)
            setError(true)
            setLoading(false)
            alert('err occurred get cards check console')
        }
    }

    const renderCards = ()=> {
        return cards.map(card => {
            return <Card 
                key={card.id} {...card} 
                categoryId={category.id} 
                removeCard={removeCard}
                updateCard={updateCard}
                />
        })
    }

    return (
        <div>
           <h1>Category show page</h1> 
           <a href='/'>back</a>
           <AxiosLoader loading={loading} error={error}>
             <CardForm  addCard={addCard} categoryId={category.id}/>
               {renderCards()}
           </AxiosLoader>
        </div>
    )
}

export default CategoryShowSSR