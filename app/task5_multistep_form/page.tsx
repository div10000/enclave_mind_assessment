"use client";

import { useState } from "react";
import { FormProvider, useForm } from "./FormContext";

/**
 * Step 1: Profile Form
 */
function ProfileStep({ nextStep }: { nextStep: () => void }) {
  const { formData, setFormData } = useForm();

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Step 1: Profile</h3>

      <div className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={formData.profile.name || ""}
          onChange={(e) =>
            setFormData({
              ...formData,
              profile: { ...formData.profile, name: e.target.value },
            })
          }
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="email"
          placeholder="Email"
          value={formData.profile.email || ""}
          onChange={(e) =>
            setFormData({
              ...formData,
              profile: { ...formData.profile, email: e.target.value },
            })
          }
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={nextStep}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition"
        >
          Next
        </button>
      </div>
    </div>
  );
}

/**
 * Step 2: Experience Form
 */
function ExperienceStep({ prevStep, submitForm }: { prevStep: () => void; submitForm: () => void }) {
  const { formData, setFormData } = useForm();

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Step 2: Experience</h3>

      <div className="flex flex-col space-y-4">
        <input
          type="number"
          placeholder="Years of Experience"
          value={formData.experience.years || ""}
          onChange={(e) =>
            setFormData({
              ...formData,
              experience: { ...formData.experience, years: e.target.value },
            })
          }
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          placeholder="Role"
          value={formData.experience.role || ""}
          onChange={(e) =>
            setFormData({
              ...formData,
              experience: { ...formData.experience, role: e.target.value },
            })
          }
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex justify-between">
          <button
            onClick={prevStep}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-md transition"
          >
            Back
          </button>
          <button
            onClick={submitForm}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

/**
 * Main Multi-Step Form Component
 */
function MultiStepForm() {
  const [step, setStep] = useState(1);
  const { formData } = useForm();

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const submitForm = () => {
    console.log("Final Form Data:", formData);
    alert("Form submitted! Check console for data.");
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      {step === 1 && <ProfileStep nextStep={nextStep} />}
      {step === 2 && <ExperienceStep prevStep={prevStep} submitForm={submitForm} />}
    </div>
  );
}

/**
 * Page Export
 */
export default function Page() {
  return (
    <FormProvider>
      <div className="text-black min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Task 5: Multi-Step Registration Form
        </h2>
        <MultiStepForm />
      </div>
    </FormProvider>
  );
}
