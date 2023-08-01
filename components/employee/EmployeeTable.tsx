import EmployeeDutyModalForm from "@components/employee/EmployeeDutyModalForm"
import React from 'react'
import { Space, Tabs } from 'antd'
import type { TabsProps } from 'antd';
import styled from "styled-components";

function EmployeeTable() {
  
  const datas = [{type:'당직',date:'07월08일', status: '승인완료'},{type:'연차',date:'07월15일', status:'승인대기'}]
  return (
    <>
    
      <EmployeeDutyTable> 
      {datas.map((data)=>{return(<Space key={data.date} direction="horizontal" size="middle" style={{ width: "100%"}}>
        {data.type ==='당직' ? <DutyIcon/> : <AnnualIcon/> }
        <DutyInfo>{data.date}</DutyInfo>
        <DutyInfo>{data.status}</DutyInfo>
      </Space>)})}
      <EmployeeDutyModalForm />
      </EmployeeDutyTable>
    </>
  )
}

const EmployeeDutyTable = styled.div`
width: 290px;
height: 670px;
border-radius: 30px;
background-color: fff;
padding: 30px;
box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.16);
`
const DutyIcon = styled.div`
width: 7px;
height:7px;
border-radius: 50px;
background-color: rgba(19, 13, 216, 1);
`
const AnnualIcon = styled.div`
width: 7px;
height:7px;
border-radius: 50px;
background-color: rgba(242, 118, 118, 1);
`
const DutyInfo = styled.div`
color:rgba(12, 12, 12, 1);
`

export default EmployeeTable