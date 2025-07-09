import { useState } from "react";
import Header from "../ui/Header";
import Tag from "../ui/Tag";
import { plans } from "../../data/data";

function SecondStep({ register, errors, setValue }) {
  const [billing, setBilling] = useState("monthly");

  return (
    <div>
      <Header>Select your plan</Header>
      <Tag>You have the option of monthly or yearly billing.</Tag>

      <div className="my-3 md:flex">
        {plans.map((plan) => (
          <label key={plan.id} className="w-full md:w-auto">
            <input
              type="radio"
              value={plan.id}
              {...register("plan", { required: "Please select a plan" })}
              className="peer hidden"
            />
            <div className="mx-2.5 mt-3 flex cursor-pointer space-x-5 rounded-lg border-2 border-gray-400 px-4 py-3 peer-checked:border-2 peer-checked:border-purple-500 peer-checked:bg-gray-200 hover:border-purple-400 hover:bg-gray-200 md:flex-col md:space-y-2 md:border-2 md:px-3 lg:space-y-4 lg:px-4">
              <img src={plan.icon} className="w-fit md:py-4 md:pr-15" alt="" />
              <div>
                <h3 className="font-ubuntu text-primary-blue-950 mt-2 font-bold md:pr-0 md:pb-1 md:text-lg lg:pr-3">
                  {plan.name}
                </h3>
                <p className="text-neutral-grey-500 md:pb-1">
                  {billing === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                </p>
                {billing === "yearly" && (
                  <p className="text-primary-blue-950 font-ubuntu text-sm">
                    {plan.free}
                  </p>
                )}
              </div>
            </div>
          </label>
        ))}
      </div>

      {errors.plan && (
        <p className="ml-4 text-sm text-red-500">{errors.plan.message}</p>
      )}

      <div className="bg-neutral-blue-100 mx-2.5 mt-5 flex items-center justify-center gap-4 rounded-lg p-3 md:mt-10 md:w-[400px] lg:w-[500px]">
        <span className="text-primary-blue-950 text-sm font-medium">
          Monthly
        </span>

        <label className="relative inline-flex cursor-pointer items-center">
          <input
            onChange={(e) => {
              const type = e.target.checked ? "yearly" : "monthly";
              setBilling(type);
              setValue("billingType", type);
            }}
            type="checkbox"
            className="peer sr-only"
            id="billingToggle"
            checked={billing === "yearly"}
          />
          <div className="peer bg-primary-blue-950 h-6 w-11 rounded-full peer-checked:bg-blue-600 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all peer-checked:after:translate-x-full"></div>
        </label>

        <span className="text-sm font-medium text-gray-700">Yearly</span>
      </div>
    </div>
  );
}

export default SecondStep;
