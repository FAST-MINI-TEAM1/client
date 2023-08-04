import DataTabel from "@components/common/DataTabel";
import Header from "@components/common/Header";
import { useEffect, useState } from "react";
import { styled } from "styled-components";

function History() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const pendingData = [
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
  ];

  const completedData = [
    {
      id: 2,
      empName: "홍길동",
      createdAt: "2023-07-27",
      orderType: "연차",
      status: "승인",
      startDate: "2023-08-01",
      endDate: "2023-08-01",
      reason: "이유입니다",
      category: "경조사",
      etc: "특이사항입니다",
    },
  ];
  return (
    mounted && (
      <>
        <Header />
        <Container>
          <div className="details">
            <DataTabel
              tableTitle={"결재 대기 내역"}
              dataSource={pendingData}
              // type={"employee"}
            />
          </div>

          <div className="details">
            <DataTabel
              tableTitle={"결재 완료 내역"}
              dataSource={completedData}
              // type={"employee"}
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
