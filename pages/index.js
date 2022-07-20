import Layout from "../components/Layout";
import Banner from "../components/Home/Banner";
import ChooseUs from "../components/Home/ChooseUs";
import Description from "../components/Home/Description";
import Services from "../components/Home/Services";
import Quote from "../components/Home/Quote";
import Efficient from "../components/Home/Efficient";
import ContactUs from "../components/Home/ContactUs";

export default function Home() {
  return (
    <Layout>
      <Banner />
      <Description />
      <ChooseUs />
      <Services />
      <Quote />
      <Efficient />
      <ContactUs />
    </Layout>
  );
}
