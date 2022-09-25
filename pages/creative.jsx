import Spline from "@splinetool/react-spline";
import creati from "../styles/creati.module.scss";

export default function Creative() {
  return (
    <div className={creati.container}>
      <Spline scene="https://prod.spline.design/W536QNu-6oA5zATk/scene.splinecode" />
    </div>
  );
}
