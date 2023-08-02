import { Tabs } from "antd";
import type { TabsProps } from "antd";
import MonthlyTable from "@components/admin/MonthlyTable";
import styled from "styled-components";
import { useState } from "react";
function monthly() {
  const [tabKey, setTabKey] = useState("1");

  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `연차`,
      children: <MonthlyTable tabKey={tabKey} />,
    },
    {
      key: "2",
      label: `당직`,
      children: <MonthlyTable tabKey={tabKey} />,
    },
  ];
  return (
    <Container>
      <div className="details">
        <Tabs
          defaultActiveKey="1"
          items={items}
          onChange={(activeKey) => setTabKey(activeKey)}
        />
      </div>
    </Container>
  );
}

export default monthly;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0 0;
  .details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // width: 700px;
    padding: 20px 30px 30px;
    border-radius: 10px;
    // box-sizing: border-box;
    // background-color: #fff;
    // box-shadow: #e2e2e2 0px 5px 10px;
  }
`;
