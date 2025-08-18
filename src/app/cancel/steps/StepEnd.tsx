import React from "react";

import type { FormType } from "../CancelFlow";

type Props = {
  form: FormType;
  setForm: React.Dispatch<React.SetStateAction<FormType>>;
  nextStep: (data?: any) => void;
  prevStep: () => void;
};

export default function StepEnd({ form, setForm, nextStep, prevStep }: Props) {
  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="text-2xl font-bold mb-4 text-[#8952fc]">Cancellation Complete</h2>
      <p className="mb-6 text-gray-700">Your request has been processed. We&apos;re sorry to see you go!</p>
      <button className="px-6 py-3 bg-gray-100 text-[#8952fc] rounded-lg font-medium hover:bg-gray-200 transition-colors">Return to Home</button>
    </div>
  );
}
