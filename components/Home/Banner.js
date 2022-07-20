import Image from "next/image";
import Link from "next/link";

function Banner() {
  return (
    <div className="my-5 pt-[60px] mx-[226px]">
      <div className="flex justify-between items-center gap-8">
        <div className="space-y-8 ">
          <h1 className="text-[55px] font-medium font-oswald text-custom-green uppercase">
            WEB-SCHOOL ERP
          </h1>
          <h3 className="pt-4 text-3xl font-light font-oswald">
            Institution Management Software System
          </h3>
          <p className="max-w-[360px] text-custom-gray">
            Say hello to better institution management and E-Learning platform.
          </p>
          <Link href="/contact-us" passHref>
            <button
              type="button"
              className="px-5 py-3 border-2 border-custom-green rounded text-custom-green text-sm hover:bg-gray-100 transition duration-300"
            >
              Contact Us
            </button>
          </Link>
        </div>
        <div className="w-[752px] h-[553px] relative">
          <Image
            src="/images/school-banner.png"
            alt="school banner"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
