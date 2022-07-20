import Link from "next/link";

function ContactUs() {
  return (
    <div className="py-20 flex justify-center items-center gap-8">
      <h2 className="text-3xl text-custom-green4 font-oswald font-light">
        Call for help now! <span className="font-bold">+88071234567</span>
      </h2>
      <Link href="/contact-us" passHref>
        <button
          type="button"
          className="px-5 py-3 border-2 border-custom-green rounded text-custom-green text-sm hover:bg-gray-100 transition duration-300"
        >
          Contact Us
        </button>
      </Link>
    </div>
  );
}

export default ContactUs;
