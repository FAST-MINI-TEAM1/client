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

function Calendar({ selectedTap }: EmployeeTableTabProps) {
  const moment = require("moment");
  const [value, onChange] = useState(new Date());
  // 월별 조회
  const [scheduleDatas, setScheduleDatas] = useState<IEmployeeMonthly[]>([]);

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
        const data: IEmployeeMonthly[] = res?.data.response;
        if (selectedTap == "전체") {
          const scheduleData = data;
          setScheduleDatas(scheduleData);
          return;
        }
        if (selectedTap == "연차") {
          const scheduleData = data.filter((item) => {
            if (selectedTap == "연차") {
              return item.orderType == "연차";
            }
          });
          setScheduleDatas(scheduleData);
          return;
        }
        if (selectedTap == "당직") {
          const scheduleData = data.filter((item) => {
            if (selectedTap == "당직") {
              return item.orderType == "당직";
            }
          });
          setScheduleDatas(scheduleData);
          return;
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [selectedTap]);

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
  // 달력에 일정 mark
  const markDate = scheduleDatas.map((row) =>
    getDateRange(`${row.startDate}`, `${row.endDate}`),
  );

  // 달력에 mark 될 날짜 합쳐서 새로운 배열 생성
  const allDate: string[] = ([] as string[]).concat(...markDate);

  return (
    <>
      <ReactCalendar
        // onChange={onchange}
        formatDay={(locale, date) => moment(date).format("DD")}
        value={value}
        allowPartialRange={true}
        className="mx-auto w-full text-sm border-b"
        tileContent={({ date }) => {
          if (allDate.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
            return (
              <>
                <div className="flex justify-center items-center absoluteDiv">
                  <div className="dot">
                    {selectedTap == "전체"
                      ? "🧐"
                      : selectedTap == "연차"
                      ? "❤️"
                      : "⭐️"}
                  </div>
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
