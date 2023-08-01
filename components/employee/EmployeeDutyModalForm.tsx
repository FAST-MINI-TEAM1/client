import { useState } from "react";
import { Input, Modal, Button, Select, Space, DatePicker } from "antd";

function EmployeeDutyModalForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  //modal에서 받는 inputVlaue값
  const [inputDate, setInputDate] = useState("");
  const [inputCategory, setInputCategory] = useState("");
  const [inputReason, setInputReason] = useState("");
  const [inputEtc, setInputEtc] = useState("");

  // DatePicker
  const { RangePicker } = DatePicker;

  // select 휴가종류
  const selectCategory = (value: string) => {
    setInputCategory(value);
    console.log(`selected ${value}`);
  };
  const searchCategory = (value: string) => {
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
        {toggle ? "연차 등록하기" : "당직 등록하기"}
      </Button>
      <Modal
        title={toggle ? "연차 등록하기" : "당직 등록하기"}
        open={isModalOpen}
        okText="신청"
        onOk={handleOk}
        cancelText="취소"
        onCancel={handleCancel}
      >
        {toggle ? <div>남은 연차 횟수 {11}일</div> : null}
        <Space direction="horizontal" size="middle" style={{ width: "100%" }}>
          <div> {toggle ? "연차일" : "당직일"}</div>
          <RangePicker bordered={false} />
        </Space>
        {toggle ? <Space direction="horizontal" size="middle" style={{ width: "100%" }}>
          <div>휴가종류</div>
          <Select
            bordered={false}
            showSearch
            placeholder="휴가종류"
            optionFilterProp="children"
            onChange={selectCategory}
            onSearch={searchCategory}
            value={inputCategory || null}
            filterOption={(input, option) =>
              (option?.label ?? "휴가종류").includes(input)
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
        </Space> : null}
        <Space direction="horizontal" size="middle" style={{ width: "100%" }}>
          <div>사유</div>
          <Input
            bordered={false}
            type="text"
            placeholder="입력하세요"
            value={inputReason}
            onChange={(e) => {
              setInputReason(e.target.value);
            }}
          ></Input>
        </Space>
        <Space direction="horizontal" size="middle" style={{ width: "100%" }}>
          <div>특이사항</div>
          <Input
            bordered={false}
            type="text"
            placeholder="입력하세요"
            value={inputEtc}
            onChange={(e) => {
              setInputEtc(e.target.value);
            }}
          ></Input>
        </Space>
      </Modal>
    </>
  );
}

export default EmployeeDutyModalForm;
