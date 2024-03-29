import Image from "next/image";

function Quote() {
  return (
    <div className="bg-custom-green2">
      <div className="container py-10 lg:py-20 lg:px-20 text-center space-y-3 lg:space-y-7">
        <Image
          src="/images/icons/quote.png"
          alt="quote"
          width={73}
          height={61}
          className="scale-75 lg:scale-100"
        />
        <h1 className="text-white text-[26px] lg:text-[42px] font-oswald font-light leading-tight">
          Web School ERP provides an easy to use interface with initiative
          functionalities and controls. Exciting range of features and
          flexibility for customization is that what makes this school software
          unique and spectacular.
        </h1>
        <h4 className="text-custom-green3 text-[23px] font-semibold font-oswald">
          - Mr. Amit (SKA EDIFY)
        </h4>
      </div>
    </div>
  );
}

export default Quote;
