import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import ReactCalendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
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

  const [activeStartDate, setActiveStartDate] = useState(new Date());
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);

  // 월별 조회 api 호출
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(year, month);
        const res = await userscheduleApi({
          year: year,
          month: month,
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
  }, [selectedTap, month, year]);

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

  // month 가져오기
  const handleChange = (activeStartDate: Date | null) => {
    if (activeStartDate) {
      const activeYear = new Date(activeStartDate).getFullYear();
      const activeMonth = new Date(activeStartDate).getMonth() + 1;
      setYear(activeYear);
      setMonth(activeMonth);
    }
  };
  console.log("Current month!:", month);
  return (
    <>
      <StyeldCalendar
        // onChange={onchange}
        onActiveStartDateChange={({ activeStartDate }: any) =>
          handleChange(activeStartDate)
        }
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
                    {selectedTap == "전체" ? (
                      <AllIcon />
                    ) : selectedTap == "연차" ? (
                      <AnnualIcon />
                    ) : (
                      <DutyIcon />
                    )}
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
const StyeldCalendar = styled(ReactCalendar)`
  width: 100%;
  height: 100%;
  border: none;
  font-family: "Noto Sans KR", sans-serif;

  .react-calendar button {
    margin: 0;
    border: 0;
    outline: none;
    background-color: aqua;
    color: red;
  }

  .react-calendar__navigation {
    display: flex;
    height: 44px;
    margin: 1em;
    button {
      min-width: 44px;
      background: none;
      border: none;
      font-size: 20px;
      text-shadow: 0px 3px 4px rgba(81, 81, 81, 0.25);
    }
    button:enabled:hover {
      background-color: none;
      color: ${(props) => props.theme.pointColor.green};
    }
  }

  .react-calendar__month-view__weekdays {
    text-align: center;
    font-weight: 400;
    font-size: 1em;
    &__weekday {
      padding: 1em;
    }
  }

  //주말 컬러 변경
  .react-calendar__month-view__days__day {
    &--weekend {
      color: ${(props) => props.theme.pointColor.red};
    }
    &--neighboringMonth {
      color: ${(props) => props.theme.pointColor.rightGray};
    }
    &--neighboringMonth:hover {
      color: ${(props) => props.theme.pointColor.gray};
    }
  }

  .react-calendar__tile {
    max-width: 100%;
    padding: 0.5em;
    background: none;
    height: 108px;
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    &:enabled:hover {
      color: ${(props) => props.theme.pointColor.green};
      background-color: ${(props) => props.theme.pointColor.rightGray};
    }
    $:enabled:focus {
      color: ${(props) => props.theme.pointColor.green};
      background-color: ${(props) => props.theme.pointColor.rightGray};
    }
  }

  .react-calendar__tile--active {
    background-color: ${(props) => props.theme.pointColor.rightGray};
    color: ${(props) => props.theme.pointColor.black};
  }

  .react-calendar__month-view__days__day {
    text-align: top;
  }
`;

const AnnualIcon = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50px;
  margin: 34px auto;
  background-color: ${(props) => props.theme.pointColor.blue};
`;
const DutyIcon = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50px;
  margin: 34px auto;
  background-color: ${(props) => props.theme.pointColor.yellow};
`;
const AllIcon = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50px;
  margin: 34px auto;
  background-color: ${(props) => props.theme.pointColor.green};
`;

export default Calendar;
