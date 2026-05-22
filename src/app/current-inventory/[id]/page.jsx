"use client";

import React from "react";
import { useRouter } from "next/navigation";
import ConfirmCallModal from "@/components/ConfirmCallModal";
import { getListingById } from "../data";
import ImageCarousel from "@/components/ImageCarousel";

export default function InventoryDetail({ params }) {
  const { id } = params || {};
  const item = getListingById(id);
  const { push } = useRouter();
  const sellerPhoneText = item?.seller?.phone || "(817) 415-0311";
  const sellerPhoneDigits = (sellerPhoneText.match(/\d+/g) || []).join("");
  const sellerPhoneHref = sellerPhoneDigits
    ? `tel:+${sellerPhoneDigits.length === 10 ? "1" : ""}${sellerPhoneDigits}`
    : "tel:+18174150311";

  if (!item) {
    return (
      <div className="px-4 sm:px-[20px] lg:px-[100px] pt-20 sm:pt-24 lg:pt-[120px] pb-12 sm:pb-16">
        <p className="roboto-slab font-bold text-[24px] sm:text-[28px]">Listing not found</p>
      </div>
    );
  }

  const [open, setOpen] = React.useState(false);

  return (
    <div className="px-4 sm:px-[20px] lg:px-[100px] pt-20 sm:pt-24 lg:pt-[120px] pb-12 sm:pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        <div>
          <div className="rounded-md overflow-hidden border border-[#E5E5E5] bg-white">
            <ImageCarousel images={item.images} alt={item.title} heightClass="h-[280px] sm:h-[350px] lg:h-[420px]" roundedClass="rounded-md" />
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wide text-[#777]">{item.category}</p>
          <h1 className="roboto-slab font-bold text-[20px] sm:text-[24px] lg:text-[32px] mt-1 m-0">
            {item.title}
            {item.category === "Amphibious Excavator" ? " Amphibious Excavator / Marsh Buggy" : ""}
            {item.category === "Water Truck" ? " 6x6 Off-Road Water Truck" : ""}
          </h1>
          <div className="mt-4 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-[#555]">Price</span>
              <a href={sellerPhoneHref} className="font-semibold underline">{item.priceText}</a>
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="text-[#555]">Location</span>
              <span className="font-medium">{item.machineLocation || item.location}</span>
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="text-[#555]">Hours</span>
              <span className="font-medium">{item.specs?.hours?.toLocaleString?.() ?? item.hours?.toLocaleString?.() ?? "—"}</span>
            </div>
            {item?.monthly && (
              <div className="flex items-center justify-between mt-2">
                <span className="text-[#555]">Monthly</span>
                <span className="font-medium">{item.monthly}</span>
              </div>
            )}
            {item?.machineLocation && (
              <div className="mt-3 text-[#555]">
                <span className="font-semibold">Machine Location: </span>
                <span className="font-medium">{item.machineLocation}</span>
              </div>
            )}
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button onClick={() => push("/contact-us")} className="rounded-full text-white bg-[#5C9544] py-[10px] px-[28px] text-sm sm:text-base">
              Email Seller
            </button>
            <button onClick={() => setOpen(true)} className="rounded-full border border-black py-[10px] px-[28px] text-sm sm:text-base">
              {sellerPhoneText}
            </button>
          </div>

          {/* Specs */}
          <div className="mt-10">
            <h2 className="roboto-slab font-semibold text-[20px] m-0">General Specifications</h2>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              {item?.specs && (
                <>
                  <div className="flex justify-between border-b pb-2"><span>Year</span><span>{item.specs.year}</span></div>
                  <div className="flex justify-between border-b pb-2"><span>Manufacturer</span><span>{item.specs.manufacturer}</span></div>
                  {item.specs.model && (
                    <div className="flex justify-between border-b pb-2"><span>Model</span><span>{item.specs.model}</span></div>
                  )}
                  {item.specs.serialNumber && (
                    <div className="flex justify-between border-b pb-2"><span>Serial Number</span><span>{item.specs.serialNumber}</span></div>
                  )}
                  {item.specs.condition && (
                    <div className="flex justify-between border-b pb-2"><span>Condition</span><span>{item.specs.condition}</span></div>
                  )}
                  {item.specs.hours && (
                    <div className="flex justify-between border-b pb-2"><span>Hours</span><span>{item.specs.hours}</span></div>
                  )}
                </>
              )}
            </div>
          </div>

          {item.description && (
            <div className="mt-8">
              <h2 className="roboto-slab font-semibold text-[20px] m-0">Description</h2>
              <pre className="mt-3 whitespace-pre-wrap text-sm bg-[#FAFAFA] border border-[#EAEAEA] rounded-md p-4">{item.description}</pre>
            </div>
          )}

          {item.attachments && (
            <div className="mt-8">
              <h2 className="roboto-slab font-semibold text-[20px] m-0">Attachments</h2>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                {Object.entries(item.attachments).map(([k, v]) => (
                  <div key={k} className="flex justify-between border-b pb-2"><span>{k}</span><span>{v}</span></div>
                ))}
              </div>
            </div>
          )}

          {item.categorySpecific && (
            <div className="mt-8">
              <h2 className="roboto-slab font-semibold text-[20px] m-0">Category Specific</h2>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                {Object.entries(item.categorySpecific).map(([k, v]) => (
                  <div key={k} className="flex justify-between border-b pb-2"><span>{k}</span><span>{v}</span></div>
                ))}
              </div>
            </div>
          )}

          {item.chassis && (
            <div className="mt-8">
              <h2 className="roboto-slab font-semibold text-[20px] m-0">Chassis</h2>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                {Object.entries(item.chassis).map(([k, v]) => (
                  <div key={k} className="flex justify-between border-b pb-2"><span>{k}</span><span>{v}</span></div>
                ))}
              </div>
            </div>
          )}

          {item.interior && (
            <div className="mt-8">
              <h2 className="roboto-slab font-semibold text-[20px] m-0">Interior</h2>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                {Object.entries(item.interior).map(([k, v]) => (
                  <div key={k} className="flex justify-between border-b pb-2"><span>{k}</span><span>{v}</span></div>
                ))}
              </div>
            </div>
          )}

          {item.shipping && (
            <div className="mt-8">
              <h2 className="roboto-slab font-semibold text-[20px] m-0">Shipping Dimensions</h2>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                {Object.entries(item.shipping).map(([k, v]) => (
                  <div key={k} className="flex justify-between border-b pb-2"><span>{k}</span><span>{v}</span></div>
                ))}
              </div>
            </div>
          )}

          {item.seller && (
            <div className="mt-8">
              <h2 className="roboto-slab font-semibold text-[20px] m-0">Seller Information</h2>
              <div className="mt-3 text-sm space-y-1">
                <div className="flex justify-between border-b pb-2"><span>Seller</span><span>{item.seller.name}</span></div>
                <div className="flex justify-between border-b pb-2"><span>Contact</span><span>{item.seller.contact}</span></div>
                <div className="flex justify-between border-b pb-2"><span>Location</span><span>{item.seller.city}</span></div>
                {sellerPhoneText && (
                  <div className="flex justify-between border-b pb-2"><span>Phone</span><span><a href={sellerPhoneHref} className="underline">{sellerPhoneText}</a></span></div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 sm:mt-12">
        <button onClick={() => push("/current-inventory")} className="underline text-sm sm:text-base">Back to inventory</button>
      </div>

      <ConfirmCallModal
        open={open}
        phoneText={sellerPhoneText}
        onClose={() => setOpen(false)}
        onConfirm={() => {
          setOpen(false);
          window.location.href = sellerPhoneHref;
        }}
      />
    </div>
  );
}


