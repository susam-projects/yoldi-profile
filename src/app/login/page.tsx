import Link from "next/link";

const LoginPage = () => {
  return (
    <div>
      <h1 style={{ marginBottom: "40px" }}>Login page</h1>
      <p>
        <Link href="/register">Register</Link>
      </p>
      <p>
        <Link href="/account/1">Enter</Link>
      </p>
    </div>
  );
};

export default LoginPage;
