import Link from "next/link";

const EditAccountPage = () => {
  return (
    <div>
      <h1 style={{ marginBottom: "40px" }}>Edit account page</h1>
      <Link href="/account/1">View account</Link>
      <p style={{ marginTop: "24px" }}>
        <Link href="/login">Log Out</Link>
      </p>
    </div>
  );
};

export default EditAccountPage;
