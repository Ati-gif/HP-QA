import React, { useState, useEffect } from "react";
import axios from "axios";
import Category from "./Category";
import CategoryForm from "./CategoryForm";

const App = () => {
  const [categories, setCategories] = useState([]);

  // get called after component mounts
  useEffect(() => {
    getCategories();
  }, []);

  // method update UI
  const addCategory = (category) => {
    let updatedCategories = [category, ...categories];
    setCategories(updatedCategories);
  };

  // method update UI
  const updateCategory = (category) => {
    let updatedCategories = categories.map((c) => {
      if (c.id === category.id) {
        return category;
      }
      return c;
    });

    setCategories(updatedCategories);
  };
  const getCategories = async () => {
    let res = await axios.get("/categories");
    // let {data} = await axios.get('/categories')
    setCategories(res.data);
  };
  const deleteCategory = async (id) => {
    console.log(id);
    // delete from db
    let res = await axios.delete(`/categories/${id}`);
    // remove from UI
    let updatedCategories = categories.filter((c) => c.id !== res.data.id);
    setCategories(updatedCategories);
  };
  const renderCategories = () => {
    if (categories.length == 0) {
      return <p>no categories</p>;
    }
    return categories.map((c) => {
      return (
        <Category
          deleteCategory={deleteCategory}
          key={c.id}
          {...c}
          updateCategory={updateCategory}
        />
      );
    });
  };
  return (
    <div>
      <h1>Harry Potter Quiz</h1>
      <p>Flash Cards</p>
      <CategoryForm addCategory={addCategory} />
      {renderCategories()}
    </div>
  );
};

export default App;
