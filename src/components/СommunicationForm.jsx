import {
  Description,
  Field,
  Fieldset,
  Input,
  Label,
  Legend,
  Select,
  Textarea,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export const CommunicationForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <form
      className="w-full max-w-lg px-4 mx-auto"
      ref={form}
      onSubmit={sendEmail}
    >
      <Fieldset className="space-y-6 rounded-xl bg-white/5 p-6 sm:p-10">
        <Legend className="text-base/7 font-semibold text-white text-center">
          Please provide the following details about the job
        </Legend>
        <Field>
          <Label className="text-sm/6 font-medium text-white">Your name</Label>
          <Input
            name="from_name"
            className={clsx(
              "mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
            )}
          />
        </Field>
        <Field>
          <Label className="text-sm/6 font-medium text-white">
            Company name
          </Label>
          <Input
            name="company"
            className={clsx(
              "mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
            )}
          />
        </Field>
        <Field>
          <Label className="text-sm/6 font-medium text-white">
            Suggested position
          </Label>
          <div className="relative">
            <Select
              name="position"
              className={clsx(
                "mt-3 block w-full appearance-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
                "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
                "*:text-black"
              )}
            >
              <option>Software Developer</option>
              <option>Software Engineer</option>
              <option>Front End Developer</option>
              <option>Full Stack Developer</option>
            </Select>
            <ChevronDownIcon
              className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
              aria-hidden="true"
            />
          </div>
        </Field>
        <Field>
          <Label className="text-sm/6 font-medium text-white">
            Additional Information
          </Label>
          <Textarea
            name="message"
            className={clsx(
              "mt-3 block w-full resize-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
            )}
            rows={3}
          />
        </Field>
        <button
          type="submit"
          className="w-20 mx-auto py-1.5 text-sm/6 font-semibold text-white border-[1px] border-white focus:shadow-sm hover:shadow-sm block focus:shadow-white hover:shadow-white rounded-lg px-2 transition-all duration-300"
        >
          Submit
        </button>
      </Fieldset>
    </form>
  );
};
