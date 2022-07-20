import React from "react";
import Link from "next/link";
import { benefitsData } from "../data/benefitsData";

function Benefits() {
  return (
    <div className="container pt-10 pb-16">
      <div className="grid grid-cols-3 gap-7">
        {benefitsData.map((item) => (
          <div key={item.id} className="space-y-10">
            <h3 className="text-xl font-oswald ">{item.title}</h3>
            <p className="text-sm leading-loose">{item.text}</p>
            <Link href={item.link} passHref>
              <p className="text-custom-green cursor-pointer">
                Take a Tour {" >"}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Benefits;
