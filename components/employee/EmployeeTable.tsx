import EmployeeDutyModalForm from "@components/employee/EmployeeDutyModalForm";
import React, { useState } from "react";
import { Space, Tabs, Button } from "antd";
import type { TabsProps } from "antd";
import styled from "styled-components";
import SelectModal from "@components/employee/SelectModal";

interface selectedTapProps {
  selectedTap: string;
  toggle?: boolean;
  setToggle?: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Idatas {
  id: number;
  empName: string;
  createdAt: string;
  orderType: string;
  status: string;
  startDate: string;
  endDate: string;
  reason: string;
  category: string;
  etc: "특이사항입니다";
}
function EmployeeTable({ selectedTap, toggle }: selectedTapProps) {
  const datas = [
    {
      id: 1,
      empName: "홍길동",
      createdAt: "2023-07-27",
      orderType: "연차",
      status: "대기",
      startDate: "2023-08-01",
      endDate: "2023-08-01",
      reason: "이유입니다",
      category: "경조사",
      etc: "특이사항입니다",
    },
    {
      id: 2,
      empName: "홍길동",
      createdAt: "2023-07-28",
      orderType: "당직",
      status: "대기",
      startDate: "2023-08-01",
      endDate: "2023-08-01",
      reason: "이유입니다",
      category: "경조사",
      etc: "특이사항입니다",
    },
    {
      id: 3,
      empName: "홍길동",
      createdAt: "2023-07-28",
      orderType: "연차",
      status: "대기",
      startDate: "2023-08-04",
      endDate: "2023-08-01",
      reason: "이유입니다",
      category: "경조사",
      etc: "특이사항입니다",
    },
  ];

  return (
    <>
      <EmployeeDutyTable>
        {" "}
        {selectedTap == "전체" ? (
          <h1>7월 전체 현황</h1>
        ) : selectedTap == "연차" ? (
          <h1>7월 연차 현황</h1>
        ) : (
          <h1>7월 당직 현황</h1>
        )}
        {selectedTap == "전체" ? (
          <ul>
            {datas.map((data) => {
              return (
                <Employeedata key={data.empName}>
                  <Space direction="horizontal" size="middle">
                    {data.orderType === "당직" ? <DutyIcon /> : <AnnualIcon />}
                    <DutyInfo>{data.startDate}</DutyInfo>
                    <DutyInfo>{data.status}</DutyInfo>
                  </Space>
                </Employeedata>
              );
            })}{" "}
          </ul>
        ) : (
          <ul>
            {datas
              .filter((data) => {
                if (selectedTap == "연차") {
                  return data.orderType == "연차";
                }
                if (selectedTap == "당직") {
                  return data.orderType == "당직";
                }
              })
              .map((data) => {
                return (
                  <Employeedata key={data.empName}>
                    <Space direction="horizontal" size="middle">
                      {data.orderType === "당직" ? (
                        <DutyIcon />
                      ) : (
                        <AnnualIcon />
                      )}
                      <DutyInfo>{data.startDate}</DutyInfo>
                      <DutyInfo>{data.status}</DutyInfo>
                    </Space>
                  </Employeedata>
                );
              })}{" "}
          </ul>
        )}
        {selectedTap == "전체" ? (
          <SelectModal />
        ) : (
          <EmployeeDutyModalForm toggle={toggle} />
        )}
      </EmployeeDutyTable>
    </>
  );
}

const EmployeeDutyTable = styled.div`
  width: 290px;
  height: 670px;
  border-radius: 30px;
  background-color: #fff;
  padding: 30px;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.16);
  display: flex;
  flex-direction: column;
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  ul {
    height: 580px;
  }
`;
const DutyIcon = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 50px;
  background-color: rgba(19, 13, 216, 1);
`;
const AnnualIcon = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 50px;
  background-color: rgba(242, 118, 118, 1);
`;
const DutyInfo = styled.div`
  color: rgba(12, 12, 12, 1);
`;
const Employeedata = styled.div`
  margin: 0 30px;
`;

export default EmployeeTable;
