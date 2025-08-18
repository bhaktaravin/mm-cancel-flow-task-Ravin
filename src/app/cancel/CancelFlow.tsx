"use client";

import { useState } from "react";
import StepJobQuestion from "./steps/StepJobQuestion";
import StepVisaHelp from "./steps/StepVisaHelp";
import StepWithMM from "./steps/StepWithMM";
import StepWithoutMM from "./steps/StepWithoutMM";
import StepOffer from "./steps/StepOffer";
import StepOfferAccepted from "./steps/StepOfferAccepted";
import StepOfferDeclined from "./steps/StepOfferDeclined";
import StepError from "./steps/StepError";
import StepTeamMemberCard from "./steps/StepTeamMemberCard";
import StepEnd from "./steps/StepEnd";

export type FormType = {
  reason: string;
  downsellVariant: "A" | "B" | null;
  acceptedDownsell: boolean | null;
  gotJob?: boolean | null;
  visaHelp?: boolean | null;
  withMM?: boolean | null;
  offerAccepted?: boolean | null;
  error?: boolean;
};

const steps = [
  StepJobQuestion,      // 0
  StepVisaHelp,         // 1
  StepWithMM,           // 2
  StepWithoutMM,        // 3
  StepOffer,            // 4
  StepOfferAccepted,    // 5
  StepOfferDeclined,    // 6
  StepTeamMemberCard,   // 7
  StepError,            // 8
  StepEnd               // 9
];


export default function CancelFlow() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormType>({
    reason: '',
    downsellVariant: null,
    acceptedDownsell: null,
    gotJob: null,
    visaHelp: null,
    withMM: null,
    offerAccepted: null,
    error: false
  });

  // Navigation logic for branching
  const nextStep = (data?: boolean) => {
    if (step === 0) { // Job question
      setForm((prev) => ({ ...prev, gotJob: data }));
      setStep(1);
    } else if (step === 1) { // Visa help
      setForm((prev) => ({ ...prev, visaHelp: data }));
      setStep(data ? 2 : 3); // If got help, go to WithMM, else WithoutMM
    } else if (step === 2) { // WithMM
      setForm((prev) => ({ ...prev, withMM: data }));
      setStep(4); // Go to offer
    } else if (step === 3) { // WithoutMM
      setForm((prev) => ({ ...prev, withMM: data }));
      setStep(4); // Go to offer
    } else if (step === 4) { // Offer
      setForm((prev) => ({ ...prev, offerAccepted: data }));
      setStep(data ? 5 : 6); // If accepted, go to OfferAccepted, else OfferDeclined
    } else if (step === 6) { // OfferDeclined
      // If user got visa help, show team member card, else go to end
      setStep(form.visaHelp ? 7 : 9);
    } else if (step === 7) { // TeamMemberCard
      setStep(9); // End
    } else if (step === 8) { // Error
      setStep(0); // Retry from start
    }
  };

  const prevStep = () => {
    setStep((s) => Math.max(s - 1, 0));
  };

  const StepComponent = steps[step];


  // List of step indices that need form and setForm props
  const stepsWithForm = [4, 5, 6]; // Example: Offer, OfferAccepted, OfferDeclined

  return (
    <div className="w-full max-w-md p-6 bg-white rounded-lg shadow">
      <StepComponent
        {...(stepsWithForm.includes(step) ? { form, setForm } : {})}
        nextStep={nextStep}
        prevStep={prevStep}
      />
    </div>
  );
}