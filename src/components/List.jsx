import React from 'react';
import "./List.css"
import TodoItem from './TodoItem'
import { useState } from 'react';
const List = ({todo,deleteMockData,updateMockData}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    }
    const filteredTodo = todo.filter(item => {
      return item.content.toLowerCase().includes(searchTerm.toLowerCase());
    });
    const total = todo.length;
    const is_done = todo.filter(
      (todo) => todo.isDone
    ).length;
    const isnot_done = total-is_done;
    return (
    <div className='container'>
      <h3>🎄TODO List</h3>
      <p>total : {total}</p>
      <p>is_done :{is_done} </p>
      <p>isnot_done :{isnot_done} </p>
      <input type="text" placeholder='검색어를 입력하세요' className='search' value={searchTerm} onChange={handleSearch}/>
      <div className="todo-items">
        {filteredTodo.map(item => (
          <TodoItem 
          updateMockData = {updateMockData}
          deleteMockData = {deleteMockData} 
          key={item.id} item={item} />
        ))}

      </div>
      
    </div>
  );
}

export default List;
