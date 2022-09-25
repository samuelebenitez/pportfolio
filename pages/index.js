import style from "../styles/Home.module.scss";
import Link from "next/link";
import background from "../public/graini-back.svg";

export default function Home() {
  return (
    <div className={style.container}>
      <Link href="/classic">
        <button className={style.button}>CLASSIC</button>
      </Link>
      <Link href="/creative">
        <button>CREATIVE</button>
      </Link>
    </div>
  );
}
