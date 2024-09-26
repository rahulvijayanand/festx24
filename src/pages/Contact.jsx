import React from "react";
import ContactComp from "../components/ContactComp";
import borderImage from "../assets/border.png"; // Adjust the path as necessary

function Contact() {
  const contacts = [
    { title: "Chairman", name: "Tharun Raj R G", contact: "8072929254" },
    { title: "Vice Chairman", name: "John Doe", contact: "8123456789" },
    { title: "Secretary", name: "Jane Smith", contact: "9123456789" },
    { title: "Treasurer", name: "Alex Brown", contact: "8323456789" },
    { title: "Coordinator", name: "Lisa White", contact: "8523456789" },
    { title: "Coordinator", name: "Mike Johnson", contact: "8623456789" },
  ];

  return (
    <div>
      {/* Header section */}
      <div className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center lg:justify-start body3">
        <div className="w-full lg:w-auto lg:pl-12">
          <div className="texthead text-5xl sm:text-7xl md:text-8xl tracking-[0.20em] text-left lg:text-9xl w-full p-4">
            Contact Us
          </div>
        </div>
      </div>

      {/* Subheading */}
      <div className="text-center text-2xl sm:text-3xl md:text-4xl mt-6 texttitle">
        Student Coordinators
      </div>

      {/* Image below the subheading */}
      <div className="flex items-center justify-center mt-2">
        <img
          src={borderImage}
          alt="Border"
          className="w-full max-w-[150px] sm:max-w-[200px] md:max-w-[250px] h-auto"
        />
      </div>

      {/* Contact list */}
      <div className="flex items-center justify-center mt-6 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl px-4">
          {contacts.map((contact, index) => (
            <ContactComp
              key={index}
              title={contact.title}
              name={contact.name}
              contact={contact.contact}
              className="bg-gray-200 p-4 rounded-lg text-center"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
