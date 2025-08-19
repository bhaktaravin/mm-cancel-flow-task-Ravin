'use client';

import React, { useState } from "react";
import StepJobQuestion from "./steps/StepJobQuestion";
import StepOffer from "./steps/StepOffer";
import StepOneSurvey from "./steps/survey/StepOneSurvery";
import StepTwoSurvey from "./steps/survey/StepTwpSurvery";
import StepThreeSurvey from "./steps/survey/StepThreeSurvery";
import ReasonTooExpensiveModal from "./steps/reasons/ReasonTooExpensiveModal";
import ReasonPlatformNotHelpfulModal from "./steps/reasons/ReasonPlatformNotHelpful";
import ReasonNotEnoughJobsModal from "./steps/reasons/ReasonsNotEnoughJobsModal";
import ReasonDecidedNotToMoveModal from "./steps/reasons/ReasonDecidedNotToMoveModal";
import ReasonOtherModal from "./steps/reasons/ReasonOtherModal";
import StepEnd from "./steps/StepEnd";

export type FormType = {
  reasonSelected?: string;
  reason?: string;
  platformFeedback?: string;
  notEnoughJobsFeedback?: string;
  decidedNotToMoveFeedback?: string;
  otherFeedback?: string;
  tooExpensiveMaxPrice?: string;
  surveyApply?: string;
  surveyEmail?: string;
  surveyInterview?: string;
  platformHelpfulness?: string;
  platformComments?: string;
  endDate?: string;
};

export type StepProps = {
  nextStep: (data?: any) => void;
  prevStep: () => void;
  form: FormType;
  setForm: React.Dispatch<React.SetStateAction<FormType>>;
  isOpen: boolean;
  onClose?: () => void;
};

export default function CancelFlow() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormType>({});
  const [isModalOpen, setIsModalOpen] = useState(true);

  function nextStep(data?: any) {
    setStep((prev) => prev + 1);
    if (data) setForm((f: FormType) => ({ ...f, ...data }));
  }
  function prevStep() {
    setStep((prev) => Math.max(prev - 1, 0));
  }
  function closeModal() {
    setIsModalOpen(false);
  }

  let ReasonModalComponent: React.FC<StepProps> | null = null;
  if (step === 6) {
    switch (form.reasonSelected) {
      case "too_expensive":
        ReasonModalComponent = ReasonTooExpensiveModal;
        break;
      case "platform_not_helpful":
        ReasonModalComponent = ReasonPlatformNotHelpfulModal;
        break;
      case "not_enough_jobs":
        ReasonModalComponent = ReasonNotEnoughJobsModal;
        break;
      case "decided_not_to_move":
        ReasonModalComponent = ReasonDecidedNotToMoveModal;
        break;
      case "other":
        ReasonModalComponent = ReasonOtherModal;
        break;
      default:
        ReasonModalComponent = null;
    }
  }

  return (
    <>
      {/* Step 0: Job Question */}
      {step === 0 && (
        <StepJobQuestion
          form={form}
          setForm={setForm}
          nextStep={nextStep}
          prevStep={prevStep}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}

      {/* Step 1: Offer */}
      {step === 1 && (
        <StepOffer
          form={form}
          setForm={setForm}
          nextStep={nextStep}
          prevStep={prevStep}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}

      {/* Step 2: Survey 1 */}
      {step === 2 && (
        <StepOneSurvey
          form={form}
          setForm={setForm}
          nextStep={nextStep}
          prevStep={prevStep}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}

      {/* Step 3: Survey 2 */}
      {step === 3 && (
        <StepTwoSurvey
          form={form}
          setForm={setForm}
          nextStep={nextStep}
          prevStep={prevStep}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}

      {/* Step 4: Survey 3 */}
      {step === 4 && (
        <StepThreeSurvey
          form={form}
          setForm={setForm}
          nextStep={nextStep}
          prevStep={prevStep}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}

      {/* Step 5: Reason selection UI */}
      {step === 5 && (
        <div className="flex flex-col items-center justify-center p-6">
          <h2 className="text-2xl font-bold mb-4">Why are you cancelling?</h2>
          <div className="flex flex-col gap-3 w-full max-w-md">
            <button
              className="py-3 px-4 bg-gray-100 rounded-lg text-left"
              onClick={() => {
                setForm((f: FormType) => ({ ...f, reasonSelected: "too_expensive" }));
                nextStep();
              }}
            >
              Too expensive
            </button>
            <button
              className="py-3 px-4 bg-gray-100 rounded-lg text-left"
              onClick={() => {
                setForm((f: FormType) => ({ ...f, reasonSelected: "platform_not_helpful" }));
                nextStep();
              }}
            >
              Platform not helpful
            </button>
            <button
              className="py-3 px-4 bg-gray-100 rounded-lg text-left"
              onClick={() => {
                setForm((f: FormType) => ({ ...f, reasonSelected: "not_enough_jobs" }));
                nextStep();
              }}
            >
              Not enough relevant jobs
            </button>
            <button
              className="py-3 px-4 bg-gray-100 rounded-lg text-left"
              onClick={() => {
                setForm((f: FormType) => ({ ...f, reasonSelected: "decided_not_to_move" }));
                nextStep();
              }}
            >
              Decided not to move
            </button>
            <button
              className="py-3 px-4 bg-gray-100 rounded-lg text-left"
              onClick={() => {
                setForm((f: FormType) => ({ ...f, reasonSelected: "other" }));
                nextStep();
              }}
            >
              Other
            </button>
          </div>
          <button
            className="mt-6 text-gray-500 underline"
            onClick={prevStep}
          >
            &larr; Back
          </button>
        </div>
      )}

      {/* Step 6: Reason modal */}
      {step === 6 && ReasonModalComponent && (
        <ReasonModalComponent
          form={form}
          setForm={setForm}
          nextStep={nextStep}
          prevStep={prevStep}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}

      {/* Step 7: Done/End */}
      {step === 7 && (
        <StepEnd
          form={form}
          setForm={setForm}
          nextStep={nextStep}
          prevStep={prevStep}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </>
  );
}