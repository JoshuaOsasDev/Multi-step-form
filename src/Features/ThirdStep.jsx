import { useEffect, useState } from "react";
import Header from "../ui/Header";
import Tag from "../ui/Tag";
import { pick } from "../../data/data";

function ThirdStep({ register, errors, setValue, watch }) {
  const [active, setActive] = useState([]);
  const [hasInteracted] = useState(false);
  const billingType = watch("billingType") || "monthly";

  useEffect(() => {
    if (!setValue) return;
    if (hasInteracted) {
      setValue("addons", active, { shouldValidate: true });
    } else {
      setValue("addons", active);
    }
  }, [active, hasInteracted, setValue]);

  const handleToggle = (id) => {
    setActive((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  // const handleBillingToggle = (e) => {
  //   const type = e.target.checked ? "yearly" : "monthly";
  //   setValue("billingType", type);
  // };

  return (
    <div>
      <Header>Pick add-ons</Header>
      <Tag>Add-ons help enhance your gaming experience.</Tag>

      {/* Hidden inputs for form state */}
      <input
        type="hidden"
        {...register("addons", {
          validate: (value) =>
            value && value.length > 0 ? true : "Select at least one add-on",
        })}
      />
      <input type="hidden" {...register("billingType")} />

      <div className="my-3 flex flex-col space-y-4 md:max-w-[400px] md:space-y-5 lg:max-w-[500px]">
        {pick.map((item) => {
          const isSelected = active.includes(item.id);
          return (
            <label
              key={item.id}
              className={`hover:border-primary-purple-600 flex items-center justify-between gap-4 rounded-lg border p-4 transition-colors duration-200 ${
                isSelected
                  ? "border-primary-purple-600 bg-gray-200"
                  : "border-gray-300"
              }`}
            >
              <div className="flex items-center gap-4">
                <input
                  checked={isSelected}
                  onChange={() => handleToggle(item.id)}
                  type="checkbox"
                  id={item.id}
                  className="accent-primary-purple-600 mt-1 h-5 w-5"
                />
                <div className="md:py-2">
                  <h3 className="text-primary-blue-950 text-base font-bold md:text-lg">
                    {item.name}
                  </h3>
                  <p className="text-neutral-grey-500 text-sm">
                    {item.details}
                  </p>
                </div>
              </div>
              <p className="text-primary-purple-600 text-sm font-medium">
                {billingType === "monthly"
                  ? `+$${item.monthlyPrice}/mo`
                  : `+$${item.yearlyPrice}/yr`}
              </p>
            </label>
          );
        })}

        {errors.addons && (
          <span className="text-primary-red-500 text-sm">
            {errors.addons?.message}
          </span>
        )}
      </div>
    </div>
  );
}

export default ThirdStep;
