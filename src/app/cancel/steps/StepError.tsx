import React from "react";

import type { FormType } from "../CancelFlow";

type Props = {
  form: FormType;
  setForm: React.Dispatch<React.SetStateAction<FormType>>;
  nextStep: (data?: any) => void;
  prevStep: () => void;
};

export default function StepError({ form, setForm, nextStep, prevStep }: Props) {
  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="text-xl font-bold mb-4 text-red-600">Error</h2>
      <p className="mb-6 text-gray-700">Something went wrong. Please try again.</p>
      <button onClick={nextStep} className="px-6 py-3 bg-gray-100 text-red-600 rounded-lg font-medium hover:bg-gray-200 transition-colors">Retry</button>
    </div>
  );
}
