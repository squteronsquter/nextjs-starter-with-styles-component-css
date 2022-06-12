import Layout from "@/components/Layout";
import styles from "@/styles/Index.module.css";
import Image from "next/image";

export default function HomePage() {
  return (
    <Layout
      title="Jak pisać dobre opisy produktów w sklepie interentowym"
      description="Jeśli jesteś autorem opisów produtów lub usług w sklepie interentowym to z tego poradnika dowiesz się jak pisać opisy, które sprzedają."
    >
      <h1>Jak przygotowywać opisy produktów, które sprzedają.</h1>
      <div className={styles.robotImage}>
        <Image src="/img/svg/robot.svg" alt="Logo" width="128" height="128" />
      </div>

      <p>Content on the home page.</p>
    </Layout>
  );
}
