import AuthForm from "@components/auth/AuthForm";
import AuthTemplate from "@components/auth/AuthTemplate";

function RegsiterPage() {
  return (
    <AuthTemplate>
      <AuthForm type="register" />
    </AuthTemplate>
  );
}

export default RegsiterPage;
