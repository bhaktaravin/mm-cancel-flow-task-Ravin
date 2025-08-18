import React from "react";

import type { FormType } from "../CancelFlow";
type Props = {
  form: FormType;
  nextStep: () => void;
  prevStep: () => void;
};

export default function StepConfirm({ form, nextStep, prevStep }: Props) {
  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="text-xl font-bold mb-4">Confirm Your Choice</h2>
      <div className="mb-4 text-gray-700">
        <div>
          <span className="font-semibold">Reason:</span> {form.reason}
        </div>
        <div>
          <span className="font-semibold">Downsell Variant:</span> {form.downsellVariant ?? "N/A"}
        </div>
        <div>
          <span className="font-semibold">Accepted Downsell:</span>{" "}
          {form.acceptedDownsell === null
            ? "N/A"
            : form.acceptedDownsell
            ? "Yes"
            : "No"}
        </div>
      </div>
      <button
        onClick={nextStep}
        className="w-full px-4 py-2 bg-[#8952fc] text-white rounded-lg mb-2"
      >
        Confirm & Submit
      </button>
      <button
        onClick={prevStep}
        className="mt-2 text-sm text-gray-500 underline"
      >
        Back
      </button>
    </div>
  );
}