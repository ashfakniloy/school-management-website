import Image from "next/image";

function MobileApp() {
  return (
    <div className="bg-[url('/images/student-flip.jpg')] bg-fixed w-full bg-cover bg-center relative text-white">
      <div className="absolute bg-black opacity-25 inset-0" />
      <div className="container flex justify-end py-[400px] lg:py-[500px] relative">
        <div className="mx-3 lg:mx-0 lg:max-w-[600px] space-y-5 absolute top-36 lg:top-64">
          <h1 className="text-3xl lg:text-5xl font-oswald font-light">
            We’ll find you the right answers
          </h1>
          <p className="">
            Web School, the integrated software application, developed by the
            brilliant brains can offer you 100% efficiency in running an
            academic institution. If you are ready to let your institution go
            digitized, you should try the package which goes hand-in- hand with
            the latest technologies.
          </p>
          <div className="py-3 flex gap-5">
            <Image
              src="/images/playstore_button.png"
              alt="playstore"
              className="rounded-xl cursor-pointer"
              width={396}
              height={119}
            />
            <Image
              src="/images/appstore_button.png"
              alt="appstore"
              className="rounded-xl cursor-pointer"
              width={396}
              height={119}
            />
          </div>
          <div className="bg-transparent border-2 border-white rounded-xl p-8 ">
            <p className="text-lg mb-1">
              DEMO Login credentials for the Mobile APP
            </p>
            <p className="">School code:999</p>
            <p className="">Username:1DMS1</p>
            <p className="">Password:1DMS1</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileApp;
