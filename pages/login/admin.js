import Layout from "../../components/Layout";
import Login from "../../components/Login";

function AdminLoginPage() {
  return (
    <Layout>
      <Login client="admin" />
    </Layout>
  );
}

export default AdminLoginPage;
