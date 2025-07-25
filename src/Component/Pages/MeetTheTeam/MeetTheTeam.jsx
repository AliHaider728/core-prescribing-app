
import { useEffect } from "react";
import { Linkedin, Mail, Award, GraduationCap } from "lucide-react";
import Footer from "../../Footer/Footer";

const MeetTheTeam = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInSlide");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-section").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

 const teamMembers = [
  {
    name: "Adeem Azhar",
    position: "Chief Executive Officer",
    image:
      "https://coreprescribingsolutions.co.uk/wp-content/uploads/2022/01/adeem.png",
    bio:
      "Adeem is a resilient, versatile, and accomplished results-orientated individual with experience in a range of healthcare settings.",
    qualifications: [],
    specialties: [],
  },
  {
    name: "Layequr Rahman",
    position: "Chief Clinical Officer",
    image:
      "https://coreprescribingsolutions.co.uk/wp-content/uploads/2022/01/lax.png",
    bio:
      "Layequr is one of the founders of Core Prescribing Solutions and is the Chief Clinical Officer.",
    qualifications: [],
    specialties: [],
  },
  {
    name: "Sohail Ahmed",
    position: "Chief Operating Officer",
    image:
      "https://coreprescribingsolutions.co.uk/wp-content/uploads/2022/01/sohail.png",
    bio:
      "Sohail is a co-founder of Core Prescribing Solutions and is the Chief Operating Officer.",
    qualifications: [],
    specialties: [],
  },
  {
    name: "Colin Rylett",
    position: "Chief Financial Officer",
    image:
      "https://coreprescribingsolutions.co.uk/wp-content/uploads/2025/06/colin.png",
    bio:
      "Colin is a PWC trained Chartered Accountant and seasoned CFO with a dynamic track record of driving growth.",
    qualifications: [],
    specialties: [],
  },
  {
    name: "Tabassum Khan",
    position: "Clinical Operations Manager",
    image:
      "https://coreprescribingsolutions.co.uk/wp-content/uploads/2024/12/tabby.png",
    bio:
      "Tabassum (Tabby) brings a deep and nuanced understanding of Primary Care and the NHS, enabling the delivery of efficient and effective clinical services.",
    qualifications: [],
    specialties: [],
  },
  {
    name: "Stephen Elliot",
    position: "Head of Business Operations",
    image:
      "https://coreprescribingsolutions.co.uk/wp-content/uploads/2025/02/stephen-core.png",
    bio:
      "With over 15 years of experience in business management and operational excellence, Stephen Elliott is a proven leader in the healthcare and health tech sectors.",
    qualifications: [],
    specialties: [],
  },
  {
    name: "Richard Merrygold",
    position: "Data Protection Officer",
    image:
      "https://coreprescribingsolutions.co.uk/wp-content/uploads/2022/02/richard.png",
    bio:
      "An experienced Data Protection Officer, Richard has spent the majority of his professional career working in data protection and information governance.",
    qualifications: [],
    specialties: [],
  },
  {
    name: "Stacey Middlemass",
    position: "Co-Head of Training and Development",
    image:
      "https://coreprescribingsolutions.co.uk/wp-content/uploads/2024/01/stacey-1.png",
    bio:
      "Stacey is a practicing Independent Prescribing Pharmacist with almost a decade of experience across Community Pharmacy, Outpatient Pharmacy and Primary Care.",
    qualifications: [],
    specialties: [],
  },
  {
    name: "Sonia Kauser",
    position: "Co-Head of Training and Development",
    image:
      "https://coreprescribingsolutions.co.uk/wp-content/uploads/2025/07/soniakauser-1.jpg",
    bio:
      "Sonia is a highly experienced Advanced Clinical Pharmacist with over a decades of experience whose diverse career spans hospital, primary care, community pharmacy, integrated care systems, NHS England, and academia.",
    qualifications: [],
    specialties: [],
  },
  {
    name: "Saba Kazmi",
    position: "Head of Talent Acquisition and Compliance",
    image:
      "https://coreprescribingsolutions.co.uk/wp-content/uploads/2024/12/saba.png",
    bio:
      "Saba Kazmi is a highly skilled and accomplished manager with over eight years of experience in team leadership and a proven track record of delivering outstanding results across diverse sectors.",
    qualifications: [],
    specialties: [],
  },
  {
    name: "Fatema Tinwala",
    position: "Management Accountant",
    image:
      "https://coreprescribingsolutions.co.uk/wp-content/uploads/2025/06/fatema.png",
    bio:
      "Fatema is an experienced accounting professional with over nine years of expertise across finance operations.",
    qualifications: [],
    specialties: [],
  },
  {
    name: "Haroon Ali",
    position: "Head of Digital",
    image:
      "https://coreprescribingsolutions.co.uk/wp-content/uploads/2023/01/haroon.png",
    bio:
      "Haroon is an insightful, innovative professional with more than ten years’ Digital Marketing experience.",
    qualifications: [],
    specialties: [],
  },
  {
    name: "Benjamin Lawton",
    position: "Business Development Executive",
    image:
      "https://coreprescribingsolutions.co.uk/wp-content/uploads/2024/10/ben.png",
    bio:
      "Ben is a proactive and resourceful problem solver with an entrepreneurial spirit and a passion for driving innovative solutions in healthcare.",
    qualifications: [],
    specialties: [],
  },
  {
    name: "Lee Pryce",
    position: "Business Development Executive",
    image:
      "https://coreprescribingsolutions.co.uk/wp-content/uploads/2025/01/lee.png",
    bio:
      "Lee is an accomplished healthcare professional with extensive expertise across Medical Devices, Pharmaceuticals, and the Sciences.",
    qualifications: [],
    specialties: [],
  },
];

  return (
    <div className="min-h-screen bg-white">
      <style>
        {`
          @keyframes fadeInSlide {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInSlide {
            animation: fadeInSlide 1s ease-out forwards;
          }
        `}
      </style>

      {/* Hero Section */}
      <section
        className="bg-fixed animate-section py-20 mt-[150px] md:mt-[130px] bg-cover bg-center bg-no-repeat relative "
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")',
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <h1
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{ textShadow: "2px 2px 8px rgba(0, 112, 244, 0.75)" }}
            >
              Meet Our Expert Team
            </h1>
            <p
              className="text-2xl mb-8"
              style={{ textShadow: "1px 1px 6px rgba(0, 112, 244, 0.6)" }}
            >
              Dedicated professionals committed to transforming healthcare
            </p>
          </div>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="animate-section py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our diverse team of healthcare professionals, technologists, and
              business experts brings together decades of experience in clinical
              pharmacy, healthcare management, and digital innovation. We are
              united by our commitment to improving patient outcomes and
              supporting healthcare providers.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="animate-section py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-transparent  rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] overflow-hidden"
              >
                <div className="aspect-w-1  justify-center flex aspect-h-1">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-64 h-64 object-cover  rounded-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-4">
                    {member.position}
                  </p>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {member.bio}
                  </p>

                   

                  <div className="flex gap-3 pt-4 border-t border-gray-200">
                    <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                      <Linkedin className="w-4 h-4" />
                      <span className="text-sm">LinkedIn</span>
                    </button>
                    <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                      <Mail className="w-4 h-4" />
                      <span className="text-sm">Contact</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Why Work With Us Section */}
      <section className="animate-section py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Work With Us
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Each of our clinicians is fully adaptable with fantastic
                clinical acumen, and must meet vigorous internal specifications.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We carry out a specialised in-depth review of all team members
                to ensure they are fully compliant and trained to an excellent
                standard.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We have an experienced clinical support team who are on hand to
                provide training and support to our team, alongside assistance
                with continuing professional development.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We take immense pride in our colleagues and in hand-selecting
                our team.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our team has regular input and training from senior management
                to review any educational and development needs, and to support
                in meeting and exceeding clinical and non-clinical requirements.
                We offer a variety of flexible roles to suit individual
                experience and skill sets. We provide a comprehensive clinical
                and system training package to all clinicians, with access to an
                on-call senior staff member at all times.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We are always looking to help individuals flourish in their
                careers. Get in touch to see how we can accommodate you in our
                friendly, vibrant team!
              </p>

              <blockquote className="border-l-4 border-blue-600 pl-6 italic text-gray-600 mb-6">
                <p>
                  In a recent survey, 100% of our team stated that they enjoy
                  working for Core Prescribing Solutions
                </p>
                <p className="mt-4 font-semibold text-gray-800">
                  Some of their comments:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2 text-gray-700">
                  <li>Good morale, good team and flexibility</li>
                  <li>Being clinically involved</li>
                  <li>Extremely supportive team</li>
                  <li>
                    The managing team are very approachable and make working for
                    Core Prescribing Solutions very comfortable
                  </li>
                  <li>
                    Excellent trained staff all around. Previously working for
                    another company which I found difficult because it was not
                    organised as well as Core Prescribing Solutions
                  </li>
                  <li>
                    I have had a great experience so far working with my
                    practice; they really appreciate the pharmacist’s
                    contribution and I feel a valued member of the team
                  </li>
                </ul>
              </blockquote>
            </div>

            {/* Image */}
            <div>
              <img
                src="https://images.pexels.com/photos/6129494/pexels-photo-6129494.jpeg"
                alt="Why Work With Us"
                className="rounded-lg shadow-lg object-cover w-full h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="animate-section py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Growing Team
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            We're always looking for talented healthcare professionals who share
            our passion for innovation and excellence. Explore career
            opportunities with us.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            View Career Opportunities
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MeetTheTeam;
