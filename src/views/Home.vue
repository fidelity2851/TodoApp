<template>
  <div class="">
    <CreateTask />
    
  </div>
</template>

<script>
// @ is an alias to /src
import CreateTask from "@/components/CreateTask.vue";


export default {
  name: "Home",
  components: {
    CreateTask,
    
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",

    };
  },
};
</script>
