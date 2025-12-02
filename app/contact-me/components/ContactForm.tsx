"use client";
import React, { useState, useRef } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { InfoLabel } from "@/components/ui/infoLabel";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { sendEmail } from "./sendEmail";
import AlertDialog from "@/components/ui/AlertDialog";

interface FormData {
  fullName: string;
  emailAddress: string;
  subject: string;
  message: string;
}

// Maps the field keys to boolean error states
type FieldErrors = {
  [K in keyof FormData]: boolean;
};
const FIELD_KEYS: Array<keyof FormData> = [
  "fullName",
  "emailAddress",
  "subject",
  "message",
];
const createInitialState = <T extends string | boolean>(
  initialValue: T
): Record<keyof FormData, T> =>
  Object.fromEntries(FIELD_KEYS.map((key) => [key, initialValue])) as Record<
    keyof FormData,
    T
  >;

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [senderData, setSenderData] = useState<FormData>(
    createInitialState("")
  );
  const [emptyField, setEmptyField] = useState<FieldErrors>(
    createInitialState(false)
  );
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const fieldName = name as keyof FormData;
    setSenderData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
    setEmptyField((prev) => ({
      ...prev,
      [fieldName]: false, // Clear error as soon as user starts typing
    }));
  };
  const validateEmptyField = (): boolean => {
    let newEmptyFields: Partial<FieldErrors> = {};
    let isFormValid = true;
    FIELD_KEYS.forEach((field) => {
      if (senderData[field].trim() === "") {
        newEmptyFields[field] = true;
        isFormValid = false;
      } else {
        newEmptyFields[field] = false;
      }
    });
    setEmptyField((prev) => ({
      ...prev,
      ...newEmptyFields,
    }));

    return isFormValid;
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateEmptyField()) {
      setStatus("loading");
      if (!formRef.current) return;
      const formData = new FormData(formRef.current);
      const result = await sendEmail(formData);

      if (result.success) {
        setShowDialog(true);
        setStatus("success");
        formRef.current.reset();
        setSenderData(createInitialState(""));
      } else {
        setStatus("error");
        console.error(result.error);
      }
    }
  };
  return (
    <>
      <motion.div
        initial={{ x: 10 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="shadow-xs w-full border border-gray-100 p-4 rounded-md"
      >
        <div className="relative">
          <div className="absolute inset-0 h-full w-full  blur-3xl scale-[0.80] transform rounded-full bg-gradient-to-r from-gray-50 to-gray-100 blur-10xl" />
          <div className="relative flex h-full w-full flex-col items-start justify-end overflow-hidden">
            <form onSubmit={handleSubmit} ref={formRef} className="w-full">
              <div className="mb-4">
                <LabelInputContainer>
                  <Label htmlFor="fullname">Full name</Label>
                  <Input
                    id="fullname"
                    name="fullName"
                    placeholder="Full name"
                    type="text"
                    onChange={onChangeHandler}
                    value={senderData?.fullName}
                  />
                  {emptyField?.fullName && (
                    <InfoLabel htmlFor="fullname">
                      *Full Name Required!
                    </InfoLabel>
                  )}
                </LabelInputContainer>
              </div>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="emailAddress"
                  placeholder="email@mail.com"
                  type="email"
                  onChange={onChangeHandler}
                  value={senderData?.emailAddress}
                />
                {emptyField?.emailAddress && (
                  <InfoLabel htmlFor="email">
                    *Email Address Required!
                  </InfoLabel>
                )}
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="hello"
                  type="text"
                  onChange={onChangeHandler}
                  value={senderData?.subject}
                />
                {emptyField?.subject && (
                  <InfoLabel htmlFor="subject">*Subject Required!</InfoLabel>
                )}
              </LabelInputContainer>
              <LabelInputContainer className="mb-8">
                <Label htmlFor="message">Message</Label>
                <Input
                  id="message"
                  name="message"
                  placeholder="Message"
                  type="text"
                  textarea={true}
                  onChange={onChangeHandler}
                  value={senderData?.message}
                />
                {emptyField?.message && (
                  <InfoLabel htmlFor="message">*Message Required!</InfoLabel>
                )}
              </LabelInputContainer>
              <button
                className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] hover:cursor-pointer"
                type="submit"
              >
                Send &rarr;
                <BottomGradient />
              </button>
              <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
            </form>
          </div>
        </div>
      </motion.div>
      <AlertDialog isOpen={showDialog} onClose={() => setShowDialog(false)} />
    </>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
