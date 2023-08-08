import EmployeeDutyModalForm from "@components/employee/EmployeeDutyModalForm";
import { Space } from "antd";
import { styled } from "styled-components";
import SelectModal from "@components/employee/SelectModal";
import { employeeListApi } from "@lib/api/employeeAPI";
import { useEffect, useState } from "react";
import { IEmployeeListRequest } from "@lib/interface/EmployeeInterface";

interface selectedTapProps {
  selectedTap: string;
  toggle?: boolean;
  setToggle?: React.Dispatch<React.SetStateAction<boolean>>;
}

function EmployeeTable({ selectedTap, toggle }: selectedTapProps) {
  // const [datass, setDatass] = useState<IEmployeeListRequest[]>();
  const [datas, setDatas] = useState<IEmployeeListRequest[]>([]);

  const setlist = async () => {
    const list = await employeeListApi();
    console.log("얍", list?.data.content);

    setDatas(list?.data.content);
    console.log("얍", datas);
  };

  useEffect(() => {
    async () => {
      const list = await employeeListApi();
      console.log("얍", list?.data.content);
      setDatas(list?.data.content);
      console.log("얍", datas);
    };
    if (datas) {
      setDatas(datas);
    }
  }, [datas]);

  return (
    <>
      <button onClick={setlist}>a</button>
      <EmployeeDutyTable>
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
                <Employeedata key={data.id}>
                  <Space direction="horizontal" size="middle">
                    {data.orderType === "당직" ? <DutyIcon /> : <AnnualIcon />}
                    <DutyInfo>{data.startDate}</DutyInfo>
                    <DutyInfo>{data.status}</DutyInfo>
                  </Space>
                </Employeedata>
              );
            })}
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
                  <Employeedata key={data.id}>
                    <Space
                      direction="horizontal"
                      size="middle"
                      style={{ width: "200px", margin: "5px auto" }}
                    >
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
              })}
          </ul>
        )}
        <div>
          {selectedTap == "전체" ? (
            <SelectModal />
          ) : (
            <EmployeeDutyModalForm toggle={toggle} />
          )}
        </div>
      </EmployeeDutyTable>
    </>
  );
}

const EmployeeDutyTable = styled.div`
  width: 290px;
  height: 670px;
  border-radius: 20px;
  background-color: #fff;
  padding: 20px 10px;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.16);
  display: flex;
  flex-direction: column;
  div {
    margin: 0 auto;
  }
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  ul {
    height: 530px;
  }
`;
const Employeedata = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  justify-content: space-between;
`;
const DutyIcon = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50px;
  background-color: rgba(19, 13, 216, 1);
`;
const AnnualIcon = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50px;
  background-color: rgba(255, 189, 19, 1);
`;
const DutyInfo = styled.div`
  color: rgba(12, 12, 12, 1);
`;

export default EmployeeTable;
