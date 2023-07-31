import { Modal, Button } from "antd";
import { Fragment } from "react";

function ApprovalModal({ open, setOpen, datails }) {
  const footerConfig = [
    <Button key="reject" onClick={() => console.log("반려")}>
      반려
    </Button>,
    <Button key="submit" type="primary" onClick={() => console.log("승인")}>
      승인
    </Button>,
  ];

  return (
    <Modal open={open} onCancel={() => setOpen(false)} footer={footerConfig}>
      <p>유형: {datails.orderType}</p>
      <p>이름: {datails.empName}</p>
      <p>결재 요청일: {datails.createdAt}</p>
      <p>
        신청일: {datails.startDate} ~ {datails.endDate}
      </p>
      {
        (datails.orderType = "연차" ? (
          <>
            <p>사유 {datails.reason}</p>
            <p>휴가 종류: {datails.category}</p>
          </>
        ) : null)
      }
    </Modal>
  );
}

export default ApprovalModal;
