'use client';

import React, { useState } from "react";

import StepJobQuestion from "./steps/StepJobQuestion";
import AcceptionFlow from "@/app/accept/AcceptionFlow"; // <-- new step
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
import StepCongratsNewRoleModal from "../accept/StepCongratsNewRoleModal";
import StepWishHelpedWithModal from "../accept/StepWishHelpedWithModal";
import StepWithMM from "./steps/StepWithMM";
import NoVisaProcessCancelled from "../accept/NoVisaProcessCancelled";
import StepWithoutMM from "./steps/StepWithoutMM";
import VisaHelp from "../accept/NoStepVisaHelp";
import VisaNoHelp from "./steps/StepYesVisa";

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
  const [step, setStep] = useState<
    | "job"
    | "acceptance"
    | "congrats"
    | "wish_helped_with"
    | "with_mm"
    | "without_mm"
    | "visa_help"
    | "visa_no_help"
    | "no_visa_process_cancelled"
    | "yes_visa_process_cancelled"
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
    if (gotJob) {
      console.log('handleJobAnswer called with', gotJob);
      setStep("acceptance"); // Show AcceptionFlow
    } else {
      setStep("offer");
    }
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
    if (step === "acceptance") setStep("job");
    else if (step === "job") setStep("acceptance");
    else if (step === "offer") setStep("job");
    else if (step === "survey1") setStep("offer");
    else if (step === "survey2") setStep("survey1");
    else if (step === "survey3") setStep("survey2");
    else if (step === "reason") setStep("survey3");
    else if (step === "reasonModal") setStep("reason");
    else if (step === "end" && form.gotJob) setStep("acceptance");
    else if (step === "end") setStep("reasonModal");
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

  function handleCongratsNext(form: FormType) {
    setForm(form);
    console.log("form", form);
    setStep("wish_helped_with");
  }




  function handleWishHelpedWithNext(updatedForm: FormType) {
    setForm(updatedForm);
    console.log("form", form.foundWithMM);

    if(form.gotJob) {
      setStep("with_mm");
    }
    else if(!form.gotJob) {
      setStep("without_mm");
    }
  }

  function handleWithMMNext(visaForm: FormType) {
    setForm(visaForm);
    console.log("Visa Form: ", visaForm);

  }

  function handleWithoutMMNext(){

  }

  function handleVisaHelpNext(){
    
  }

  function handleVisaNoHelpNext(){
    
  }

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

        {step === "acceptance" && (

          <AcceptionFlow
            initialForm={form}
            onDone={data => {
              setForm(f => ({ ...f, ...data }));
              setStep("congrats");
            }}
            onClose={onClose}
            startStep={0}
            skipVisaStep={true}
          />
        )}
        {step === "congrats" && (
          <StepCongratsNewRoleModal
            form={form}
            setForm={setForm}
            nextStep={() => handleCongratsNext(form)}
            prevStep={handlePrevStep}
            onClose={onClose}
          />
        )}
        {step === "wish_helped_with" && (
          <StepWishHelpedWithModal
            form={form}
            setForm={setForm}
            nextStep={handleWishHelpedWithNext}
            prevStep={handlePrevStep}
            onClose={onClose}
            isOpen={true}
          />
        )}
        {step === "with_mm" && (
          <StepWithMM
            form={form}
            setForm={setForm}
            nextStep={handleWithMMNext}
            prevStep={handlePrevStep} 
            onClose={onClose}
             isOpen={true}          />
        )}
        {step === "without_mm" && (
          <StepWithoutMM
            form={form}
            setForm={setForm}
            nextStep={handleWithoutMMNext}
            onClose={onClose} 
            isOpen={true}          />
        )}

        { step === "visa_help" && (
          <VisaHelp
            form={form}
            setForm={setForm}
            nextStep={handleVisaHelpNext}
            prevStep={handlePrevStep}
            onClose={onClose}
          />
        )}
        { step === "visa_no_help" && (
          <VisaNoHelp 
            form={form}
            setForm={setForm}
            nextStep={handleVisaNoHelpNext}
            prevStep={handlePrevStep}
            onClose={onClose} 
          />
        )}

        { step === "no_visa_process_cancelled"&& (
          <NoVisaProcessCancelled 
            onFinish={() => {}}
            onClose={onClose}
          />
        )}

        { step === "yes_visa_process_cancelled" && (
          <NoVisaProcessCancelled
            onFinish={() => {}}
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