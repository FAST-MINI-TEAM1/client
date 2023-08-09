import React, { useEffect, useState } from "react";
import Header from "@components/common/Header";
import EmployeeTableTab from "@components/employee/EmployeeTableTab";
import Calendar from "@components/common/Calender";
import { styled } from "styled-components";
import { userschedule } from "@lib/api/employeeAPI";

function EmployeePage() {
  const [scheduleData, setScheduleData] = useState([]);

  useEffect(() => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;

    const fetchData = async () => {
      try {
        const result = await userschedule({ year: currentYear, month: currentMonth }); 
        if (result) {
          setScheduleData(result.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Inner >
        {/* <Container>
          <Calendar />
        </Container> */}
        <EmployeeTableTab scheduleData={scheduleData} /> 
      </Inner>
    </>
  );
}

const Inner = styled.div`
  width: 1200px;
  margin: 100px auto;
  display: flex;
  position: relative;
  justify-content: space-between;
`;
const Container = styled.div`
  width: 950px;
  height: 670px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.16);
`;

export default EmployeePage;
