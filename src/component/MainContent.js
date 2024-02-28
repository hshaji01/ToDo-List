import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, searchItem, updateStatus, updateItem} from "../utils/todoSlice";
import ToDoList from "./ToDoList";
import { v4 as uuid } from "uuid";

const MainContent = () => {
  const [todo, setTodo] = useState({addItem: "", search: ""});
  const [isEmpty, setIsEmpty] = useState(false);
  const [type, setType] = useState("Add");
  const [updateId, setUpdateId] = useState("");
  const todoList = useSelector((res) => res.todo.todoList);
  const filterStatus = useSelector((res) => res.todo.filterStatus);
  let filterSearch = useSelector((res) => res.todo.searchData);

  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const filteredTodoList = todoList.filter((todoItem)=>{
    if(filterStatus === "all" && filterSearch === ""){
        console.log("test1");
        return true;
    } else if (filterSearch){
        console.log("test2");
        return todoItem.todoitem.toUpperCase().includes(filterSearch.toUpperCase())
    } else {
        console.log("test3");
        return todoItem.stat === filterStatus;
    }   
  })

  const FocusTodo = (val, id) =>{
    if (inputRef.current) {
        inputRef.current.focus();
    }
    setTodo({...todo, addItem : val});
    setType("Update");
    setUpdateId(id);
  }
  const HandleChange = (e) => {
    const {name, value} = e.target;
    setTodo({...todo, [name] : value});

    if(e.target.name === "search" && e.target.value === ""){
        dispatch(searchItem(e.target.value));
    }
  };
  const HandleStatus = (e) => {  
    dispatch(updateStatus(e.target.getAttribute('data-status')));
  }
  const HandleAddUpdateItems = (items) => {
    if(items === ""){
       setIsEmpty(res => !res)
    } else{
        if(type === "Add"){
            dispatch(addItem({
                id:uuid(),
                todoitem: items,
                stat: "active"
            }));
        } else{
            dispatch(updateItem([updateId, items]))
        }
         
    }
    
  };
  const HandleSearch =() => {
    dispatch(searchItem(todo.search));
  }
  return (
    <div className="main-content">
    <div className="main-container">
    <div className="todo-text-btn">
    <input
        ref={inputRef}
        name="addItem"
        id="todoName"
        className={isEmpty ? "add-new error" : "add-new"}
        value={todo.addItem}
        onChange={HandleChange}
        type="text"
        placeholder="Add New"
      />
      <button onClick={() => HandleAddUpdateItems(todo.addItem)} className="add-btn">
      {type === "Add" ? "Add" : "Update"}  Todo's
      </button>
    
    </div>
      <div className="to-do-container">
        {filteredTodoList.length > 0 ? (
            filteredTodoList.map((res) => {
            return <ToDoList key={res.id} result={res} focusFn={FocusTodo}/>;
          })
        ) : (
          <div className="todo-empty">No Todo's !</div>
        ) }
      </div>
    </div>
      <div className="footer">
        <div>
          <input type="text" name ="search"
          value={todo.search} onChange={HandleChange} placeholder="Search Todo's"
          />
          <button onClick={HandleSearch} className="search-btn">🔍</button>
          <span className="separtor">|</span>
          <span> {filteredTodoList.length}  items left</span>
        </div>
        <div>
          <button className={filterStatus==="all" ? "stat-btn" : "" } onClick={HandleStatus} data-status ="all">All</button>
          <button className={filterStatus==="active" ? "stat-btn" : "" } onClick={HandleStatus} data-status ="active">Active</button>
          <button className={filterStatus==="completed" ? "stat-btn" : "" } onClick={HandleStatus} data-status ="completed">Completed</button>
        </div>
      </div>
    </div>
  );
};
export default MainContent;
