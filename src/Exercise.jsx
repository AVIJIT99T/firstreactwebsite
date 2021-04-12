{/* This is NewToD.jsx
import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ListCom from "./ListCom";

const ToDoList = () => {

    const [item, setItem] = useState("");
    const [newItem, setNewItem] = useState([]);
    const itemEvent = (event) => {
        setItem(event.target.value);
    }

    const listOfItems = () => {
        setNewItem((prevValue) => {
            return [...prevValue, item];
            });
        setItem("");
    };

    return(
        <>
        <div className="main_div">
            <div className="center_div">
                <br />
                <h1> Todo List </h1>
                <br />
                <input type="text" value={item} placeholder="Add an Item" onChange={itemEvent}/>
                <Button className="newBtn" onClick={listOfItems}>
                <AddIcon />
                </Button>
                <br />
                <ol>
                    
                   { newItem.map((val, index) => {
                        return <ListCom key={index} text={val} />
                    })}
                </ol>
                <br />
            </div>
        </div>
        </>
    );
};

export default ToDoList;
    */
}
{/* This is ListCom.jsx
    import React, { useState } from "react";
import DeleteIcon from '@material-ui/icons/Delete';

const ListCom = (props) => {
    const [line, setLine] = useState(false);

    const cutIt = () => {
        setLine(true);
    }

    return (
        <div className="todo_style">
            <span onClick={cutIt}>
                <DeleteIcon className="deleteIcon"/>
            </span>
            <li style={{ textDecoration: line ? "line-through" : "none" }}> {props.text} </li>
        </div>
    
    );
};

export default ListCom;
*/ }
{
    /* This is css part
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;    
}
.main_div {
    width: 100%;
    height: 100vh;
    background: #7bed9f;
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
    color: rgba(0, 0, 0, 0.87);
    font-size: 50px;
    margin-bottom: 30px;
    min-width: 64px;
    box-sizing: border-box;
    font-weight: 500;
    border-radius: 4px;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
    background: transparent;
    text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
}
input{
    text-align: center;
    height: 30px;
    border: none;
    background: transparent;
    font-size: 20px;
    font-weight: 500;
    width: 60%;
    border-bottom: 2px solid #8566aa;
    outline: none;
    margin-right: 20px;
}
.newBtn{
    width: 50px;
    height: 55px;
    background-color: #16a085 !important;
    color: white !important;
    box-shadow: 5px 5px 15px -5px rgba(0, 0, 0, 0.3);
    border-radius: 50% !important;
}
.newBtn:hover{
    color: #16a085 !important;
    background: white !important;
}
.MuiSvgIcon-root{
    width: 2rem !important;
    height: 2rem !important;
}
ol{
    margin-top: 30px;
}
ol li{
    padding-left: 0px;
    text-align: left;
    font-size: 20px;
    font-weight: 500;
    min-height: 40px;
    display: flex;
    align-items: center;
    color: #8566aa;
    text-transform: capitalize;
    list-style: none;
}
.todo_style{
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
}
.todo_style .deleteIcon{
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #8566aa;
    border-radius: 50%;
    margin: 0 15px 0 35px;
    padding: 5px;
    color: aliceblue;
    box-shadow: 5px 5px 15px -5px rgba(0, 0, 0, 0.3);
}
.todo_style .deleteIcon:hover{
    background-color: transparent;
    color: crimson;
    box-shadow: 5px 5px 15px -5px rgba(255, 0, 0, 0.5);
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
    */
}