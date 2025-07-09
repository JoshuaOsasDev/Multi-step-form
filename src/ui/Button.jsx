import { useContextStep } from "../../Context/useContextStep";

function Button() {
  const { setCurrentStep, currentStep } = useContextStep();
  return (
    <div
      className={`flex ${currentStep > 1 ? "items-center justify-between" : "justify-end"} " mx-5`}
    >
      {currentStep > 1 && (
        <button
          type="button"
          onClick={() =>
            setCurrentStep((prev) => {
              // console.log(prev);
              if (prev > 1) return prev - 1;
              return prev;
            })
          }
          className="text-neutral-grey-500 cursor-pointer text-xl hover:text-gray-600"
        >
          &larr; Go Back
        </button>
      )}

      <button
        // onClick={() =>
        //   setCurrentStep((prev) => {
        //     console.log(prev);
        //     if (prev < 4) return prev + 1;
        //     return prev;
        //   })
        // }
        id="personal"
        type="submit"
        className={`bg-primary-blue-950 my-3 mb-6 cursor-pointer rounded-lg p-4 px-5 text-xl text-white transition-colors duration-500 hover:bg-blue-900 ${currentStep === 4 ? "bg-primary-purple-600" : ""}`}
      >
        {currentStep === 4 ? "Confirm" : " Next step"}
      </button>
    </div>
  );
}

export default Button;
