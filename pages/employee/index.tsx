import Header from "@components/common/Header";
import EmployeeTableTab from "@components/employee/EmployeeTableTab";
import Calendar from "@components/common/Calender";
import styled from "styled-components";

function EmployeePage() {
  return (
    <>
      <Header />
      <Container>
        <Calendar />
        <EmployeeTableTab />
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  background-color: rgba(248, 248, 248);
  display: flex;
  flex-direction: row;
`;

export default EmployeePage;
