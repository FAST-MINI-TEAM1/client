# TEAM1(가제)

# 👩‍🚀 프론트엔드 개발팀

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/ChoEun-Sang">
        <img src="https://avatars.githubusercontent.com/u/128155681?v=4" width="100px;" alt="ChoEun-Sang"/><br />
        <sub><b>👑 조은상</b><br></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/pildrums">
        <img src="https://avatars.githubusercontent.com/u/77140851?v=4" width="90px;" alt="Pildrum"/><br />
        <sub><b>김필진</b><br></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/cuconveniencestore">
        <img src="https://avatars.githubusercontent.com/u/125563995?v=4" width="100px;" alt="Siwoo Lee"/><br />
        <sub><b>이시우</b><br></sub>
      </a>
    </td>
     <td align="center">
      <a href="https://github.com/Tteum00">
        <img src="https://avatars.githubusercontent.com/u/128392118?v=4" width="100px;" alt="Jung SeungWon"/><br />
        <sub><b>정승원</b><br></sub>
      </a>
    </td>
  </tr>
 <tr>
    <td align="center">
        <sub><b>- 관리자 페이지</b><br></sub>
        <sub><b>- 프론트엔드 팀장</b><br></sub>
        <sub><b>- README 및 프로젝트 관련 서류 담당</b><br></sub>
    </td>
    <td align="center">
        <sub><b>- Auth페이지 / 관리자페이지</b><br></sub>
        <sub><b>- 프로젝트 리더</b><br></sub>
        <sub><b>- Git Management</b><br></sub>
        <sub><b>- 와이어프레임 담당</b><br></sub>
    </td>
    <td align="center">
        <sub><b>- 사원 페이지</b><br></sub>
        <sub><b>- 템플릿 디자인 담당</b><br></sub>
    </td>
     <td align="center">
        <sub><b>- 공통 컴포넌트(input, button, 캘린더) / 사원 페이지</b><br></sub>
        <sub><b>- API Document 담당</b><br></sub>
    </td>
  </tr>

</table>

<br />
<br />

# 사용기술 및 개발환경

### Development

<p>
<img src="https://img.shields.io/badge/Next.JS-000000?style=flat&logo=nextdotjs&logoColor=white" />
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=TypeScript&logoColor=white" />
<img src="https://img.shields.io/badge/scss-DB7093?style=flat&logo=sass&logoColor=white" />
<img src="https://img.shields.io/badge/axios-5A29E4?style=flat&logo=axios&logoColor=white" />
<img src="https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white" />
</p>

<br />
<br />

## API 사용법

모든 API 요청(Request) `headers`에 아래 정보가 꼭 포함돼야 합니다!
`username`은 `KDT5_TeamX`와 같이 본명 혹은 팀 이름을 포함해야 합니다!
확인할 수 없는 사용자나 팀의 DB 정보는 임의로 삭제될 수 있습니다!

```json
{
  "content-type": "application/json"
}
```

<hr />

## 인증

'인증' 관련 API는 모두 일반 사용자 전용입니다.

### 회원가입

사용자가 `username`에 종속되어 회원가입합니다.

- 사용자 비밀번호는 암호화해 저장합니다.(관리자는 확인할 수 없습니다!)

```curl
curl http://54.79.60.180:8080/api/register
  \ -X 'POST'
```

요청 데이터 타입 및 예시:

```ts
interface RequestBody {
  email: string; // 사용자 아이디 (필수!)
  password: string; // 사용자 비밀번호, 8자 이상 (필수!)
  empName: string; // 사용자 이름, 20자 이하 (필수!)
  position?: string; // 직급 (선택 사항!)
}
```

```json
{
  "email": "aaa@gmail.com",
  "password": "********",
  "empName": "team1",
  "position": "팀장"
}
```

응답 데이터 타입 및 예시:

```ts
interface ResponseValue {
  success: boolean;
  code: number;
  message: string;
}
```

```json
{
  "success": false,
  "code": -1,
  "message": "이메일이 중복되었습니다."
}
```

### 로그인

- 발급된 `accessToken`은 30분 후 만료됩니다.(만료 후 다시 로그인 필요)

```curl
curl http://54.79.60.180:8080/api/login
  \ -X 'POST'
```

요청 데이터 타입 및 예시:

```ts
interface RequestBody {
  email: string; // 사용자 아이디 (필수!)
  password: string; // 사용자 비밀번호 (필수!)
}
```

```json
{
  "email": "aaa@gmail.com",
  "password": "********"
}
```

응답 데이터 타입 및 예시:

```ts
interface ResponseValue {
  Authorization: string;
  Authorization-refresh: string;
}
```

```json
{
  "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjlQS3I...(생략)",
  "Authorization-refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjlQS3I...(생략)"
}
```

