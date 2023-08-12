import AdminHeader from "@components/common/AdminHeader";
import DataTabel from "@components/common/DataTabel";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { getPendingOrders, getCompletedOrders } from "@lib/api/adminAPI";
import { IDataSourceItem } from "@lib/interface/Admin";
// import { useQuery } from "@tanstack/react-query";

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
    } catch (error) {
      alert("결재 대기 조회 오류 발생하였습니다!");
    }
  };

  const getCompletedList = async () => {
    try {
      const { data } = await getCompletedOrders();
      setCompletedOrders(data.response.content);
    } catch (error) {
      alert("결재 완료 조회 오류 발생하였습니다!");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getPendingOrders();
      setPendingOrders(data.response.content);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getCompletedOrders();
      setCompletedOrders(data.response.content);
    };
    fetchData();
  }, []);

  return (
    mounted && (
      <>
        <AdminHeader />
        <Container>
          <Details>
            <DataTabel
              tableTitle={"결재 대기"}
              dataSource={pendingOrders}
              type={"admin"}
            />
          </Details>
          <Details>
            <DataTabel
              tableTitle={"결재 완료"}
              dataSource={completedOrders}
              type={"admin"}
            />
          </Details>
        </Container>
      </>
    )
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0 0;
`;

const Details = styled.div`
  margin-bottom: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 950px;
  padding: 20px 30px 30px;
  box-sizing: border-box;
  border-radius: 30px;
  background: #fff;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
`;

export default Approval;
