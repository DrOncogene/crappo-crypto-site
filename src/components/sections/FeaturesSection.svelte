<script>
	import  { viewport, inViewportAnim, outViewportAnim } from '../../utilities'
  import FeatureShowcase from "../FeatureShowcase.svelte";

  let features = [
		{
			img: "/img/chart-1.svg",
			order: ['order-2', 'order-1'],
			title: "Invest Smart",
			subtitle: "Get full statistic information about the behaviour of buyers and sellers will help you to make the decision.",
			imgClasses: "ml-8",
			classes: "self-start"
		},
		{
			img: "/img/chart-2-img.png",
			order: ['lg:order-1', 'lg:order-2'],
			title: "Detailed Statistics",
			subtitle: "View all mining related information in realtime, at any point at any location and decide which polls you want to mine in.",
			imgClasses: "lg:-ml-28"
		},
		{
			img: "/img/chart-3.svg",
			order: ['order-2', 'order-1'],
			title: "Grow your profit and track your investments",
			subtitle: "Use advanced analytical tools. Clear TradingView charts let you track current and historical profit investments.",
			imgClasses: ""
		},
	]
</script>

<section class="relative trading flex flex-col px-6 pb-20 gap-24 justify-center items-center">
	<img src="/img/circle.svg" alt="" class="block absolute -top-20 left-[15%] z-50">
  <h1 use:viewport on:enterViewport={(e) => {inViewportAnim(e.target, "scale")}} on:exitViewport={(e) => {outViewportAnim(e.target, "scale")}} class="mt-0 text-2xl md:text-3xl text-center w-[90%] lg:w-1/2">Market Sentiments, Portfolio, And Run The Infrastructure Of Your Choice</h1>
  {#each features as feature}
		<FeatureShowcase props={feature} />
  {/each}
	<img src="/img/circle-2.svg" alt="" class="block absolute bottom-0 right-0">
</section>