import AdminHeader from "@components/common/AdminHeader";
import DataTabel from "@components/common/DataTabel";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { getPendingOrders, getCompletedOrders } from "@lib/api/adminAPI";

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

function Approval() {
  const [mounted, setMounted] = useState(false);
  const [pendingOrders, setPendingOrders] = useState<IDataSourceItem[]>([]);
  const [completedOrders, setCompletedOrders] = useState<IDataSourceItem[]>([]);

  useEffect(() => {
    setMounted(true);
    getPendingList();
    getCompletedList();
  }, []);

  const getPendingList = async () => {
    try {
      const { data } = await getPendingOrders();
      setPendingOrders(data.response.content);
      console.log("pending data", data.response.content);
    } catch (error) {
      console.log("대기 조회 실패", error);
    }
  };

  const getCompletedList = async () => {
    try {
      const { data } = await getCompletedOrders();
      console.log("completed data", data.response.content);
      setCompletedOrders(data.response.content);
    } catch (error) {
      console.log("완료 조회 실패", error);
    }
  };

  return (
    mounted && (
      <>
        <AdminHeader />
        <Container>
          <div className="details">
            <DataTabel
              tableTitle={"결재 대기"}
              dataSource={pendingOrders}
              type={"admin"}
            />
          </div>
          <div className="details">
            <DataTabel
              tableTitle={"결재 완료"}
              dataSource={completedOrders}
              type={"admin"}
            />
          </div>
        </Container>
      </>
    )
  );
}

export default Approval;

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
