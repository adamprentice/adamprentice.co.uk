import React from "react";

const Mentoring = () => {
  return (
    <section
      id="mentoring"
      className="py-20 px-4 bg-gray-100 text-center flex flex-col justify-center"
    >
      <h2 className="text-4xl font-bold mb-4">Mentoring</h2>
      <p className="text-lg">Information about mentoring services.</p>
      <div className="adpList items-center ">
        <iframe
          src="https://adplist.org/widgets/booking?src=adam-prentice"
          title=""
          width="100%"
          height="100%"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Mentoring;
