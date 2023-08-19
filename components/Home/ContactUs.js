import Link from "next/link";

function ContactUs() {
  return (
    <div className="mx-3 lg:mx-0 py-14 lg:py-20 flex justify-between lg:justify-center items-center lg:gap-8">
      <h2 className="text-2xl flex-1 lg:flex-none lg:text-3xl text-custom-green4 font-oswald font-light">
        Call for help now! <span className="font-bold">+88071234567</span>
      </h2>
      <div className="">
        <Link href="/contact-us" passHref>
          <button
            type="button"
            className=" px-5 py-3 border-2 border-custom-green rounded text-custom-green text-sm hover:bg-gray-100 transition duration-300"
          >
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ContactUs;
