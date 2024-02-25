// Components
import Logo from "@components/Navbar/Logo";
import Menu from "@components/Navbar/Menu";

const Navbar = () => {
  return (
    <div className="flex justify-between px-60 py-40 bg-white rounded-3xl h-128">
      <Logo />
      <Menu />
    </div>
  );
};

export default Navbar;
