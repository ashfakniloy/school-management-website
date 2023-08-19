function Buttonhamburger({ toggle, setToggle }) {
  const hamburgerLine = `h-[3px] w-6 my-[2px] rounded-full bg-green-600 transition ease transform duration-300`;

  return (
    <button
      className="lg:hidden flex flex-col justify-center items-center"
      aria-label="toggle"
      onClick={() => setToggle(!toggle)}
    >
      <div
        className={`${hamburgerLine} ${
          toggle ? "rotate-45 translate-y-[7px] " : ""
        }`}
      />
      <div className={`${hamburgerLine} ${toggle ? "opacity-0" : ""}`} />
      <div
        className={`${hamburgerLine} ${
          toggle ? "-rotate-45 -translate-y-[7px] " : ""
        }`}
      />
    </button>
  );
}

export default Buttonhamburger;
