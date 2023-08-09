import { Space, Table } from "antd";
import { useState } from "react";
import ApprovalModal from "@components/admin/ApprovalModal";
import EmployeeHistoyModal from "@components/employee/EmployeeHistoyModal";
import Button from "@components/common/Button";
import type { ColumnsType } from "antd/es/table";

interface IDataTableProps {
  tableTitle: string;
  dataSource: IDataSourceItem[];
  type: string;
}

interface IDataSourceItem {
  id: number;
  empName: string;
  createdAt: string;
  orderType: string;
  status: string;
  startDate: string;
  endDate: string;
  reason?: string;
  category?: string;
  etc?: string;
}

function DataTabel({ tableTitle, dataSource, type }: IDataTableProps) {
  const [open, setOpen] = useState(false);
  // const [employeeOpne, setEmployeeOpen] = useState(false);
  const [details, setDetils] = useState<IDataSourceItem>();

  const adminOnClickHandler = (data: IDataSourceItem) => {
    setOpen(true);
    setDetils(data);
    console.log("디테일", details);
  };

  //테이블 형식
  const columns: ColumnsType<IDataSourceItem> = [
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
      render: (_, data) => {
        if (data.status === "대기") {
          return (
            <Button pending="true" onClick={() => adminOnClickHandler(data)}>
              {data?.status}
            </Button>
          );
        } else if (data.status === "승인") {
          return (
            <Button accept="true" onClick={() => adminOnClickHandler(data)}>
              {data?.status}
            </Button>
          );
        } else {
          return (
            <Button deny="true" onClick={() => adminOnClickHandler(data)}>
              {data?.status}
            </Button>
          );
        }
      },
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
      <h4>{tableTitle}</h4>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{ size: "small", position: ["bottomCenter"] }}
        scroll={{ y: 240 }}
        onRow={(record, rowIndex) => {
          return {
            onClick: () => console.log(record, rowIndex),
          };
        }}
      />
      {type === "admin" ? (
        <ApprovalModal open={open} setOpen={setOpen} details={details} />
      ) : (
        <EmployeeHistoyModal />
      )}
    </Space>
  );
}

export default DataTabel;
