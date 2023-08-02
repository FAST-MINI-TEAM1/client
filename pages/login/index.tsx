import AuthForm from "@components/auth/AuthForm";
import AuthTemplate from "@components/auth/AuthTemplate";
import { memo } from "react";

function LoginPage() {
  return (
    <AuthTemplate>
      <AuthForm type="login" />
    </AuthTemplate>
  );
}

export default memo(LoginPage);
