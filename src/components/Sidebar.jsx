import {
  FireIcon,
  PlusIcon,
  LightningBoltIcon,
  FilterIcon,
} from "@heroicons/react/solid";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-20 flex flex-col bg-primary text-secondary shadow-xl">
      <SidbarIcons Icon={FireIcon} />
      <SidbarIcons Icon={PlusIcon} />
      <SidbarIcons Icon={LightningBoltIcon} />
      <SidbarIcons Icon={FilterIcon} />
    </div>
  );
};

const SidbarIcons = ({ Icon, text = "tooltip" }) => {
  return (
    <div className="group relative flex items-center justify-center h-12 w-12 mt-5 mb-5 mx-auto bg-gray-800 text-green-500 hover:text-white hover:cursor-pointer hover:bg-green-600 p-2 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear">
      <Icon className="" />
      <span className="absolute hidden group-hover:inline-flex w-auto p-2 m-2 min-w-max left-16 rounded-md shadow-md text-white bg-gray-900 text-xs font-bold transition-all duration-100 scale-0 group-hover:scale-100">
        {text}
      </span>
    </div>
  );
};

export default Sidebar;
