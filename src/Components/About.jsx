import React from "react";
import pic4 from "../assets/pict4.png"
const skills = [
  { name: "UI/UX", value: 85 },
  { name: "Website Design", value: 90 },
  { name: "App Design", value: 80 },
  
];


export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <h3 className="text-3xl font-bold mb-4">About Me</h3>
          <p className="text-gray-600 mb-6 max-w-lg">
            I'm Sabikun Nahar Nova - a final-year Computer Science student and a passionate Front-End Developer. I specialize in creating responsive, accessible, and interactive web experiences using HTML, CSS, JavaScript, and React. I also work with Django and MySQL to build full-stack applications. I enjoy learning new technologies, solving problems, and turning ideas into functional, user-friendly digital products.
          </p>

          <div className="space-y-4">
            {skills.map((s, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{s.name}</span>
                  <span className="text-sm text-gray-500">{s.value}%</span>
                </div>
                <div className="w-full h-3 rounded-full progress-bg">
                  <div className="h-3 rounded-full progress-bar" style={{ width: `${s.value}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8" style={{ borderColor: "rgba(255,122,0,0.12)" }}>
            <img src={pic4} alt="about" className="w-full h-full object-cover" />
            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-36 h-9 hero-overlay rounded-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
}