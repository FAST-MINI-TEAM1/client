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