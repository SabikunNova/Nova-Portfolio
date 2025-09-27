import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import pic from "../assets/pict4.png"

export default function Hero() {
  return (
    <section id="home" className="pt-24">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-sm">Hi I am</p>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Sabikun Nahar Nova
            <div className="text-5xl md:text-7xl leading-none">UI &amp; UX</div>
            <div className="text-4xl md:text-5xl leading-none">Designer</div>
          </h1>

          <p className="mt-6 text-gray-600 max-w-md">
            I'm a Front-End Developer who builds interactive, responsive websites with HTML, CSS and modern frameworks.
            I'm passionate about UI/UX design, creating clean interfaces and smooth user experiences.
            I'm also learning full-stack development to deliver complete web applications from front end to back end.
            
          </p>

          <div className="mt-6 flex items-center gap-4">
            <a href="#projects" className="px-5 py-2 bg-orange-500 text-white rounded-lg shadow hover:brightness-95">Hire Me</a>
            <div className="flex gap-3 text-gray-600">
              <a href="#" aria-label="facebook" className="p-2 rounded-full hover:bg-orange-300"><FaFacebookF size={18} /></a>
              <a href="#" aria-label="twitter" className="p-2 rounded-full hover:bg-orange-300"><FaTwitter size={18} /></a>
              <a href="#" aria-label="instagram" className="p-2 rounded-full hover:bg-orange-300"> <FaInstagram size={18} /></a>
              <a href="https://www.linkedin.com/in/sabikunnaharnova/" aria-label="Linkedin" className="p-2 rounded-full hover:bg-orange-300"> <FaLinkedin size={18} /></a>
            </div>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8" style={{ borderColor: "rgba(255,122,0,0.12)" }}>
            <img src={pic} alt="hero" className="w-full h-full object-cover"/>
            <div className="absolute -inset-1 rounded-full pointer-events-none" style={{ boxShadow: "0 0 0 6px rgba(255,122,0,0.08)" }} />
            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-40 h-10 hero-overlay opacity-95 rounded-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
}



