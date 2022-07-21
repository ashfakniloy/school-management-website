import Layout from "../../components/Layout";
import Login from "../../components/Login";

const pageDetails = {
  title: "Guardian Login",
  description: "School management system guardian login",
  keywords: "school management system guardian login",
};

function GuardianLoginPage() {
  return (
    <Layout pageDetails={pageDetails}>
      <Login client="guardian" />
    </Layout>
  );
}

export default GuardianLoginPage;
