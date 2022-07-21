import Layout from "../components/Layout";
import ClientsLogin from "../components/TryDemo/ClientsLogin";
import MobileApp from "../components/TryDemo/MobileApp";

function DemoPage() {
  return (
    <Layout>
      <ClientsLogin />
      <MobileApp />
    </Layout>
  );
}

export default DemoPage;
