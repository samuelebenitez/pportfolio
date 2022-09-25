import Header from "../components/classic/Header";
import style from "../styles/classic.module.scss";

export default function Classic() {
  return (
    <div className={style.classic_container}>
      <div className={style.classic_container1}>
        <p className={style.classic_text}>-portfolio n diarie from</p>
        <h1 className={style.classic_text1}> Sam</h1>
        <h1 className={style.classic_text2}>Frontend Developer</h1>
      </div>
    </div>
  );
}
