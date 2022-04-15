/* ...*/
import "./styles.css";
import IMAGE from "./heart.png";
//module image + add to declarations
import { ClickCounter } from "./ClickCounter";

export const App = () => {
  return (
    <>
      <h1>
        React - {process.env.NODE_ENV} {process.env.name}{" "}
      </h1>
      <img src={IMAGE} alt="Heart Logo" width="300" height="300" />
      <ClickCounter />
    </>
  );
};
