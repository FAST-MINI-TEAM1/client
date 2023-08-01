import Button from "@components/common/Button";
import Calendar from "@components/common/Calender";

function Home() {
  return (
    <>
      <h1>홈</h1>
      <Calendar />
      <Button acceptButton="true">승인버튼</Button>
      <Button denyButton="true">반려버튼</Button>
      <Button empButton="true">사원 로그인 버튼</Button>
      <Button empButton="true">관리자 로그인 버튼</Button>
    </>
  );
}

export default Home;
