import { Component, createSignal, onCleanup, onMount, Show } from "solid-js";
import pepe from "../../assets/pepe.png";

type Position = {
  x: number;
  y: number;
}

type Square = {
  top: number;
  left: number;
  right: number;
  bottom: number;
}

const DEFAULT_POSITION: Position = { x: 0, y : 0 };

const SquareContainer: Component = () => {
  const [squareCoordinates, setSquareCoordinates] = createSignal<Position>(DEFAULT_POSITION);
  const [isSquareShown, setIsSquareShown] = createSignal<boolean>(true);
  let boundary: Square;
  let divRef: HTMLDivElement;
 
  const interval = setInterval(() => {
    // since the coordinate is the top left, we never want to exceed the boundaries, so subtract
    // 48px (which is equivalent to w-12 and h-12 in tailwind)
    const newX = Math.min(
      boundary.right - 48,
      Math.floor(Math.random() * (boundary.right - boundary.left)) + boundary.left);

    const newY = Math.min(
      boundary.bottom - 48,
      Math.floor(Math.random() * (boundary.bottom - boundary.top)) + boundary.top);
    setSquareCoordinates({ x: newX, y: newY });
  }, 1000);

  onCleanup(() => clearInterval(interval));

  onMount(() => {
    if (!divRef) {
      return;
    }

    const rect: DOMRect = divRef.getBoundingClientRect();
    setSquareCoordinates({ x: rect.left, y: rect.top });
    boundary = { top: rect.top, left: rect.left, right: rect.right, bottom: rect.bottom };
  });

  return (
    <div class="flex-1 flex justify-center" ref={divRef}>
      <Show when={isSquareShown()}>
        <span class="bg-secondary w-12 h-12 absolute rounded-lg" style={{ 
          left: `${squareCoordinates().x}px`,
          top: `${squareCoordinates().y}px`
        }} onClick={() => setIsSquareShown(false)}></span>
      </Show>
      <Show when={!isSquareShown()}>
        <img src={pepe} alt="Cool AF Pepe"/>
      </Show>
    </div>
  );
};

export default SquareContainer;