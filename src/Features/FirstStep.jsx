import Header from "../ui/Header";
import Tag from "../ui/Tag";

function FirstStep({ register, errors }) {
  // console.log(errors, "err");

  return (
    <div>
      <Header>Personal info</Header>
      <Tag>Please provide your name, email address, and phone number.</Tag>
      <div className="mb-2">
        <div className="form-row mt-2">
          <div className="flex justify-between md:w-[22rem] lg:w-[30rem]">
            <label htmlFor="name" className="">
              Name
            </label>

            <span className="font-ubuntu text-primary-red-500 mr-4 font-bold lg:ml-10">
              {errors && errors.name?.message}
            </span>
          </div>
          <input
            {...register("name", { required: "This field is required" })}
            type="text"
            placeholder="eg. stephen King"
            id="name"
            className={`${errors.name ? "border-primary-red-500 focus:ring-0" : "focus:ring-primary-blue-300"}`}
          />
        </div>

        <div className="form-row">
          <div className="flex justify-between md:w-[22rem] lg:w-[30rem]">
            <label htmlFor="email">Email Address</label>

            <span className="text-primary-red-500 font-ubuntu mr-4 font-bold">
              {errors && errors.email?.message}
            </span>
          </div>
          <input
            type="email"
            id="email"
            placeholder="eg. stephenking@hotmail.com"
            {...register("email", {
              required: "This field is required",
              validate: (value) =>
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
                `${value} is not a valid email address.`,
            })}
            className={`${errors.email ? "border-primary-red-500 focus:ring-0" : "focus:ring-primary-blue-300"}`}
          />
        </div>

        <div className="form-row">
          <div className="flex justify-between md:w-[22rem] lg:w-[30rem]">
            <label htmlFor="phone">Phone Number</label>

            <span className="text-primary-red-500 font-ubuntu mr-4 font-bold">
              {errors && errors.phone?.message}
            </span>
          </div>
          <input
            type="tel"
            id="phone"
            placeholder="eg. +1 234 567 890"
            {...register("phone", {
              required: "This field is required",
              minLength: {
                value: 11,
                message: "11 digits required",
              },
              pattern: {
                value: /^\d+$/,
                message: "Numbers only ",
              },
            })}
            className={`${errors.phone ? "border-primary-red-500 focus:ring-0" : "focus:ring-primary-blue-300"}`}
          />
        </div>
      </div>
    </div>
  );
}

export default FirstStep;
