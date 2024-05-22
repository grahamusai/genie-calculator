"use client";
import { useState } from "react";
import { useFormspark } from "@formspark/use-formspark";
import { useGlobalState } from "../libs/global_state";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion"

const Details = () => {
  const searchParams = useSearchParams();
  const broker = searchParams.get("broker");

  const [submit, submitting] = useFormspark({
    formId: "opxueG6Xb",
  });
  const [businessname, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const {} = useGlobalState();

  return (
    <div className="max-w-md mx-auto mt-5 p-6 bg-opacity-30 rounded-md shadow-md text-white">
      <h2 className="text-2xl font-semibold mb-4">Business Details</h2>
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          await submit({ businessname, owner, phone, email, amount, broker });
          alert(
            "Your email has been submitted successfully \n \n A funding specialist will be in touch with you shortly"
          );
          window.location.href = 'https://getfunds.co.za/';
        }}
      >
        <div className="mb-4">
          <label
            className="block text-gray-200 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Business Name<span className="text-rose-500">*</span>
          </label>
          <input
            className="w-full border-2 border-[#e0cb70] rounded-full px-5 py-3 mt-2  bg-slate-800 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-200 focus:shadow-2xl focus:border-transparent duration-100"
            id="businessname"
            name="business"
            type="text"
            placeholder="Your Business Name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-200 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Owner Name<span className="text-rose-500">*</span>
          </label>
          <input
            className="w-full border-2 border-[#e0cb70] rounded-full px-5 py-3 mt-2  bg-slate-800 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-200 focus:shadow-2xl focus:border-transparent duration-100"
            id="owner"
            name="owner"
            type="text"
            placeholder="John Doe"
            onChange={(e) => setOwner(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-200 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Mobile Number<span className="text-rose-500">*</span>
          </label>
          <input
            className="w-full border-2 border-[#e0cb70] rounded-full px-5 py-3 mt-2  bg-slate-800 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-200 focus:shadow-2xl focus:border-transparent duration-100"
            id="phone"
            type="number"
            name="phone"
            placeholder="062456789"
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-200 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email<span className="text-rose-500">*</span>
          </label>
          <input
            className="w-full border-2 border-[#e0cb70] rounded-full px-5 py-3 mt-2 focus:placeholder-opacity-0 bg-slate-800 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-200 focus:shadow-2xl focus:border-transparent duration-100"
            id="email"
            type="email"
            name="email"
            placeholder="john.doe@example.com"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-200 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Amount Requested<span className="text-rose-500">*</span>
          </label>
          <input
            className="w-full border-2 border-[#e0cb70] rounded-full  px-5 py-3 mt-2 bg-slate-800 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-200 focus:shadow-2xl focus:border-transparent duration-100"
            id="amount"
            type="number"
            name="amount"
            placeholder="100000"
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-200 text-sm font-bold mb-2">
            What is most important to you?
            <span className="text-rose-500">*</span>
          </label>
          <div>
            <label className="inline-flex items-center mr-6">
              <input
                type="radio"
                className=" text-indigo-600 bg-slate-800"
                name="gender"
                value="male"
              />
              <span className="ml-2">Max Amount</span>
            </label>{" "}
            <br />
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio text-indigo-600"
                name="gender"
                value="female"
              />
              <span className="ml-2">Cost</span>
            </label>{" "}
            <br />
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio text-indigo-600"
                name="gender"
                value="female"
              />
              <span className="ml-2">Speed</span>
            </label>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <button
            className=" w-full bg-[#e0cb70] mt-3 p-3 text-slate-800 text-2xl font-bold rounded-full flex items-center justify-center"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Details;