import client from "./client";

export const getTutorial = () => {
  const result = client.get(
    // `API 주소 쿼리문만 입력`
    `api/...`,
  );
  return result;
};
