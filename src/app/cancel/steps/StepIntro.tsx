import React from "react";
import type { FormType } from "../CancelFlow";
import Image from "next/image";
type Props = {
  form: FormType;
  setForm: React.Dispatch<React.SetStateAction<FormType>>;
  nextStep: () => void;
};

export default function StepIntro({ nextStep }: Props) {

    return (
    <div className="flex flex-col items-center text-center">
        <Image
            src="/main-image.png"
            alt="Main"
            width={128}
            height={128}
            className="mb-6 rounded-full object-cover"
        />
      <h2 className="text-2xl font-bold mb-2">Cancel Subscription</h2>
      <p className="mb-6 text-gray-600">
        We&apos;re sorry to see you go. This quick process will help you cancel your subscription.
      </p>
      <button
        onClick={nextStep}
        className="px-6 py-3 bg-[#8952fc] text-white rounded-lg font-medium hover:bg-[#7b40fc] transition-colors"
      >
        Start Cancellation
      </button>
        </div>
    );

}