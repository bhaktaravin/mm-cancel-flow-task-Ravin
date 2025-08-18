"use client";

import { useState } from "react";

export type FormType = {
    reason: string;
    downsellVariant: "A" | "B" | null;
    acceptedDownsell: boolean | null;
};
import StepIntro from "./steps/StepIntro";
import StepReason from "./steps/StepReason";
import StepDownsell from "./steps/StepDownsell";
import StepConfirm from "./steps/StepConfirm";
import StepFinal from "./steps/StepFinal";

const steps = [
    StepIntro,
    StepReason,
    StepDownsell,
    StepConfirm,
    StepFinal
];

export default function CancelFlow() {
    const [step, setStep] = useState(0);
    const [form, setForm] = useState<FormType>({
        reason: '',
        downsellVariant: null,
        acceptedDownsell: null
    });

    const StepComponent = steps[step];

    return (
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow p-6">
            <StepComponent
                form={form}
                setForm={setForm}
                nextStep={() => setStep((s) => Math.min(s + 1, steps.length - 1))}
                prevStep={() => setStep((s) => Math.max(s - 1, 0))}
            />
        </div>
    );

}