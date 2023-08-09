import DataTabel from "@components/common/DataTabel";
import Header from "@components/common/Header";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { employeeListApi } from "@lib/api/employeeAPI";
import { IDataSourceItem } from "@components/common/DataTabel";
import { useQuery } from "@tanstack/react-query";

function History() {
  const query = useQuery({
    queryKey: ["employeeList"],
    queryFn: employeeListApi,
  });
  const [mounted, setMounted] = useState(false);
  const [datas, setDatas] = useState<IDataSourceItem[]>([]);
  //사원용 구분
  // const [historyToggle, setHistoryToggle] = useState(true);

  const setlist = async () => {
    const list = await employeeListApi();
    setDatas(list?.data.response.content);
    console.log("얍", datas);
    // setDataSource(datas.filter((data)=>{data.status == "대기"}))
  };

  useEffect(() => {
    setlist();
    setMounted(true);
    // setHistoryToggle(true);
  }, []);

  return (
    mounted && (
      <>
        <Header />
        <Container>
          <div className="details">
            <DataTabel
              tableTitle={"결재 대기 내역"}
              type={"employee"}
              dataSource={datas.filter((data) => {
                return data.status == "대기";
              })}
              // historyToggle={historyToggle}
            />
          </div>

          <div className="details">
            <DataTabel
              tableTitle={"결재 완료 내역"}
              type={"employee"}
              dataSource={datas.filter((data) => {
                return data.status == "승인" && "반려";
              })}
              // historyToggle={historyToggle}
            />
          </div>
        </Container>
      </>
    )
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0 0;

  .details {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 700px;
    padding: 20px 30px 30px;
    border-radius: 10px;
    box-sizing: border-box;
    background-color: #fff;
    box-shadow: #e2e2e2 0px 5px 10px;
  }
`;

export default History;
