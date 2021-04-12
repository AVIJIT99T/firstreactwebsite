{/* This is the whole part of app.jsx */ }
import React, { useState } from "react";
import Todo from "./Todolist";

const App = () => {
  const [inputList, setInputList] = useState();
  const [Items, setItems] = useState([]);

  const inputEvent = (event) => {
    setInputList(event.target.value);
  };
  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };
  const deleteItems = (id) => {
    console.log("deleted");

    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
};
  return(
    <>
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1> ToDo List </h1>
        <br />
        <input type="text" placeholder="Add an Item"
        value={inputList}
         onChange={inputEvent}/>
        <button onClick={listOfItems}> + </button>

        <ol>
          {/* <li> {inputList} </li> */}

          {
            Items.map((itemval, index) => {
            return <Todo key={index}
            id={index} 
            text={itemval} 
              onSelect={deleteItems}
            />
            })
          }
        </ol>
      </div>
    </div>
    </>
  );
};

export default App;


{/* This is the css part */}
{
    /*

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;    
}
.main_div {
    width: 100%;
    height: 100vh;
    background: #6983aa;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.center_div {
    width: 25%;
    height: 80vh;
    background-color: #f4f4f4;
    box-shadow: 5px 5px 25px -5px rgba(0, 0, 0, 0.5);
    border-radius: 15px;
}
h1{
    color: white;
    background: transparent;
    background-color: #8566aa;
    padding: 6px 0 2px 0;
    margin-bottom: 10px;
    box-shadow: 5px 5px 15px -5px rgba(0, 0, 0, 0.3);
}
input{
    text-align: center;
    height: 30px;
    top: 10px;
    border: none;
    background: transparent;
    font-size: 30px;
    font-weight: 500;
    width: 60%;
    border-bottom: 3px solid #8566aa;
    outline: none;
}
button{
    min-height: 50px;
    width: 50px;
    border-radius: 50%;
    border-color: transparent;
    background-color: #8566aa;
    color: #fff;
    font-size: 40px;
    border: none;
    outline: none;
    margin-left: 15px;
    box-shadow: 5px 5px 15px -5px rgba(0, 0, 0, 0.3);
}
button:hover{
    background-color: #20bf6b;
    cursor: pointer;
}
ol{
    margin-top: 30px;
}
ol li{
    margin-left: 20px;
    padding-left: 0px;
    text-align: left;
    font-size: 20px;
    font-weight: 500;
    min-height: 40px;
    display: flex;
    align-items: center;
    color: #8566aa;
}

.todo_style{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.todo_style .fa-times{
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #8566aa;
    border-radius: 50%;
    margin: 0 15px 0 35px;
    color: aliceblue;
    box-shadow: 5px 5px 15px -5px rgba(0, 0, 0, 0.3);
}
.todo_style .fa-times:hover{
    background-color: crimson;
}
.todo_style .fa-times:hover .list_style{
    color: crimson;
}
@media (max-width: 768px){
    .center_div{
        width: 55%;
    }
    .todo_style .fa-times{
        margin: 0 15px 0 15px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    button{
        margin-left: 5px;
        min-height: 40px;
        width: 40px;
        color: #fff;
        font-size: 30px;
    }
}
*/ }

