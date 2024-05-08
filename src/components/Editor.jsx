import React, { useState } from 'react';
import './Editor.css'; // Editor 컴포넌트에 대한 스타일 파일을 import

const Editor = ({addMockData}) => {
  const [inputText, setInputText] = useState(""); // 입력된 텍스트를 관리할 상태

  // 입력 필드의 변경 핸들러
  const handleInputChange = (event) => {
    setInputText(event.target.value); // 입력된 내용을 상태에 저장
  };

  // 추가 버튼 클릭 핸들러
  const handleAddButtonClick = () => {
    if (inputText.trim() !== "") { // 입력값이 비어있지 않은 경우만 추가
      addMockData(inputText); // 입력된 내용을 addMockData 함수에 전달
      setInputText(""); // 입력 필드 초기화
    }
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddButtonClick(); // 추가 버튼 클릭 이벤트 호출
    }
  };
  return (
    <div className="editor-container">
      <input
        className="editor-input"
        type="text"
        value={inputText}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="글을 입력하세요..."
      />
      <button className="editor-button" onClick={handleAddButtonClick}>추가</button>
    </div>
  );
}

export default Editor;
