import React from 'react'
import { Tabs } from 'antd'
import type { TabsProps } from 'antd';
import EmployeeTable from "@components/employee/EmployeeTable"

function EmployeeTableTab() {
  const onChange = (key: string) => {
    console.log(key);
  };
  
  const employeeHandeler: TabsProps['items'] = [
    {
      key: '전체',
      label: `전체`,
      children: <EmployeeTable/>,
    },
    {
      key: '연차',
      label: `연차`,
      children: <EmployeeTable />,
    },
    {
      key: '당직',
      label: `당직`,
      children: <EmployeeTable />,
    },
  ];
  return (
  <>
    <Tabs defaultActiveKey="전체" items={employeeHandeler} onChange={onChange} />;
  </>
  )
}

export default EmployeeTableTab