import type { ParentComponent } from 'solid-js';

const HomeContainer: ParentComponent = (props) => {
  return (
    <div class="flex flex-row py-[180px] justify-center h-screen">
      <div class="w-3/5 bg-primary p-2 flex flex-col h-full rounded-lg">
        {props.children}  
      </div>
    </div>
  );
}

export default HomeContainer;