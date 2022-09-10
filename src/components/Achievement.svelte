<script>
  import Fa from 'svelte-fa'

  export let props = {
    title: "",
    subtitle: "",
    icon: Object
  }
</script>

<div class="flex justify-center items-center space-x-4">
  <i class="flex items-center justify-center rounded-[50%] bg-blueDark p-10 md:py-3 md:px-4">
    <Fa
      icon={props.icon}
      color="#3671E9"
      size="lg"
    />
  </i>
  <div>
    <h3 class="font-bold text-2xl"> {props.title}</h3>
    <h5 class="text-xs font-light opacity-50"> {props.subtitle} </h5>
  </div>
</div>