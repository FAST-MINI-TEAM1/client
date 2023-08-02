import Button from "@components/common/Button";
import Calendar from "@components/common/Calender";

function Home() {
  return (
    <>
      <h1>홈</h1>
      <Calendar />
      <Button accept="true">승인버튼</Button>
      <Button deny="true">반려버튼</Button>
      <Button employee="true">사원 로그인 버튼</Button>
      <Button manager="true">관리자 로그인 버튼</Button>
    </>
  );
}

export default Home;
