import React, {useState} from 'react'
import axios from 'axios'

const CategoryForm = (props) => {
    const {id, addCategory, updateCategory} = props
    const [name, setName] = useState(props.name ? props.name : '')

    const handleSubmit = async (e) =>{
        e.preventDefault()

        try {
          if(id){
            console.log('update route')
            console.log(`put /categories/${id}`)
            let res = await axios.put(`/categories/${id}`, {name:name})
            updateCategory(res.data)
          } else {
              // where i create to to database
            let res = await axios.post('/categories', {name:name})
            addCategory(res.data)
          } 
          setName('')
        }
        catch(err) {
            // handle in a sec
            alert(err)
            console.log(err)
          }
    }
    return (
        <div style={{border:'3px solid', padding:'10px', background: 'lavender'}}>
            <h1>{id ? "Edit" : "New" } Form</h1>
            <form onSubmit={handleSubmit}>
                <p>name</p>
                <input value={name} onChange={(e) => setName(e.target.value)} />
                <button>{id ? "update" : "create"}</button>
            </form>
        </div>
    )
}


export default CategoryForm
