<script>
  import  { viewport, inViewportAnim, outViewportAnim } from '../../utilities'
  import { fly, scale } from 'svelte/transition'
  import { faSignal, faUser, faEarthAfrica } from '@fortawesome/free-solid-svg-icons';
	import Button from '../Button.svelte'
  import Achievement from '../Achievement.svelte';

  let achievements = [
		{
			title:"$30B",
			subtitle:"Digital Currency Exchange",
			icon: faSignal
		},
		{
			title:"10M+",
			subtitle:"Trusted Wallet Investors",
			icon: faUser
		},
		{
			title:"195+",
			subtitle:"Countries Around The World",
			icon: faEarthAfrica
		}
	]
</script>

<section class="why-crappo container flex flex-col px-0">
  <div in:fly="{{ duration: 1000, y: 200, delay:2000 }}" class="flex flex-col justify-between items-center space-y-8 md:flex-row md:space-y-0 mb-8">
    {#each achievements as achievement}
      <Achievement props={achievement} />
    {/each}
  </div>
  <div class="flex flex-col justify-between items-center lg:grid lg:grid-cols-2 lg:gap-16">
    <div use:viewport on:enterViewport={(e) => inViewportAnim(e.target, 'scale')} on:exitViewport={(e) => outViewportAnim(e.target, 'scale')} class="order-2 md:order-1 opacity-0"><img src="/img/why-img2.png" alt="" class="object-cover"/></div>
    <div use:viewport on:enterViewport={(e) => {inViewportAnim(e.target, 'slide')}} on:exitViewport={(e) => {outViewportAnim(e.target, 'slide')}} class="opacity-0 translate-y-[30%] flex flex-col justify-between items-center text-center md:text-left md:items-start gap-4 order-1 md:order-2">
      <h1 class="text-4xl text-center md:text-left md:text-5xl">Why you should choose CHAPPO</h1>
      <h4 class="opacity-75 text-md font-light">
        Experience the next generation cryptocurrency platform. No financial borders, extra fees, and fake reviews.
      </h4>
      <Button props={{
        text: "Learn More",
        dim: [6, 14],
        classes: "bg-sec space-x-0"
      }}/>
    </div>
  </div>
</section>
