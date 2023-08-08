import React, { useState } from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import EmployeeTable from "@components/employee/EmployeeTable";
import { styled } from "styled-components";
import Calendar from "@components/common/Calender";

function EmployeeTableTab() {
  const [selectedTap, setSelectedTap] = useState("전체");
  const [toggle, setToggle] = useState(true);
  const onChange = (key: string) => {
    setSelectedTap(key);
    if (key == "당직") {
      return setToggle(false);
    }
    if (key == "연차") {
      return setToggle(true);
    }
    if (key == "전체") {
      {
        return null;
      }
    }
    console.log(key);
  };

  const employeeHandeler: TabsProps["items"] = [
    {
      key: "전체",
      label: `전체`,
      children: (
        <Layout>
          <CalendarContainer>
            <Calendar />
          </CalendarContainer>
          <EmployeeTable selectedTap={selectedTap} />
        </Layout>
      ),
    },
    {
      key: "연차",
      label: `연차`,
      children: (
        <Layout>
          <CalendarContainer>
            <Calendar />
          </CalendarContainer>
          <EmployeeTable selectedTap={selectedTap} toggle={toggle} />
        </Layout>
      ),
    },
    {
      key: "당직",
      label: `당직`,
      children: (
        <Layout>
          <CalendarContainer>
            <Calendar />
          </CalendarContainer>
          <EmployeeTable selectedTap={selectedTap} toggle={toggle} />
        </Layout>
      ),
    },
  ];
  return (
    <>
      <StyledTabs
        defaultActiveKey="전체"
        items={employeeHandeler}
        onChange={onChange}
      />
    </>
  );
}
const StyledTabs = styled(Tabs)`
  color: #090909;
  font-size: 16px;
  text-shadow: 0px 3px 7px rgba(81, 81, 81, 0.25);
  h1 {
    color: black;
    font-size: 16px;
  }
  width: 290px;
  .ant-tabs-nav {
    width: 290px;
    margin: 0 auto;
  }
  .ant-tabs-tab-btn {
    width: 40px;
  }
  .ant-tabs-nav-wrap {
    justify-content: center;
  }
  .ant-tabs-ink-bar {
    display: none;
  }
  .ant-tabs-tab:hover {
    color: black;
    color: #090909;
  
    text-shadow: 0px 3px 7px rgba(81, 81, 81, 0.25);

  .ant-tabs .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: rgba(31, 191, 146, 1);
    font-weight: bold;
    text-shadow: 0px 3px 7px rgba(81, 81, 81, 0.25);
  }
`;
const Layout = styled.div`
  width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: space-between;
`;
const CalendarContainer = styled.div`
  width: 950px;
  height: 670px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.16);
`;

export default EmployeeTableTab;
