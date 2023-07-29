import { Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";

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
  const onChangeHandler = (e) => {
    e.preventDefault();
    console.log("onChangeHandler", e.target.value);
  };

  return (
    <>
      <div className="searchBox">
        <div className="container">
          <Select defaultValue="1" options={options} />
          <input />
          <SearchOutlined />
        </div>
      </div>
    </>
  );
}

export default SearchPage;
