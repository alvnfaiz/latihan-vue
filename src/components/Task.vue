<template>
  <div class="flex justify-between">
    <div class="w-4/5">
      <span v-if="!edit">{{ todo }}</span>
      <span v-if="edit">
        <input
          type="text"
          @todoEdit="todo"
          v-model="todo"
          class="w-full border border-blue-300 p-2"
        />
      </span>
    </div>
    <div class="w-1/5 text-white">
      <button @click="removeTask(index)" class="p-1 bg-red-400">Delete</button>
      |
      <button @click="editTask()" class="p-1 bg-blue-400">Edit</button>
    </div>
  </div>
</template>
<script>
export default {
  props: ['todo', 'index'],
  data() {
    return {
      task: "",
      todoEdit:"",
      edit: false,
    };
  },
  methods: {
    editTask() {
      this.edit = !this.edit;
    },
    removeTask(index){
        this.$emit('remove', index);
    },
  },
};
</script>
