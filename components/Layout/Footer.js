import Link from "next/link";

function Footer() {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container">
        <div className="flex flex-wrap justify-between gap-7 lg:gap-0">
          <div className="">
            <h3 className="text-[22px] font-oswald font-light mb-5">
              Quick links
            </h3>
            <div className="flex flex-col text-[14px] gap-1">
              <Link href="#">Try Our Demo</Link>
              <Link href="#">Download Mobile App</Link>
              <Link href="#">Privacy Policy</Link>
            </div>
          </div>
          <div className="">
            <h3 className="text-[22px] font-oswald font-light mb-5">
              Our Product
            </h3>
            <div className="flex flex-col text-[14px] gap-1">
              <Link href="#">Core & Premium Modules</Link>
              <Link href="#">Features</Link>
              <Link href="#">Partner Program</Link>
              <Link href="#">Version History</Link>
            </div>
          </div>
          <div className="">
            <h3 className="text-[22px] font-oswald font-light mb-5">
              Contact Info
            </h3>
            <div className="flex flex-col gap-1 text-[14px] font-bold">
              <p className="">
                8th Floor, Salamabad Complex <br /> Shewrapara, Dhaka <br />
                Bangladesh
              </p>
              <p className="">Phone: +88071234567</p>
              <p className="">E-Mail: support@web-school-erp.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-5 lg:my-10 border-t border-slate-200" />
      <div className="container flex flex-col lg:flex-row gap-2 lg:gap-0 justify-between items-center text-sm">
        <p className="">&copy; 2022 Web School ERP. All Rights Reserved</p>
        <p>
          <span className="font-semibold mr-2">Developed by:</span>
          <a
            href="https://niloy.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:text-blue-700 underline transition-colors duration-200"
          >
            Ashfak Ahmed Niloy
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
