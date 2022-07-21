import Layout from "../../components/Layout";
import Login from "../../components/Login";

const pageDetails = {
  title: "Admin Login",
  description: "School management system admin login",
  keywords: "school management system admin login",
};

function AdminLoginPage() {
  return (
    <Layout pageDetails={pageDetails}>
      <Login client="admin" />
    </Layout>
  );
}

export default AdminLoginPage;
