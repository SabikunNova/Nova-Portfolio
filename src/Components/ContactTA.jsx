import React, { useState } from "react";

export default function ContactCTA(){
  const [email, setEmail] = useState("");
  const submit = (e) => {
    e.preventDefault();
    alert(`Thanks! We'll reach out to ${email}`);
    setEmail("");
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-3">Lets Design Together</h3>
        <p className="text-gray-600 mb-6">Lorem ipsum dolor sit amet consectetur.</p>
        <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3 items-center justify-center">
          <input value={email} onChange={(e)=>setEmail(e.target.value)} required
            className="w-full sm:w-2/3 px-4 py-3 border rounded-md" placeholder="Enter Your Email"/>
          <button className="px-6 py-3 bg-orange-500 text-white rounded-md">Contact Me
            
          </button>
        </form>
        
      </div>
      
    </section>
  );
}
