import { Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import ApporvalTabel from "@components/admin/ApprovalTabel";

function SearchPage() {
  const options = [
    {
      value: "1",
      label: "사원명",
    },
    {
      value: "2",
      label: "사원번호",
    },
  ];

  return (
    <section className="search">
      <div className="searchBar">
        <div className="container">
          <Select defaultValue="1" options={options} />
          <input />
          <SearchOutlined />
        </div>
      </div>
      <div className="info">
        <h3>기본정보</h3>
        <div className="container">
          <ul>
            <li>
              <p>사원명</p>
              <p>홍길동</p>
            </li>
            <li>
              <p>사원번호</p>
              <p>20230001</p>
            </li>
            <li>
              <p>입사일</p>
              <p>2023.07.29</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="tabel">
        <h3>연차 / 당직</h3>
        <div className="details">
          <ApporvalTabel tableTitle={"결재 대기"} />
          <ApporvalTabel tableTitle={"결재 완료"} />
        </div>
      </div>
    </section>
  );
}

export default SearchPage;
