import React, { useState } from "react";

import type { FormType } from "../CancelFlow";
type Props = {
  form: FormType;
  setForm: React.Dispatch<React.SetStateAction<FormType>>;
  nextStep: () => void;
  prevStep: () => void;
};


const reasons = [
    "Too expensive",
    "Not using enough",
    "Found a better alternative",
    "Just testing things out",
    "Other"
];


export default function StepReason({ form, setForm, nextStep, prevStep }: Props) {
const [customReason, setCustomReason] = useState("");

const handleSelect = (reason: string) => {
  setForm((prev: FormType) => ({ ...prev, reason }));
    if (reason !== "Other") nextStep();
};

const handleCustomSubmit = () => {
    if(customReason.trim()) {
  setForm((prev: FormType) => ({ ...prev, reason: customReason }));
        nextStep();
    }
};


return (
  <div className="flex flex-col items-center text-center">
    <h2 className="text-xl font-bold mb-4 text-gray-900">Why are you cancelling?</h2>
    <div className="space-y-3 w-full max-w-xs mb-6">
      {reasons.map((reason) => (
        <button
          key={reason}
          onClick={() => handleSelect(reason)}
          className="w-full px-4 py-2 bg-white text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100"
        >
          {reason}
        </button>
      ))}
    </div>
    {form.reason === "Other" && (
      <div className="w-full max-w-xs mb-4">
        <input
          type="text"
          placeholder="Please specify"
          value={customReason}
          onChange={(e) => setCustomReason(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg mb-2 text-gray-900 bg-white"
        />
        <button
          onClick={handleCustomSubmit}
          className="w-full px-4 py-2 bg-[#8952fc] text-white rounded-lg"
        >
          Continue
        </button>
      </div>
    )}
    <button
      onClick={prevStep}
      className="mt-2 text-sm text-gray-700 underline"
    >
      Back
    </button>
  </div>
);

}