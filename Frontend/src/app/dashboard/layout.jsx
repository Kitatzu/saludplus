import { SideNav } from "@/components/Dashboard/SideNav";
import { robotoFont } from "@/fonts/fonts";
import "./dashboard.css";

export default function Layout({ children }) {
  return (
    <div className={`${robotoFont.className} container`}>
      <div>
        <SideNav />
      </div>
      <div> {children} </div>
    </div>
  );
}
