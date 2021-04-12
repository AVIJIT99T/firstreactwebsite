/* This is the header part */
import React from "react";

const Header = () => {
    return(
        <>
        <div className="header">
            <h1>Google Keep</h1>
        </div>
        </>
    );
};

export default Header;

/* This is footer */
import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();

    return(
        <>
        <footer>
        <p>Copyright @ {year}</p>
        </footer>
        
        </>
    );
};

export default Footer;

/* this createnote part */
import React from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = () => {
    return(
        <>
        <div className="main_note">
            <form>
                <input type="text" placeholder="Title" autoComplete="off"/>
                <textarea rows="" column="" placeholder="Write a note..."></textarea>
                <Button>
                    <AddIcon className="plus_sign" />
                </Button>
            </form>
        </div>
        </>
    );
};

export default CreateNote;

/* This is note part */
import React from "react";
import DeleteIcon from '@material-ui/icons/DeleteIcon';

const Note = () => {
    return(
        <>
        <div className="note">
            <h1> Title </h1>
            <br />
            <p> This is the content</p>
            <button className="btn">
            <DeleteIcon className="deleteIcon"/>
            </button>
            
        </div>
        </>
    );
};

export default Note;
/* This is css */
{
    /*
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;

}
.header{
    width: 100%;
    line-height: 100px;
    background-color: #f5ba13;
    display: flex;
    justify-content: start;
    align-items: center;
    padding-left: 50px;
    color: white;
    box-shadow: 5px 3px 15px -5px rgba(0, 0, 0, 0.3);
}
.main_note {
    width: 500px;
    padding: 15px 10px 5px 10px;
    margin: 20px auto;
}
.my_notes h1{
    color: #34495e;
}
.my_notes p{
    color: gray;
}
form{
    min-height: 50px;
    color: #ecf0f1;
    padding: 15px 10px 5px 10px;
    box-shadow: 3px 5px 15px -5px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    position: relative;
}
input{
    width: 100%;
    line-height: 30px;
    background: transparent;
    border: none;
    outline: none;
    font-size: 1.5rem;
    margin: 10px 0;
    font-weight: bold;
}
textarea {
    width: 100%;
    line-height: 30px;
    background: transparent;
    border: none;
    outline: none;
    font-size: 1rem;
    margin: 10px 0;
}
.MuiButton-root{
    width: 30px;
    height: 50px;
    position: absolute;
    bottom: -28px;
    left: 400px;
    cursor: pointer;
    background-color: #fff !important;
    box-shadow: 5px 5px 15px -5px rgba(0, 0, 0, 0.3);
    border-radius: 50% !important;
}
.MuiButton-root .plus_sign{
    font-size: 45px !important;
    font-weight: 900;
    color: #f4b400;
    cursor: pointer;
    z-index: 222;
    background: transparent;
}
.MuiButton-root:hover{
    background: #f4b400 !important;
}
.MuiButton-root:hover .plus_sign{
    color: #fff;
    background: transparent;
}
.note{
    background: #fff;
    border-radius: 7px;
    box-shadow: 0 2px 5px #ccc;
    padding: 10px;
    width: 240px;
    margin: 16px;
    float: left;
}
.note h1{
    font-size: 1.1rem;
    margin-bottom: 6px;
}
.note p{
    font-size: 1.1rem;
    margin-bottom: 10px;
    white-space: pre-wrap;
    word-wrap: break-word;
}
 .note .btn {
     position: relative;
     float: right;
     margin-right: 10px;
     color: #f4b400;
     border: none;
     width: 50px;
     height: 50px;
     background: transparent;
     cursor: pointer;
     outline: none;
     box-shadow: 3px 3px 15px -10px rgba(0, 0, 0, 0.3);
     border-radius: 50%;
 }
.deleteIcon{
    width: 0.7rem;
    height: 0.7rem;
}
.note .btn:hover{
    background-color: #f5ba13;
}
.note .btn:hover .deleteIcon{
    color: #fff;
}
footer{
    width: 100%;
    position: absolute;
    bottom: 0;
    text-align: center;
    font-size: 30px;
}
    */
}