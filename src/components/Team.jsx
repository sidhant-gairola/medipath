import { motion } from 'framer-motion';
import { CgMail } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";
import sidhantImage from '../Images/imgSidhant.jpeg';
import pranjalImage from '../Images/imgPranjal.jpg';

function Team() {
  const teamMembers = [
    {
      name: "Sidhant Gairola",
      role: "Full Stack Developer",
      email: "ssid7074@gmail.com",
      linkedin: "https://linkedin.com/in/sidhant-gairola",
      image: sidhantImage
    },
    {
      name: "Pranjal Mishra",
      role: "Full Stack Developer",
      email: "pranjalmishra402@gmail.com",
      linkedin: "https://www.linkedin.com/in/pranjal-mishra-06b1501a4/",
      image: pranjalImage
    },
  ];

  return (
    <div className="aboutUs pt-8 px-4 tracking-tight mb-20">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-5xl font-bold tracking-tighter text-center mb-12 ">
          {/* Meet Our Team */}
          About Us
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  justify-items-center">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="max-w-xl bg-white hover:bg-neutral-100 rounded-2xl shadow-lg overflow-hidden" >
              <img src={member.image} alt={member.name} className="w-96 h-96 object-cover hover:scale-105 transition-all duration-500" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-black">{member.name}</h3>
                <p className="text-lg text-gray-600 mb-4">{member.role}</p>
                <div className="space-y-2">
                  <a href={`mailto:${member.email}`} className="flex flex-wrap text-blue-600 hover:text-blue-950 text-lg w-fit" >
                    <CgMail className='mx-2 mt-1' />
                    {member.email}
                  </a>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="flex flex-wrap text-blue-600 hover:text-blue-950 text-lg w-fit" >
                    <FaLinkedin className='mx-2 mt-1' />
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
