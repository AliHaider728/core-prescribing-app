 
import { useEffect } from "react"
import { Star, Quote } from "lucide-react"
import Footer from "../Footer/Footer"

const Testimonials = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInSlide")
          }
        })
      },
      { threshold: 0.1 },
    )
    document.querySelectorAll(".animate-section").forEach((section) => {
      observer.observe(section)
    })
    return () => observer.disconnect()
  }, [])

  const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      position: "Clinical Director",
      organization: "Midlands Primary Care Network",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      testimonial:
        "Core Prescribing Solutions has transformed our approach to medication management. Their clinical pharmacists are exceptional, providing expert guidance that has significantly improved our patient outcomes. The level of professionalism and expertise they bring is unmatched in the industry.",
      rating: 5,
    },
    {
      id: 2,
      name: "Mark Thompson",
      position: "Practice Manager",
      organization: "London GP Practice",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      testimonial:
        "The training programs provided by Core Prescribing Solutions have significantly enhanced our team's clinical capabilities and confidence. Their comprehensive approach to professional development has been invaluable for our practice growth and staff retention.",
      rating: 5,
    },
    {
      id: 3,
      name: "Dr. Emma Wilson",
      position: "Medical Director",
      organization: "North West Health Trust",
      image:
        "https://images.unsplash.com/photo-1594824475317-d0d4e0b4b9b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      testimonial:
        "Outstanding service delivery and genuine commitment to improving patient outcomes. Core Prescribing Solutions has been instrumental in helping us implement our medicines optimisation strategy. Highly recommended for any healthcare organization.",
      rating: 5,
    },
    {
      id: 4,
      name: "James Mitchell",
      position: "PCN Director",
      organization: "Yorkshire Primary Care Network",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      testimonial:
        "Their ARRS solution has streamlined our recruitment process and saved us significant time and resources. The team's expertise in workforce planning and compliance management has been exceptional. We couldn't have achieved our current success without their support.",
      rating: 5,
    },
    {
      id: 5,
      name: "Dr. Priya Patel",
      position: "Senior Pharmacist",
      organization: "Birmingham Medical Centre",
      image:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      testimonial:
        "The remote prescribing platform has revolutionized how we deliver patient care. The technology is intuitive, secure, and has improved our efficiency dramatically. The ongoing support from the team has been fantastic throughout our implementation journey.",
      rating: 5,
    },
    {
      id: 6,
      name: "Robert Davies",
      position: "Pharmacy Manager",
      organization: "Manchester Health Group",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      testimonial:
        "Core Prescribing Solutions has provided exceptional pharmacy technician support that has enhanced our operational efficiency. Their team integrates seamlessly with our existing staff and brings valuable expertise to our daily operations.",
      rating: 5,
    },
  ]

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
        className="  py-20 md:mt-[130px] mt-[160px] bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")',
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
              Client Testimonials
            </h1>
            <p className="text-2xl mb-8" style={{ textShadow: "1px 1px 6px rgba(0, 112, 244, 0.6)" }}>
              Hear from our satisfied clients about their experience with our services
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Overview */}
      <section className="animate-section py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We're proud to work with healthcare professionals and organizations across the UK. Here's what they have
              to say about our services and support.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="animate-section py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] relative"
              >
                <Quote className="w-8 h-8 text-blue-600 mb-4" />
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.testimonial}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.position}</div>
                    <div className="text-sm text-blue-600">{testimonial.organization}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="animate-section py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Client Satisfaction</h2>
            <p className="text-xl text-gray-600">Our commitment to excellence reflected in numbers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-lg hover:translate-y-[-5px] transition-all duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <p className="text-gray-700 font-semibold mb-2">Client Satisfaction</p>
              <p className="text-gray-600 text-sm">Based on client feedback surveys</p>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-lg hover:translate-y-[-5px] transition-all duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-gray-700 font-semibold mb-2">Practices Supported</p>
              <p className="text-gray-600 text-sm">Across the United Kingdom</p>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-lg hover:translate-y-[-5px] transition-all duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <p className="text-gray-700 font-semibold mb-2">Client Retention</p>
              <p className="text-gray-600 text-sm">Long-term partnerships</p>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-lg hover:translate-y-[-5px] transition-all duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <p className="text-gray-700 font-semibold mb-2">Support Available</p>
              <p className="text-gray-600 text-sm">Round-the-clock assistance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="animate-section py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Real results from our client partnerships</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Midlands PCN Transformation</h3>
              <p className="text-gray-600 mb-4">
                Working with a 12-practice PCN, we implemented comprehensive medicines optimisation services that
                resulted in:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• 35% reduction in medication-related incidents</li>
                <li>• £150,000 annual cost savings</li>
                <li>• 98% patient satisfaction scores</li>
                <li>• Improved clinical outcomes across all practices</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">London Practice Digital Transformation</h3>
              <p className="text-gray-600 mb-4">
                Implementation of our remote prescribing platform for a large London practice achieved:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• 60% increase in consultation capacity</li>
                <li>• 45% reduction in prescription processing time</li>
                <li>• Enhanced patient access to services</li>
                <li>• Improved staff efficiency and satisfaction</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Testimonials
