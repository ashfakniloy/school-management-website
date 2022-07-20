import { efficientData } from "../data/efficientData";

function Efficient() {
  return (
    <div className="bg-gray-100">
      <div className="container py-20">
        <h2 className="text-3xl font-oswald font-light text-center">
          Interactive Academic Administration Made More Efficient
        </h2>

        <div className="mt-14 grid grid-cols-3 gap-2">
          {efficientData.map((item) => (
            <div key={item.id} className="px-6 py-10 space-y-5">
              <h3 className="text-[22px] text-custom-gray font-oswald">
                {item.title}
              </h3>
              <p className="text-custom-gray text-justify leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Efficient;
