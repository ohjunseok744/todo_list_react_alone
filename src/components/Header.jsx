import React from 'react';
import "./Header.css"
const Header = () => {
  const currentDate = new Date(); // 현재 날짜를 가져옵니다.
  const formattedDate = currentDate.toLocaleDateString(); // 현재 날짜를 현지 시간대에 맞는 문자열로 변환합니다.
  return (
    <header>
      <h3>오늘은 📆</h3>
      <h2 className='date'>오늘의 날짜: {formattedDate}</h2>
    </header>
  );
}

export default Header;
