import React, {useState} from "react";

const List = () => {


    const [todos, setTodos] = useState(['Wash the dishes', 'Walk the dog'])
    const [task, setTask] = useState('')
    
    function inputValue(e){
        setTask(e.target.value)  
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter'){
            console.log([...todos, task])
            setTodos([...todos, task])
            setTask('')
        }
    }

    const [isHovered, setIsHovered] = useState(false)

    function eraseTask(index){
        setTodos(todos.splice(index,1))
    }

    
    return (
        <div className="w-25 mx-auto d-flex flex-column justify-content-center text-start">
            <input 
                type="text"
                name="task"
                placeholder="Insert your task!"
                value={task}
                onChange={inputValue}
                onKeyDown={handleKeyDown}
                className="p-3 border border-1 rounded-2"
            />
            <ul className="list-group">
                {todos.map((todo, index) =>{
                    return (
                    <li 
                    className="list-group-item d-flex justify-content-between align-items-center p-3" 
                    key={index}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                        {todo}
                        <span style={{display: isHovered ? "inline" : "none"}} onClick={() => eraseTask(index)}>
                            <i className="bi bi-x"></i>
                        </span>
                    </li>
                    )
                })}
                <li className="list-group-item p-1"><span className="fw-light fst-italic">{todos.length} items left</span></li>
            </ul>
        </div>
    )
}

export default List