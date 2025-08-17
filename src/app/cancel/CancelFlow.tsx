import { useState } from "react";
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
    const [form, setForm] = useState({
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
                nextStep={() => setStep(step + 1)}
                prevStep={() => setStep(step - 1)}
            />
        </div>
    );

}