<hr />

### 요청관리 - 결재처리

- 관리자 전용 API 입니다.

```curl
curl http://54.79.60.180:8080/api/admin/order/update
  \ -X 'POST'
  \ -H 'Authorization: Bearer <token>'
  \ -H 'Authorization-refresh : Bearer <token>'
```

요청 데이터 타입 및 예시:

```ts
interface RequestBody {
  id: number;
  status: string;
}
```

```json
{
     "id" : 1
     "status" : "승인"
}
```

응답 데이터 타입 및 예시:

- 없음

### 요청관리 리스트 조회 - 결재대기

- 관리자 전용 API 입니다.

```curl
curl http://54.79.60.180:8080/api/admin/order/list/status/wait?page=${page}&size=${size}
  \ -X 'GET'
  \ -H 'Authorization: Bearer <token>'
  \ -H 'Authorization-refresh : Bearer <token>'
```

요청 데이터 타입 및 예시:

- 없음

응답 데이터 타입 및 예시:

```ts
interface ResponseValue {
  content: ContentData[];
  pageable: {
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
  };
  totalElements: number;
  totalPages: number;
  last: boolean;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  size: number;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}

interface ContentData {
  id: number;
  empName: string;
  createdAt: string;
  orderType: string;
  status: string;
  startDate: string;
  endDate: string;
  reason: string;
  category: string;
  etc: string;
}
```

```json
{
  "content": [
    {
      "id": 1,
      "empName": "박지훈",
      "createdAt": "2023-07-15",
      "orderType": "연차",
      "status": "대기",
      "startDate": "2023-07-15",
      "endDate": "2023-07-20",
      "reason": "이유",
      "category": "경조사",
      "etc": "기타"
    }
  ],
  "pageable": {
    "sort": {
      "empty": true,
      "sorted": false,
      "unsorted": true
    },
    "offset": 0,
    "pageNumber": 0,
    "pageSize": 4,
    "paged": true,
    "unpaged": false
  },
  "totalElements": 22,
  "totalPages": 6,
  "last": false,
  "number": 0,
  "sort": {
    "empty": true,
    "sorted": false,
    "unsorted": true
  },
  "size": 4,
  "numberOfElements": 4,
  "first": true,
  "empty": false
}
```

### 요청관리 리스트 조회 - 결재완료

- 관리자 전용 API 입니다.

```curl
curl http://54.79.60.180:8080/api/admin/order/list/status/complete?page=${page}&size=${size}
  \ -X 'GET'
  \ -H 'Authorization: Bearer <token>'
  \ -H 'Authorization-refresh : Bearer <token>'
```

요청 데이터 타입 및 예시:

- 없음

응답 데이터 타입 및 예시:

```ts
interface ResponseValue {
  content: {
    id: number;
    empName: string;
    createdAt: string;
    orderType: string;
    status: string;
    startDate: string;
    endDate: string;
    reason: string;
    category: string;
    etc: string;
  }[];
  pageable: {
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
  };
  totalElements: number;
  totalPages: number;
  last: boolean;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  size: number;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}
```

```json
{
  "content": [
    {
      "id": 1,
      "empName": "박지훈",
      "createdAt": "2023-07-15",
      "orderType": "연차",
      "status": "승인",
      "startDate": "2023-07-15",
      "endDate": "2023-07-20",
      "reason": "이유",
      "category": "경조사",
      "etc": "기타"
    }
  ],
  "pageable": {
    "sort": {
      "empty": true,
      "sorted": false,
      "unsorted": true
    },
    "offset": 0,
    "pageNumber": 0,
    "pageSize": 4,
    "paged": true,
    "unpaged": false
  },
  "totalElements": 22,
  "totalPages": 6,
  "last": false,
  "number": 0,
  "sort": {
    "empty": true,
    "sorted": false,
    "unsorted": true
  },
  "size": 4,
  "numberOfElements": 4,
  "first": true,
  "empty": false
}
```

### 월별 사용대장 - 당직 조회

- 관리자 전용 API 입니다.

```curl
curl http://54.79.60.180:8080/api/admin/order/list/monthly/duty?year=${year}
  \ -X 'GET'
  \ -H 'Authorization: Bearer <token>'
  \ -H 'Authorization-refresh : Bearer <token>'
```

요청 데이터 타입 및 예시:

- 없음

응답 데이터 타입 및 예시:

```ts
type TDutyData = IDutyItem[];

interface IDutyItem {
  id: number;
  empName: string;
  empNo: number;
  month: {
    jan: number;
    feb: number;
    mar: number;
    apr: number;
    may: number;
    jun: number;
    jul: number;
    aug: number;
    sept: number;
    oct: number;
    nov: number;
    dec: number;
    totalCount: number;
  };
  total: number;
}
```

