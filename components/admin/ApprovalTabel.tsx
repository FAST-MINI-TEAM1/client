import { Space, Table, Button, Modal } from "antd";
import { useState } from "react";
import ApprovalModal from "./ApprovalModal";
import { title } from "process";
import styeld from "styeld-components";

function ApprovalTabel({ tableTitle }) {
  const [open, setOpen] = useState(false);
  const [modal, contextHolder] = Modal.useModal();
  const [datails, setDetils] = useState({});

  const onClickHandler = (detailsData) => {
    setOpen(true);
    console.log(detailsData);
    setDetils(detailsData);
  };

  const dataSource = [
    {
      id: 1,
      empName: "홍길동",
      createdAt: "2023-07-27",
      orderType: "연차",
      status: "대기",
      startDate: "2023-08-01",
      endDate: "2023-08-01",
      reason: "이유입니다",
      category: "병가/경조사/출산휴가/생리휴가/",
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
      status: "승인",
      startDate: "2023-08-01",
      endDate: "2023-08-01",
      reason: null,
      category: null,
      etc: null,
    },
  ];

  const infoConfig = {
    title: "알림",
    content: (
      <>
        <p>이미 처리된 내역입니다.</p>
      </>
    ),
  };

  const columns = [
    {
      title: "사원명",
      dataIndex: "사원명",
      key: "사원명",
      align: "center",
      render: (_, data) => (
        <>
          <p>{data.empName}</p>
        </>
      ),
    },
    {
      title: "결재요청날짜",
      dataIndex: "결재요청날짜",
      key: "결재요청날짜",
      align: "center",
      render: (_, data) => (
        <>
          <p>{data.createdAt}</p>
        </>
      ),
    },
    {
      title: "유형",
      dataIndex: "유형",
      key: "유형",
      align: "center",
      render: (_, data) => (
        <>
          <p>{data.orderType}</p>
        </>
      ),
    },
    {
      title: "승인여부",
      dataIndex: "승인여부",
      key: "승인여부",
      align: "center",
      render: (_, data) => (
        <Button
          onClick={
            data.status === "대기"
              ? () => onClickHandler(data)
              : () => modal.info(infoConfig)
          }
        >
          {data?.status}
        </Button>
      ),
    },
  ];

  return (
    <Space
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      {contextHolder}
      <h4>{tableTitle}</h4>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{ size: "small", position: ["bottomCenter"] }}
        scroll={{ y: 240 }}
      />
      <ApprovalModal open={open} setOpen={setOpen} datails={datails} />
    </Space>
  );
}

export default ApprovalTabel;
