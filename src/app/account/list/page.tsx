import Link from "next/link";

const AccountListPage = () => {
  return (
    <div>
      <h1 style={{ marginBottom: "40px" }}>Account list page</h1>
      <p>
        <Link href="/account/1">Account 1</Link>
      </p>
      <p>
        <Link href="/account/1">Account 2</Link>
      </p>
      <p>
        <Link href="/account/1">Account 3</Link>
      </p>
      <p style={{ marginTop: "24px" }}>
        <Link href="/login">Log Out</Link>
      </p>
    </div>
  );
};

export default AccountListPage;
