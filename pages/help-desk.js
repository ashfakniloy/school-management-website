import ContactUs from "../components/HelpDesk/ContactUs";
import HelpOptions from "../components/HelpDesk/HelpOptions";
import Layout from "../components/Layout";

const pageDetails = {
  title: "Help Desk",
  description: "School management system help desk",
  keywords: "school management system help desk",
};

function HelpdeskPage() {
  return (
    <Layout pageDetails={pageDetails}>
      <HelpOptions />
      <ContactUs />
    </Layout>
  );
}

export default HelpdeskPage;
