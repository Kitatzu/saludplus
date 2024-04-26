import Link from "next/link";
import "./appoimentButton.css";
import { robotoFont } from "@/fonts/fonts";

export const AppoimentButton = () => {
  return (
    <Link href="appoiment/new-appoiment">
      <button className={`${robotoFont.className} appoiment_btn`}>
        Nuevo Turno
      </button>
    </Link>
  );
};
