'use client';

// import { Car } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Carousel from "../components/carousel";

const carouselItems = [
  {
    title: "National Wide experience",
    subtitle: "From the Central to the remote regions",
    description: "We have worked with ISPs in extending telecommunications services to the remote areas of the country"
  },
  {
    title: "Resources",
    subtitle: "Our Human and Technologicak Resources are always up to date and able to deliver", 
    description: "We employ advanced tehnologies and our experienced staff add a tinge of assurance on our service delivery"
  },
  {
    title: "Speed",
    subtitle: "Proffessionals keep deadlines",
    description: "Understanding how delays in service delivery can lead to unplanned costs, we always ahead of the schedule"
  }
];

export default function HomeContent() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Carousel />
    <main className="space-y-16 p-6">
      {/* Row 1 */}
      <section className="grid md:grid-cols-2 gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Reliable Services</h1>
          <p className="mb-4">Over the years we have worked with ISP and telecom operators to bring their services close to where people reside or work. Our various engineering teams are experienced in most common transmission systems delivering Voice, data and video over high-speed transmission links</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Radio and wireless network installation.</li>
            <li>Fibre to home / between buildings.</li>
            <li>3G/4G RBS Installations Configurations, Commissioning and Network Optimization.</li>
            <li>Microwave link installation to RF and baseband troubleshooting.</li>
          </ul>
        </div>
        <div>
          <Image src="/images/home1.jpeg" alt="Sample" width={600} height={400} className="w-full h-auto object-cover" />
        </div>
      </section>

      {/* Row 2 */}
      <section className="text-center">
        <h2 className="text-4xl font-bold mb-2">WHY CHOOSE US</h2>
        <div className="h-1 bg-red-600 mx-auto mb-10 mt-4" style={{ maxWidth: "60px" }}></div>
        <div className="border shadow w-full h-[500px] overflow-hidden">
          <Image
            src="/images/cabinet.jpeg"
            alt="Card Top"
            width={1200}
            height={1000}
            className="w-full object-cover"
            style={{ height: "60%" }}
          />
          <div className="p-4 h-[66.66%]">
            <div>
              <h3 className="text-2xl font-bold">{carouselItems[currentSlide].title}</h3>
              <h4 className="text-lg font-semibold text-gray-600">{carouselItems[currentSlide].subtitle}</h4>
              <p className="mt-2 text-gray-700">{carouselItems[currentSlide].description}</p>
            </div>
            <div className="mt-4 space-x-2">
              {carouselItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-black" : "bg-gray-400"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Row 3 */}
      <section className="text-center">
        <h2 className="text-4xl font-bold mb-2">CLIENTS</h2>
        <div className="h-1 bg-red-600  mb-10 mt-4" style={{ maxWidth: "60px" }}></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="border border-gray-300 flex justify-center items-center" style={{ height: "200px", width: "200px" }}>
              <Image
          src={`/images/clients/card-${i}.png`}
          alt={`Card ${i}`}
          width={150}
          height={150}
          className="object-contain"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
    </div>
  );
}

