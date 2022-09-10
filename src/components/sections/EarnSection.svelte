<script>
  import  { viewport, inViewportAnim, outViewportAnim } from '../../utilities'
	import Button from '../Button.svelte'
</script>

<section class="earn relative flex flex-col container pb-40">
  <div use:viewport on:enterViewport={(e) => {inViewportAnim(e.target, "slide")}} on:exitViewport={(e) => {outViewportAnim(e.target, "slide")}} class="opacity-0 translate-y-[30%] text-center mb-10">
    <h3 class="text-2xl font-semibold p-2">See how much you can earn with us</h3>
    <h5 class="opacity-50 text-xs p-2">Let’s check your hash rate to see how much you will earn today. Enter your hash rate below</h5>
  </div>
  <div use:viewport on:enterViewport={(e) => {inViewportAnim(e.target, "scale")}} on:exitViewport={(e) => {outViewportAnim(e.target, "scale")}} class="opacity-0 duration-500 bg-[#fff] text-[#000] p-6 md:p-12 w-full md:w-2/3 rounded-xl m-auto -mb-[350px] flex flex-col justify-center items-center space-y-10">
    <form action="#" class="w-full flex flex-col space-y-8 justify-evenly md:flex-row md:items-center md:space-x-8 md:space-y-0">
      <input type="text" name="hash-rate" id="hash-r" placeholder="Enter your hash rate" class="placeholder:text-[#000] text-xl inline-block w-full md:w-1/2 px-0 py-1">
      <select name="hash-unit" id="hash-u" class="w-full md:w-1/4 p-[7px] text-xl">
        <option value="TH/s" selected>TH/s</option>
        <option value="H/s">H/s</option>
        <option value="KH/s">KH/s</option>
        <option value="MH/s">MH/s</option>
        <option value="GH/s">GH/s</option>
      </select>
      <Button props={{
        text: "Calculate",
        dim: [8, 32],
        classes: "justify-center text-lg text-[#fff] bg-sec max-w-[max-content]"
      }}
      />
    </form>
    <div class="flex flex-col w-full space-y-4">
      <h3 class="md:text-lg text-sec">ESTIMATED 24HR REVENUE:</h3>
      <p class="text-[32px] font-semibold text-wr">0.055 130 59 ETH<span class="text-sec">($1275)</span></p>
      <p class="opacity-60 font-medium">Revenue will change based on mining difficulty and Ethereum price.</p>
    </div>
  </div>
</section>