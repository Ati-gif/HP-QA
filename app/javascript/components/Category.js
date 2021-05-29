import React, {useState} from 'react'
import CategoryForm from "./CategoryForm"

const Category = (props) => {
    const {id, name, updateCategory, deleteCategory} = props
    const [showForm, setShowForm] = useState(false)
    
    return (
        <div>
            <h1>{name}</h1>
            {/* link here gets a new page, redirect */}
             <a href={`/categories/${id}`}>show</a>
             <p onClick={() => deleteCategory(id)} style={{color:'red'}}>delete</p>
             <p onClick={() => setShowForm(!showForm)}>toggle</p>
             {showForm && <CategoryForm id={id} name={name} updateCategory={updateCategory}/>}
        </div>
    )
}


export default Category
