import React, { useState } from 'react';

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  // 이전 달로 이동하는 함수
  const prevMonth = () => {
    setCurrentDate((prevDate) => {
      const prevMonthDate = new Date(prevDate);
      prevMonthDate.setMonth(prevMonthDate.getMonth() - 1);
      return prevMonthDate;
    });
  };

  // 다음 달로 이동하는 함수
  const nextMonth = () => {
    setCurrentDate((prevDate) => {
      const nextMonthDate = new Date(prevDate);
      nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);
      return nextMonthDate;
    });
  };

  // 해당 월의 첫째 날의 인덱스를 계산하는 함수
  const getFirstDayOfMonthIndex = (date: Date) => {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    return firstDay.getDay();
  };

  // 해당 월의 마지막 날짜를 가져오는 함수
  const getLastDateOfMonth = (date: string | number | Date) => {
    const nextMonth = new Date(date);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    nextMonth.setDate(0);
    return nextMonth.getDate();
  };

  // 현재 년도와 월을 가져오기
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;

  // 주차별로 일자를 표시할 배열 만들기
  const weeks = [];
  const firstDayIndex = getFirstDayOfMonthIndex(currentDate);
  const lastDateOfMonth = getLastDateOfMonth(currentDate);

  let week = [];
  for (let i = 0; i < firstDayIndex; i++) {
    week.push(null); // 이전 달의 날짜를 빈 칸으로 채웁니다.
  }

  for (let date = 1; date <= lastDateOfMonth; date++) {
    week.push(date);

    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  }

  // 나머지 빈 날짜를 채움
  if (week.length > 0) {
    while (week.length < 7) {
      week.push(null); // 다음 달의 날짜를 빈 칸으로 채웁니다.
    }
    weeks.push(week);
  }

  return (
    <div>
      <div>
        <button onClick={prevMonth}>&lt;</button>
        <span>
          {currentYear}년 {currentMonth}월
        </span>
        <button onClick={nextMonth}>&gt;</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>일</th>
            <th>월</th>
            <th>화</th>
            <th>수</th>
            <th>목</th>
            <th>금</th>
            <th>토</th>
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, index) => (
            <tr key={index}>
              {week.map((date, idx) => (
                <td key={idx}>{date}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Calendar;

