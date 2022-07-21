import Benefits from "../components/About/Benefits";
import BetterCulture from "../components/About/BetterCulture";
import Layout from "../components/Layout";

const pageDetails = {
  title: "About Us",
  description: "About School management system",
  keywords: "about school management system",
};

function AboutPage() {
  return (
    <Layout pageDetails={pageDetails}>
      <BetterCulture />
      <Benefits />
    </Layout>
  );
}

export default AboutPage;
