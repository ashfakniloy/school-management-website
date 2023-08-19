import Image from "next/image";
import { servicesData } from "../data/servicesData";

function Services() {
  return (
    <div className="bg-gray-100 mt-20">
      <div className="container pt-14 pb-24">
        <h3 className="font-oswald font-light text-2xl lg:text-3xl text-center">
          See what we can do for your Institution !
        </h3>

        <div className="mt-8 lg:mt-14 grid grid-cols-1 lg:grid-cols-4">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="px-10 py-10 space-y-5 text-center bg-white border border-slate-50 hover:border-white hover:scale-[1.02] hover:shadow-xl transition duration-300"
            >
              <Image src={service.icon} alt="icon" width={118} height={142} />
              <h3 className="text-[22px] font-oswald font-light">
                {service.title}
              </h3>
              <p className="text-custom-gray3 text-sm text-justify leading-loose">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
