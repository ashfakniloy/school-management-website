import Image from "next/image";

function BetterCulture() {
  return (
    <div>
      <div className="container pt-24 pb-16">
        <div className="flex relative">
          <div className="">
            <Image
              src="/images/laptop_dashboard.png"
              alt="laptop_dashboard"
              width={880}
              height={500}
            />
          </div>
          <div className="space-y-6 absolute right-0 top-14 max-w-[600px]">
            <h1 className="text-[44px] font-oswald font-light leading-snug">
              The way we created a better culture in <br />
              <span className="text-custom-green">education</span>
            </h1>
            <p className="leading-relaxed">
              Our comprehensive school management and administration software
              package, Web School, add quality of academic institutions by
              letting efficient monitoring of the day to day progress and
              performance. What made us the best is our features that allow
              parents to stay updated with their kids’ performance levels.
              <br /> <br />
              You could freely download the Community Edition from Web School
              application to experience the advantages and features of our
              application. Being an open source software, you can also make
              changes in the coding for better utility.
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200" />
    </div>
  );
}

export default BetterCulture;
