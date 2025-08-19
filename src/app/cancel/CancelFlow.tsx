'use client';

import React, { useState } from "react";

import StepJobQuestion from "./steps/StepJobQuestion";
import StepOffer from "./steps/StepOffer";
import StepOneSurvery from "./steps/survey/StepOneSurvery";
import StepTwpSurvery from "./steps/survey/StepTwpSurvery";
import StepThreeSurvery from "./steps/survey/StepThreeSurvery";
import StepReason from "./steps/StepReason";
import StepEnd from "./steps/StepEnd";

import ReasonTooExpensiveModal from "./steps/reasons/ReasonTooExpensiveModal";
import ReasonPlatformNotHelpful from "./steps/reasons/ReasonPlatformNotHelpful";
import ReasonsNotEnoughJobsModal from "./steps/reasons/ReasonsNotEnoughJobsModal";
import ReasonOtherModal from "./steps/reasons/ReasonOtherModal";
import ReasonDecidedNotToMoveModal from "./steps/reasons/ReasonDecidedNotToMoveModal";

// ---- TYPES ----
export type FormType = {
  gotJob?: boolean;
  offerAccepted?: boolean;
  surveyAnswers?: string[];
  reason?: string;
  [key: string]: any;
};

export type StepProps = {
  form: FormType;
  setForm: React.Dispatch<React.SetStateAction<FormType>>;
  nextStep: (data?: any) => void;
  prevStep?: () => void;
  onClose: () => void;
  reason?: string;
  isOpen?: boolean;
};

type CancelFlowProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function CancelFlow({ isOpen, onClose }: CancelFlowProps) {
  console.log("CancelFlow rendered, isOpen:", isOpen); // <--- Add this

  const [step, setStep] = useState<
    | "job"
    | "offer"
    | "survey1"
    | "survey2"
    | "survey3"
    | "reason"
    | "reasonModal"
    | "end"
  >("job");
  const [form, setForm] = useState<FormType>({ surveyAnswers: [] });
  const [selectedReason, setSelectedReason] = useState<string | null>(null);

  function handleJobAnswer(gotJob: boolean) {
    setForm(f => ({ ...f, gotJob }));
    if (gotJob) setStep("end");
    else setStep("offer");
  }
  function handleOfferChoice(accepted: boolean) {
    setForm(f => ({ ...f, offerAccepted: accepted }));
    setStep("survey1");
  }
  function handleSurveyAnswer(answer: string) {
    setForm(f => ({
      ...f,
      surveyAnswers: [...(f.surveyAnswers || []), answer],
    }));
    if (step === "survey1") setStep("survey2");
    else if (step === "survey2") setStep("survey3");
    else if (step === "survey3") setStep("reason");
  }
  function handleReasonNextStep(reason: string) {
    setForm(f => ({ ...f, reason }));
    setSelectedReason(reason);
    setStep("reasonModal");
  }
  function handleReasonModalDone(data?: any) {
    if (data) setForm(f => ({ ...f, ...data }));
    setStep("end");
  }
  function handlePrevStep() {
    if (step === "offer") setStep("job");
    else if (step === "survey1") setStep("offer");
    else if (step === "survey2") setStep("survey1");
    else if (step === "survey3") setStep("survey2");
    else if (step === "reason") setStep("survey3");
    else if (step === "reasonModal") setStep("reason");
  }

  function getReasonModal(reason: string | null) {
    switch (reason) {
      case "Too expensive":
        return (
          <ReasonTooExpensiveModal
            form={form}
            setForm={setForm}
            nextStep={handleReasonModalDone}
            prevStep={handlePrevStep}
            onClose={onClose}
          />
        );
      case "Platform not helpful":
        return (
          <ReasonPlatformNotHelpful
            form={form}
            setForm={setForm}
            nextStep={handleReasonModalDone}
            prevStep={handlePrevStep}
            onClose={onClose}
          />
        );
      case "Not enough jobs":
        return (
          <ReasonsNotEnoughJobsModal
            form={form}
            setForm={setForm}
            nextStep={handleReasonModalDone}
            prevStep={handlePrevStep}
            onClose={onClose}
          />
        );
      case "Other":
        return (
          <ReasonOtherModal
            form={form}
            setForm={setForm}
            nextStep={handleReasonModalDone}
            prevStep={handlePrevStep}
            onClose={onClose}
          />
        );
      case "Decided not to move":
        return (
          <ReasonDecidedNotToMoveModal
            form={form}
            setForm={setForm}
            nextStep={handleReasonModalDone}
            prevStep={handlePrevStep}
            onClose={onClose}
          />
        );
      default:
        return (
          <StepEnd
            form={form}
            setForm={setForm}
            prevStep={handlePrevStep}
            nextStep={() => {}}
            onClose={onClose}
          />
        );
    }
  }

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 p-4"
      aria-modal="true"
      role="dialog"
    >
      <div
        className="w-full max-w-xl mx-auto"
        onClick={e => e.stopPropagation()}
      >
        {step === "job" && (
          <StepJobQuestion
            form={form}
            setForm={setForm}
            nextStep={handleJobAnswer}
            onClose={onClose}
          />
        )}
        {step === "offer" && (
          <StepOffer
            form={form}
            setForm={setForm}
            nextStep={handleOfferChoice}
            prevStep={handlePrevStep}
            onClose={onClose}
          />
        )}
        {step === "survey1" && (
          <StepOneSurvery
            form={form}
            setForm={setForm}
            nextStep={handleSurveyAnswer}
            prevStep={handlePrevStep}
            onClose={onClose}
          />
        )}
        {step === "survey2" && (
          <StepTwpSurvery
            form={form}
            setForm={setForm}
            nextStep={handleSurveyAnswer}
            prevStep={handlePrevStep}
            onClose={onClose}
          />
        )}
        {step === "survey3" && (
          <StepThreeSurvery
            form={form}
            setForm={setForm}
            nextStep={handleSurveyAnswer}
            prevStep={handlePrevStep}
            onClose={onClose}
          />
        )}
        {step === "reason" && (
          <StepReason
            nextStep={handleReasonNextStep}
            prevStep={handlePrevStep}
            onClose={onClose}
          />
        )}
        {step === "reasonModal" && getReasonModal(selectedReason)}
        {step === "end" && (
          <StepEnd
            form={form}
            setForm={setForm}
            prevStep={handlePrevStep}
            nextStep={() => {}}
            onClose={onClose}
          />
        )}
      </div>
    </div>
  );
}