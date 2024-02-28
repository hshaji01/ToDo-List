import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeItem, setStatus } from '../utils/todoSlice'

const ToDoList = (props) => {
    console.log("props"+props)
    const {todoitem, id, stat} = props.result;
    const [statCheck, setStatCheck] = useState(false);
    const dispatch = useDispatch()
    const HandleDelete = (e)=> {
        dispatch(removeItem(e.target.getAttribute('data-id')));
    }
    const HandleCheck = (e)=> {
        setStatCheck(!statCheck);
        dispatch(setStatus([e.target.getAttribute('data-id'), statCheck ? "active" : "completed"]));
    }
    const HandleEdit = (e)=> {
        props.focusFn(e.target.getAttribute('data-item'),e.target.getAttribute('data-id') );
    }
  return (
    <div className="todo-list">
            <div>
            <input type="checkbox" data-id={id} onClick={HandleCheck}></input> 
            <span className={stat==="completed" ? "todo-mark":""}>{todoitem}</span>
            </div>
            
            <div className="todo-list--btn">
                <button data-id={id} data-item={todoitem} onClick={HandleEdit}>📝</button>
                <button data-id={id} onClick={HandleDelete}>❌</button>
            </div>
    </div>
  )
}

export default ToDoList