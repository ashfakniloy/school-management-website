// import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

function Layout({ children, pageDetails }) {
  // const { title, description, keywords } = pageDetails;

  return (
    <div>
      {/* <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head> */}

      <div>
        <Header />

        {children}

        <ScrollToTop />

        <Footer />
      </div>
    </div>
  );
}

Layout.defaultProps = {
  title: "School Management Website",
  description: "School Management Website",
  keywords: "School Management Website",
};

export default Layout;
