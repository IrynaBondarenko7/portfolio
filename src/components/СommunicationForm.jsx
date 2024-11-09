import { useRef } from "react";
import {
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
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    from_name: yup
      .string()
      .required("required field")
      .matches(
        /^[a-zA-Zа-яА-ЯёЁіІїЇєЄ'-]+( [a-zA-Zа-яА-ЯёЁіІїЇєЄ'-]+)*$/,
        "Name can only contain letters, hyphens, and spaces"
      ),
    company: yup.string().required("required field"),
    email: yup.string().required("required field").email(),
  })
  .required();

export const CommunicationForm = () => {
  const form = useRef();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange", resolver: yupResolver(schema) });

  const sendEmail = (e) => {
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
          reset();
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
      onSubmit={handleSubmit(sendEmail)}
    >
      <Fieldset className="space-y-6 rounded-xl bg-white/5 p-6 sm:p-10">
        <Legend className="text-base/7 font-semibold text-white text-center">
          Please provide the following details about the job
        </Legend>
        <Field className="relative">
          <Label className="text-sm/6 font-medium text-white">
            Your name *
          </Label>
          <Input
            {...register("from_name")}
            className={clsx(
              "mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
            )}
          />
          <p className="absolute text-red-700 bottom-[-19px] text-xs">
            {errors.from_name?.message}
          </p>
        </Field>
        <Field className="relative">
          <Label className="text-sm/6 font-medium text-white">
            Company name *
          </Label>
          <Input
            {...register("company")}
            className={clsx(
              "mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
            )}
          />
          <p className="absolute text-red-700 bottom-[-19px] text-xs">
            {errors.company?.message}
          </p>
        </Field>
        <Field className="relative">
          <Label className="text-sm/6 font-medium text-white">Email *</Label>
          <Input
            {...register("email")}
            className={clsx(
              "mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
            )}
          />
          <p className="absolute text-red-700 bottom-[-19px] text-xs">
            {errors.email?.message}
          </p>
        </Field>
        <Field>
          <Label className="text-sm/6 font-medium text-white">
            Suggested position
          </Label>
          <div className="relative">
            <Select
              {...register("position")}
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
            {...register("message")}
            className={clsx(
              "mt-3 block w-full resize-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
            )}
            rows={3}
          />
        </Field>
        <button
          type="submit"
          className="w-20 mx-auto py-1.5 text-sm/6 font-semibold text-white border-[1px] border-white hover:border-transparent focus:border-transparent focus:shadow-sm hover:shadow-sm block focus:shadow-white hover:shadow-white rounded-lg px-2 transition-all duration-300"
        >
          Submit
        </button>
      </Fieldset>
    </form>
  );
};
