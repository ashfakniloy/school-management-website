import Image from "next/image";
import Link from "next/link";
import { demoClients } from "../data/demoClients";

function ClientsLogin() {
  return (
    <div className="container py-5 lg:py-10">
      <div className="text-center space-y-5">
        <p className=" text-custom-gray2">
          ENVISIONED FOR THE DIGITAL SCHOOL REVOLUTION!!
        </p>
        <h1 className="text-[28px] lg:text-[42px] text-custom-green2 font-oswald font-light leading-8 lg:leading-0">
          Web-School ERP V 5.0 – The Best School Management System.
        </h1>
        <p className="lg:pt-2 text-custom-gray2 text-sm leading-relaxed">
          The demo version gives you clear insights regarding different modules
          of the software that has incredible reach to the enormous task of the
          educational sector. In fact a real time access to software is an open
          opportunity to understand the creamy layer of features and get
          convinced with a closer access.
        </p>
      </div>

      <div className="my-6 border-t border-slate-200" />

      <div className="mt-10 mb-4 grid grid-cols-1 lg:grid-cols-4">
        {demoClients.map((client) => (
          <div
            key={client.id}
            className="py-5 text-center border-r border-slate-200 last:border-r-0"
          >
            <Image
              src={client.icon}
              alt={client.name}
              width={100}
              height={100}
            />
            <h4 className="my-4 mx-5 py-4 text-xl font-oswald tracking-widest font-bold border-y border-slate-200">
              {client.name}
            </h4>
            <Link href={client.link} passHref>
              <div className="px-3 py-3 mx-10 border-2 border-custom-green rounded text-sm text-custom-green hover:bg-gray-100 transition duration-300 cursor-pointer">
                Login as {client.button}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClientsLogin;
