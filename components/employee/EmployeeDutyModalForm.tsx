import { useState } from "react";
import { Input, Modal, Button, Select, Space } from "antd";

function EmployeeDutyModalForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Space direction="horizontal" size="middle" style={{ width: "100%" }}>
          <div>연차일</div>
        </Space>
        <Space direction="horizontal" size="middle" style={{ width: "100%" }}>
          <div>휴가종류</div>
          <Select
            showSearch
            placeholder="휴가종류"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) =>
              (option?.label ?? "").includes(input)
            }
            options={[
              {
                value: "경조사",
                label: "경조사",
              },
              {
                value: "병가",
                label: "병가",
              },
              {
                value: "출산휴가",
                label: "출산휴가",
              },
              {
                value: "생리휴가",
                label: "생리휴가",
              },
            ]}
          />
        </Space>
        <Input
          type="text"
          placeholder="입력하세요"
          value="여름휴가"
          addonBefore="사유"
        ></Input>
        <Input
          type="text"
          placeholder="입력하세요"
          value="여름휴가"
          addonBefore="특이사항"
        ></Input>
      </Modal>
    </>
  );
}

export default EmployeeDutyModalForm;
