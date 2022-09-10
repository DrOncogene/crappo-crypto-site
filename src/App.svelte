<script>
	import NavBar from './components/sections/NavBar.svelte';
	import Hero from './components/sections/Hero.svelte';
	import AchievementsSection from './components/sections/AchievementsSection.svelte'
	import EarnSection from './components/sections/EarnSection.svelte';
	import MineSection from './components/sections/MineSection.svelte';
	import FeaturesSection from './components/sections/FeaturesSection.svelte';
	import NewsLetter from './components/sections/NewsLetter.svelte';
	import Footer from './components/sections/Footer.svelte';


	function inViewport (elem){

	}
</script>

<NavBar />
<main class="flex flex-col space-y-20 mb-20">
	<Hero />
	<AchievementsSection />
	<EarnSection />
	<MineSection />
	<FeaturesSection />
	<NewsLetter />
</main>
<Footer />

<style>
	
</style>
