import MainForm from "./MainForm";
import SideBar from "./SideBar";

function AppLayOut() {
  return (
    <div className="h-screen w-full md:flex md:items-center md:justify-center">
      <div className="relative grid grid-cols-1 shadow-2xl md:h-[90vh] md:max-w-fit md:grid-cols-[20rem_30rem] md:overflow-hidden md:rounded-2xl md:bg-white lg:max-w-[1200px] lg:grid-cols-[22rem_40rem]">
        <SideBar />
        <MainForm />
      </div>
    </div>
  );
}

export default AppLayOut;
