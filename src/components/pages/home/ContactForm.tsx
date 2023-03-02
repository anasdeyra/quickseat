import { Select, Textarea, TextInput } from "@mantine/core";
import { useForm } from "react-hook-form";
import { customArray } from "country-codes-list";
import { useState } from "react";

const COUNTRY_CODES = customArray({
  //@ts-ignore
  label: "+{countryCallingCode}",
  value: "{countryCode} (+{countryCallingCode})",
});

export default function ContactForm() {
  const { handleSubmit, register, setValue } = useForm({ defaultValues: {} });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = () =>
    handleSubmit((data) => {
      setIsSubmitting(true);
      console.log(data);
      setTimeout(() => {
        setIsSubmitting(false);
      }, 2000);
    });

  return (
    <div id="contact-us" className="px-4 md:px-16 max-w-[1440px] mx-auto">
      <h2 className="font-bold text-2xl mt-28 text-black">CONTACT US</h2>

      <form
        onSubmit={onSubmit()}
        className="mt-8 flex flex-col grow max-w-3xl rounded-xl border-2 border-[#67246d] text-start mx-auto p-4 gap-3"
      >
        <TextInput
          //@ts-ignore
          {...register("name")}
          label="Full name"
          placeholder="John Doe"
          required
        />
        <TextInput
          //@ts-ignore
          {...register("email")}
          label="Email"
          placeholder="john@example.com"
          required
          type={"email"}
        />
        <div className="flex gap-2">
          <Select
            onChange={(value) => {
              //@ts-ignore
              setValue("countryCode", value);
            }}
            data={COUNTRY_CODES}
            label="Country code"
            placeholder="+1"
            styles={{
              root: {
                flexGrow: 0,
                flexBasis: "100px",
              },
            }}
          />
          <TextInput
            //@ts-ignore
            {...register("phoneNumber")}
            label="Phone number"
            placeholder="123456789"
            required
            styles={{
              root: {
                flexGrow: 2,
              },
            }}
          />
        </div>
        <TextInput
          //@ts-ignore
          {...register("companyName")}
          label="Company name"
          placeholder="Space X"
          required
        />
        <Select
          onChange={(value) => {
            //@ts-ignore
            setValue("outletType", value);
          }}
          data={["Restaurant", "Nightclub or Bar", "Hotel or Staying", "Other"]}
          label="Outlet type"
          placeholder="Restaurant, nightclub, etc."
          styles={{
            item: {
              "&[data-selected]": {
                "&, &:hover": { backgroundColor: "#67246d" },
              },
            },
          }}
        />
        <Select
          onChange={(value) => {
            //@ts-ignore
            setValue("outletNumber", value);
          }}
          data={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "More"]}
          label="Number of outlets"
          placeholder="Number of outlets"
          styles={{
            item: {
              "&[data-selected]": {
                "&, &:hover": { backgroundColor: "#67246d" },
              },
            },
          }}
        />
        <Select
          onChange={(value) => {
            //@ts-ignore
            setValue("howYouHeardAboutUs", value);
          }}
          data={[
            "Google search",
            "Social media",
            "Recommended by a friend",
            "Buisiness expo",
            "Job fair",
            "Other",
          ]}
          label="How did you hear about us?"
          placeholder="How did you hear about us?"
          styles={{
            item: {
              "&[data-selected]": {
                "&, &:hover": { backgroundColor: "#67246d" },
              },
            },
          }}
        />
        <Select
          onChange={(value) => {
            //@ts-ignore
            setValue("GetStartedIn", value);
          }}
          data={["Immediately", "1 to 2 weeks", "1 month"]}
          label="when do you want to get started?"
          placeholder="Immediately, 1 to 2 weeks, 1 month"
          styles={{
            item: {
              "&[data-selected]": {
                "&, &:hover": { backgroundColor: "#67246d" },
              },
            },
          }}
        />
        <Textarea
          //@ts-ignore
          {...register("message")}
          minRows={4}
          label="Message"
          placeholder="Leave us a message"
        />

        <div className="flex flex-col mt-2 md:flex-row md:items-start">
          <button
            disabled={isSubmitting}
            className="bg-[#67246d] disabled:bg-[#67376b] rounded md:rounded-md px-8 py-2 font-medium text-sm md:order-2 md:ml-auto"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
          <p className="text-xs mt-4 text-gray-400 max-w-xs md:mt-0">
            By submitting this form, you are opting into our marketing and
            agreeing to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </form>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 max-w-3xl mx-auto mt-20">
        <div className="flex gap-4 items-end justify-center">
          <img src="/phone .png" className="h-16" />
          <div className="text-left">
            <h3 className="font-bold text-lg text-primary">CALL US</h3>
            <p className="text-primary text-sm">Beirut - Lebanon</p>
            <p className="text-primary text-sm">+961 71 174 414</p>
          </div>
        </div>
        <div className="flex gap-4 items-end justify-center">
          <img src="/mail .png" className="h-16" />
          <div className="text-left">
            <h3 className="font-bold text-primary text-lg">EMAIL US</h3>
            <p className="text-primary text-sm">info@quickseat.co</p>
          </div>
        </div>
        <div className="flex gap-4 items-end justify-center">
          <img src="/location .png" className="h-16" />
          <div className="text-left">
            <h3 className="font-bold text-primary text-lg">OUR OFFICES</h3>
            <p className="text-primary text-sm">
              1st Flr. NZM BLD BLOC B Byblos, Lebanon
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
