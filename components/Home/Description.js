import Image from "next/image";
import { descriptionData } from "../data/descriptionData";

function Description() {
  return (
    <div className="container my-14">
      <h1 className="text-[44px] font-light mb-10 font-oswald">
        The{" "}
        <span className="text-custom-green">
          Advanced School Management Software
        </span>{" "}
        for a hassle free{" "}
        <span className="text-custom-green">digital education</span>
      </h1>

      <div className="py-5 border-t border-gray-200 text-center">
        <h1 className="text-[42px] mx-20 leading-tight font-light text-custom-gray2 font-oswald">
          Web School ERP: Powerful & Easy to Use School Management Software for
          Schools & Educational Institutions
        </h1>
      </div>

      <div className="my-10 grid grid-cols-3 gap-y-10">
        {descriptionData.map((description) => (
          <div
            key={description.id}
            className="px-6 py-10 space-y-5 text-center bg-white border border-slate-50 hover:border-white hover:scale-[1.02] hover:shadow-xl transition duration-300"
          >
            <Image src={description.icon} alt="icon" width={100} height={100} />
            <h3 className="text-xl font-oswald">{description.title}</h3>
            <p className="text-custom-gray3 text-sm text-justify leading-loose">
              {description.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Description;
