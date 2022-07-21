import React from "react";
import Layout from "../components/Layout";

const pageDetails = {
  title: "Our Features",
  description: "School management system features",
  keywords: "school management system features",
};

function FeaturesPage() {
  return (
    <Layout pageDetails={pageDetails}>
      <div className="container py-10">features</div>
    </Layout>
  );
}

export default FeaturesPage;
