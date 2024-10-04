import React, { useEffect } from "react";
import ImageCard from "../components/ImageCard"; // Assuming ImageCard component is imported
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

function Event() {
  // Array of image URLs
  const events = [
    {
      imageLink: "https://i.ibb.co/LZX7GWs/anonymous.png",
      name: "Anonymous",
      description: `As Padayappa said, "En vazhi, thani vazhi," this event takes a unique path. This event is centered around games related to Kollywood movies and music.There are three rounds in the event.The event will initially be known as ANONYMOUS. At the conclusion of the event, the winner will declare the name of the event because “Intha ulagam jeichavan sonna kekkum!”.`,
      mode: "Single-player",
      rounds: "5",
      genre: "Adventure",
      link: "https://forms.gle/p4acWkFCFcvPCpPs9",
    },
    {
      imageLink: "https://i.ibb.co/vhctbP6/Auction-Antony.png",
      name: "Auction Antony",
      description: `Welcome to the world of Mark Antony, mamaaae!Get ready for "Auction Antony" an exhilarating event that blendsknowledge with strategy! Dive into a thrilling auction where you'll bid toassemble your dream team of professionals, using cunning and creativity to outsmart your rivals. Navigate unexpected twists and surprises as you make strategic decisions in real time. Join us for this captivating experience and seize the opportunity to claim fantastic prizes. Don’t miss out—register now and unleash your inner mastermind! Auction la ennada fun uh, Fun la ennada Auction uh, Auction na Funuh!! Fun nah Auction uh!`,
      mode: "Multiplayer",
      rounds: "3",
      genre: "Strategy",
      link: "https://forms.gle/rfRZ384MLuJJaM9q6",
    },
    {
      imageLink: "https://i.ibb.co/0jxJWZ6/baashabytes.png",
      name: "Baasha Bytes",
      description: `“Enna vishayam, naan solren!”
Just as Baba said, Baasha Bytes delivers a bold fusion of cinematic beauty and tech innovation. Reimagine the iconic visuals of vintage films in modern UI/UX designs, creating digital experiences that combine nostalgia and innovation.
`,
      mode: "Single-player",
      rounds: "4",
      genre: "Puzzle",
      link: "https://forms.gle/ytLaPeJ613PsaVUt9",
    },
    {
      imageLink: "https://i.ibb.co/1stXLHh/Code-Thandiram.png",
      name: "Code Thandiram",
      description: `Ever dreamt of a coding event that mixes the flair of classic cinema with the thrill of competition? Welcome to our Vintage Coding Event, where each round takes you on a cinematic journey of logic, speed, and creativity. Here’s your chance to be part of a coding saga where the “Heroes are YOU”!`,
      mode: "Co-op",
      rounds: "6",
      genre: "Coding",
      link: "https://forms.gle/HFnjdqVeME2U8GgX6",
    },
    {
      imageLink: "https://i.ibb.co/j6QYrrd/Qunnzio.png",
      name: "Qunnzio",
      description: `Gear up to shuffle, stack, and strategize in our wild Qunn Zio - a UNO based technical quiz event.Will you go for the skip and leave your rival stuck in the past, or hit them with a reverse and turn the tables like it's 1999? So gather your team of techies and channel your inner retro guru. Let time decide the champion!`,
      mode: "Multiplayer",
      rounds: "3",
      genre: "Trivia",
      link: "https://forms.gle/XxNJ7p9ZTKrcBpez9",
    },
    {
      imageLink: "https://i.ibb.co/bH8HdMg/sathura.png",
      name: "Sathura",
      description: `Welcome to Sathura—the land of discourse. Are you ready to solve the mess with the flavor of chess? Just guess—it's a plus if you address—because in this battle, it's all about precision and power! Confused? No more. This is a tech debate event where teams of four go head-to-head. Points aren’t just for opinions, but for how sharply and strategically they’re delivered. Unleash your sharpest insights and declare victory with a bold 'Checkmate!`,
      mode: "Single-player",
      rounds: "5",
      genre: "Adventure",
      link: "https://forms.gle/oUwBQdqiarLaD3sG8",
    },
    {
      imageLink: "https://i.ibb.co/nPXkNnC/Retro-AIArt-Contest.jpg",
      name: "Retro AI Art Contest",
      description: `This is an exciting event where artists and AI enthusiasts
come together to celebrate the retro aesthetic through AI-generated
artwork. Participants use AI tools to create visuals inspired by classic
styles, from vintage sci-fi and pixel art to 80s neon and old-school
cyberpunk. The contest highlights creativity in blending past and future,
as AI transforms nostalgic themes into new artistic interpretations. `,
      mode: "Multiplayer",
      rounds: "2",
      genre: "Art",
      link: "https://forms.gle/sH1x8XYEpyFqQQGS6",
    },
    {
      imageLink: "https://i.ibb.co/vhctbP6/Auction-Antony.png",
      name: "Flashback Fusion",
      description: `The Retro Social Media Marketing Challenge is designed to creatively merge the charm of retro marketing with the innovation of modern technology. In this event, participants are tasked with promoting current-generation technology products that were not invented in the 1980s or 1990s. Participants must produce a 30 seconds to 1 minute marketing video that reflects the marketing techniques of the 1980s and 1990s, evoking nostalgia while showcasing today's advanced products. A key twist in this challenge is that participants must include a famous Tamil cinema dialogue in their videos. This dialogue should be integrated in a way that enhances the promotion of the product, adding a cultural and humorous flavor. The event celebrates creativity, storytelling and the clever blending of retro vibes with futuristic products. Participants have five days prior to the event to conceptualize, record and edit their videos. On the day of the event, all entries will be showcased and the best ones will be awarded based on specific criteria.
`,
      mode: "Multiplayer",
      rounds: "3",
      genre: "Strategy",
      link: "https://forms.gle/WCPGytX5EKSe1yAw5",
    },
  ];

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true, // Allows the carousel to loop infinitely
      align: "start", // Align items to the start
    },
    [AutoScroll({ speed: 2, stopOnInteraction: false })] // Auto-scroll plugin with speed and stop behavior
  );

  // Auto-scroll the page after 2 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.scrollTo({
        top: window.innerHeight, // Scroll down to the height of one viewport
        behavior: "smooth", // Smooth scrolling effect
      });
    }, 1500); // 1 seconds delay

    // Cleanup timeout if the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      {/* Section for the "Events" header */}
      <div className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center lg:justify-start body3">
        <div className="w-full lg:w-auto lg:pl-12">
          <div className="texthead text-6xl sm:text-7xl md:text-8xl tracking-[0.25em] text-left lg:text-9xl w-full p-4">
            Events
          </div>
        </div>
      </div>

      {/* Scrollable Image Card Section */}
      <div className="overflow-hidden w-full relative" ref={emblaRef}>
        <div className="flex">
          {/* Loop through the events */}
          {events.map((event, index) => (
            <div key={`clone-${index}`} className="flex-none p-10">
              <ImageCard event={event} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Event;
