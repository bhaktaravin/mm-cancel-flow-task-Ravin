import React from "react";
import Image from "next/image";
import type { FormType } from "../CancelFlow";

type Props = {
  form: FormType;
  setForm: React.Dispatch<React.SetStateAction<FormType>>;
  nextStep: (data?: any) => void;
  prevStep: () => void;
};

export default function StepOfferDeclined({ form, setForm, nextStep, prevStep }: Props) {
  return (
    <div className="flex flex-row items-center justify-between text-left p-6">
      <div className="flex-1 pr-8">
        <h2 className="text-xl font-bold mb-4 text-gray-900">Offer Declined</h2>
        <p className="mb-6 text-gray-700">Your cancellation will be processed.</p>
        <button onClick={nextStep} className="px-6 py-3 bg-gray-100 text-[#8952fc] rounded-lg font-medium hover:bg-gray-200 transition-colors">Continue</button>
      </div>
      <div className="flex-shrink-0">
        <Image
          src="/empire-state-compressed.jpg"
          alt="Empire State Building"
          width={200}
          height={200}
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  );
}