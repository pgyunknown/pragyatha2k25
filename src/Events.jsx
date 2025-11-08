import React, { useState } from "react";

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [clickedButton, setClickedButton] = useState(null);

  const categories = [
    { id: "all", name: "All" },
    { id: "event", name: "Events" },
    { id: "technical", name: "Technical" },
    { id: "creative", name: "Creative" },
  ];

  const events = [
    {
      id: 1,
      title: "AdVogue",
      category: "event",
      description:
        "A fusion of creativity and commerce! AdVogue challenges participants to craft original ad campaigns and business models for popular brands — blending storytelling, innovation, and strategy. Teams are judged on creativity, impact, and presentation.",
      date: "Day 1",
      time: "5:00 PM – 7:00 PM",
      participants: "6+ branches",
      difficulty: "Inter-Branch Competition",
      sigil: "/ad.png",
      registerLink: "",
    },
    {
      id: 2,
      title: "UI/UX Hackathon",
      category: "event",
      description: `A blend of learning and creation, this event begins with interactive sessions for beginners who want to explore UI/UX design using Figma. Following the sessions, a 24-hour design sprint challenges participants to conceptualize, design, and prototype digital solutions for real-world problems.`,
      date: "Day 1-2",
      time: "24 Hours",
      participants: "40 teams",
      difficulty: "Beginner – Advanced",
      sigil: "/t.png",
      registerLink: "https://forms.gle/tU1yZoiTKfUpyrA97",
    },
    {
      id: 3,
      title: "BlockCord",
      category: "technical",
      description:
        "A beginner-focused workshop introducing blockchain fundamentals. Explore decentralization, digital ledgers, and secure data management. Gain hands-on exposure to how blockchain works and its industry applications.",
      date: "Day 2-3",
      time: "9:00 AM - 5:00 PM",
      participants: "60+",
      difficulty: "Beginner – Intermediate",
      sigil: "/block.png",
      registerLink: "https://forms.gle/MXDTxvzWmTptHdup6",
    },
    {
      id: 4,
      title: "Entrorphosis",
      category: "event",
      description:
        "From problem to prototype! Entrorphosis guides participants through the complete innovation journey — identifying real-world problems, brainstorming creative solutions, and developing tangible prototypes.",
      date: "Day 2-3",
      time: "9:00 AM - 4:00 PM",
      participants: "70+",
      difficulty: "All Levels",
      sigil: "/entro.png",
      registerLink: "https://forms.gle/PufT1oVz5yhmhmmF6",
    },
    {
      id: 5,
      title: "Designing 101",
      category: "creative",
      description:
        "A hands-on creative workshop exploring the fundamentals of digital design. Learn layout, color theory, typography, and visual storytelling using Figma and Adobe Photoshop.",
      date: "Day 2-3",
      time: "9:00 AM - 4:00 PM",
      participants: "60+",
      difficulty: "Beginner – Intermediate",
      sigil: "/101.png",
      registerLink: "https://forms.gle/Kx9RFetBXrnAcRbU8",
    },
    {
      id: 6,
      title: "CloudLab",
      category: "technical",
      description:
        "An interactive beginner-friendly workshop introducing cloud computing. Learn virtualization, scalability, and modern cloud-based architectures through guided, practical sessions.",
      date: "Day 2-3",
      time: "9:00 AM - 4:00 PM",
      participants: "60+",
      difficulty: "Beginner – Intermediate",
      sigil: "/cloud.png",
      registerLink: "https://forms.gle/JLq8cC5y7o87sxGaA",
    },
  ];

  const filteredEvents =
    selectedCategory === "all"
      ? events
      : events.filter((event) => event.category === selectedCategory);

  const goToNext = () => {
    setClickedButton("next");
    setTimeout(() => setClickedButton(null), 400);
    setCurrentIndex((prev) => (prev + 1) % filteredEvents.length);
  };

  const goToPrevious = () => {
    setClickedButton("prev");
    setTimeout(() => setClickedButton(null), 400);
    setCurrentIndex(
      (prev) => (prev - 1 + filteredEvents.length) % filteredEvents.length
    );
  };

  const particleCount = 120;
  const particles = Array.from({ length: particleCount }).map((_, i) => {
    const horizontalDrift = Math.random() * 60 - 30;
    const size = Math.random() * 2 + 1;
    const color = Math.random() > 0.5 ? "#00bcd4" : "#9be3ff";
    const style = {
      left: `${Math.random() * 100}%`,
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: color,
      animationDuration: `${Math.random() * 8 + 8}s`,
      animationDelay: `${Math.random() * 8}s`,
      "--horizontal-drift": `${horizontalDrift}vw`,
    };
    return <div key={i} className="got-particle" style={style}></div>;
  });

  const animationStyles = `
    .got-particle {
      position: absolute;
      bottom: -10px;
      border-radius: 50%;
      opacity: 0.8;
      box-shadow: 0 0 8px #00bfff, 0 0 15px #0077ff;
      animation: floatUp linear infinite;
    }
    @keyframes floatUp {
      0% { transform: translate(0, 0); opacity: 0.9; }
      100% { transform: translate(var(--horizontal-drift), -110vh); opacity: 0; }
    }
    .got-glow {
      text-shadow: 0 0 20px #00ffff, 0 0 40px #0077ff, 0 0 60px #1e90ff;
      animation: glowPulse 3s ease-in-out infinite;
    }
    @keyframes glowPulse {
      0%, 100% { text-shadow: 0 0 15px #00ffff, 0 0 30px #0077ff; }
      50% { text-shadow: 0 0 30px #00ffff, 0 0 60px #1e90ff; }
    }
    .glow-button {
      box-shadow: 0 0 15px rgba(0, 255, 255, 0.4);
      transition: all 0.3s ease;
    }
    .glow-button:hover {
      box-shadow: 0 0 25px rgba(0, 255, 255, 0.8);
    }
    .glow-click {
      animation: buttonFlash 0.4s ease-out;
    }
    @keyframes buttonFlash {
      0% { box-shadow: 0 0 10px #00ffff, 0 0 20px #0077ff; transform: scale(1.1); }
      100% { box-shadow: 0 0 15px rgba(0,255,255,0.3); transform: scale(1); }
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: animationStyles }} />
      <div
        id="events"
        className="relative min-h-screen bg-gradient-to-br from-gray-950 via-black to-blue-950 text-gray-100 py-32 font-sans overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none z-0">
          {particles}
        </div>

        <div className="relative z-10 container mx-auto px-6 flex flex-col h-full">
          <div className="text-center mb-12">
            <h1 className="font-got text-4xl md:text-6xl lg:text-7xl tracking-widest mb-4 text-white got-glow">
              EVENTS
            </h1>
            <p className="text-gray-400 text-lg md:text-xl tracking-wider uppercase font-mon">
              Discover Amazing Competitions
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12 font-mon">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setCurrentIndex(0);
                }}
                className={`px-6 py-3 rounded-full font-semibold tracking-wide transition-all duration-300 border ${
                  selectedCategory === category.id
                    ? "bg-blue-700 text-white border-blue-500 shadow-md shadow-blue-700/50"
                    : "bg-gray-800/40 border-gray-700 text-gray-300 hover:bg-blue-900/40 hover:text-white"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="flex-grow flex items-center justify-center relative">
            {filteredEvents.length > 0 ? (
              <div className="relative w-full max-w-4xl flex items-center justify-center">
                <button
                  onClick={goToPrevious}
                  className={`absolute top-1/2 -translate-y-1/2 z-20 p-3 bg-gray-800/50 rounded-full glow-button left-0 ${
                    clickedButton === "prev" ? "glow-click" : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <div className="relative h-[520px] w-full max-w-2xl mx-auto">
                  {filteredEvents.map((event, eventIndex) => {
                    let position = "opacity-0 scale-90 pointer-events-none";
                    if (eventIndex === currentIndex) {
                      position = "opacity-100 scale-100 z-10";
                    } else if (
                      eventIndex ===
                      (currentIndex - 1 + filteredEvents.length) %
                        filteredEvents.length
                    ) {
                      position =
                        "opacity-0 md:opacity-50 scale-90 transform md:-translate-x-3/4 z-0 pointer-events-none";
                    } else if (
                      eventIndex ===
                      (currentIndex + 1) % filteredEvents.length
                    ) {
                      position =
                        "opacity-0 md:opacity-50 scale-90 transform md:translate-x-3/4 z-0 pointer-events-none";
                    }

                    return (
                      <div
                        key={event.id}
                        className={`absolute inset-0 transition-all duration-500 ease-in-out ${position}`}
                      >
                        <div className="bg-gray-900/60 backdrop-blur-sm border border-blue-900/50 rounded-lg shadow-lg shadow-black/30 w-full h-full flex flex-col p-6 md:p-8 relative overflow-hidden">
                          <div className="absolute inset-0 flex items-center justify-center z-0">
                            <img
                              src={event.sigil}
                              alt={`${event.title} Sigil`}
                              className="w-48 h-48 object-contain opacity-10"
                            />
                          </div>
                          <div className="relative z-10 flex flex-col h-full">
                            <div className="flex justify-between items-start mb-4">
                              <h3 className="text-2xl font-semibold tracking-wider uppercase text-cyan-400">
                                {event.title}
                              </h3>
                              <span
                                className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                                  event.category === "technical"
                                    ? "bg-blue-800/30 text-blue-200"
                                    : event.category === "creative"
                                    ? "bg-cyan-800/30 text-cyan-200"
                                    : "bg-gray-700/30 text-gray-300"
                                }`}
                              >
                                {event.category}
                              </span>
                            </div>
                            <p className="text-gray-300 text-sm mb-6 leading-relaxed whitespace-pre-line flex-grow overflow-y-auto pr-2 no-scrollbar">
                              {event.description}
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm border-t border-blue-900/50 pt-4">
                              <div>
                                <span className="font-semibold text-gray-400 block">
                                  Date:
                                </span>
                                <span className="text-white">{event.date}</span>
                              </div>
                              <div>
                                <span className="font-semibold text-gray-400 block">
                                  Time:
                                </span>
                                <span className="text-white">{event.time}</span>
                              </div>
                              <div>
                                <span className="font-semibold text-gray-400 block">
                                  Participants:
                                </span>
                                <span className="text-white">
                                  {event.participants}
                                </span>
                              </div>
                              <div>
                                <span className="font-semibold text-gray-400 block">
                                  Level:
                                </span>
                                <span className="text-white">
                                  {event.difficulty}
                                </span>
                              </div>
                            </div>

                            {event.registerLink && (
                              <a
                                href={event.registerLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full mt-6 py-3 px-8 text-center bg-blue-800/40 border border-blue-700 text-blue-200 font-semibold tracking-wide rounded-lg hover:bg-blue-700 hover:text-white transition-all duration-300 uppercase text-sm"
                              >
                                Register Now
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <button
                  onClick={goToNext}
                  className={`absolute top-1/2 -translate-y-1/2 z-20 p-3 bg-gray-800/60 rounded-full border border-cyan-400/30 
  shadow-[0_0_8px_rgba(0,255,255,0.3)] transition-all duration-300 
  hover:shadow-[0_0_15px_rgba(0,255,255,0.6)] hover:bg-gray-800/80 
  animate-[pulseGlow_2.5s_ease-in-out_infinite] right-0 ${
    clickedButton === "next"
      ? "scale-110 shadow-[0_0_20px_rgba(0,255,255,0.7)]"
      : ""
  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-cyan-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-gray-500">No events in this category.</p>
              </div>
            )}
          </div>

          <div className="w-full max-w-lg mx-auto mt-20 mb-24 text-center backdrop-blur-xl bg-white/5 border border-cyan-400/20 rounded-3xl p-8 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-400/30 hover:scale-[1.02] transition-all duration-500 font-mon">
            <h2 className="text-2xl font-semibold text-cyan-300 mb-3 tracking-widest">
              Want more info?
            </h2>
            <p className="text-gray-300 text-sm mb-2">
              Check out the{" "}
              <span className="text-cyan-400 font-medium">PRAGYATHA ‘25</span>{" "}
              Rule Book!
            </p>
            <p className="text-gray-300 text-sm mb-6">
              Stay informed, stay prepared, and give your best.
            </p>

            <a
              href="/rulebook.pdf"
              download="Pragyatha'25_Rulebook.pdf"
              className="inline-block px-6 py-3 rounded-full bg-cyan-400/20 border border-cyan-400/50 text-cyan-300 font-semibold tracking-wider hover:bg-cyan-400 hover:text-black transition-all duration-300"
            >
              Download the Rulebook
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
