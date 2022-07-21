import Layout from "../components/Layout";
import ClientsLogin from "../components/TryDemo/ClientsLogin";
import MobileApp from "../components/TryDemo/MobileApp";

const pageDetails = {
  title: "Try Our Demo",
  description: "Try School management system demo",
  keywords: "try school management system demo",
};

function DemoPage() {
  return (
    <Layout pageDetails={pageDetails}>
      <ClientsLogin />
      <MobileApp />
    </Layout>
  );
}

export default DemoPage;
