import React, { useState } from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import EmployeeTable from "@components/employee/EmployeeTable";
import styled from "styled-components";

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
      children: <EmployeeTable selectedTap={selectedTap} />,
    },
    {
      key: "연차",
      label: `연차`,
      children: <EmployeeTable selectedTap={selectedTap} toggle={toggle} />,
    },
    {
      key: "당직",
      label: `당직`,
      children: <EmployeeTable selectedTap={selectedTap} toggle={toggle} />,
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
  color: #d9d9d9;
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
  }
  .ant-tabs .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: rgba(31, 191, 146, 1);
    font-weight: bold;
    text-shadow: 0px 3px 7px rgba(81, 81, 81, 0.25);
  }
`;

export default EmployeeTableTab;
