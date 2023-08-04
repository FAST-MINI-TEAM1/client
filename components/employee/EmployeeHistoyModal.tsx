import { useState } from "react";
import { Modal, Space } from "antd";
import { styled } from "styled-components";
import Button from "@components/common/Button";

interface Iprops {
  employeeOpen?: boolean;
}
function EmployeeHistoyModal() {
  const data = {
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
  };

  const [employeeOpen, setemployeeOpen] = useState(false);

  const handleOk = () => {
    setemployeeOpen(false);
  };

  const handleCancel = () => {
    setemployeeOpen(false);
  };
  return (
    <>
      <StyledModal
        title="결재내역"
        style={{ width: "420px", height: "680px" }}
        open={employeeOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={<Button delete="true">삭제하기</Button>}
      >
        <Space direction="horizontal" size="middle">
          <ul>
            <li>사원명</li>
            <li>신청일</li>
            <li>연차일자</li>
            <li>휴가종류</li>
            <li>사유</li>
            <li>특이사항</li>
            <li>승인상태</li>
          </ul>
          <ul>
            <li>{data.empName}</li>
            <li>{data.createdAt}</li>
            <li>
              {data.startDate}~{data.endDate}
            </li>
            <li>{data.category}</li>
            <li>{data.reason}</li>
            <li>{data.etc}</li>
            <li>{data.status}</li>
          </ul>
        </Space>
      </StyledModal>
    </>
  );
}
const StyledModal = styled(Modal)`
  width: 420px;
  height: 680px;
  text-align: center;
  padding: auto;
  ul {
    text-align: left;
    margin: 50px 15px;
  }
  li {
    border-bottom: 1px solid #e0e0e0;
    margin-top: 20px;
    padding-bottom: 8px;
    text-shadow: 0px 3px 7px 0px rgba(81, 81, 81, 0.25);
    font-family: Noto Sans KR;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export default EmployeeHistoyModal;
