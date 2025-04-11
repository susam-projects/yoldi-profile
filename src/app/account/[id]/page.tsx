import Link from "next/link";
import { FC } from "react";

interface IAccountPageProps {
  params: Promise<{ id: string }>;
}

const AccountPage: FC<IAccountPageProps> = async ({ params }) => {
  const { id } = await params;

  console.log(id);

  return (
    <div>
      <h1 style={{ marginBottom: "40px" }}>Account page</h1>
      <p>
        <Link href="/account/edit/1">Edit account</Link>
      </p>
      <p>
        <Link href="/account/list">Account list</Link>
      </p>
      <p style={{ marginTop: "24px" }}>
        <Link href="/login">Log Out</Link>
      </p>
    </div>
  );
};

export default AccountPage;
