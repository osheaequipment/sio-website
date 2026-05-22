"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
const SHADOW = { filter: "drop-shadow(0px 0px 10px white)" };

export default ({ children }) => {
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  const closeDrawer = () => setIsDrawerOpen(false);
  
  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isDrawerOpen]);
  
  // Close drawer when pathname changes
  useEffect(() => {
    setIsDrawerOpen(false);
  }, [pathname]);
  return (
    <div>
      <div
        className={`w-full px-[20px] lg:px-[100px] py-[20px] flex justify-between items-center  ${
          pathname === "/" ? "absolute" : "bg-white"
        } z-10 nav-bar`}
      >
        <div>
          <Link href="/" prefetch={true}>
            <img style={SHADOW} className="hidden cursor-pointer lg:block" src="/logo.svg" alt="O'Shea Equipment Company - Amphibious Excavators and Marsh Buggies" />
          </Link>
          <Link href="/" prefetch={true}>
            <img style={SHADOW} className="lg:hidden cursor-pointer" src="/logo-mv.svg" alt="O'Shea Equipment Company - Amphibious Excavators and Marsh Buggies" />
          </Link>
        </div>
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/current-inventory"
            prefetch={true}
            className={`py-[8px] px-[16px] text-sm lg:py-[14px] lg:px-[30px] rounded-full lg:text-lg capitalize whitespace-nowrap bg-transparent ${
              pathname === "/" ? "border border-white text-white" : "border border-black text-black"
            }`}
          >
            Current Inventory
          </Link>
          <Link
            href="/water-truck"
            prefetch={true}
            className={`py-[8px] px-[16px] text-sm lg:py-[14px] lg:px-[30px] rounded-full lg:text-lg capitalize whitespace-nowrap bg-transparent ${
              pathname === "/" ? "border border-white text-white" : "border border-black text-black"
            }`}
          >
            Water Trucks
          </Link>
          <Link
            href="/current-inventory?category=Amphibious Excavator"
            prefetch={true}
            className={`py-[8px] px-[16px] text-sm lg:py-[14px] lg:px-[30px] rounded-full lg:text-lg capitalize whitespace-nowrap bg-transparent ${
              pathname === "/" ? "border border-white text-white" : "border border-black text-black"
            }`}
          >
            Amphibious Excavators
          </Link>
        </div>
        <div className="flex items-center gap-2 lg:gap-3">
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="lg:hidden p-2 rounded-full"
            aria-label="Open menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{ color: pathname === "/" ? "white" : "#333" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <Link
            href="/contact-us"
            prefetch={true}
            className={`hidden lg:inline-block py-[8px] px-[20px] text-sm lg:py-[14px] lg:px-[50px] rounded-full lg:text-xl capitalize bg-transparent ${
              pathname === "/" ? "border border-white text-white" : "border border-black text-black"
            }`}
          >
            Request a quote
          </Link>
        </div>
        
        {/* Overlay */}
        {isDrawerOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300"
            onClick={closeDrawer}
          />
        )}
        
        {/* Drawer */}
        <div
          className={`fixed top-0 right-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
            isDrawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold">Menu</h2>
              <button
                onClick={closeDrawer}
                className="p-2 rounded-full hover:bg-gray-100"
                aria-label="Close menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            
            {/* Navigation Links */}
            <nav className="flex flex-col gap-4 flex-1">
              <Link
                href="/current-inventory"
                prefetch={true}
                onClick={closeDrawer}
                className="py-3 px-4 rounded-full bg-[#5C9544] text-white text-center capitalize font-medium"
              >
                Current Inventory
              </Link>
              <Link
                href="/water-truck"
                prefetch={true}
                onClick={closeDrawer}
                className="py-3 px-4 rounded-full bg-[#5C9544] text-white text-center capitalize font-medium"
              >
                Water Trucks
              </Link>
              <Link
                href="/current-inventory?category=Amphibious Excavator"
                prefetch={true}
                onClick={closeDrawer}
                className="py-3 px-4 rounded-full bg-[#5C9544] text-white text-center capitalize font-medium"
              >
                Amphibious Excavators
              </Link>
              <Link
                href="/contact-us"
                prefetch={true}
                onClick={closeDrawer}
                className="py-3 px-4 rounded-full bg-[#5C9544] text-white text-center capitalize font-medium mt-auto"
              >
                Request a Quote
              </Link>
            </nav>
          </div>
        </div>
      </div>
      {children}
      <div className="hidden md:flex items-center gap-8 lg:gap-20 p-8 lg:p-24">
        <div className="w-full flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 lg:gap-0">
          <div>
            <Link href="/" prefetch={true}>
              <img className="cursor-pointer" src="/logo-footer.png" alt="O'Shea Equipment Company logo" />
            </Link>
          </div>
          <div className="hidden xl:block">
            <img src="/footer-image.png" alt="O'Shea Equipment Company amphibious excavator at work" />
          </div>
          <div className="lg:pr-8 xl:pr-28 text-center lg:text-left">
            <div className="mb-6 flex gap-5 items-center justify-center lg:justify-start">
              <Link href="/water-truck" prefetch={true} className="capitalize hover:underline text-sm lg:text-base cursor-pointer">
                Water truck
              </Link>
              <Link href="/current-inventory" prefetch={true} className="capitalize hover:underline text-sm lg:text-base cursor-pointer">
                Current Inventory
              </Link>
            </div>
            <a href="https://maps.app.goo.gl/ahQMjFPMQakkjWot5?g_st=ac" className="text-sm lg:text-base">
              <span className="font-semibold">Office Address:</span>
              <br />
              16915 Walden Rd. Suite 310
              <br />
              Montgomery, TX 77356
            </a>
            <div className="mt-5 text-sm lg:text-base">
              <span className="font-semibold">Email:</span>
              <br />
              <a href="mailto:shamus@osheaequipment.com">
                shamus@osheaequipment.com
              </a>
            </div>
            <div className="mt-5 text-sm lg:text-base">
              <span className="font-semibold">Phone:</span>
              <br />
              <a href="tel:+18174221393">+1-817-422-1393</a>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden pb-12 mt-12 px-4 sm:px-5">
        <div className="flex justify-center sm:justify-start">
          <Link href="/" prefetch={true}>
            <img className="cursor-pointer max-w-[120px] sm:max-w-none" src="/logo-footer.png" alt="O'Shea Equipment Company logo - amphibious excavators and marsh buggies" />
          </Link>
        </div>
        <div className="mt-6 sm:mt-8">
          <div className="flex gap-4 sm:gap-5 mb-6 items-center justify-center sm:justify-start">
            <Link href="/water-truck" prefetch={true} className="capitalize hover:underline text-sm sm:text-base cursor-pointer">Water truck</Link>
            <Link href="/current-inventory" prefetch={true} className="capitalize hover:underline text-sm sm:text-base cursor-pointer">Current Inventory</Link>
          </div>
          <a href="https://maps.app.goo.gl/ahQMjFPMQakkjWot5?g_st=ac" className="text-sm sm:text-base block">
            <span className="font-semibold">Office Address:</span>
            <br />
            16915 Walden Rd. Suite 310
            <br />
            Montgomery, TX 77356
          </a>
          <div className="mt-4 sm:mt-5 text-sm sm:text-base">
            <span className="font-semibold">Email:</span>
            <br />
            <a href="mailto:shamus@osheaequipment.com">
              shamus@osheaequipment.com
            </a>
          </div>
          <div className="mt-4 sm:mt-5 text-sm sm:text-base">
            <span className="font-semibold">Phone:</span>
            <br />
            <a href="tel:+18174221393">+1-817-422-1393</a>
          </div>
        </div>
      </div>
    </div>
  );
};
