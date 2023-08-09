import { Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import DataTabel from "@components/common/DataTabel";
import styled from "styled-components";
import AdminHeader from "@components/common/AdminHeader";
import { FormEvent, useCallback, useEffect, useState } from "react";
import {
  getUserName,
  getUserNumber,
  getOrders,
  getPendingOrders,
} from "@lib/api/adminAPI";

function SearchPage() {
  const [mounted, setMounted] = useState(false);
  const [selectedOption, setSelectedOption] = useState("1");
  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  // 연차 / 당직 내역
  // 결재 내역 필터링 필요
  // const { data: listData } = await getOrders(searchWord, 0, 4);
  // TODO: 데이터 받은 후 필터링!
  // 데이터 -> 승인/반려/대기 -== 대기내역을 결재 대기로 넣고
  // 결재 완료 -> 승인/반려 넣기
  // searchWord : 사원번호랑, 사원명 x 사원 id값 o
  const onSearch = useCallback(async () => {

  }, []);

  const handleChangeInput = (event: FormEvent) => {
    const { value } = event.target as HTMLInputElement;
    setSearchWord(value);
  };

  const pendingData = [
    {
      id: 1,
      empName: "홍길동",
      createdAt: "2023-07-27",
      orderType: "연차",
      status: "대기",
      startDate: "2023-08-01",
      endDate: "2023-08-01",
      reason: "이유입니다",
      category: "경조사",
      etc: "특이사항입니다",
    },
  ];

  const completedData = [
    {
      id: 1,
      empName: "홍길동",
      createdAt: "2023-07-27",
      orderType: "연차",
      status: "승인",
      startDate: "2023-08-01",
      endDate: "2023-08-01",
      reason: "이유입니다",
      category: "경조사",
      etc: "특이사항입니다",
    },
  ];
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
    mounted && (
      <>
        <AdminHeader />
        <Search>
          <div className="searchBar">
            <form className="container" onSubmit={onSearch}>
              <Select
                defaultValue="1"
                options={options}
                onChange={(value: string) => setSelectedOption(value)}
              />
              <input onChange={handleChangeInput} autoFocus />
              <button>검색</button>
            </form>
          </div>
          <div className="info">
            <h3>기본정보</h3>
            <div className="container">
              <ul>
                <li>
                  <span>사원명</span>
                  <p>홍길동</p>
                </li>
                <li>
                  <span>사원번호</span>
                  <p>20230001</p>
                </li>
                <li>
                  <span>입사일</span>
                  <p>2023.07.29</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="tabel">
            <h3>연차 / 당직</h3>
            <div className="details">
              <DataTabel tableTitle={"결재 대기"} dataSource={pendingData} />
              <DataTabel tableTitle={"결재 완료"} dataSource={completedData} />
            </div>
          </div>
        </Search>
      </>
    )
  );
}

const Search = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0 0;

  h3 {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .searchBar {
    margin-bottom: 30px;
    .container {
      position: relative;
      display: grid;
      grid-template-columns: 100px auto;
      align-items: center;
      width: 700px;
      height: 50px;
      padding: 5px 10px;
      border-radius: 10px;
      box-sizing: border-box;
      background-color: #fff;
      box-shadow: #e2e2e2 0px 5px 10px;

      .ant-select-selector {
        border: none;
      }

      input {
        height: 100%;
        border: none;
        outline: none;
        padding-bottom: 3px;
        font-size: 14px;
        text-indent: 10px;
      }
      .anticon-search {
        position: absolute;
        height: 16px;
        top: 0;
        bottom: 0;
        right: 13px;
        margin: auto 0;
        color: #626262;
      }
    }
  }

  .info {
    width: 700px;

    .container {
      padding: 20px 30px 30px;
      border-radius: 10px;
      box-sizing: border-box;
      background-color: #fff;
      box-shadow: #e2e2e2 0px 5px 10px;

      ul {
        width: 30%;
        li {
          margin-top: 20px;
          display: flex;
          span {
            width: 100px;
          }
        }
      }
    }
  }

  .tabel {
    margin-top: 30px;
    .details {
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
  }
`;

export default SearchPage;

