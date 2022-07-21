import React from "react";
import Contact from "../components/Contact/Contact";
import Message from "../components/Contact/Message";
import Layout from "../components/Layout";

const pageDetails = {
  title: "Contact Us",
  description: "Contact School management system",
  keywords: "contact school management system",
};

function ContactPage() {
  return (
    <Layout pageDetails={pageDetails}>
      <Contact />
      <Message />
    </Layout>
  );
}

export default ContactPage;
