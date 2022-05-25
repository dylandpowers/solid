import type { ParentComponent } from "solid-js";

const TypographyLarge: ParentComponent<{ underline?: boolean}> = (props) => {
  return (
    <div class={`py-8 ${props.underline ? 'border-b' : ''}`}>
      <h1 class="text-white text-center text-5xl">{props.children}</h1>
    </div>
  );
}

export {
  TypographyLarge
}