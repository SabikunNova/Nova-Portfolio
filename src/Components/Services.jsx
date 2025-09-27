import React from "react";

const services = [
  { title: "UI/UX", desc: "Design user-centered interfaces." , avatar:"/public/5.png"},
  { title: "Web Design", desc: "Responsive websites with modern UI." , avatar:"/public/accept.png"},
  { title: "App Design", desc: "Interface design for mobile apps." , avatar:"/public/app.png"},
  
];

export default function Services(){
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-3">Services</h3>
        <p className="text-gray-600 mb-8">Creating responsive, accessible and visually appealing websites.</p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((s,i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <div className="w-12 h-12 rounded-md bg-orange-50 flex items-center justify-center mb-4"><img src="/public/intersection.png"/></div>
              <h4 className="font-semibold mb-2">{s.title}</h4>
              <p className="text-gray-500 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
