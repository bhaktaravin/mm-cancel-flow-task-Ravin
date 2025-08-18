import React from "react";
import type { FormType } from "../CancelFlow";

type Props = {
    form: FormType;
    setForm: React.Dispatch<React.SetStateAction<FormType>>;
    nextStep: () => void;
    prevStep: () => void;
};

export default function StepDownsell({ form, setForm, nextStep, prevStep }: Props) {

    const variant = form.downsellVariant ?? "A";

    const handleAccept = () => {
        setForm(prev => ({
            ...prev,
            downsellVariant: variant,
            acceptedDownsell: true,
        }));
        nextStep();
    };

    const handleDecline = () => {
        setForm(prev => ({
            ...prev,
            downsellVariant: variant,
            acceptedDownsell: false,
        }));
        prevStep();
    };


    return (
        <div className="flex flex-col items-center text-center">
            <h2 className="text-xl font-bold mb-4">Before you go...</h2>
            {variant === "B" ? (
                <>
                    <p className="mb-4 text-gray-700">
                        Stay and save! Get <span className="font-bold">$10 off</span> your monthly plan.
                    </p>

                    <div className="mb-6">
                        <span className="line-through text-gray-400 mr-2">$25</span>
                        <span className="text-[#8952fc] font-bold text-lg">$15</span>
                    
                    </div>
                    <button
                        onClick={handleAccept}
                        className="w-full px-4 py-2 bg-[#8952fc] text-white rounded-lg mb-2"
                    >
                        Accept Offer
                    </button>
                    <button
                    onClick={handleDecline}
                className="w-full px-4 py-2 bg-[#8952fc] text-white rounded-lg hover:bg-[#7b40fc] transition-colors"
                >
            No Thanks, Continue Cancellation
                </button>
                </>
            ): (
                <>
                <p className="mb-6 text-gray-700">
                    Are you sure you want to cancel? We can offer you a special deal.
                </p>
                <button
                onClick={handleDecline}
                className="w-full px-4 py-2 bg-[#8952fc] text-white rounded-lg hover:bg-[#7b40fc] transition-colors"
                >
                    Continue Cancellation
                </button>
                
                </>
            )}
            <button 
            onClick={prevStep}
            className="mt-2 text-sm text-gray-500 underline"> Back </button>
        </div>
    );
}