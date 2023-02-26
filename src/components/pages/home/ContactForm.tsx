import { Button, Select, Textarea, TextInput } from "@mantine/core";
import { useForm } from "react-hook-form";
import { customArray } from "country-codes-list";

const COUNTRY_CODES = customArray({
  //@ts-ignore
  code: "{countryCode}",
  //@ts-ignore
  label: "+{countryCallingCode}",
  value: "{countryCallingCode}",
});

export default function ContactForm() {
  const { handleSubmit, register } = useForm({ defaultValues: {} });

  console.log(COUNTRY_CODES[0]);
  return (
    <div className="px-4 md:px-16 max-w-[1440px] mx-auto">
      <h2 className="font-bold text-2xl mt-28 text-black">CONTACT US</h2>

      <form className="mt-8 flex flex-col grow max-w-2xl rounded-xl border-2 border-[#67246d] text-start mx-auto p-4 gap-3">
        <TextInput label="Full name" placeholder="John Doe" required />
        <TextInput
          label="Email"
          placeholder="john@example.com"
          required
          type={"email"}
        />
        <div className="flex gap-2">
          <TextInput
            label="Country code"
            placeholder="+1"
            required
            styles={{
              root: {
                flexGrow: 0,
                flexBasis: "100px",
              },
            }}
          />
          <TextInput
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
        <TextInput label="Company name" placeholder="Space X" required />
        <Select
          data={["Restaurant", "Nightclub or Bar", "Hotel or Staying", "Other"]}
          label="Outlet type"
          placeholder="Restaurant, nightclub, etc."
          required
          styles={{
            item: {
              "&[data-selected]": {
                "&, &:hover": { backgroundColor: "#67246d" },
              },
            },
          }}
        />
        <Select
          data={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "More"]}
          label="Number of outlets"
          placeholder="Number of outlets"
          required
          styles={{
            item: {
              "&[data-selected]": {
                "&, &:hover": { backgroundColor: "#67246d" },
              },
            },
          }}
        />
        <Select
          data={[
            "Google search",
            "Social media",
            "Recommended by a friend",
            "Buisiness expo",
            "Job fair",
            "Other",
          ]}
          label="How id you hear about us?"
          placeholder="How id you hear about us?"
          required
          styles={{
            item: {
              "&[data-selected]": {
                "&, &:hover": { backgroundColor: "#67246d" },
              },
            },
          }}
        />
        <Select
          data={["Immediately", "1 to 2 weeks", "1 month"]}
          label="when do you want to get started?"
          placeholder="Immediately, 1 to 2 weeks, 1 month"
          required
          styles={{
            item: {
              "&[data-selected]": {
                "&, &:hover": { backgroundColor: "#67246d" },
              },
            },
          }}
        />
        <Textarea
          minRows={4}
          label="Message"
          placeholder="Leave us a message"
          required
        />

        <div className="flex flex-col mt-2 md:flex-row md:items-start">
          <button className="bg-[#67246d] rounded md:rounded-md px-8 py-2 font-medium text-sm md:order-2 md:ml-auto">
            Send
          </button>
          <p className="text-xs mt-4 text-gray-400 max-w-xs md:mt-0">
            By submitting this form, you are opting into our marketing and
            agreeing to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </form>
    </div>
  );
}
