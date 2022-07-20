import Image from "next/image";
import { chooseUsData } from "../data/chooseUsData";

function ChooseUs() {
  return (
    <div className="container my-10 flex justify-between items-center gap-5">
      <div className="">
        <h1 className="text-[42px] font-oswald font-light leading-tight">
          3 main reasons explaining <br />
          <span className="text-custom-green">why to choose us</span>
        </h1>

        <div className="mt-10 flex gap-5">
          {chooseUsData.map((item) => (
            <div className="space-y-5" key={item.id}>
              <Image src={item.icon} alt="icon" width={100} height={100} />
              <h3 className="text-[22px] font-oswald font-light">
                {item.title}
              </h3>
              <p className="text-custom-gray">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="self-end">
        <Image
          src="/images/tablet_dashboard.png"
          alt="tablet"
          width={2000}
          height={1293}
        />
      </div>
    </div>
  );
}

export default ChooseUs;
