import Image from "next/image";
import { helpOptions } from "../data/helpOptions";

function HelpOptions() {
  return (
    <div className="bg-[url('/images/help_desk.jpg')] bg-fixed w-full bg-cover relative">
      <div className="container py-20 flex flex-col lg:flex-row lg:justify-between gap-7">
        {helpOptions.map((item) => (
          <div key={item.id} className="bg-white pt-16 pb-14 px-10 text-center">
            <div className="cursor-pointer space-y-4">
              <Image src={item.icon} alt="icon" width={100} height={100} />
              <h4 className="text-[22px] font-oswald font-light">
                {item.title}
              </h4>
              <p className="text-custom-gray3 text-sm leading-loose">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HelpOptions;
