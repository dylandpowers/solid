import type { ParentComponent } from "solid-js";

const TypographyLarge: ParentComponent = (props) => {
  return (
    <h1 class="text-white text-center text-5xl">{props.children}</h1>
  );
};

const TypographyMedium: ParentComponent = (props) => {
  return (
    <h3 class="text-white font-mono text-3xl">{props.children}</h3>
  );
};

export {
  TypographyLarge,
  TypographyMedium
};