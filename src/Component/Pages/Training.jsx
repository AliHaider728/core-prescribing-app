 import { useEffect, useState } from "react"
import { ChevronDownIcon, ChevronUpIcon, PlayIcon, BookOpenIcon, UsersIcon, TrendingUpIcon, CheckCircleIcon } from "lucide-react"
import Footer from "../Footer/Footer"

const Training = () => {
  const [activeAccordion, setActiveAccordion] = useState(null)
  const [visibleElements, setVisibleElements] = useState(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('[id^="fade-"]')
    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index)
  }

  const faqData = [
    {
      question: "How can Core Prescribing Solutions training programs help with Continuing Professional Development (CPD)?",
      answer: "Our training programs support Continuing Professional Development (CPD) by offering ongoing educational opportunities that enhance the knowledge and skills of clinicians (where applicable). These programs are designed to keep clinicians up-to-date with the latest industry practices and regulatory requirements, ensuring their competencies remain current and relevant."
    },
    {
      question: "What specialised training modules are available?",
      answer: "We offer a range of specialised training modules tailored to different areas of clinical practice, including long-term conditions such as Diabetes and Asthma."
    },
    {
      question: "How does Core Prescribing Solutions ensure training aligns with industry standards?",
      answer: "We ensure our training aligns with industry standards by regularly reviewing and updating training materials in accordance with the latest guidelines from relevant professional bodies and regulatory authorities."
    },
    {
      question: "What support is available to clinicians after they complete their training?",
      answer: "Clinicians at Core Prescribing Solutions have access to ongoing support (where applicable), including regular supervision sessions and access to a comprehensive library of resources. This support helps clinicians continue to grow and address any challenges they may face in their practice."
    },
    {
      question: "Can training programs be customised to suit the needs of different clinicians?",
      answer: "Yes, we can customise training programs to meet the specific needs of different clinicians and practices."
    },
    {
      question: "How are Standard Operating Procedures (SOPs) utilised in training?",
      answer: "Standard Operating Procedures (SOPs) are integrated into training to provide clear, step-by-step guidance. By training clinicians on SOPs, Core Prescribing Solutions ensures that all clinicians follow best practices, maintain high standards of care, and comply with regulatory requirements."
    }
  ]

  return (
    <>
      <div className="min-h-screen mt-[150px] bg-white font-sans">
        {/* Hero Section */}
        <div 
          id="fade-hero"
          className={`bg-fixed relative bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 text-white py-20 md:py-28 transition-all duration-1000 ease-out ${
            visibleElements.has('fade-hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
                Training & Development
              </h1>
              <p className="text-lg md:text-2xl mb-8 text-blue-100 font-light">
                Advance your clinical expertise and grow professionally with us
              </p>
              <div className="bg-white text-blue-900 px-8 py-3 rounded-lg inline-block font-semibold text-sm md:text-base shadow-md">
                Please note: Our training support is exclusively available to Core Prescribing Solutions Clinicians
              </div>
            </div>
          </div>
        </div>

        {/* Training Explained Section */}
        <section 
          id="fade-explained"
          className={`py-16 transition-all duration-1000 ease-out delay-200 ${
            visibleElements.has('fade-explained') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Training Explained</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Core Prescribing Solutions Frameworks</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-base md:text-lg">
                  Our internal systems and frameworks are designed to effectively prepare our team for their clinical roles. 
                  Developed by our experienced and dedicated in-house governance team, they address the broad needs of primary 
                  care and are aligned with national standards.
                </p>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  Our approach ensures that every clinician begins their role with confidence and a strong foundational 
                  understanding of their responsibilities. During this initial phase, clinicians engage in a variety of 
                  activities aimed at familiarising them with general clinical operations.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <img 
                  src="https://images.pexels.com/photos/5452223/pexels-photo-5452223.jpeg" 
                  alt="Training materials and books"
                  className="rounded-lg shadow-md w-full h-64  md:h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Clinical Programs Section */}
        <section 
          id="fade-clinical"
          className={`py-16 bg-gray-50 transition-all duration-1000 ease-out delay-300 ${
            visibleElements.has('fade-clinical') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://assets.grok.com/users/f8a26a7a-7a73-4b20-8385-6b937d0fd366/generated/e644b772-9408-4d0c-af4b-c3450da1dcc1/image.jpg" 
                  alt="Clinical training session"
                  className="rounded-lg shadow-md w-full h-64 md:h-[400px] object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Clinical Programs</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-base md:text-lg">
                  Our clinical programs are broad and encompassing, aimed at keeping our clinical teams proficient 
                  with fundamental pharmacy and primary care skills and knowledge.
                </p>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Highlights of some of our programs include:</h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-600 text-base md:text-lg"><strong>On-Demand Sessions:</strong> Flexible, accessible online sessions that provide a better understanding of primary care and pharmacy-related topics.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-600 text-base md:text-lg"><strong>Structured Medication Reviews (SMRs):</strong> Fundamental concepts behind conducting effective medication reviews to ensure optimal patient outcomes.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-600 text-base md:text-lg"><strong>Medicines Reconciliation:</strong> Overview of strategies for managing the accurate transfer of medication information across different care settings.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Enhance Expertise Section */}
        <section 
          id="fade-expertise"
          className={`py-16 transition-all duration-1000 ease-out delay-400 ${
            visibleElements.has('fade-expertise') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Enhance Your Expertise</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>

            <div className="max-w-4xl mx-auto">
              <p className="text-gray-600 mb-8 text-base md:text-lg leading-relaxed text-center">
                At Core Prescribing Solutions, we focus on advancing both foundational and specialised clinical skills 
                to foster professional growth. Our programs are designed to equip our clinicians with essential competencies, including:
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg  duration-300 hover:translate-y-[-7px] transition-all">
                  <UsersIcon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Effective Communication</h4>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg  duration-300 hover:translate-y-[-7px] transition-all">
                  <TrendingUpIcon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Clinical Reasoning</h4>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg  duration-300 hover:translate-y-[-7px] transition-all">
                  <CheckCircleIcon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Clinical Monitoring</h4>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">The Core Presc fylling Solutions Approach</h3>
                <p className="text-gray-600 mb-6 text-center text-base md:text-lg">
                  Our comprehensive programs introduce team members to the basics of clinical practice, emphasising:
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 shadow-sm">
                      <UsersIcon className="w-8 h-8 text-blue-600" />
                    </div>
                    <p className="font-semibold text-gray-800 text-base md:text-lg">Patient Interaction Skills</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 shadow-sm">
                      <BookOpenIcon className="w-8 h-8 text-blue-600" />
                    </div>
                    <p className="font-semibold text-gray-800 text-base md:text-lg">Accurate Documentation Practices</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 shadow-sm">
                      <CheckCircleIcon className="w-8 h-8 text-blue-600" />
                    </div>
                    <p className="font-semibold text-gray-800 text-base md:text-lg">Prescribing Frameworks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Growth Section */}
        <section 
          id="fade-growth"
          className={`py-16 bg-gray-50 transition-all duration-1000 ease-out delay-500 ${
            visibleElements.has('fade-growth') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Professional Growth & Excellence</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div className="space-y-8">
                <div className="bg-white rounded-lg p-8 shadow-md">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Continuous Development</h3>
                  <p className="text-gray-600 mb-4 text-base md:text-lg">
                    Core Prescribing Solutions as a platform facilitates continually enhancing fundamental skills such as:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-600 text-base md:text-lg">Clinical competency and safe clinical practice</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-600 text-base md:text-lg">Patient education and engagement</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-600 text-base md:text-lg">Clinical decision-making in line with current best practices</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-md">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Interactive Learning Environment</h3>
                  <p className="text-gray-600 mb-4 text-base md:text-lg">Learning at Core Prescribing Solutions is highly interactive, focusing on:</p>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-600 text-base md:text-lg">Teamwork and collaborative problem-solving</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-600 text-base md:text-lg">Conflict resolution</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-600 text-base md:text-lg">Effective communication and interpersonal skills</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-white rounded-lg p-8 shadow-md">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Adherence to Standards</h3>
                  <p className="text-gray-600 mb-4 text-base md:text-lg">
                    Our frameworks rigorously align with national and local standards, focusing on:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-600 text-base md:text-lg">Safety protocols and procedures</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-600 text-base md:text-lg">Ethical guidelines in clinical practice</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-600 text-base md:text-lg">Adherence to standard operating procedures</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-md">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Career Development</h3>
                  <p className="text-gray-600 mb-4 text-base md:text-lg">
                    Our career development programs (where applicable) emphasise key professional skills, such as:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-600 text-base md:text-lg">Leadership and management capabilities</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-600 text-base md:text-lg">Effective time management</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-600 text-base md:text-lg">Self-directed learning and professional growth</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Support and Development */}
            <div className="bg-blue-600 text-white rounded-lg p-8">
              <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Support and Development</h3>
                <p className="text-lg md:text-xl mb-6">Our ongoing support frameworks reinforce basic skills through:</p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white/10 rounded-lg p-6">
                    <h4 className="font-semibold mb-2 text-base md:text-lg">Continuous Feedback</h4>
                    <p className="text-blue-100 text-base">Continuous feedback and improvement cycles</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-6">
                    <h4 className="font-semibold mb-2 text-base md:text-lg">Mentorship</h4>
                    <p className="text-blue-100 text-base">Mentorship from experienced professionals</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-6">
                    <h4 className="font-semibold mb-2 text-base md:text-lg">Peer Learning</h4>
                    <p className="text-blue-100 text-base">Peer learning and support opportunities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section 
          id="fade-faq"
          className={`py-16 transition-all duration-1000 ease-out delay-600 ${
            visibleElements.has('fade-faq') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Frequently Asked Questions About Our Innovative Frameworks and Programs
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>

            <div className="max-w-4xl mx-auto">
              {faqData.map((faq, index) => (
                <div key={index} className="mb-4 bg-white rounded-lg shadow-md overflow-hidden">
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className="font-semibold text-gray-800 text-base md:text-lg">{faq.question}</span>
                    {activeAccordion === index ? (
                      <ChevronUpIcon className="w-5 h-5 text-blue-600" />
                    ) : (
                      <ChevronDownIcon className="w-5 h-5 text-blue-600" />
                    )}
                  </button>
                  {activeAccordion === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed text-base md:text-lg">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section 
          id="fade-testimonial"
          className={`py-16 bg-gray-50 transition-all duration-1000 ease-out delay-700 ${
            visibleElements.has('fade-testimonial') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Hear From Our Co Head of Training and Development
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>

            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <img 
                    src="https://coreprescribingsolutions.co.uk/wp-content/uploads/2024/09/stacy-headshot-290x300.png"
                    alt="S Middlemass, Co-Head of Training and Development"
                    className="w-32 h-32 rounded-full object-cover shadow-md"
                  />
                </div>
                <div className="flex-1">
                  <blockquote className="text-lg md:text-xl text-gray-600 italic mb-6 leading-relaxed">
                    "When I joined Core Prescribing Solutions, I was eager to make an impact in training and development, 
                    and Core Prescribing Solutions has exceeded my expectations. From day one, the senior leadership team 
                    not only welcomed my ideas but actively encouraged me to innovate to add value to the organisation and 
                    the partners we work with. The support from the team has been incredible, and I truly feel heard and valued."
                  </blockquote>
                  <div>
                    <p className="font-semibold text-gray-800 text-base md:text-lg">S Middlemass</p>
                    <p className="text-blue-600 text-base">Co-Head of Training and Development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Training
