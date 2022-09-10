<script>
  import { viewport, inViewportAnim, outViewportAnim } from "../../utilities"
  import Button from "../Button.svelte";
</script>

<section class="newsletter container p-10 lg:p-0">
  <div use:viewport on:enterViewport={(e) => {inViewportAnim(e.target, "scale")}} on:exitViewport={(e) => {outViewportAnim(e.target, "scale")}} class="max-w-[1200px] py-14 px-10 bg-newsletter bg-no-repeat bg-cover bg-left-top rounded-xl flex flex-col justify-between items-center space-y-8 lg:space-y-0 lg:flex-row opacity-0">
    <div class="flex flex-col space-y-4 items-center justify-center lg:items-start">
      <h3 class="font-bold text-xl">Start mining now</h3>
      <p class="text-sm">Join now with CRAPPO to get the latest news and start mining now</p>
    </div>
    <form action="#" class="flex flex-col lg:flex-row w-full lg:w-1/2 space-y-8 items-center justify-center lg:space-y-0 lg:space-x-4">
      <input type="email" name="email" id="newsletter-email" placeholder="Enter your email" class="w-full lg:w-2/3 placeholder:text-[#fff] border-b-[#fff]">
      <Button props={{
        text: "Subscribe",
        dim: [8, 16],
        classes: "bg-[#fff] text-[#000] space-x-0"
      }}/>
    </form>
  </div>
</section>