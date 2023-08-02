import AuthForm from "@components/auth/AuthForm";
import AuthTemplate from "@components/auth/AuthTemplate";
import { memo } from "react";

function RegsiterPage() {
  return (
    <AuthTemplate>
      <AuthForm type="register" />
    </AuthTemplate>
  );
}

export default memo(RegsiterPage);
