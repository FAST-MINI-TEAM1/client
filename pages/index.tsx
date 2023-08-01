import Button from "@components/common/Button";
import Calendar from "@components/common/Calender";

function Home() {
  return (
    <>
      <h1>홈</h1>
      <Calendar />
      <Button acceptButton>승인버튼</Button>
    </>
  );
}

export default Home;
