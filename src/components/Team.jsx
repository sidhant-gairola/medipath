import { motion } from 'framer-motion';
import saamiImage from '../Images/imgSaami.jpg';
import pranjalImage from '../Images/imgPranjal.jpg';
import sidhantImage from '../Images/imgSidhant.jpeg';
import asadImage from '../Images/imgAsad.jpg';
import shipraImage from '../Images/imgShipra.jpg';

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
      role: "Frontend Developer",
      email: "pranjalmishra402@gmail.com",
      linkedin: "https://www.linkedin.com/in/pranjal-mishra-06b1501a4/",
      image: pranjalImage
    },
    {
      name: "Mohammad Saami",
      role: "Data Analyst",
      email: "khansaami942@gmail.com",
      linkedin: "https://www.linkedin.com/in/muhammad-saami-b19980267/",
      image: saamiImage
    },
    {
      name: "Asad Rasheed Khan",
      role: "Frontend Developer",
      email: "asadkhan11156@gmail.com",
      linkedin: "https://linkedin.com/in/asad-rasheed-khan",
      image: asadImage
    },
    {
      name: "Shipra Nayal",
      role: "Developer",
      email: "shipranayal98@gmail.com",
      linkedin: "https://www.linkedin.com/in/shipra-nayal-708b6b327/",
      image: shipraImage
    }
  ];

  return (
    <div className="pt-8 pb-16 px-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-5xl font-extrabold text-center mb-12 ">
          Meet Our Team
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {teamMembers.map((member, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-white rounded-2xl shadow-lg overflow-hidden" >
              <img src={member.image} alt={member.name} className="w-full h-80 object-cover hover:scale-105 transition-all duration-500" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-black">{member.name}</h3>
                <p className="text-lg text-gray-600 mb-4">{member.role}</p>
                <div className="space-y-2">
                  <a href={`mailto:${member.email}`} className="block text-blue-600 hover:text-blue-950 text-lg" >
                    {member.email}
                  </a>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-950 text-lg" >
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
