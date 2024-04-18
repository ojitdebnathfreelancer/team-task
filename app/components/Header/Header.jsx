import NavList from "./NavList";

const Header = () => {
  return (
    <nav className="bg-black/90 text-white h-16 z-[999999] xl:px-0 px-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <NavList />
        <div>
          <button className="outline-none border-none bg-green-600 px-3 py-1 rounded-md font-semibold">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
