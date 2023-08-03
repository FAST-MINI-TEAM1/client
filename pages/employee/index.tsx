import EmployeeTableTab from "@components/employee/EmployeeTableTab"
import Calendar from "@components/common/Calender";
import { useState } from "react";
import styled from "styled-components";

  function EmployeePage() {
  return (
    <Container>
      <Calendar />
      <EmployeeTableTab />
    </Container>
  )
}

const Container = styled.div`
background-color: rgba(248,248,248);
display: flex;
flex-direction: row;
`

export default EmployeePage;
