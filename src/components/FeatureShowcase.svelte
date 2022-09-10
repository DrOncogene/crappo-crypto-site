<script>
  import  { viewport, inViewportAnim, outViewportAnim } from '../utilities'
  import Button from "./Button.svelte"

  export let props = {
    img: "",
    order: [],
    title: "",
    subtitle: "",
    imgClasses: "",
    classes: ""
  }
</script>

<div class="container flex flex-col justify-between items-start gap-8 lg:items-center lg:flex-row lg:space-y-0 lg:gap-20">
  <div class="flex flex-col justify-center self-center space-y-6 lg:self-start {props.order[1]} {props.classes}">
    <h3 class="text-2xl font-bold">{props.title}</h3>
    <p class="text-xs opacity-50">{props.subtitle}</p>
    <div use:viewport on:enterViewport={(e) => {inViewportAnim(e.target, "scale")}} on:exitViewport={(e) => {outViewportAnim(e.target, "scale")}} class="max-w-[max-content] opacity-0">
      <Button props={{
        text:"Learn More",
        href:"#",
        dim:[8, 16],
        classes: "text-xs bg-sec max-w-[max-content] space-x-0"
      }}
      />
    </div>
  </div>
  <div use:viewport on:enterViewport={(e) => {inViewportAnim(e.target, "scale")}} on:exitViewport={(e) => {outViewportAnim(e.target, "scale")}} class="{props.order[0]} {props.imgClasses} opacity-0">
    <img src="{props.img}" alt="" class="block">
  </div>
</div>
