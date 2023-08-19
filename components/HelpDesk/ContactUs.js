// import Link from "next/link";

// function ContactUs() {
//   return (
//     <div className="bg-custom-green2">
//       <div className="py-[100px] text-white flex justify-center items-center gap-8">
//         <h2 className="text-[42px]  font-oswald font-light">
//           Call for help now! <span className="font-bold">+88071234567</span>
//         </h2>
//         <Link href="/contact-us" passHref>
//           <button
//             type="button"
//             className="px-5 py-3 border-2 border-white rounded  text-sm hover:text-custom-green2 hover:bg-white transition duration-300"
//           >
//             Contact Us
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default ContactUs;

import Link from "next/link";

function ContactUs() {
  return (
    <div className="bg-custom-green2 text-white">
      <div className="mx-3 lg:mx-0 py-14 lg:py-20 flex justify-between lg:justify-center items-center lg:gap-8">
        <h2 className="text-2xl flex-1 lg:flex-none lg:text-3xl  font-oswald font-light">
          Call for help now! <span className="font-bold">+88071234567</span>
        </h2>
        <div className="">
          <Link href="/contact-us" passHref>
            <button
              type="button"
              className=" px-5 py-3 border-2 border-white rounded text-white text-sm hover:bg-gray-100 transition duration-300"
            >
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
