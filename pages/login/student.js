import Layout from "../../components/Layout";
import Login from "../../components/Login";

const pageDetails = {
  title: "Student Login",
  description: "School management system student login",
  keywords: "school management system student login",
};

function StudentLoginPage() {
  return (
    <Layout pageDetails={pageDetails}>
      <Login client="student" />
    </Layout>
  );
}

export default StudentLoginPage;
