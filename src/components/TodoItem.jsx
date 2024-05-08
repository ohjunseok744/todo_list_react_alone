import React from 'react';
import "./TodoItem.css"
const TodoItem = ({item,deleteMockData,updateMockData}) => {
    const handleDeleteClick = () => {
      
      deleteMockData(item.id); // 삭제 버튼 클릭 시 deleteMockData 함수에 id 전달
    };
    const handleCheckboxChange = () => {
      updateMockData(item.id); // 변경된 항목을 부모 컴포넌트에 전달
    };
    return (
    <div className={`todo-item ${item.isDone ? 'is_done' : ''}`}>
      <input type="checkbox"
        checked={item.isDone}
        onChange={handleCheckboxChange}
      />
      <p className='content'>{item.content}</p>
      <p style={{ color: '#ccc' }}>{item.createDate}</p>
      <button onClick={handleDeleteClick} >삭제</button>
    </div>
    
  );
}

export default TodoItem;