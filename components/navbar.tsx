import { UserButton } from "@clerk/nextjs";
import { MainNav } from "./main-nav";

const Navbar = () => {
  return (
    <div className="border-b">
      <div className="flex h-14 items-center px-4">
        <div>Store Switcher</div>
        <MainNav />
        <div className="ml-auto items-center space-x-4 pr-3">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
