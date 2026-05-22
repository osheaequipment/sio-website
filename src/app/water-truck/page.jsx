"use client";

import { useRouter } from "next/navigation";
import WatermarkedImage from "@/components/WatermarkedImage";
import ApplicationTag from "@/components/ApplicationTag";

export default function WaterTruckPage() {
  const { push } = useRouter();

  return (
    <div className="w-full">
      {/* Hero Banner */}
      <div className="relative w-full h-[60vh] lg:h-[80vh] overflow-hidden">
        <video
          src="/waterTruckBanner1.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.45)]" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-5">
          <div className="max-w-4xl text-white">
            <h1 className="roboto-slab font-bold text-[32px] md:text-[48px] lg:text-[64px] leading-tight m-0">
              Oshkosh 6x6 Off&#8209;Road Water Truck for Rent &amp; Sale
            </h1>
            <p className="mt-4 text-sm md:text-base lg:text-xl opacity-95">
              4,000 Gallon Capacity &bull; Cab&#8209;Controlled Spray System &bull; Built for Dust Suppression, Pipeline Support &amp; Disaster Relief
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => {
                  const el = document.getElementById("specs-section");
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="rounded-full bg-white text-black py-[10px] px-[28px] lg:py-[14px] lg:px-[50px]"
              >
                Explore specs
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Intro + Auto-Play Video Section */}
      <div className="px-[20px] lg:px-[100px] py-12 lg:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h2 className="roboto-slab font-bold text-[28px] lg:text-[42px] m-0">Built for the Toughest Job&#8209;Sites</h2>
            <p className="mt-3 text-[#333] text-sm md:text-base lg:text-lg">
              The Oshkosh MK23 6x6 Water Truck delivers high&#8209;capacity water transport with exceptional reliability,
              control, and operator comfort. Whether it&apos;s dust suppression on construction sites, soil compaction on roadways,
              fire mitigation for wildfire response, or remote-access support for pipeline and mining operations, this off-road
              water truck is ready to perform.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden border border-[#E5E5E5] bg-white shadow-sm">
            <video
              src="/waterTruckVideo2.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-[300px] lg:h-[350px] object-cover"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="px-[20px] lg:px-[100px] pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="roboto-slab font-bold text-[22px] lg:text-[32px] text-[#5C9544] mb-8 text-center m-0">
            In Action
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-lg overflow-hidden border border-[#E5E5E5] bg-white shadow-sm">
              <WatermarkedImage
                src="/waterTruck1.jpg"
                alt="Oshkosh MK23 6x6 off-road water truck with 4,000 gallon tank spraying for dust suppression"
                className="w-full h-[300px] object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden border border-[#E5E5E5] bg-white shadow-sm">
              <WatermarkedImage
                src="/waterTruck2.jpg"
                alt="Oshkosh MK23 6x6 water truck on construction job site"
                className="w-full h-[300px] object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden border border-[#E5E5E5] bg-white shadow-sm">
              <WatermarkedImage
                src="/waterTruck3.jpg"
                alt="Oshkosh 6x6 off-road water truck side view"
                className="w-full h-[300px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery Group 2 */}
      <div className="px-[20px] lg:px-[100px] pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="roboto-slab font-bold text-[22px] lg:text-[32px] text-[#5C9544] mb-8 text-center m-0">
            Fleet &amp; Operational Views
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
              <div key={num} className="rounded-lg overflow-hidden border border-[#E5E5E5] bg-white shadow-sm">
                <WatermarkedImage
                  src={`/waterTruckGroup2-${num}.jpg`}
                  alt={`Oshkosh 6x6 Water Truck - Image ${num}`}
                  className="w-full h-[250px] object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Gallery Group 3 */}
      <div className="px-[20px] lg:px-[100px] pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="roboto-slab font-bold text-[22px] lg:text-[32px] text-[#5C9544] mb-8 text-center m-0">
            Exterior Profile
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array.from({ length: 2 }, (_, i) => i + 1).map((num) => (
              <div key={num} className="rounded-lg overflow-hidden border border-[#E5E5E5] bg-white shadow-sm">
                <WatermarkedImage
                  src={`/waterTruckGroup3-${num}.jpg`}
                  alt={`Oshkosh 6x6 Water Truck - Group 3 Image ${num}`}
                  className="w-full h-[300px] lg:h-[350px] object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Features & Specifications */}
      <div id="specs-section" className="px-[20px] lg:px-[100px] pb-16">
        <div className="bg-white border border-[#E5E5E5] rounded-xl p-6 lg:p-10">
          <h2 className="roboto-slab font-bold text-[22px] lg:text-[32px] text-[#5C9544] m-0">
            Key Features &amp; Specifications
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-6">
            <div>
              <h3 className="font-semibold text-lg m-0">Chassis &amp; Powertrain</h3>
              <ul className="mt-3 space-y-2 text-sm lg:text-base">
                <li className="flex justify-between border-b pb-2"><span>Model</span><span>Full‑Time 6x6 All‑Wheel Drive</span></li>
                <li className="flex justify-between border-b pb-2"><span>Engine</span><span>CAT C‑12 Diesel @ 410 HP</span></li>
                <li className="flex justify-between border-b pb-2"><span>Transmission</span><span>7‑Speed Allison Automatic</span></li>
                <li className="flex justify-between border-b pb-2"><span>Suspension</span><span>6‑Position Coil Over Spring</span></li>
                <li className="flex justify-between border-b pb-2"><span>Steering</span><span>Full Power Steering</span></li>
                <li className="flex justify-between border-b pb-2"><span>Tires</span><span>16.00R20 Michelin off‑road</span></li>
                <li className="flex justify-between border-b pb-2"><span>GVWR</span><span>62,000 lb</span></li>
                <li className="flex justify-between"><span>Axles</span><span>Front 16,000 • Middle 23,500 • Rear 25,500 lb</span></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg m-0">Water System</h3>
              <ul className="mt-3 space-y-2 text-sm lg:text-base">
                <li className="flex justify-between border-b pb-2"><span>Tank Capacity</span><span>4,000 gallons (epoxy‑coated)</span></li>
                <li className="flex justify-between border-b pb-2"><span>Pump</span><span>Berkley 4x3 / 750 GPM (hydraulic)</span></li>
                <li className="flex justify-between border-b pb-2"><span>Drive</span><span>Hot‑Shift PTO</span></li>
                <li className="flex justify-between border-b pb-2"><span>Spray System</span><span>5 cab‑controlled heads</span></li>
                <li className="flex justify-between border-b pb-2"><span>Rear Spray Bar</span><span>8 ft, cab‑controlled</span></li>
                <li className="flex justify-between border-b pb-2"><span>Suction Plumbing</span><span>Canal fill ready</span></li>
                <li className="flex justify-between"><span>Optional</span><span>Pre‑plumbed for cannon or 7th head</span></li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
            <div>
              <h3 className="font-semibold text-lg m-0">Operator &amp; Safety Enhancements</h3>
              <ul className="mt-3 space-y-2 text-sm lg:text-base">
                <li>Cab with AC, heat, and air‑ride driver’s seat</li>
                <li>On‑Road / Off‑Road Mode Selector</li>
                <li>Full LED night package, front & rear beacons</li>
                <li>Full air brakes with ABS</li>
                <li>Custom paint colors available</li>
                <li>Backup Camera & Fire Extinguisher</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg m-0">Applications</h3>
              <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm lg:text-base">
                {[
                  { label: "Dust Suppression", iconSrc: "/dustSuppression.png" },
                  { label: "Civil Construction", iconSrc: "/civilConstruction.png" },
                  { label: "Mining & Quarrying", iconSrc: "/miningQuarrying.png" },
                  { label: "Pipeline", iconSrc: "/pipline.png" },
                  { label: "Wildfire Support", iconSrc: "/wildfireSupport.png" },
                  { label: "Disaster Relief", iconSrc: "/disasterRelief.png" },
                ].map(({ label, iconSrc }) => (
                  <ApplicationTag key={label} label={label} iconSrc={iconSrc} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-4 sm:px-[20px] lg:px-[100px] pb-12 sm:pb-16 lg:pb-24">
        <div className="bg-[#5C9544] rounded-2xl p-6 sm:p-8 lg:p-12 text-white flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left">
            <h2 className="roboto-slab font-bold text-[20px] sm:text-[24px] lg:text-[36px] m-0">Ready to add an Oshkosh water truck to your fleet?</h2>
            <p className="mt-2 opacity-90 text-sm sm:text-base">Talk with our team about availability, pricing, and custom configurations.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button
              onClick={() => push("/contact-us")}
              className="rounded-full bg-white text-black py-[10px] px-[28px] lg:py-[14px] lg:px-[50px] text-sm sm:text-base w-full sm:w-auto"
            >
              Contact Us
            </button>
            <a
              href="tel:+18174221393"
              className="rounded-full border border-white text-white py-[10px] px-[28px] lg:py-[14px] lg:px-[50px] text-sm sm:text-base text-center w-full sm:w-auto"
            >
              Call +1‑817‑422‑1393
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


