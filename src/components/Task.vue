<template>
  <div class="flex justify-between">
    <div class="w-10/12">
      <span v-if="!edit">{{ id }}.  {{ task }}</span>
      <input v-if="edit" v-model="editteks" @keyup.enter="editTask" class="w-full p-2 border border-blue-900"/>
    </div>
    <div class="flex justify-between w-1/12 text-white">
      <button @click="editTask" class="p-2 bg-blue-400">Edit</button>
      <button @click="deleteTask" class="p-2 bg-red-400">Delete</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Task',
  props: {
    task: String,
    tasks: Array,
    id: Number,
  },
  data() {
    return {
      edit: false,
      editteks: this.task,
      tempTasks: [],
    };
  },
  methods: {
    editTask() {
      this.edit = !this.edit;
      if(this.edit) {
        this.editteks = this.task;
      }else{
        this.$emit('editTask', this.editteks, this.task.id);
        this.task = this.editteks;
        this.editteks = '';
      }
    },
    deleteTask() {
      this.$emit('delete', this.task);
    },
  },
}
</script>