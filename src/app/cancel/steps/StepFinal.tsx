import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function StepFinal() {
  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="text-2xl font-bold mb-4 text-[#8952fc]">Cancellation Complete</h2>
      <p className="mb-6 text-gray-700">
        Your request has been processed. We&apos;re sorry to see you go!
      </p>
      <Image
        src="/profile-image.png"
        alt="Profile"
        width={96}
        height={96}
        className="mb-4 rounded-full object-cover"
      />
      <Link href="/" className="px-6 py-3 bg-gray-100 text-[#8952fc] rounded-lg font-medium hover:bg-gray-200 transition-colors">
        Return to Home
      </Link>
      </div>
  );
}