```json
[
  {
    "id": 1,
    "empName": "박지훈",
    "empNo": 20200001,
    "month": {
      "jan": 0,
      "feb": 0,
      "mar": 0,
      "apr": 0,
      "may": 0,
      "jun": 0,
      "jul": 6,
      "aug": 0,
      "sept": 0,
      "oct": 0,
      "nov": 0,
      "dec": 0,
      "totalCount": 6
    },
    "total": 6
  }
]
```

### 월별 사용대장 - 연차 조회

- 관리자 전용 API 입니다.

```curl
curl http://54.79.60.180:8080/api/admin/order/list/monthly/annual?year=${year}
  \ -X 'GET'
  \ -H 'Authorization: Bearer <token>'
  \ -H 'Authorization-refresh : Bearer <token>'
```

요청 데이터 타입 및 예시:

- 없음

응답 데이터 타입 및 예시:

```ts
type TAnnualData = IDutyItem[];

interface IAnnualItem {
  id: number;
  empName: string;
  empNo: number;
  month: {
    jan: number;
    feb: number;
    mar: number;
    apr: number;
    may: number;
    jun: number;
    jul: number;
    aug: number;
    sept: number;
    oct: number;
    nov: number;
    dec: number;
    totalCount: number;
  };
  total: number;
}
```

```json
[
  {
    "id": 1,
    "empName": "박지훈",
    "empNo": 20200001,
    "month": {
      "jan": 0,
      "feb": 0,
      "mar": 0,
      "apr": 0,
      "may": 0,
      "jun": 0,
      "jul": 6,
      "aug": 0,
      "sept": 0,
      "oct": 0,
      "nov": 0,
      "dec": 0,
      "totalCount": 6
    },
    "total": 6
  }
]
```

### 사원조회 - 사원명

- 관리자 전용 API 입니다.

```curl
curl http://54.79.60.180:8080/api/admin/user/search?name=${name}
  \ -X 'GET'
  \ -H 'Authorization: Bearer <token>'
  \ -H 'Authorization-refresh : Bearer <token>'
```

요청 데이터 타입 및 예시:

- 없음

응답 데이터 타입 및 예시:

```ts
interface ISearch {
  id: number;
  empNo: number;
  empName: string;
  createdAt: string;
}
```

```json
{
  "id": 4,
  "empNo": 20210004,
  "empName": "홍길동",
  "createdAt": "2023-08-03"
}
```

### 사원조회 - 사원번호

- 관리자 전용 API 입니다.

```curl
curl http://54.79.60.180:8080/api/admin/user/search?empno=${empno}
  \ -X 'GET'
  \ -H 'Authorization: Bearer <token>'
  \ -H 'Authorization-refresh : Bearer <token>'
```

요청 데이터 타입 및 예시:

- 없음

응답 데이터 타입 및 예시:

```ts
interface ISearch {
  id: number;
  empNo: number;
  empName: string;
  createdAt: string;
}
```

```json
{
  "id": 4,
  "empNo": 20210004,
  "empName": "홍길동",
  "createdAt": "2023-08-03"
}
```

### 사원조회 - 연차/당직 내역

- 관리자 전용 API 입니다.

```curl
curl http://54.79.60.180:8080/api/admin/order/list?user=${user}&page=${page}&size=${size}
  \ -X 'GET'
  \ -H 'Authorization: Bearer <token>'
  \ -H 'Authorization-refresh : Bearer <token>'
```

요청 데이터 타입 및 예시:

- 없음

응답 데이터 타입 및 예시:

```ts
interface ResponseValue {
  content: {
    id: number;
    empName: string;
    createdAt: string;
    orderType: string;
    status: string;
    startDate: string;
    endDate: string;
    reason: string;
    category: string;
    etc: string;
  }[];
  pageable: {
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
  };
  totalElements: number;
  totalPages: number;
  last: boolean;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  size: number;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}
```

```json
{
  "content": [
    {
      "id": 1,
      "empName": "박지훈",
      "createdAt": "2023-07-15",
      "orderType": "연차",
      "status": "승인",
      "startDate": "2023-07-15",
      "endDate": "2023-07-20",
      "reason": "이유",
      "category": "경조사",
      "etc": "기타"
    }
  ],
  "pageable": {
    "sort": {
      "empty": true,
      "sorted": false,
      "unsorted": true
    },
    "offset": 0,
    "pageNumber": 0,
    "pageSize": 4,
    "paged": true,
    "unpaged": false
  },
  "totalElements": 22,
  "totalPages": 6,
  "last": false,
  "number": 0,
  "sort": {
    "empty": true,
    "sorted": false,
    "unsorted": true
  },
  "size": 4,
  "numberOfElements": 4,
  "first": true,
  "empty": false
}
```
