import React from "react";

const ContactComp = ({ title, name, contact }) => {
  return (
    <div className="w-96 p-8 bg-[#B0A076] rounded-xl shadow-md text-center texttitle">
      <div className="text-3xl text-[#e0d3ac] mb-4">{title}</div>
      <div className="text-3xl text-black mb-2">{name}</div>
      <div className="text-2xl text-black">{contact}</div>
    </div>
  );
};

export default ContactComp;
