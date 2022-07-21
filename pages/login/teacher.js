import Layout from "../../components/Layout";
import Login from "../../components/Login";

const pageDetails = {
  title: "Teacher Login",
  description: "School management system teacher login",
  keywords: "school management system teacher login",
};

function TeacherLoginPage() {
  return (
    <Layout pageDetails={pageDetails}>
      <Login client="teacher" />
    </Layout>
  );
}

export default TeacherLoginPage;
