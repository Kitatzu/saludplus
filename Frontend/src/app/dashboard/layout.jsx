import { SideNav } from "@/components/Dashboard/SideNav/SideNav";
import { robotoFont } from "@/fonts/fonts";
import "./dashboard.css";

export default function Layout({ children }) {
  return (
    <div className={`${robotoFont.className} dashboard_container antialiased`}>
      <div className="div1">
        <SideNav />
      </div>
      <div className="div2"> {children} </div>
    </div>
  );
}
