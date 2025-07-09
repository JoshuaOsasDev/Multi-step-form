import Header from "../ui/Header";
import Tag from "../ui/Tag";
import { planOptions, pick } from "../../data/data";
import { useContextStep } from "../../Context/useContextStep";

function FourthStep({ watch }) {
  const { setCurrentStep } = useContextStep();

  const billingType = watch("billingType") || "monthly";
  const selectedPlanId = watch("plan");
  const selectedAddons = watch("addons") || [];

  const selectedPlan = planOptions.find((p) => p.id === selectedPlanId);
  const planPrice =
    billingType === "monthly"
      ? selectedPlan?.monthlyPrice
      : selectedPlan?.yearlyPrice;

  const selectedAddOnDetails = pick.filter((addon) =>
    selectedAddons.includes(addon.id),
  );

  const addOnsTotal = selectedAddOnDetails.reduce((acc, addon) => {
    const price =
      billingType === "monthly" ? addon.monthlyPrice : addon.yearlyPrice;
    return acc + price;
  }, 0);

  const total = planPrice + addOnsTotal;

  return (
    <div>
      <Header>Finishing up</Header>
      <Tag>Double-check everything looks OK before confirming.</Tag>
      <div className="font-ubuntu text-neutral-grey-500 bg-neutral-blue-50 S my-6 space-y-4 rounded-lg p-6 md:max-w-[400px] lg:max-w-[500px]">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-primary-blue-950 text-lg font-bold">
              {selectedPlan?.name} (
              {billingType === "monthly" ? "Monthly" : "Yearly"})
            </h3>
            <button
              onClick={() => setCurrentStep(2)}
              className="text-neutral-grey-400 hover:text-primary-purple-600 mt-1 text-sm underline"
            >
              Change
            </button>
          </div>
          <p className="text-primary-blue-950 font-bold">
            ${planPrice}/{billingType === "monthly" ? "mo" : "yr"}
          </p>
        </div>

        <hr className="border-t border-gray-200" />

        {selectedAddOnDetails.map((addon) => (
          <div
            key={addon.id}
            className="text-neutral-grey-400 flex items-center justify-between text-sm"
          >
            <p>{addon.name}</p>
            <p className="text-primary-blue-950 font-medium">
              +$
              {billingType === "monthly"
                ? addon.monthlyPrice
                : addon.yearlyPrice}
              /{billingType === "monthly" ? "mo" : "yr"}
            </p>
          </div>
        ))}
      </div>

      <div className="text-neutral-grey-500 my-4 flex items-center justify-between text-xl md:max-w-[400px] lg:max-w-[500px]">
        <p>Total (per {billingType === "monthly" ? "month" : "year"})</p>
        <p className="text-primary-purple-600 text-2xl font-bold">
          ${total}/{billingType === "monthly" ? "mo" : "yr"}
        </p>
      </div>
    </div>
  );
}

export default FourthStep;
