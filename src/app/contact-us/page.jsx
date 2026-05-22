"use client";
import PhoneInput from "@/components/PhoneInput";
import { Input, Select, message as Message, Button } from "antd";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export default () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    company: "",
    location: "",
    address: "",
    message: "",
    topic: "",
  });
  const [error, setError] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const valueSetter = (value, type) => {
    setForm((prev) => ({ ...prev, [type]: value }));
    if (error[type]) {
      setError((prev) => ({ ...prev, [type]: false }));
    }
  };

  const sendEmail = async () => {
    const { name, phone, address, message, topic } = form;

    if (!name || !phone || !address || !message || !topic) {
      Message.error("Highlighted fields cannot be empty");
      return setError({
        name: !name,
        phone: !phone,
        address: !address,
        message: !message,
        topic: !topic,
      });
    }

    try {
      setIsSubmitting(true);
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        form,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY,
        }
      );
      setForm({
        name: "",
        phone: "",
        company: "",
        location: "",
        address: "",
        message: "",
        topic: "",
      });
      Message.success("Email sent successfully");
    } catch (e) {
      Message.error("Something went wrong!");
      console.log("error", e);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-4 sm:p-8 md:p-12 lg:p-20">
      <div className="w-full md:flex gap-6 lg:gap-10">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <h1 className="font-bold text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] mb-4 m-0">Contact O&apos;Shea Equipment Company</h1>
          <div className="text-sm sm:text-base text-[16px]">
            Contact us to request a quote for amphibious excavator rentals, marsh buggy sales,
            Oshkosh 6x6 water trucks, or dredging equipment. We also handle service, parts, and custom builds.
          </div>
          <div className="mt-6 md:mt-8 font-medium text-[#5C9544]">
            O'Shea Equipment Company
          </div>
          <div className="mt-6 md:mt-8 text-sm sm:text-base">
            <a href="https://maps.app.goo.gl/ahQMjFPMQakkjWot5?g_st=ac">
              <span className="font-semibold">Address: </span>
              16915 Walden Rd. Suite 310
              <br />
              Montgomery, TX 77356
            </a>
            <div className="mt-4">
              <span className="font-semibold">Email: </span>
              <a href="mailto:shamus@osheaequipment.com">
                shamus@osheaequipment.com
              </a>
            </div>
            <div className="mt-4">
              <span className="font-semibold">Phone: </span>
              <a href="tel:+18174221393">+1-817-422-1393</a>
            </div>
          </div>
        </div>
        <div className="md:w-2/3 md:mt-0">
          <div>
            <div className="font-medium">
              Topic<span className="text-[#FF0000]">*</span>
            </div>
            <div className="mt-2">
              <Input
                value={form.topic}
                onChange={(e) => valueSetter(e.target.value, "topic")}
                placeholder="Enter Topic"
                className="w-full"
                status={error?.topic && "error"}
                size="large"
              />
            </div>
          </div>
          <div className="mt-5">
            <div className="font-medium">
              Name<span className="text-[#FF0000]">*</span>
            </div>
            <div className="mt-2">
              <Input
                value={form.name}
                onChange={(e) => valueSetter(e.target.value, "name")}
                placeholder="Enter your name"
                className="w-full"
                status={error?.name && "error"}
                size="large"
              />
            </div>
          </div>
          <div className="mt-5">
            <div className="font-medium">
              Address<span className="text-[#FF0000]">*</span>
            </div>
            <div className="mt-2">
              <Input
                value={form.address}
                onChange={(e) => valueSetter(e.target.value, "address")}
                placeholder="Enter your address"
                className="w-full"
                status={error?.address && "error"}
                size="large"
              />
            </div>
          </div>
          <div className="mt-5">
            <div className="font-medium">
              Phone Number<span className="text-[#FF0000]">*</span>
            </div>
            <div className="mt-2">
              <PhoneInput
                value={form.phone}
                onChange={(value) => valueSetter(value, "phone")}
                placeholder="Enter your phone number"
                className={`w-full ${error?.phone && "phone-error"}`}
              />
            </div>
          </div>
          <div className="mt-5">
            <div className="font-medium">Company Name</div>
            <div className="mt-2">
              <Input
                value={form.company}
                onChange={(e) => valueSetter(e.target.value, "company")}
                placeholder="Enter your company name"
                className="w-full"
                size="large"
              />
            </div>
          </div>
          <div className="mt-5">
            <div className="font-medium">Project Location</div>
            <div className="mt-2">
              <Input
                value={form.location}
                onChange={(e) => valueSetter(e.target.value, "location")}
                placeholder="Enter the project location"
                className="w-full"
                size="large"
              />
            </div>
          </div>
          <div className="mt-5">
            <div className="font-medium">
              Message<span className="text-[#FF0000]">*</span>
            </div>
            <div className="mt-2">
              <textarea
                value={form.message}
                onChange={(e) => valueSetter(e.target.value, "message")}
                rows={4}
                className={`w-full p-3 border rounded-xl resize-none focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                  error.message && "error-border"
                }`}
                placeholder="Type your message"
              />
            </div>
          </div>
          <div className="mt-8 md:mt-16">
            <Button
              onClick={sendEmail}
              className="no-hover w-full sm:w-auto sm:float-right rounded-full text-base sm:text-lg lg:text-xl capitalize text-white bg-[#5C9544] py-3 sm:py-[14px] px-8 sm:px-[50px] h-auto sm:h-[53px]"
              loading={isSubmitting}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
