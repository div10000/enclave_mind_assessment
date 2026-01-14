"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the form data
interface FormData {
  profile: {
    name?: string;
    email?: string;
  };
  experience: {
    years?: string;
    role?: string;
  };
}

// Context type
interface FormContextType {
  formData: FormData;
  setFormData: (data: FormData) => void;
}

// Create the context
const FormContext = createContext<FormContextType | undefined>(undefined);

// Provider component
export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<FormData>({
    profile: {},
    experience: {},
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

// Custom hook to use the context easily
export const useForm = () => {
  const context = useContext(FormContext);
  if (!context) throw new Error("useForm must be used within FormProvider");
  return context;
};
