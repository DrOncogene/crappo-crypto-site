<script>
  import Fa from 'svelte-fa'
  import { faInstagram, faWhatsapp, faYoutube, faTwitter, faLinkedin, faFacebookF } from '@fortawesome/free-brands-svg-icons'
	import FooterBlocks from '../FooterBlocks.svelte'
  
  let footerSections = [
		{
			img: true,
			title: "",
			links: []
		},
		{
			img: false,
			title: "Quick Links",
			links: ['Home', 'Products', 'About', 'Features', 'Contact']
		},
		{
			img: false,
			title: "Resources",
			links: ['Download Whitepapper', 'Smart Token', 'Blockchain Explorer', 'Crypto API', 'Interest']
		},
		{
			img: false,
			linksImg: true,
			title: "We accept the following payment systems",
			links: ["/img/visa.svg", "/img/mastercard.svg", "/img/btc-trans.svg"],
			classes: "text-base"
		},
	]
	let socialIcons = [
		{
			icon: faFacebookF,
			size: "1.5x"
		},
		{
			icon: faYoutube,
			size: "1.5x"
		},
		{
			icon: faInstagram,
			size: "1.5x"
		},
		{
			icon: faTwitter,
			size: "lg"
		},
		{
			icon: faLinkedin,
			size: "1.5x"
		}
	]
</script>

<footer class="container flex flex-col space-y-10 py-10">
	<div class="footer-top flex flex-col space-y-10 justify-between items-center lg:flex-row lg:space-y-0 lg:space-x-10 lg:items-start">
		{#each footerSections as section}
			<FooterBlocks props={section}/>
		{/each}
	</div>
	<div class="footer-bottom flex flex-col justify-between items-center space-y-8 lg:space-y-0 lg:flex-row">
		<p>&copy; 2022 CRAPPO. All rights reserved.</p>
		<div class="flex space-x-10">
			{#each socialIcons as icon}
			<a href="#" class="hover:text-sec">
        <Fa
          icon={icon.icon}
          size={icon.size} 
        />
      </a>
			{/each}
		</div>
	</div>
</footer>