import axios from "axios";
import React, { useState } from "react";
import CardForm from "./CardForm";

const Card = (props) => {
  const { question, id, answer, answered, categoryId, removeCard, updateCard } =
    props;
  const [showSection, setShowSection] = useState("Question");
  const deleteCard = async (id) => {
    try {
      let res = await axios.delete(`/categories/${categoryId}/cards/${id}`);
      console.log(res);
      removeCard(res.data.id);
    } catch (err) {
      console.log(err);
      console.log(err.response);
      alert("err occured");
    }
  };

  const renderContent = () => {
    if (showSection === "Question") {
      return <p style={styles.text}>{question}</p>;
    }
    if (showSection === "Answer") {
      return <p style={styles.text}>{answer}</p>;
    }
    if (showSection === "Edit") {
      return (
        <>
          <CardForm
            categoryId={categoryId}
            updateCard={updateCard}
            id={id}
            question={question}
            answer={answer}
          />
          <div onClick={() => deleteCard(id)}>delete</div>
        </>
      );
    }
  };

  return (
    <div style={styles.container}>
      {renderContent()}
      <div style={styles.footer}>
        <div
          style={
            showSection == "Question"
              ? { ...styles.btn, border: "3px solid crimson" }
              : styles.btn
          }
          onClick={() => setShowSection("Question")}
        >
          Question
        </div>
        <div
          style={
            showSection == "Answer"
              ? { ...styles.btn, border: "3px solid green" }
              : styles.btn
          }
          onClick={() => setShowSection("Answer")}
        >
          Answer
        </div>
        <div
          style={
            showSection == "Edit"
              ? { ...styles.btn, border: "3px solid blue" }
              : styles.btn
          }
          onClick={() => setShowSection("Edit")}
        >
          Edit
        </div>
      </div>
    </div>
  );
};

const styles = {

  text: {
    fontSize: "30px",
    padding: "10px",
    textAlign: "center",
    color: 'white',
  },
  container: {
    // border:'1px solid',
    background: 'purple',
    boxShadow: "2px 2px 3px 2px #ddd",
    borderRadius: "4px",
    margin: "10px",
  },
  footer: {
    display: "flex",
    justifyContent: "space-around",
  },
  btn: {
    border: "2px solid gold",
    borderRadius: "4px",
    padding: "10px 20px",
    flex: 1,
    background: "thistle",
    margin: "0 5px",
    textAlign: "center",
  },
};
export default Card;
