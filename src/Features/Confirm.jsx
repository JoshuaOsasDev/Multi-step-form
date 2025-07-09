import Header from "../ui/Header";
import Tag from "../ui/Tag";

function Confirm() {
  return (
    <div className="mx-1 my-20 flex flex-col items-center justify-center">
      <img src="/icon-thank-you.svg" alt="" />
      <div className="flex max-w-100 flex-col items-center justify-center text-center md:max-w-[800px]">
        <Header>Thank you!</Header>
        <Tag>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </Tag>
      </div>
    </div>
  );
}

export default Confirm;
