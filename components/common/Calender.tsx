import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { IEmployeeMonthly } from "@lib/interface/EmployeeInterface";
import { userscheduleApi } from "@lib/api/employeeAPI";

interface EmployeeTableTabProps {
  selectedTap: string;
  toggle?: boolean;
}

function Calendar({ selectedTap, toggle }: EmployeeTableTabProps) {
  const moment = require("moment");
  const [value, onChange] = useState(new Date());
  // 월별 조회
  const [scheduleData, setScheduleData] = useState<IEmployeeMonthly[]>([]);

  // 월별 조회 api 호출
  useEffect(() => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;

    const fetchData = async () => {
      try {
        const res = await userscheduleApi({
          year: currentYear,
          month: currentMonth,
        });
        const data = res?.data.response;
        if (res) {
          setScheduleData(res.data.response);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  //DateRange 계산하는 로직
  const getDateRange = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const result = [];
    while (start <= end) {
      result.push(start.toISOString().split("T")[0]);
      start.setDate(start.getDate() + 1);
    }
    return result;
  };

  // 시작일, 종료일 가져오기
  const markDate = scheduleData.map((row) =>
    getDateRange(`${row.startDate}`, `${row.endDate}`),
  );

  // 달력에 mark 될 날짜 합쳐서 새로운 배열 생성
  const dutyDate = [].concat(...markDate);

  const startDates = scheduleData.map((row) => row.startDate);
  const endDates = scheduleData.map((row) => row.endDate);

  return (
    <>
      <ReactCalendar
        // onChange={onchange}
        formatDay={(locale, date) => moment(date).format("DD")}
        value={value}
        allowPartialRange={true}
        className="mx-auto w-full text-sm border-b"
        tileContent={({ date }) => {
          if (startDates.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
            return (
              <>
                <div className="flex justify-center items-center absoluteDiv">
                  <div className="dot">⭐️</div>
                </div>
              </>
            );
          }
          if (endDates.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
            return (
              <>
                <div className="flex justify-center items-center absoluteDiv">
                  <div className="dot">❤️</div>
                </div>
              </>
            );
          }
          if (dutyDate.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
            return (
              <>
                <div className="flex justify-center items-center absoluteDiv">
                  <div className="dot">🧐</div>
                </div>
              </>
            );
          }
        }}
      />
    </>
  );
}

export default Calendar;
