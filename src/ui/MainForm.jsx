import { useContextStep } from "../../Context/useContextStep";
import Confirm from "../Features/Confirm";
import FirstStep from "../Features/FirstStep";
import FourthStep from "../Features/FourthStep";
import SecondStep from "../Features/SecondStep";
import ThirdStep from "../Features/ThirdStep";
import Button from "./Button";
import { useForm } from "react-hook-form";

function MainForm() {
  const { currentStep, setCurrentStep } = useContextStep();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm();

  // console.log(currentStep, "step");
  const onSubmit = (data) => {
    console.log(data);
    setCurrentStep((prev) => {
      // console.log(prev);
      if (prev < 5) return prev + 1;
      return prev;
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-neutral-blue-100 h-120 md:relative md:h-fit md:bg-white">
        <div className="absolute top-30 left-0 z-10 h-fit w-full md:static">
          <div className="m-auto mb-7 h-full max-w-90 rounded-xl bg-white px-7 py-2 shadow-lg md:mt-10 md:max-w-fit md:py-0 md:shadow-none lg:max-w-[1200px]">
            {currentStep === 1 && (
              <FirstStep errors={errors} register={register} />
            )}
            {currentStep === 2 && (
              <SecondStep
                errors={errors}
                register={register}
                setValue={setValue}
              />
            )}

            {currentStep === 3 && (
              <ThirdStep
                errors={errors}
                register={register}
                setValue={setValue}
                watch={watch}
              />
            )}

            {currentStep === 4 && (
              <FourthStep errors={errors} register={register} watch={watch} />
            )}

            {currentStep === 5 && (
              <Confirm errors={errors} register={register} watch={watch} />
            )}
          </div>
        </div>
      </div>
      <div className="text-neutral-grey-500 mt-3 w-full md:absolute md:top-120 md:h-fit md:max-w-[470px] lg:max-w-[550px]">
        {currentStep === 5 ? (
          <footer className="text-center text-sm md:absolute md:top-15 md:left-25 md:bg-white">
            Challenge by{" "}
            <span className="mr-1 cursor-pointer text-blue-700 underline">
              <a href="https://www.frontendmentor.io/home">Frontend Mentor</a>
            </span>
            Coded by Your{" "}
            <span className="cursor-pointer text-blue-700 underline">
              <a href="https://github.com/JoshuaOsasDev"> Joshua Osas</a>
            </span>
          </footer>
        ) : (
          <Button />
        )}
      </div>
    </form>
  );
}

export default MainForm;
