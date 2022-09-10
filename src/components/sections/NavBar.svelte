<script>
  import Fa from "svelte-fa";
  import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"; 
  import NavLinks from "../NavLinks.svelte";
  import Button from "../Button.svelte";

  const openMenu = function (action) {
    const responsiveMenu = document.querySelector('.responsive-nav')

    if (action == 'open') {
      responsiveMenu.style.right = '0'
    } else {
      responsiveMenu.style.right = '-105%'
    }
  }

  let links = {
		auth: ["Login"],
		others: ["Products", "Features", "About", "Contact"],
	}
	let registerBtn = {
		text: "Register",
		dim: [6, 16],
		classes: "bg-sec space-x-0"
	}
</script>

<nav class="navbar container pt-5 pb-12 flex justify-between items-center">
	<div class="nav-logo flex space-x-4 justify-center items-center">
		<img src="/img/logo.svg" alt="crappo logo">
	</div>
  <div class="hidden md:flex space-x-2 justify-center items-center">
    <NavLinks { links }>
      <Button props={registerBtn} />
    </NavLinks>
  </div>
  <div on:click="{() => {openMenu('open')}}" class="open-btn cursor-pointer font-black md:hidden">
    <Fa
      icon={faBars}
      size="1.5x" 
    />
  </div>
  <div class="responsive-nav absolute top-0 right-[-105%] h-[100vh] w-[100vw] z-50 p-14 pt-8 flex flex-col justify-start items-center space-y-8 bg-dark transition-[right] duration-700">
    <div on:click="{() => {openMenu('close')}}" class="close-btn -mr-4 -mt-2 cursor-pointer font-black self-end justify-self-start">
      <Fa
        icon={faTimes}
        size="2x" 
      />
    </div>
    <div class="flex flex-col space-y-8 justify-center items-center">
      <NavLinks links={{...links, fontSize: "text-xl", flow: "flex-col space-y-8"}}>
        <Button props={registerBtn} />
      </NavLinks>
    </div>
  </div>
</nav>