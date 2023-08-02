import DataTabel from "@components/common/DataTabel";
import styled from "styled-components";

function approval() {
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
    {
      id: 1,
      empName: "김연아",
      createdAt: "2023-07-27",
      orderType: "당직",
      status: "대기",
      startDate: "2023-08-01",
      endDate: "2023-08-01",
      reason: null,
      category: null,
      etc: null,
    },
    {
      id: 1,
      empName: "박보검",
      createdAt: "2023-07-27",
      orderType: "당직",
      status: "대기",
      startDate: "2023-08-01",
      endDate: "2023-08-01",
      reason: null,
      category: null,
      etc: null,
    },
  ];

  const completedData = [
    {
      id: 1,
      empName: "김현철",
      createdAt: "2023-07-27",
      orderType: "연차",
      status: "반려",
      startDate: "2023-08-01",
      endDate: "2023-08-01",
      reason: "이유입니다",
      category: "병가/경조사/출산휴가/생리휴가/",
      etc: "특이사항입니다",
    },
    {
      id: 1,
      empName: "박지성",
      createdAt: "2023-07-27",
      orderType: "당직",
      status: "승인",
      startDate: "2023-08-01",
      endDate: "2023-08-01",
      reason: null,
      category: null,
      etc: null,
    },
    {
      id: 1,
      empName: "문동은",
      createdAt: "2023-07-27",
      orderType: "당직",
      status: "승인",
      startDate: "2023-08-01",
      endDate: "2023-08-01",
      reason: null,
      category: null,
      etc: null,
    },
  ];
  return (
    <Container>
      <div className="details">
        <DataTabel tableTitle={"결재 대기 내역"} dataSource={pendingData} />
      </div>

      <div className="details">
        <DataTabel tableTitle={"결재 완료 내역"} dataSource={completedData} />
      </div>
    </Container>
  );
}

export default approval;

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
