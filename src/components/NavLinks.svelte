<script>
  export let links = {
    auth: [],
    others: [],
    fontSize: "",
    flow: ""
  }
</script>

<ul class="nav-links flex justify-center items-center list-none md:space-x-8 {links.flow}">
  {#each links.others as link}
    <li class=""><a href="#" class="font-medium py-1 hover:border-b-[1px] hover:border-b-sec {links.fontSize}">{ link }</a></li>
  {/each}

</ul>
<ul class="auth-links flex justify-center items-center space-x-6">
  <li><a href="#" class="px-6 border-r-2 border-r-[#777] font-medium {links.fontSize}">{links.auth[0]}</a></li>
  <slot />
</ul>

<style>
 
</style>