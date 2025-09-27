
import { useState } from "react";
import { projects as projectData } from "../data/projects";

const categories = ["All", "UI/UX", "Web Design", "App Design"];

export default function Projects(){
  const [filter, setFilter] = useState("All");
  const list = filter === "All" ? projectData : projectData.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-3">My Projects</h3>
        <p className="text-gray-600 mb-6">A Personal Portfolio Website Showcasing UI/UX and Web Development Skills.Design and Development of a Responsive Portfolio Website .An Integration of Design and Development Skills</p>

        <div className="flex gap-3 justify-center mb-8 flex-wrap">
          {categories.map(cat => (
            <button key={cat}
              onClick={()=>setFilter(cat)}
              className={`px-4 py-2 rounded-md border ${filter===cat ? "bg-orange-500 text-white" : "bg-white"}`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map(p => (
            <div key={p.id} className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition">
              <div className="h-48 bg-gray-100 flex items-center justify-center">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-4">
                <p className="text-xs text-orange-500 mb-2">{p.category}</p>
                <h4 className="font-semibold">{p.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
