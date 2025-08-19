'use client';

import React, { useState } from "react";

import StepJobQuestion from "./steps/StepJobQuestion";
import AcceptionFlow from "@/app/accept/AcceptionFlow";
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
import CancellationSortedModal from "./steps/StepTeamMemberCard"; // <<-- Add this import
import StepTeamMemberCard from "./steps/StepTeamMemberCard";
import StepCancellationProcessed from "../accept/StepCancellationProcess";

export type FormType = {
  gotJob?: boolean;
  offerAccepted?: boolean;
  surveyAnswers?: string[];
  reason?: string;
  foundWithMigrateMate?: string;
  rolesApplied?: string;
  companiesEmailed?: string;
  companiesInterviewed?: string;
  companyProvidesLawyer?: boolean;
  visaType?: string;
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

type StepName =
  | "job"
  | "acceptance"
  | "congrats"
  | "wish_helped_with"
  | "with_mm"
  | "without_mm"
  | "visa_help"
  | "visa_no_help"
  | "cancellation_processed"
  | "yes_visa_process_cancelled"
  | "offer"
  | "survey1"
  | "survey2"
  | "survey3"
  | "reason"
  | "reasonModal"
  | "cancellation_sorted" // <<-- Add this
  | "end";

export default function CancelFlow({ isOpen, onClose }: CancelFlowProps) {
  const [step, setStep] = useState<StepName>("job");
  const [previousStep, setPreviousStep] = useState<StepName | null>(null);
  const [form, setForm] = useState<FormType>({ surveyAnswers: [] });
  const [selectedReason, setSelectedReason] = useState<string | null>(null);

  function goToStep(nextStep: StepName) {
    setPreviousStep(step);
    setStep(nextStep);
  }

  function handleJobAnswer(gotJob: boolean) {
    setForm(f => ({ ...f, gotJob }));
    goToStep(gotJob ? "acceptance" : "offer");
  }

  function handleOfferChoice(accepted: boolean) {
    setForm(f => ({ ...f, offerAccepted: accepted }));
    goToStep("survey1");
  }

  function handleSurveyAnswer(answer: string) {
    setForm(f => ({
      ...f,
      surveyAnswers: [...(f.surveyAnswers || []), answer],
    }));
    if (step === "survey1") goToStep("survey2");
    else if (step === "survey2") goToStep("survey3");
    else if (step === "survey3") goToStep("reason");
  }

  function handleReasonNextStep(reason: string) {
    setForm(f => ({ ...f, reason }));
    setSelectedReason(reason);
    goToStep("reasonModal");
  }

  function handleReasonModalDone(data?: any) {
    if (data) setForm(f => ({ ...f, ...data }));
    goToStep("end");
  }

  function handlePrevStep() {
    if (step === "acceptance") goToStep("job");
    else if (step === "job") goToStep("acceptance");
    else if (step === "offer") goToStep("job");
    else if (step === "survey1") goToStep("offer");
    else if (step === "survey2") goToStep("survey1");
    else if (step === "survey3") goToStep("survey2");
    else if (step === "reason") goToStep("survey3");
    else if (step === "reasonModal") goToStep("reason");
    else if (step === "end" && form.gotJob) goToStep("acceptance");
    else if (step === "end") goToStep("reasonModal");
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

  function handleCongratsNext(updatedForm: FormType) {
    setForm(updatedForm);
    goToStep("wish_helped_with");
  }

  function handleWishHelpedWithNext(updatedForm: FormType) {
    setForm(updatedForm);
    if (form.foundWithMigrateMate === "yes") {
      goToStep("with_mm");
    } else if (form.foundWithMigrateMate === "no") {
      goToStep("without_mm");
    }
  }

  function handleWithMMNext(visaForm: FormType) {
    setForm(visaForm);
    // Add next step logic here
  }

  // Updated logic for StepWithoutMM
  function handleWithoutMMNext(updatedForm?: FormType, branch?: "yes" | "no") {
    if (updatedForm) setForm(updatedForm);
    if (branch === "yes") {
      goToStep("cancellation_sorted");
    } else if (branch === "no") {
      goToStep("cancellation_processed"); // Or another modal for "no"
    }
  }

  function handleVisaHelpNext(updatedForm?: FormType) {
    if (updatedForm) setForm(updatedForm);
    // Add next step logic here
  }

  function handleVisaNoHelpNext(updatedForm?: FormType) {
    if (updatedForm) setForm(updatedForm);
    // Add next step logic here
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
              goToStep("congrats");
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
            nextStep={handleCongratsNext}
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
            isOpen={true}
          />
        )}
        {step === "without_mm" && (
          <StepWithoutMM
            form={form}
            setForm={setForm}
            nextStep={handleWithoutMMNext}
            onClose={onClose}
            isOpen={true}
          />
        )}
        {step === "visa_help" && (
          <VisaHelp
            form={form}
            setForm={setForm}
            nextStep={handleVisaHelpNext}
            prevStep={handlePrevStep}
            onClose={onClose}
          />
        )}
        {step === "visa_no_help" && (
          <VisaNoHelp
            form={form}
            setForm={setForm}
            nextStep={handleVisaNoHelpNext}
            prevStep={handlePrevStep}
            onClose={onClose}
          />
        )}
        {step === "cancellation_processed" && (
          <StepCancellationProcessed
            isOpen={true}
            onClose={onClose}
          />
        )}
        {step === "yes_visa_process_cancelled" && (
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
        {step === "cancellation_sorted" && (
          <StepTeamMemberCard
            isOpen={true}
            nextStep={() => {}}
            onClose={onClose}
          />
        )}
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