import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import { useQuery } from "@tanstack/react-query";
import { getDailyDuty, getDailyAnnual } from "@lib/api/adminAPI";
import "react-calendar/dist/Calendar.css";
import { styled } from "styled-components";
import moment from "moment";

function Test() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    console.log(data);
  }, []);

  const { data } = useQuery({
    queryKey: ["dutyData"],
    queryFn: async () => {
      const { data } = await getDailyDuty(2023, 8);
      return data.response;
    },
  });

  return (
    mounted && (
      <>
        <DateSection>
          <Container>
            <StyeldCalendar
              calendarType="gregory"
              formatDay={(_, date) => moment(date).format("D")}
              tileContent={({ date }) => {
                if (
                  data?.find(
                    (x) => x.date === moment(date).format("YYYY-MM-DD"),
                  )
                ) {
                  return (
                    <>
                      <div className="flex justify-center items-center absoluteDiv">
                        <div className="dot"></div>
                      </div>
                    </>
                  );
                }
              }}
            />
            {/* {data?.map((item: any, i: string) => (
            <>
              <p>인덱스 {i}</p>
              <p>{item.date}</p>
            </>
          ))} */}
          </Container>
        </DateSection>
      </>
    )
  );
}
const DateSection = styled.section`
  display: flex;
  justify-content: center;
  margin: 30px 0;
`;
const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1050px;
  height: 900px;
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
`;
const StyeldCalendar = styled(Calendar)`
  &.react-calendar {
    width: 1000px;
    border: none;
    color: #191919;
  }
  .react-calendar__tile--now {
    background-color: transparent;

    abbr {
      border-bottom: 1.8px solid #1ebf91;
      width: 30px;
      padding-bottom: 5px;
    }
  }

  .dot {
    height: 8px;
    width: 8px;
    background-color: #f87171;
    border-radius: 50%;
    display: flex;
    margin-left: 1px;
  }
  // 2. 달력 년/월 표시 글씨 커스텀

  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
  }

  .react-calendar__navigation__label > span {
    font-size: 30px;
  }
  // 날짜 화살표 아이콘
  .react-calendar__navigation__arrow react-calendar__navigation__next-button {
  }

  //요일 section 커스텀 하기
  .react-calendar__month-view__weekdays {
    abbr {
      color: #adb5bd;
      font-size: 14px;
      font-weight: 400;
    }
  }
  // day 타일 한개 한개 모양 커스텀하기
  .react-calendar__tile {
    position: relative;
    height: 150px;
    border-top: 1px solid #e4e4e4;
    abbr {
      position: absolute;
      top: 15px;
      right: 10px;
      font-size: 18px;
    }
  }
  // day 타일 hover, focus 시 모양 커스텀
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background-color: #f0f0f0;
  }
  // 날짜 선택 됐을 때 day 타일 커스텀하기
  .react-calendar__tile--active {
    background-color: #f0f0f0;
  }
  //(range일 경우)시작날짜, 끝 날짜 커스텀하기
  .react-calendar__tile--rangeStart,
  .react-calendar__tile--rangeEnd {
  }

  //. range 선택 중 hover 때 중간 날짜 커스텀하기
  .react-calendar--selectRange .react-calendar__tile--hover {
  }
`;

export default Test;
