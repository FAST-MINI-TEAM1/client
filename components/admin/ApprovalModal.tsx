import { Modal, Button } from "antd";
import { Fragment } from "react";
import styled from "styled-components";

function ApprovalModal({ open, setOpen, details }) {
  return (
    <StyledModal open={open} onCancel={() => setOpen(false)} footer={[]}>
      <div className="details">
        <h3>{details.orderType} 결재 내역</h3>
        {details.orderType === "연차" && (
          <p className="leavings">남은 연차 횟수: 11</p>
        )}
        <ul>
          <li>
            <span>이름</span>
            <p>{details.empName}</p>
          </li>
          <li>
            <span>결재 요청일</span>
            <p> {details.createdAt}</p>
          </li>
          <li>
            <span>신청일</span>
            <p>
              {details.startDate} ~ {details.endDate}
            </p>
          </li>
          {details.orderType === "연차" && (
            <>
              <li>
                <span>휴가종류</span>
                <p>{details.category}</p>
              </li>
              <li>
                <span>사유</span>
                <p>{details.reason}</p>
              </li>
            </>
          )}
        </ul>
      </div>
      {details.status == "대기" && (
        <div className="btnBox">
          <Button key="reject" onClick={() => console.log("반려")}>
            반려
          </Button>
          <Button
            key="submit"
            type="primary"
            onClick={() => console.log("승인")}
          >
            승인
          </Button>
        </div>
      )}
    </StyledModal>
  );
}

export default ApprovalModal;

const StyledModal = styled(Modal)`
  .details {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    h3 {
      font-size: 16px;
      font-weight: 700;
    }
    .leavings {
      position: absolute;
      top: 30px;
      right: 50px;
    }
    ul {
      margin-top: 50px;

      li {
        display: flex;
        margin-bottom: 20px;
        border-bottom: 1px solid #e6e6e6;
        span {
          width: 100px;
        }
      }
    }
  }
  .btnBox {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 30px;
  }
`;
