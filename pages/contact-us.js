import React from "react";
import Contact from "../components/Contact/Contact";
import Message from "../components/Contact/Message";
import Layout from "../components/Layout";

function ContactPage() {
  return (
    <Layout>
      <Contact />
      <Message />
    </Layout>
  );
}

export default ContactPage;
