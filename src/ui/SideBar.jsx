import { useContextStep } from "../../Context/useContextStep";
import { sidebar } from "../../data/data";

function SideBar() {
  const { currentStep } = useContextStep();

  return (
    <div className="h-60 bg-[url(/bg-sidebar-mobile.svg)] bg-cover md:m-3 md:h-[86vh] md:bg-[url(/bg-sidebar-desktop.svg)] md:bg-contain md:bg-no-repeat lg:mx-4 lg:h-[86vh]">
      <ul className="flex justify-center space-x-4 py-6 md:ml-5 md:w-full md:flex-col">
        {sidebar.map((item, i) => {
          const step = i + 1;
          const isActive = currentStep === step;

          return (
            <li key={i} className="my-4 ml-1 items-center md:flex md:space-x-4">
              <button
                // onClick={() => setCurrentStep(step)}
                className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 text-lg font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-primary-blue-200 border-blue-500 text-white"
                    : "border-white text-white"
                }`}
              >
                {step}
              </button>
              <div
                className="hidden leading-tight text-white uppercase md:block"
                key={item.title}
              >
                <p className="text-neutral-grey-300 text-xs">{item.title}</p>
                <p className="text-sm font-bold tracking-wide">
                  {item.description}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SideBar;
