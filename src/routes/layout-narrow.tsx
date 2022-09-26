import { component$, Slot } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div style="background-color:red;color:white">
    <h1>THIS IS MY CUSTOM LAYOUT</h1>
    <Slot/>
    </div>
  );
});
