import { Component } from "solid-js";
import Timer from "./Timer";
import { TypographyLarge } from "./Typography";

const Header: Component = () => {
  return (
    <>
      <div class="flex justify-evenly border-b py-8 items-center">
        <TypographyLarge>Hello, Dylan</TypographyLarge>
        <Timer />
      </div>
      <TypographyLarge>We have been trying to reach you about your car's extended warranty.</TypographyLarge>
    </>
  );
};

export default Header;