<script>
  import Fa from 'svelte-fa'
  import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
  import Button from "./Button.svelte"


  export let props = {
    icon: "",
    title: "",
    abbr: "",
    subtitle: "",
    classes: "",
    id: 0,
    buttonProps: {},
  }

  const handleHover = function (id) {
    const cards = document.querySelectorAll(".coin-card")
    cards.forEach((card) => {
      const idx = card.dataset.id
      if (idx == id) {
        card.id = "hovered-card"
        card.classList.remove("default-card")
      }
      else {
        card.id = ""
        card.classList.add("default-card")
      }
      const btcMineBtn = document.querySelector(".btc-card .mine-btn")
      const btcMineIcon = document.querySelector(".btc-card .mine-icon")
      if (id != 0) {
        btcMineBtn.style.display = "none"
        btcMineIcon.style.display = "flex"
      }
    })
  }
  const handleMouseLeave = function (id) {
    const cards = document.querySelectorAll(".coin-card")
    const btcCard = document.querySelector(".btc-card")
    cards.forEach((card) => {
      card.id = ""
    })
    btcCard.id = "hovered-card"
    const btcMineBtn = document.querySelector(".btc-card .mine-btn")
      const btcMineIcon = document.querySelector(".btc-card .mine-icon")
      if (id != 0) {
        btcMineIcon.style.display = "none"
        btcMineBtn.style.display = "block"
      }
  }
</script>

<div on:mouseleave="{handleMouseLeave(props.id)}" on:mouseenter="{handleHover(props.id)}" data-id="{props.id}" class="coin-card group bg-[#fff] flex flex-col items-center justify-start space-y-8 h-[432px] w-full lg:max-w-[348px] px-8 py-10 rounded-[8%] text-center cursor-pointer {props.classes}">
  <img src="{props.icon}" alt="" class="mb-10">
  <div class="font-bold text-3xl flex items-start justify-between"><p>{props.title}</p><span class="opacity-50 text-xl ml-1 font-light">{props.abbr}</span></div>
  <h5 class="">{props.subtitle}</h5>

  {#if props.id == 0}
    <div class="mine-btn">
      <Button props={props.buttonProps}>
        <Fa
          icon={faAngleRight}
          size="lg"
        />
      </Button>
    </div>
  {:else}
  <div class="mine-btn hidden group-hover:block">
    <Button props={props.buttonProps}>
      <Fa
        icon={faAngleRight}
        size="lg"
      />
    </Button>
  </div>
  {/if}

  {#if props.id == 0}
  <div class="mine-icon hidden justify-center items-center h-12 rounded-full border-[#ddd] border-2 py-7 px-6">
    <Fa
      icon={faAngleRight}
      size="lg"
      color="#3671E9"
    />
  </div>
  {:else}
  <div class="mine-icon flex justify-center items-center group-hover:hidden h-12 rounded-full border-[#ddd] border-2 py-7 px-6">
    <Fa
      icon={faAngleRight}
      size="lg"
      color="#3671E9"
    />
  </div>
  {/if}
</div>

<style>
  
</style>
