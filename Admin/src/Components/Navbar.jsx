import navlogo from "../assets/logo.png";
import navprofile from "../assets/nav-profile.svg";

const Navbar = () => {
  return (
    <div className="flex justify-between px-4 py-2 bg-gray-100 rounded ">
      <div className="flex items-center gap-2">
        <img className="w-[25%]" src={navlogo} alt="" />
        <div>
          {" "}
          <a className="text-xl font-semibold">
            Bangla<span className="text-red-600 font-bold">Mart</span>
          </a>
          <p className="font-medium">Admin Panel</p>
        </div>
      </div>
      <img src={navprofile} alt="" />
    </div>
  );
};

export default Navbar;
