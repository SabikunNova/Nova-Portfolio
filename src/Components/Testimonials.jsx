import React, { useEffect, useState } from "react";
import { testimonials } from "../data/testimonials";

export default function Testimonials(){
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(()=> setIndex(i => (i+1) % testimonials.length), 4500);
    return ()=> clearInterval(t);
  }, []);

  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-2">Testimonials</h3>
        <p className="text-gray-600 mb-8">Professional, reliable, and efficient – they made the whole process smooth and stress-free. Highly recommended</p>

        <div className="relative min-h-[220px]">
          {testimonials.map((t, i) => (
            <div key={t.id}
              className={`transition-all duration-500 ${i === index ? "opacity-100 translate-y-0" : "opacity-0 absolute inset-0"}`}>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center gap-4">
                  <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full object-cover"/>
                  <div>
                    <h4 className="font-semibold">{t.name}</h4>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">“{t.text}”</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button key={i} onClick={()=>setIndex(i)} className={`w-3 h-3 rounded-full ${i===index ? "#df85d3" : "bg-gray-300"}`}></button>
          ))}
        </div>
      </div>
    </section>
  );
}
