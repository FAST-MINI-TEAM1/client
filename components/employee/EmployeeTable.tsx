import EmployeeDutyModalForm from "@components/employee/EmployeeDutyModalForm";
import { Button, Space } from "antd";
import { styled } from "styled-components";
import SelectModal from "@components/employee/SelectModal";
import { employeeListApi } from "@lib/api/employeeAPI";
import { useEffect, useState } from "react";
// import { IEmployeeListRequest } from "@lib/interface/EmployeeInterface";
import { IDataSourceItem } from "@lib/interface/Admin";
import EmployeeHistoyModal from "@components/employee/EmployeeHistoyModal";

interface selectedTapProps {
  selectedTap: string;
  toggle?: boolean;
  setToggle?: React.Dispatch<React.SetStateAction<boolean>>;
}

function EmployeeTable({ selectedTap, toggle }: selectedTapProps) {
  const [datas, setDatas] = useState<IDataSourceItem[]>([]);
  const [employeeOpen, setEmployeeOpen] = useState(false);
  const [details, setDetails] = useState<IDataSourceItem>();
  // const [datasLength, setDatasLength] = useState(0);

  const openHandler = (data: IDataSourceItem) => {
    setEmployeeOpen(true);
    setDetails(data);
  };
  const setlist = async () => {
    const list = await employeeListApi();
    setDatas(list?.data.response.content);
    // setDatasLength(datas.length);
  };

  useEffect(() => {
    if (datas) {
      setlist();
    }
  }, [datas]);

  return (
    <>
      <EmployeeDutyTable>
        {selectedTap == "전체" ? (
          <h1>전체 현황</h1>
        ) : selectedTap == "연차" ? (
          <h1>연차 현황</h1>
        ) : (
          <h1>당직 현황</h1>
        )}
        {selectedTap == "전체" ? (
          <ul>
            {datas &&
              datas.map((data) => {
                return (
                  <Employeedata
                    key={data.id}
                    onClick={() => {
                      openHandler(data);
                    }}
                  >
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
              })}
          </ul>
        ) : (
          <ul>
            {datas &&
              datas
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
        <EmployeeHistoyModal
          employeeOpen={employeeOpen}
          setEmployeeOpen={setEmployeeOpen}
          details={details}
        />
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
const Employeedata = styled(Button)`
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
