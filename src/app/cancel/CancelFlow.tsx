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

type StepProps = {
  nextStep: (data?: boolean) => void;
  prevStep: () => void;
  form?: FormType;
  setForm?: React.Dispatch<React.SetStateAction<FormType>>;
};

const steps = [
  StepJobQuestion as React.ComponentType<StepProps>,      // 0
  StepVisaHelp as React.ComponentType<StepProps>,         // 1
  StepWithMM as React.ComponentType<StepProps>,           // 2
  StepWithoutMM as React.ComponentType<StepProps>,        // 3
  StepOffer as React.ComponentType<StepProps>,            // 4
  StepOfferAccepted as React.ComponentType<StepProps>,    // 5
  StepOfferDeclined as React.ComponentType<StepProps>,    // 6
  StepTeamMemberCard as React.ComponentType<StepProps>,   // 7
  StepError as React.ComponentType<StepProps>,            // 8
  StepEnd as React.ComponentType<StepProps>               // 9
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
      const hasJob = Boolean(data);
      setForm(prev => ({ ...prev, gotJob: hasJob }));
      setStep(hasJob ? 1 : 4); // If no job, skip to offer
    } else if (step === 1) { // Visa help (only shown if they got a job)
      setForm(prev => ({ ...prev, visaHelp: data }));
      setStep(data ? 2 : 3);
    } else if (step === 2) { // WithMM
      setForm(prev => ({ ...prev, withMM: data }));
      setStep(4);
    } else if (step === 3) { // WithoutMM
      setForm(prev => ({ ...prev, withMM: data }));
      setStep(4);
    } else if (step === 4) { // Offer
      setForm(prev => ({ ...prev, offerAccepted: data }));
      setStep(data ? 5 : 6);
    } else if (step === 6) { // OfferDeclined
      // Skip team member card if user didn't get a job (which means they didn't get visa help)
      const skipToEnd = !form.gotJob || !form.visaHelp;
      setStep(skipToEnd ? 9 : 7);
    } else if (step === 7) { // TeamMemberCard
      setStep(9);
    } else if (step === 8) { // Error
      setStep(0);
    }
  };

  const prevStep = () => {
    setStep((s) => Math.max(s - 1, 0));
  };

  const StepComponent = steps[step];

  // List of step indices that need form and setForm props
  const stepsWithForm = [4, 5, 6, 7, 9]; // Offer, OfferAccepted, OfferDeclined, TeamMemberCard, End

  const props: StepProps = stepsWithForm.includes(step)
    ? {
        form,
        setForm,
        nextStep,
        prevStep,
      }
    : {
        nextStep,
        prevStep,
      };

  return (
    <div className="w-full max-w-md p-6 bg-white rounded-lg shadow">
      <StepComponent {...props} />
    </div>
  );
}