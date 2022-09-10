<script>
  import { scale, slide, fly } from 'svelte/transition'
	import Fa from 'svelte-fa'
  import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
	import Button from '../Button.svelte'

  let heroBtn = {
		text: "Try for FREE",
		dim: [6, 16],
		classes: "bg-sec",
		iconClasses: "py-3 px-4 bg-[#fff]",
    animate: [false, true]
	}

</script>

<section class="hero relative">
  <div class="container flex flex-col justify-between items-center lg:grid lg:grid-cols-2">
    <div class="hero-left flex flex-col items-start max-w-[500px] space-y-6">
      <div class="text-xs rounded-full basis-1/2 px-1 py-1 max-w-[300px] bg-[#4b5563] flex space-x-2 justify-between items-center">
        <p in:scale="{{ duration: 2000 }}" class="rounded-full px-3 py-1 text-center bg-white text-[#444] mr-4">70% SAVE</p>
        <p class="text-white pr-2">For the best Black Friday deals</p>
      </div>
      <div in:slide="{{ duration: 1500 }}">
        <h1 class="hero-title text-4xl font-bold mb-4 lg:text-5xl">
          Fastest & Secure Platform To Invest In Cypto
        </h1>
        <h5 class="hero-subtitle text-xs">
          buy and sell cyptocurrencies by trusted 10M wallets, in over 100m transactions
        </h5>
      </div>
      <div>
        <Button props={heroBtn}>
          <Fa 
            icon={faCaretRight}
            color="#3671E9"
            size="sm"
          />
        </Button>
      </div>
    </div>
    <div class="hero-right basis-1/2 bg-cover bg-center overflow-x-visible">
      <img in:scale="{{ duration: 2000 }}" src="/img/hero-right.svg" alt="bitcoin diagram" class="">
      <img src="/img/rect1.svg" alt="" class="absolute right-[65%] bottom-[-35%] lg:right-[30%]">
      <img src="/img/rect2.svg" alt="" class="absolute right-0 bottom-[-15%]">
    </div>
  </div>
</section>
