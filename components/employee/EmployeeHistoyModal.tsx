import { useEffect, useState } from "react";
import { Modal, Space } from "antd";
import { styled } from "styled-components";
import Button from "@components/common/Button";
import { IDataSourceItem } from "@lib/interface/Admin";
import { employeeDeleteApi } from "@lib/api/employeeAPI";

interface Iprops {
  employeeOpen: boolean;
  setEmployeeOpen: React.Dispatch<React.SetStateAction<boolean>>;
  details?: IDataSourceItem;
}
function EmployeeHistoyModal({
  employeeOpen,
  setEmployeeOpen,
  details,
}: Iprops) {
  const [contnetdetails, setcontnetdetails] = useState<IDataSourceItem>();

  const handleOk = () => {
    employeeOpen;
  };

  const handleCancel = () => {
    setEmployeeOpen(false);
  };

  const deletHandeler = async () => {
    if (contnetdetails) {
      await employeeDeleteApi(contnetdetails.id);
      setEmployeeOpen(false);
    }
  };

  useEffect(() => {
    if (details) {
      setcontnetdetails(details);
    }
  }, [details]);

  return (
    <>
      <StyledModal
        title="결재내역"
        style={{ width: "420px", height: "680px" }}
        open={employeeOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={
          <Button delete="true" onClick={deletHandeler}>
            삭제하기
          </Button>
        }
      >
        <Space direction="vertical" size="middle">
          <StyledSpace direction="horizontal" size="middle">
            <StyledLabel>사원명</StyledLabel>
            <li>{contnetdetails?.empName}</li>
          </StyledSpace>
          <StyledSpace direction="horizontal" size="middle">
            <StyledLabel>신청일</StyledLabel>
            <li>{contnetdetails?.createdAt}</li>
          </StyledSpace>
          <StyledSpace direction="horizontal" size="middle">
            <StyledLabel>연차일자</StyledLabel>
            <li>
              {contnetdetails?.startDate}~{contnetdetails?.endDate}
            </li>
          </StyledSpace>
          {contnetdetails?.orderType == "연차" ? (
            <StyledSpace direction="horizontal" size="middle">
              <StyledLabel>휴가종류</StyledLabel>
              <li>{contnetdetails.category}</li>
            </StyledSpace>
          ) : null}
          <StyledSpace direction="horizontal" size="middle">
            <StyledLabel>사유</StyledLabel>
            <li>{contnetdetails?.reason}</li>
          </StyledSpace>
          <StyledSpace direction="horizontal" size="middle">
            <StyledLabel>특이사항</StyledLabel>
            <li>{contnetdetails?.etc}</li>
          </StyledSpace>
          <StyledSpace direction="horizontal" size="middle">
            <StyledLabel>승인상태</StyledLabel>
            <li>{contnetdetails?.status}</li>
          </StyledSpace>
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
`;
const StyledSpace = styled(Space)`
  font-size: 15px;
  width: 100%;
  margin: 10px 0;
  border-bottom: 0.5px solid #e0e0e0;
  // justify-content: space-between;
  text-shadow: 0px 3px 7px 0px rgba(81, 81, 81, 0.25);
  li {
    text-shadow: 0px 3px 7px rgba(81, 81, 81, 0.25);
    font-family: Noto Sans KR;
    font-size: 15px;
    font-weight: 400;
  }
`;
const StyledLabel = styled.div`
  width: 60px;
  text-align: left;
  font-weight: bold;
  margin: 0 20px;
`;

export default EmployeeHistoyModal;
