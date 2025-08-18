import React from "react";

import type { FormType } from "../CancelFlow";

type Props = {
  form: FormType;
  setForm: React.Dispatch<React.SetStateAction<FormType>>;
  nextStep: (data?: any) => void;
  prevStep: () => void;
};

export default function StepOffer({ form, setForm, nextStep, prevStep }: Props) {
  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="text-xl font-bold mb-4 text-gray-900">Special Offer</h2>
      <p className="mb-4 text-gray-700">Stay and save! Get $10 off your monthly plan.</p>
      <div className="space-x-4">
        <button onClick={() => nextStep(true)} className="px-4 py-2 bg-[#8952fc] text-white rounded-lg">Accept Offer</button>
        <button onClick={() => nextStep(false)} className="px-4 py-2 bg-gray-100 text-gray-900 rounded-lg">Decline Offer</button>
      </div>
      <button onClick={prevStep} className="mt-4 text-sm text-gray-700 underline">Back</button>
    </div>
  );
}
