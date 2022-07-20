import Link from "next/link";

function Footer() {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container">
        <div className="flex justify-between">
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
              <p className="">E-Mail: support@web-school.in</p>
              <p className="">Web: https://web-school.in</p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10 border-t border-slate-200" />
      <div className="container flex justify-between">
        <p className="text-sm">
          &copy; 2022 Web School ERP. All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
