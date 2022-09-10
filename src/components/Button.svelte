<script>
  import { slide, fly, scale } from 'svelte/transition'
  export let props = {
    text: "",
    href: "#",
    classes: "",
    dim: [],
    iconClassess: "",
    animateIcon: false
  }
</script>

<a in:scale="{{ duration: 1500 }}" href="{props.href}" class="btn cursor-pointer max-w-[max-content] flex flex-nowrap space-x-2 justify-between items-center rounded-full {props.classes}" style="padding: {props.dim[0]}px {props.dim[1]}px;">
  <span>{props.text}</span>
  {#if props.animateIcon}
    <i in:fly="{{ x: -200, duration: 1500}}" class="rounded-[50%] {props.iconClasses}">
      <slot />
    </i>
  {:else}
    <i class="rounded-[50%] {props.iconClasses}">
      <slot />
    </i>
  {/if}
</a>

<style>
 
</style>