'use client';

import React, { useState } from "react";
import CancelFlow from './CancelFlow';

export default function CancelPage() {
    const [showModal, setShowModal] = useState(true);

    function handleClose() {
        setShowModal(false);
    }

    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-50">
            {showModal && (
                <CancelFlow
                    isOpen={true}
                    onClose={handleClose}
                />
            )}
        </main>
    );
}