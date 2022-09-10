<script>
	import  { viewport, inViewportAnim, outViewportAnim } from '../../utilities'
	import CoinCard from '../CoinCard.svelte'

  let coinCards = [
		{
			title: "Bitcoin",
			abbr: "BTC",
			subtitle: "Digital currency in which a record of transactions is maintained.",
			icon: "/img/btc.svg",
			classes: "btc-card text-[#fff] bg-darkpurple",
			id: 0,
			buttonProps: {
				text:"Start mining",
				dim:[12, 24],
				classes:"bg-sec text-[#fff]"
			}
		},
		{
			title: "Etherium",
			abbr: "ETH",
			subtitle: "Blockchain technology to create and run decentralized digital applications.",
			icon: "/img/eth.svg",
			classes: "",
			id: 1,
			buttonProps: {
				text:"Start mining",
				dim:[12, 24],
				classes:"bg-sec text-[#fff]"
			}
		},
		{
			title: "Litecoin",
			abbr: "LTC",
			subtitle: "Cryptocurrency that enables instant payments to anyone in the world.",
			icon: "/img/ltc.svg",
			classes: "",
			id: 2,
			buttonProps: {
				text:"Start mining",
				dim:[12, 24],
				classes:"bg-sec text-[#fff]"
			}
		}
	]
</script>

<section id="coin-showcase" class="coin-showcase bg-[#eee] w-full pt-40 pb-14 text-[#000]">
  <div class="container flex flex-col justify-center items-center space-y-10">
    <h1 use:viewport on:enterViewport={(e) => {inViewportAnim(e.target, "scale")}} on:exitViewport={(e) => {outViewportAnim(e.target, "scale")}} class="opacity-0 text-2xl text-center font-semibold md:font-bold">Trade Securely And Market The High Growth Cryptocurrencies.</h1>
    <div class="flex flex-col space-y-8 space-x-0 justify-evenly items-center lg:flex-row lg:space-x-8 lg:space-y-0">
      {#each coinCards as coinCardProp (coinCardProp.id)}
        <CoinCard props={coinCardProp} />
      {/each}
    </div>
  </div>
</section>