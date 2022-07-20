import Link from "next/link";

function ContactUs() {
  return (
    <div className="bg-custom-green2">
      <div className="py-[100px] text-white flex justify-center items-center gap-8">
        <h2 className="text-[42px]  font-oswald font-light">
          Call for help now! <span className="font-bold">+88071234567</span>
        </h2>
        <Link href="/contact-us" passHref>
          <button
            type="button"
            className="px-5 py-3 border-2 border-white rounded  text-sm hover:text-custom-green2 hover:bg-white transition duration-300"
          >
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ContactUs;
