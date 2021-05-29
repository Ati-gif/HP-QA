import axios from 'axios'
import React, {useState} from 'react'

const CardForm = (props) => {
    const {id, categoryId, addCard, updateCard} = props
    const [answer, setAnswer] = useState(props.answer ? props.answer : '')
    const [question, setQuestion] = useState(props.question ? props.question : '')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
           if(id){
             // update logic
             let res = await axios.put(`/categories/${categoryId}/cards/${id}`, {answer, question})
             console.log(res)
             updateCard(res.data)

           } else {
            // create logic
            let res = await axios.post(`/categories/${categoryId}/cards`, {answer, question})
            console.log(res)
            addCard(res.data)
           }
        } catch(err) {
            console.log(err)
            console.log(err.response)
            alert('err occured')
        }
    }
  
    return (
        <div>
            <h1>{id ? 'Edit' : 'New'}</h1>
            <form onSubmit={handleSubmit}>
                <p>question</p>
                <input value={question} onChange={(e)=>{setQuestion(e.target.value)}} />
                <p>answer</p>
                <input value={answer} onChange={(e)=>{setAnswer(e.target.value)}} />
                <button>{id ? 'Update' : 'Create'}</button>
            </form>
        </div>
    )
}

export default CardForm
