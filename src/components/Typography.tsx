import type { ParentComponent } from "solid-js";

const TypographyLarge: ParentComponent = (props) => {
  return (
    <h1 class="text-white text-center text-5xl">{props.children}</h1>
  );
}

export {
  TypographyLarge
}