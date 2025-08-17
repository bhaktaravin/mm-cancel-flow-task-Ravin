import React, { useState} from "react";


type Props = {
    form: { reason: string };
    setForm: (f: any) => void;
    nextStep: () => void;
    prevStep: () => void;
};


const reasons = [
    "Too expensive",
    "Not using enough",
    "Found a better alternative",
    "Just testing things out",
    "Other"
];


export default function StepReason({ form, setForm, nextStep, prevStep }: Props) {
const [customReason, setCustomReason] = useState("");

const handleSelect = (reason: string) => {
    setForm((prev: any) => ({ ...prev, reason }));
    if (reason !== "Other") nextStep();
};

const handleCustomSubmit = () => {
    if(customReason.trim()) {
        setForm((prev: any) => ({ ...prev, reason: customReason }));
        nextStep();
    }
};


return (
    <div className="flex flex-col items-center text-center">
        <h2 className = "text-xl font-bold mb-4">Why are you cancelling?</h2>
        <div className = "space-y-3 w-full max-w-xs mb-6">
        {reasons.map((reason) => (
          <button
            key={reason}
            onClick={() => handleSelect(reason)}
            className="w-full px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
          >
            {reason}
          </button>
        ))}
        </div>
      {form.reason === "Other" && (
        <div className="w-full max-w-xs mb-4">
          <input
            type="text"
            placeholder="Please specify"
            value={customReason}
            onChange={(e) => setCustomReason(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg mb-2"
          />
          <button
            onClick={handleCustomSubmit}
            className="w-full px-4 py-2 bg-[#8952fc] text-white rounded-lg"
          >
            Continue
          </button>
        </div>
      )}

      <button 
      onClick={prevStep} 
      className="mt-2 text-sm text-gray-500 underline"
      >
        Back
      </button>
</div>
);



}