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
      <div className="min-h-screen bg-cover bg-center bg-no-repeat items-center justify-center">
        <div className="body3 w-full flex items-center justify-center">
          <div className="texthead text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-[0.20em] text-left w-full pl-4 sm:pl-8 md:pl-14">
            Contact Us
          </div>
        </div>
      </div>

      {/* Subheading */}
      <div className="text-center text-3xl sm:text-4xl md:text-5xl mt-8 sm:mt-10 md:mt-12 texttitle">
        Student Coordinators
      </div>

      {/* Image below the subheading */}
      <div className="flex items-center justify-center mt-4">
        <img
          src={borderImage}
          alt="Border"
          className="max-w-[200px] sm:max-w-[300px] md:max-w-[400px] h-auto"
        />
      </div>

      {/* Contact list */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 max-w-7xl px-4 sm:px-6 lg:px-8">
          {contacts.map((contact, index) => (
            <ContactComp
              key={index}
              title={contact.title}
              name={contact.name}
              contact={contact.contact}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
