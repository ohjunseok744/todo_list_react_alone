
import './App.css'
import Header from './components/Header'
import Editor from './components/Editor' 
import List from './components/List'
import { useState,useReducer } from 'react';
const mockData = [
  {
    id: 1,
    createDate: "2024. 5. 7",
    content: "첫 번째 할 일",
    isDone: false
  },
  {
    id: 2,
    createDate: "2024. 5. 7",
    content: "두 번째 할 일",
    isDone: true
  },
  // 필요한 만큼 데이터를 추가할 수 있습니다.
];
function reducer (state, action) {
  switch (action.type) {
    case "ADD":
      return [...state,action.data]
    case "DELETE":
      return state.filter(item => item.id !== action.targetId);
    case "UPDATE":
      return state.map(item => item.id === action.targetId ? { ...item, isDone: !item.isDone } : item);
    
    default:
      return state;
  }
};
function App() {
  const [todo, dispatch] = useReducer(reducer, mockData);
  // 새로운 목업 데이터 추가 함수
  const addMockData = (content) => {
    dispatch({
      type: "ADD",
      data: {
        id: todo.length + 1,
        createDate: new Date().toLocaleDateString(),
        content: content,
        isDone: false
      },
    });
  };
  const deleteMockData = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId 
    });
  };

  const updateMockData = (targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId
    });
  };
  
  return (
    <div className='App'>
      <Header> </Header>
      <Editor addMockData={addMockData} ></Editor>
      <List 
      updateMockData = {updateMockData}
      deleteMockData = {deleteMockData}
      todo= {todo}></List>
    </div>
  )
}

export default App
