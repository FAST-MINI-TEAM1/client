import { Table } from "antd";
import type { ColumnType } from "antd/es/table";
import styled from "styled-components";
type TDataType = {
  id: number;
  empName: string;
  empNo: string;
  month: {
    jan: number;
    feb: number;
    mar: number;
    apr: number;
    may: number;
    jun: number;
    jul: number;
    aug: number;
    sep: number;
    oct: number;
    nov: number;
    dec: number;
  };
  total: number;
};
function MonthlyTable({ tabKey }) {
  const columns: ColumnType<TDataType> = [
    {
      title: "사원",
      dataIndex: "사원",
      key: "사원",
      fixed: "left",
      children: [
        {
          title: "사원번호",
          dataIndex: "사원번호",
          key: "사원번호",
          width: 90,
          align: "center",
          sorter: (a, b) => a.empNo - b.empNo,
          render: (_, data) => <p>{data.empNo}</p>,
        },
        {
          title: "사원명",
          dataIndex: "사원명",
          key: "사원명",
          width: 80,
          align: "center",
          render: (_, data) => <p>{data.empName}</p>,
        },
      ],
    },
    {
      title: "1월",
      dataIndex: "jan",
      key: "jan",
      width: 50,
      align: "center",
      render: (_, data) => <p>{data.month.jan}</p>,
    },
    {
      title: "2월",
      dataIndex: "feb",
      key: "feb",
      width: 50,
      align: "center",
      render: (_, data) => <p>{data.month.feb}</p>,
    },
    {
      title: "3월",
      dataIndex: "mar",
      key: "mar",
      width: 50,
      align: "center",
      render: (_, data) => <p>{data.month.mar}</p>,
    },
    {
      title: "4월",
      dataIndex: "apr",
      key: "apr",
      width: 50,
      align: "center",
      render: (_, data) => <p>{data.month.apr}</p>,
    },
    {
      title: "5월",
      dataIndex: "may",
      key: "may",
      width: 50,
      align: "center",
      render: (_, data) => <p>{data.month.may}</p>,
    },
    {
      title: "6월",
      dataIndex: "jun",
      key: "jun",
      width: 50,
      align: "center",
      render: (_, data) => <p>{data.month.jun}</p>,
    },
    {
      title: "7월",
      dataIndex: "jul",
      key: "jul",
      width: 50,
      align: "center",
      render: (_, data) => <p>{data.month.jul}</p>,
    },
    {
      title: "8월",
      dataIndex: "aug",
      key: "aug",
      width: 50,
      align: "center",
      render: (_, data) => <p>{data.month.aug}</p>,
    },
    {
      title: "9월",
      dataIndex: "sep",
      key: "sep",
      width: 50,
      align: "center",
      render: (_, data) => <p>{data.month.sep}</p>,
    },
    {
      title: "10월",
      dataIndex: "oct",
      key: "oct",
      width: 50,
      align: "center",
      render: (_, data) => <p>{data.month.oct}</p>,
    },
    {
      title: "11월",
      dataIndex: "nov",
      key: "nov",
      width: 50,
      align: "center",
      render: (_, data) => <p>{data.month.nov}</p>,
    },
    {
      title: "12월",
      dataIndex: "dec",
      key: "dec",
      width: 50,
      align: "center",
      render: (_, data) => <p>{data.month.dec}</p>,
    },
    {
      title: "합계",
      key: "합계",
      fixed: "right",
      align: "center",
      width: 70,
      sorter: (a, b) => a.total - b.total,
      render: (_, data) => <p>{data.total}</p>,
    },
  ];

  const data: TDataType[] = [
    {
      id: 1,
      empName: "홍길동",
      empNo: "20230001",
      month: {
        jan: 1,
        feb: 1,
        mar: 1,
        apr: 0,
        may: 1,
        jun: 0,
        jul: 1,
        aug: 1,
        sep: 3,
        oct: 1,
        nov: 1,
        dec: 3,
      },
      total: 15,
    },
    {
      id: 2,
      empName: "김연아",
      empNo: "20230002",
      month: {
        jan: 3,
        feb: 2,
        mar: 1,
        apr: 0,
        may: 1,
        jun: 0,
        jul: 1,
        aug: 1,
        sep: 0,
        oct: 1,
        nov: 1,
        dec: 3,
      },
      total: 14,
    },
    {
      id: 3,
      empName: "박보검",
      empNo: "20230003",
      month: {
        jan: 2,
        feb: 2,
        mar: 1,
        apr: 0,
        may: 1,
        jun: 0,
        jul: 1,
        aug: 1,
        sep: 0,
        oct: 1,
        nov: 1,
        dec: 1,
      },
      total: 11,
    },
  ];

  const dutyData: TDataType[] = [
    {
      id: 1,
      empName: "정우성",
      empNo: "20230004",
      month: {
        jan: 1,
        feb: 1,
        mar: 1,
        apr: 0,
        may: 1,
        jun: 0,
        jul: 1,
        aug: 1,
        sep: 3,
        oct: 1,
        nov: 1,
        dec: 3,
      },
      total: 30,
    },
    {
      id: 2,
      empName: "김혜수",
      empNo: "20230005",
      month: {
        jan: 3,
        feb: 2,
        mar: 1,
        apr: 0,
        may: 1,
        jun: 0,
        jul: 1,
        aug: 1,
        sep: 0,
        oct: 1,
        nov: 1,
        dec: 3,
      },
      total: 34,
    },
    {
      id: 3,
      empName: "조인성",
      empNo: "20230006",
      month: {
        jan: 2,
        feb: 2,
        mar: 1,
        apr: 0,
        may: 1,
        jun: 0,
        jul: 1,
        aug: 1,
        sep: 0,
        oct: 1,
        nov: 1,
        dec: 1,
      },
      total: 31,
    },
  ];
  return (
    <>
      <StyledTable
        columns={columns}
        dataSource={tabKey === "1" ? data : dutyData}
        size="small"
        bordered
      />
    </>
  );
}

export default MonthlyTable;

const StyledTable = styled(Table)`
  .ant-table-tbody {
    border: 1px solid #191919;
  }
`;
