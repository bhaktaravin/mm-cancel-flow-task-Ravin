import React from "react";

type Proprs = {
    nextStep: () => void;
}

export default function StepIntro({ nextStep }: Proprs) {

    return (
    <div className="flex flex-col items-center text-center">
      {/* Replace src with your main image path */}
      <img
        src="/main-image.png"
        alt="Main"
        className="w-32 h-32 mb-6 rounded-full object-cover"
      />
      <h2 className="text-2xl font-bold mb-2">Cancel Subscription</h2>
      <p className="mb-6 text-gray-600">
        We're sorry to see you go. This quick process will help you cancel your subscription.
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