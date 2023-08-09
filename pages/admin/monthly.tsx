import { Tabs } from "antd";
import type { TabsProps } from "antd";
import MonthlyTable from "@components/admin/MonthlyTable";
import styled from "styled-components";
import { useEffect, useState, useCallback } from "react";
import { getMonthlyAnnual, getMonthlyDuty } from "@lib/api/adminAPI";
import Header from "@components/common/Header";
import { IColumnsData } from "@lib/interface/Admin";

function Monthly() {
  const [dutyData, setDutyData] = useState<IColumnsData[]>([]);
  const [annualData, setAnnualData] = useState<IColumnsData[]>([]);
  const [tabKey, setTabKey] = useState("");

  useEffect(() => {
    getMonthlyData();
  }, []);

  const getMonthlyData = useCallback(async () => {
    const year = new Date().getFullYear();
    try {
      const { data } = await getMonthlyAnnual(year);
      setAnnualData(data.response);
      console.log("연차내역", annualData);
      const { data: duty } = await getMonthlyDuty(year);
      setDutyData(duty.response);
      console.log("당직내역", dutyData);
    } catch (error) {
      console.log("월별 조회 실패, error");
    }
  }, [dutyData, annualData]);

  const handleClick = (key: string) => {
    setTabKey(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "연차",
      label: `연차`,
    },
    {
      key: "당직",
      label: `당직`,
    },
  ];

  return (
    <>
      <Header />
      <Container>
        <StyledTabs
          defaultActiveKey="1"
          items={items}
          tabBarGutter={30}
          onTabClick={(key) => handleClick(key)}
        />
        <Inner>
          <MonthlyTable
            dataSource={tabKey === "당직" ? dutyData : annualData}
          />
        </Inner>
      </Container>
    </>
  );
}

export default Monthly;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0 0;
`;

const StyledTabs = styled(Tabs)`
  &.ant-tabs .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: coral;
  }
  &.ant-tabs .ant-tabs-ink-bar {
    background: coral;
  }
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 30px 30px;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: #e2e2e2 0px 5px 10px;
`;
