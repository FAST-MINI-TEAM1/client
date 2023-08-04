import { useState } from "react";
import { Input, Modal, Select, Space, DatePicker } from "antd";
import Button from "@components/common/Button";
import styled from "styled-components";
import Image from "next/image";
import bottomDot from "public/bottomDot.png";

interface IEmployeeDutyModalprops {
  toggle?: boolean;
}

function EmployeeDutyModalForm({ toggle }: IEmployeeDutyModalprops) {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      {toggle ? (
        <Button annualSubmit="true" onClick={showModal}>
          연차 등록하기
        </Button>
      ) : (
        <Button dutySubmit="true" onClick={showModal}>
          당직 등록하기
        </Button>
      )}

      <StyledDutyModal
        title={toggle ? "연차 등록하기" : "당직 등록하기"}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={520}
      >
        {toggle ? <div className="annualNum">남은 연차 횟수 {11}일</div> : null}
        <StyledSpace direction="horizontal">
          <StyledLabel> {toggle ? "연차일" : "당직일"}</StyledLabel>
          <RangePicker bordered={false} />
        </StyledSpace>
        {toggle ? (
          <StyledSpace direction="horizontal">
            <StyledLabel>휴가종류</StyledLabel>
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
          </StyledSpace>
        ) : null}
        <StyledSpace direction="horizontal">
          <StyledLabel>사유</StyledLabel>
          <StyledInput
            bordered={false}
            type="text"
            placeholder="입력하세요"
            value={inputReason}
            onChange={(e) => {
              setInputReason(e.target.value);
            }}
          ></StyledInput>
        </StyledSpace>
        <StyledSpace direction="horizontal">
          <StyledLabel>특이사항</StyledLabel>
          <StyledInput
            bordered={false}
            type="text"
            placeholder="입력하세요"
            value={inputEtc}
            onChange={(e) => {
              setInputEtc(e.target.value);
            }}
          ></StyledInput>
        </StyledSpace>
        <BtnContainer>
          <Button cancle="ture">취소</Button>
          <Button application="ture">신청</Button>
        </BtnContainer>
        <Image src={bottomDot} alt="backpng" />
      </StyledDutyModal>
    </>
  );
}

const StyledDutyModal = styled(Modal)`
  display: flex;
  text-align: center;
  font-size: 18px;
  .annualNum {
    font-size: 15px;
    color: red;
    text-align: right;
  }
  .ant-modal-title {
    margin-top: 50px;
    font-size: 18px;
  }
  .ant-modal-body {
    font-size: 16px;
    padding: 30px;
    margin: 20px;
    // background-color: red;
  }
`;

const StyledInput = styled(Input)`
  font-size: 15px;
`;
const StyledSpace = styled(Space)`
  font-size: 15px;
  width: 100%;
  margin: 10px 0;
  border-bottom: 0.5px solid #e0e0e0;
  // justify-content: space-between;
`;
const StyledLabel = styled.div`
  width: 60px;
  text-align: left;
  font-weight: bold;
  margin: 0 20px;
`;
const BtnContainer = styled.div`
  margin: 60px auto;
  width: 260px;
  display: flex;
  justify-content: space-between;
`;

export default EmployeeDutyModalForm;
