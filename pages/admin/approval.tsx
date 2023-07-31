import ApprovalTabel from "@components/admin/ApprovalTabel";
import styled from "styled-components";

function approval() {
  return (
    <Approval>
      <div className="details">
        <ApprovalTabel tableTitle={"결재 대기 내역"} />
      </div>

      <div className="details">
        <ApprovalTabel tableTitle={"결재 완료 내역"} />
      </div>
    </Approval>
  );
}

export default approval;

const Approval = styled.section`
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
