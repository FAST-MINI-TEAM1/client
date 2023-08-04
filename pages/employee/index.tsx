import Header from "@components/common/Header";
import EmployeeTableTab from "@components/employee/EmployeeTableTab";
import Calendar from "@components/common/Calender";
import { styled } from "styled-components";

function EmployeePage() {
  return (
    <>
      <Header />
      <Inner>
        {/* <Container>
          <Calendar />
        </Container> */}
        <EmployeeTableTab />
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
