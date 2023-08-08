import { useCallback } from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { getMonthlyAnnual, getMonthlyDuty } from "@lib/api/adminAPI";

interface IColumnsData {
  id: number;
  empName: string;
  empNo: number;
  month: IMonth;
  total: number;
}
interface IMonth {
  [key: string]: number;
}

interface IMonthlyTableProps {
  tabKey: string;
}
function MonthlyTable({ tabKey }: IMonthlyTableProps) {
  const [year, setYear] = useState(new Date().getFullYear());
  const [annualData, setAnnualData] = useState([]);
  const [dutyData, setDutyData] = useState([]);

  useEffect(() => {
    getMonthlyData();
  }, []);

  // const getMonthlyData = useCallback(async () => {
  //   try {
  //     if (tabKey === "1") {
  //       const res = await getMonthlyAnnual(year);
  //       console.log("월별 연차", res);
  //     } else if (tabKey === "2") {
  //       const res = await getMonthlyDuty(year);
  //       console.log("월별 당직", res);
  //     }
  //   } catch (error) {
  //     console.log("월별 조회 실패", error);
  //   }
  // }, [tabKey, year]);

  const getMonthlyData = async () => {
    try {
      const res = await getMonthlyAnnual(2023);
      console.log("월별 연차", res);
    } catch (error) {
      console.log("월별 조회 실패", error);
    }
  };

  const columnsData: ColumnsType<IColumnsData> = [
    {
      title: "사원",
      children: [
        {
          title: "사원번호",
          dataIndex: "empNo",
          key: "empNo",
          width: 90,
          align: "center",
          sorter: (a, b) => a.empNo - b.empNo,
          render: (_, data) => <p>{data.empNo}</p>,
        },
        {
          title: "사원명",
          dataIndex: "empName",
          key: "empName",
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

  // const annualData: IColumnsData[] = [
  //   {
  //     id: 1,
  //     empName: "홍길동",
  //     empNo: 20230001,
  //     month: {
  //       jan: 1,
  //       feb: 1,
  //       mar: 1,
  //       apr: 0,
  //       may: 1,
  //       jun: 0,
  //       jul: 1,
  //       aug: 1,
  //       sep: 3,
  //       oct: 1,
  //       nov: 1,
  //       dec: 3,
  //     },
  //     total: 15,
  //   },
  //   {
  //     id: 2,
  //     empName: "김연아",
  //     empNo: 20230002,
  //     month: {
  //       jan: 3,
  //       feb: 2,
  //       mar: 1,
  //       apr: 0,
  //       may: 1,
  //       jun: 0,
  //       jul: 1,
  //       aug: 1,
  //       sep: 0,
  //       oct: 1,
  //       nov: 1,
  //       dec: 3,
  //     },
  //     total: 14,
  //   },
  //   {
  //     id: 3,
  //     empName: "박보검",
  //     empNo: 20230003,
  //     month: {
  //       jan: 2,
  //       feb: 2,
  //       mar: 1,
  //       apr: 0,
  //       may: 1,
  //       jun: 0,
  //       jul: 1,
  //       aug: 1,
  //       sep: 0,
  //       oct: 1,
  //       nov: 1,
  //       dec: 1,
  //     },
  //     total: 11,
  //   },
  // ];

  // const dutyData: IColumnsData[] = [
  //   {
  //     id: 1,
  //     empName: "정우성",
  //     empNo: 20230004,
  //     month: {
  //       jan: 1,
  //       feb: 1,
  //       mar: 1,
  //       apr: 0,
  //       may: 1,
  //       jun: 0,
  //       jul: 1,
  //       aug: 1,
  //       sep: 3,
  //       oct: 1,
  //       nov: 1,
  //       dec: 3,
  //     },
  //     total: 30,
  //   },
  //   {
  //     id: 2,
  //     empName: "김혜수",
  //     empNo: 20230005,
  //     month: {
  //       jan: 3,
  //       feb: 2,
  //       mar: 1,
  //       apr: 0,
  //       may: 1,
  //       jun: 0,
  //       jul: 1,
  //       aug: 1,
  //       sep: 0,
  //       oct: 1,
  //       nov: 1,
  //       dec: 3,
  //     },
  //     total: 34,
  //   },
  //   {
  //     id: 3,
  //     empName: "조인성",
  //     empNo: 20230006,
  //     month: {
  //       jan: 2,
  //       feb: 2,
  //       mar: 1,
  //       apr: 0,
  //       may: 1,
  //       jun: 0,
  //       jul: 1,
  //       aug: 1,
  //       sep: 0,
  //       oct: 1,
  //       nov: 1,
  //       dec: 1,
  //     },
  //     total: 31,
  //   },
  // ];

  return (
    <>
      <Container>
        <YearChanger>
          <Arrow type="button" onClick={() => setYear(year - 1)}>
            <LeftOutlined />
          </Arrow>
          <Year>{year}년</Year>
          <Arrow type="button" onClick={() => setYear(year + 1)}>
            <RightOutlined />
          </Arrow>
        </YearChanger>
        <Table
          columns={columnsData}
          dataSource={tabKey === "1" ? annualData : dutyData}
          size="small"
          bordered
        />
      </Container>
    </>
  );
}

export default MonthlyTable;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 30px 30px;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: #e2e2e2 0px 5px 10px;
`;

const YearChanger = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 20px;
`;

const Year = styled.span`
  font-size: 30px;
`;
const Arrow = styled.button`
  color: #333;
  border: 0;
  font-size: 1rem;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.2);
    color: #1ebf91;
  }
`;
