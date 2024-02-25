// Components
import Logo from "@components/Navbar/Logo";
import Menu from "@components/Navbar/Menu";

const Navbar = () => {
  return (
    <div className="relative h-128">
      <div className="absolute z-20 w-full h-128 flex justify-between items-center px-60 py-40 bg-white rounded-3xl">
        <Logo />
        <Menu />
      </div>
      <div className="absolute z-10 w-full h-128 top-0 left-0  px-60 py-40 blur-lg bg-gradient-to-r from-ultramarine to-congo_pink rounded-3xl"></div>
    </div>
  );
};

export default Navbar;
