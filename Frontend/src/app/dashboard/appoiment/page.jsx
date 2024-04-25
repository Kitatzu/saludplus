import { AppoimentCard } from "@/components/Dashboard/AppoimentCard/AppoimentCard";
import "./appoiment.css";
import { AppoimentButton } from "@/components/Dashboard/AppoimentBtn/AppoimentButton";

export default function AppoimentPage() {
  return (
    <section className="appoiment_container">
      <AppoimentCard />
      <AppoimentButton />
    </section>
  );
}
