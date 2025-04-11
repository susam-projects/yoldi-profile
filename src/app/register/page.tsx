import Link from "next/link";

const RegisterPage = () => {
  return (
    <div>
      <h1 style={{ marginBottom: "40px" }}>Register page</h1>
      <Link href="/login">Login</Link>
    </div>
  );
};

export default RegisterPage;
