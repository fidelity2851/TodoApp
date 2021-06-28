<template>
  <div>
    <transition name="toast">
      <p v-if="Toast" class="tog">Added Successfully!</p>
    </transition>

    <div class="todo_con">
      <div class="container px-0">
        <div class="col">
          <form class="todo_form d-flex" @submit.prevent="submitTodo">
            <input
              type="text"
              class="todo_box"
              placeholder="Add a Task"
              v-model="task"
              required
            />
            <button type="submit" class="todo_btn">Add</button>
          </form>
          <p v-if="error" class="err">This field is required.</p>
        </div>
      </div>
    </div>

    <ManageTask />
  </div>
</template>


<script>
import ManageTask from "@/components/ManageTask";
import {mapGetters, mapActions} from 'vuex'

export default {
  name: "CreateTask",
  components: {
    ManageTask
  },
  props: {},
  
  data() {
    return {
      error: false,
      task: ''
     
      
    }
  },

  methods: {
    ...mapActions(['addTodo']),

    submitTodo() {
      if (this.task != ' ') {
          this.addTodo(this.task),
          this.task = ''
      }
      else{
        this.error = true
        setTimeout(() => this.error = false, 2000)
      }

    }
    
  },

  computed: {
    ...mapGetters(['allTodos', 'Toast'])

    
  },
}

</script>


<style >
.toast-enter-active,
.toast-leave-active {
  opacity: 1;
  transition: all 0.5s ease-in-out;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
}
</style>