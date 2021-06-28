<template>
  <div class="">
    <div class="task_con">
      <div class="container px-0">
        <div class="col">
          <p class="task_header px-3">Task</p>
        </div>

        <div class="col" v-if="UncompletedTask.length">
          <div
            v-for="(todo, index) in UncompletedTask"
            :key="todo.id"
            :class="{ done_con: todo.status }"
            name="task"
            class="
              col
              task_cont
              d-flex
              justify-content-between
              align-items-center
              mb-2
            "
          >
            <div class="col-8 d-flex align-items-center px-0">
              <input
                type="checkbox"
                class="mr-2"
                @click="ToggleTask(todo)"
                :checked="todo.status"
              />
              <p class="task_text" :class="{ done: todo.status }">
                {{ todo.task }}
              </p>
            </div>
            <span class="task_date mr-2">
              <i class="far fa-calendar-alt"></i> {{ todo.date }}
            </span>

            <span @click="remove(index)" class="task_date text-danger">
              <i class="far fa-trash-alt"></i>
            </span>
          </div>
        </div>
        <div class="col" v-else>
          <transition name="task">
            <p class="empty">No More Task...</p>
          </transition>
        </div>
      </div>
    </div>

    <div class="task_con">
      <div class="container px-0">
        <div class="col">
          <p class="task_header px-3">Completed Task</p>
        </div>
        <div class="col" v-if="CompletedTask.length">
          <div
            class="
              col
              task_cont
              d-flex
              justify-content-between
              align-items-center
              mb-2
            "
            v-for="todo in CompletedTask"
            :key="todo.id"
            :class="{ done_con: todo.status }"
          >
            <div class="col-8 d-flex align-items-center px-0">
              <input
                type="checkbox"
                class="mr-2"
                @click="ToggleTask(todo)"
                :checked="todo.status"
              />
              <p class="task_text" :class="{ done: todo.status }">
                {{ todo.task }}
              </p>
            </div>
            <span class="task_date">
              <i class="far fa-calendar-alt mr-1"></i> {{ todo.date }}</span
            >
          </div>
        </div>
        <div class="col" v-else>
          <p class="empty">No Completed Task...</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ManageTask",

  data() {
    return {};
  },

  methods: {
    ...mapActions(["removeTodo"]),

    ToggleTask(task) {
      task.status = !task.status;
      localStorage.setItem('Todos', JSON.stringify(this.allTodos))
    },

    remove(id) {
      console.log(id);

      this.removeTodo(id);
    },
  },

  computed: {
    ...mapGetters(["allTodos"]),

    UncompletedTask() {
      return this.allTodos.filter((todo) => !todo.status);
    },
    CompletedTask() {
      return this.allTodos.filter((todo) => todo.status);
    },
  },
};
</script>

<style>
.task-enter-from {
  opacity: 0;
}
.task-enter-to {
  opacity: 1;
}
.task-enter-active {
  transition: all 0.5s ease-in-out;
}
</style>
