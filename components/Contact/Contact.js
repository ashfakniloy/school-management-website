import { BsEnvelope, BsChat, BsNewspaper } from "react-icons/bs";

function Contact() {
  const contacts = [
    {
      id: 1,
      icon: <BsEnvelope className="text-4xl  lg:text-5xl fill-custom-green" />,
      title: "Have any questions?",
      contact: "support@web-school-erp.com",
      link: "mailto:rana.buddy@gmail.com",
    },
    {
      id: 2,
      icon: <BsChat className="text-4xl  lg:text-5xl fill-custom-green" />,
      title: "Call us",
      contact: "+88071234567",
      link: "https://api.whatsapp.com/send?phone=+88071234567",
    },
    {
      id: 3,
      icon: <BsNewspaper className="text-4xl  lg:text-5xl fill-custom-green" />,
      title: "Support",
      contact: "+88071234567",
      link: "https://api.whatsapp.com/send?phone=+88071234567",
    },
  ];

  return (
    <div className="container py-10 lg:py-20">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-0 lg:mr-44">
        {contacts.map((item) => (
          <div key={item.id} className="flex gap-5 lg:gap-9 items-center">
            <div className="">{item.icon}</div>
            <div className="text-custom-gray">
              <h4 className="text-base lg:mb-1">{item.title}</h4>
              <h3 className="text-[20px] lg:text-[22px] font-oswald font-light cursor-pointer">
                <a href={item.link}>{item.contact}</a>
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
