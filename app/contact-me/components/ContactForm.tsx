"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <>
      <div className="shadow-xs w-full border border-gray-100 p-10 rounded-md">
        <div className="relative w-full">
          <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-2xl blur-3xl scale-[0.80] transform rounded-full bg-gray-100 bg-gradient-to-r from-gray-50 to-gray-100 blur-10xl" />
          <div className="relative flex h-full w-full flex-col items-start justify-end overflow-hidden">
            <form onSubmit={handleSubmit} className="w-full">
              <div className="mb-4">
                <LabelInputContainer>
                  <Label htmlFor="fullname">Full name</Label>
                  <Input id="fullname" placeholder="Full name" type="text" />
                </LabelInputContainer>
              </div>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" placeholder="email@mail.com" type="email" />
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="subject">Password</Label>
                <Input id="subject" placeholder="hello" type="text" />
              </LabelInputContainer>
              <LabelInputContainer className="mb-8">
                <Label htmlFor="message">Message</Label>
                <Input
                  id="message"
                  placeholder="Message"
                  type="text"
                  textarea={true}
                />
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
      </div>
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
