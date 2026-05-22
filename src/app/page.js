"use client"
import { useRouter } from "next/navigation";

export default function Home() {
  const { push } = useRouter();
  return (
    <div className="relative">
      <div className="relative w-full h-screen flex justify-center items-center banner">
        <video
          src="/bannerVideo.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="hidden lg:block w-full h-full absolute top-0 left-0 object-cover"
        />
        <video
          src="/bannerVideo-mv.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="lg:hidden w-full h-full absolute top-0 left-0 object-cover"
        />
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
        ></div>

        <div className="w-full px-4 sm:w-4/5 lg:w-3/5 z-10 text-white text-center">
          <h1 className="hidden lg:block font-bold roboto-slab text-[58px] xl:text-[72px] m-0">
          Amphibious Excavators &amp; Marsh Buggies
          </h1>
          <h1 className="lg:hidden font-bold roboto-slab text-[28px] sm:text-[32px] md:text-[42px] leading-[1.2] m-0">
          Amphibious
            <br /> Excavators &amp;
            <br /> Marsh Buggies
          </h1>
          <p className="text-base sm:text-[18px] md:text-[32px] xl:text-[40px] mt-4 leading-10">
            Safety, Efficiency, Purpose Built &mdash; built for dredging, wetlands, and the most demanding job sites
          </p>
        </div>
        <div className="absolute w-full bottom-20 lg:bottom-8 flex justify-center">
          <img className="animate-bounce" src="/arrow.svg" />
        </div>
      </div>
      
      <div className="hidden xl:flex items-center justify-center py-20">
        <div className="flex items-center gap-20">
          <img src="/soi-img.png" className="w-[800px] h-[500px]" alt="O'Shea Equipment Company amphibious excavator at work on a wetland job site" />
          <div>
            <img src="/digger.svg" alt="Amphibious excavator icon" />
            <h2 className="roboto-slab font-bold text-[42px] mt-4 m-0">
              Amphibious Excavator &amp; Marsh Buggy Rentals
            </h2>
            <p className="mt-3 text-[16px] max-w-[500px]">
              A leader in reliable and cost-effective amphibious excavator and marsh buggy
              rentals, O&apos;Shea Equipment Company offers both standard reach
              solutions and custom-built long reach units for dredging, wetland construction,
              pipeline, and civil projects. Our team of experts is dedicated to helping you
              find the right equipment to complete your project safely and efficiently.
            </p>
            <button
              onClick={() => push("/current-inventory")}
              className="rounded-full text-xl capitalize text-white mt-16 bg-[#5C9544] py-[14px] px-[50px]"
            >
              See Current Inventory
            </button>
          </div>
        </div>
      </div>
      <div className="xl:hidden items-center justify-center">
        <div className="my-10">
          <div className="px-5">
            <img src="/digger.svg" alt="Amphibious excavator icon" />
            <h2
              style={{ lineHeight: "1.2" }}
              className="roboto-slab font-bold text-[28px] sm:text-[32px] md:text-[42px] m-0"
            >
              Amphibious Excavator &amp; Marsh Buggy Rentals
            </h2>
            <p className="mt-3 text-sm sm:text-[14px]">
              As global leaders in reliable and cost-effective amphibious
              excavators, marsh buggies, and long-reach attachments for dredging and wetland work,
              O&apos;Shea Equipment Company provides both general solutions and
              custom-built units. Our team of experts will help you find the
              right products to get your project started.{" "}
            </p>
            <button
              onClick={() => push("/contact-us")}
              className="rounded-full capitalize text-white mt-16 bg-[#5C9544] py-[8px] px-[20px] text-sm"
            >
              Request a quote
            </button>
          </div>
          <div className="w-full mt-14">
            <img className="w-full" src="/soi-img-mv.png" alt="O'Shea Equipment Company amphibious excavator on a job site" />
          </div>
        </div>
      </div>
      {/* Water Trucks promo section */}
      <div className="px-[20px] lg:px-[100px] py-16 bg-[#F6F6F6]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="roboto-slab font-bold text-[32px] lg:text-[42px] m-0">Oshkosh 6x6 Water Trucks</h2>
            <p className="mt-3 text-[#333] text-sm md:text-base lg:text-lg max-w-[600px]">
              Heavy-duty off-road water trucks engineered for dust suppression, soil compaction, pipeline support,
              wildfire response, and remote site support. Explore our Oshkosh MK23 6x6 builds with 4,000 gallon tanks
              and cab&#8209;controlled spray systems.
            </p>
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => push("/water-truck")}
                className="rounded-full text-white bg-[#5C9544] py-[10px] px-[28px] lg:py-[14px] lg:px-[50px]"
              >
                View Water Trucks
              </button>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden border border-[#E5E5E5] bg-[#F6F6F6]">
            <video
              src="/waterTruckBanner1.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-[260px] lg:h-[360px] object-cover"
            />
          </div>
        </div>
      </div>
      {/* About / What We Do — SEO-rich content section */}
      <section className="px-[20px] lg:px-[100px] py-12 lg:py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="roboto-slab font-bold text-[28px] sm:text-[32px] lg:text-[42px] m-0">
            About O&apos;Shea Equipment Company
          </h2>
          <p className="mt-4 text-[#333] text-sm md:text-base lg:text-lg">
            O&apos;Shea Equipment Company (OEC) is a specialty heavy equipment provider founded by
            <strong> Shamus O&apos;Shea</strong>. We specialize in <strong>amphibious excavators</strong>
            &mdash; also known as <strong>marsh buggies</strong> or swamp buggies &mdash; for use in
            <strong> dredging</strong>, wetland construction, environmental remediation, pipeline,
            and civil projects across the United States.
          </p>
          <p className="mt-4 text-[#333] text-sm md:text-base lg:text-lg">
            Our fleet includes Caterpillar amphibious excavators (CAT 307E2, 312E, 330) outfitted with
            EIK long-reach booms, sticks, ditching buckets, and AM-series amphibious undercarriages.
            We also offer <strong>Oshkosh MK23 6x6 off-road water trucks</strong> with 4,000 gallon tanks
            and cab-controlled spray systems for dust suppression, soil compaction, pipeline support,
            wildfire response, and disaster relief.
          </p>
          <p className="mt-4 text-[#333] text-sm md:text-base lg:text-lg">
            Based in Montgomery, Texas with units staged in Houston and Bryan, OEC ships nationwide.
            Whether you need a marsh buggy for a wetland mitigation project, a long-reach amphibious
            excavator for dredging, or a custom-built water truck for a remote job site, our team can help.
          </p>
        </div>
      </section>
      <div className="relative h-[420px] sm:h-[500px] lg:h-[600px] xl:h-[700px]">
        <img
          src="/sec-4.png"
          className="w-full h-full absolute top-0 left-0 object-cover"
          alt="Amphibious excavator and water truck inventory from O'Shea Equipment Company"
        />
        <div className="absolute top-6 left-6 sm:top-8 sm:left-8 lg:top-10 lg:left-10 bg-white px-6 py-6 sm:px-8 sm:py-8 lg:px-[80px] lg:py-[50px] max-w-[90%] sm:max-w-[70%] lg:max-w-none">
          <h2 className="font-bold text-[28px] sm:text-[32px] lg:text-[42px] roboto-slab m-0">
            Discover the Perfect
            <br /> Tools for Your Project
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-6 lg:mt-10 text-base lg:text-[21px]">
            <button
              onClick={() => push("/current-inventory")}
              className="rounded-full text-base lg:text-xl capitalize text-white bg-[#5C9544] py-3 lg:py-[14px] px-6 lg:px-[50px]"
            >
              See Current Inventory
            </button>
            <a
              href="/contact-us"
              className="py-3 lg:py-[14px] px-6 lg:px-[50px] bg-transparent border border-black rounded-full capitalize inline-block text-center text-base lg:text-xl"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
