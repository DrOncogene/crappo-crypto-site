<script>
  export let props = {
    img: false,
    linksImg: false,
    title: "",
    links: [],
    classes: ""
  }
</script>

<div class="flex flex-col space-y-4 items-center lg:items-start">
  {#if props.img}
    <a href="#"><img src="/img/logo.svg" alt="" class=""></a>
  {:else}
    <h4 class="text-xl mb-6 {props.classes}">{ props.title }</h4>
  {/if}
  
  {#if props.linksImg}
    <div class="flex justify-start items-center flex-nowrap space-x-6">
      {#each props.links as img}
        <img src="{img}" alt="">
      {/each}
    </div>
  {:else}
    {#each props.links as linkText}
      <a href="#" class="block opacity-90 hover:text-sec">{ linkText }</a>
    {/each}
  {/if}
</div>
