# Overview

This project is a solution to the Multi-step form challenge on Frontend Mentor. The challenge involved building a fully functional multi-step form with a clean, responsive UI and proper form validation using modern React practices.

## The challenge

The goal was to build a dynamic multi-step form that allows users to:

Navigate forward and backward through the form steps

Select a plan and add-ons

Toggle between monthly and yearly billing options

Review all selections in a summary before submission

View responsive layouts on both mobile and desktop

Receive real-time validation and error messages

### Built with

1 React for UI development

2 Tailwind CSS for utility-first styling

3 React Hook Form for form management and validation

### What I learned

During the course of this project, I deepened my understanding of:

React Hook Form for controlled inputs, watching values, and dynamic validation

How to manage step transitions using React context

Efficiently updating form values using setValue and watch

Tailwind CSS techniques for creating responsive layouts and styling interactive states (e.g. hover, focus)

Conditional rendering of components based on form state

Implementing a live summary view from form state

This project improved my ability to manage complex form logic and emphasized the importance of user experience in multi-step workflows.

### My process

I approached the challenge by first planning the form structure and identifying reusable components. Using React and React Hook Form, I was able to manage complex form data and transitions smoothly.

1. Step Management with React Context
   I used a shared context to manage and update the current form step across components:

```js

   const { currentStep, setCurrentStep } = useContext(StepContext);


onClick={() => setCurrentStep(2)}
```

2.  Form State & Validation with React Hook Form
    Using useForm() from React Hook Form, I registered all fields and applied validation easily

```js
const {
  register,
  handleSubmit,
  watch,
  setValue,
  formState: { errors },
} = useForm();
```

3. Watching Values Dynamically
   I watched fields like billingType, plan, and addons to update the summary in real-time:

```js
const billingType = watch("billingType") || "monthly";
const selectedPlanId = watch("plan");
const selectedAddons = watch("addons") || [];
```

4. Calculating Total Price Based on Billing Type
   I used conditional logic to dynamically compute the total cost:

```js
const planPrice =
  billingType === "monthly"
    ? selectedPlan.monthlyPrice
    : selectedPlan.yearlyPrice;

const addOnsTotal = selectedAddOnDetails.reduce((acc, addon) => {
  const price =
    billingType === "monthly" ? addon.monthlyPrice : addon.yearlyPrice;
  return acc + price;
}, 0);

const total = planPrice + addOnsTotal;
```
