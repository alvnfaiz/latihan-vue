<template>
<div class="container mx-auto">
    <list :tasks="tasks"></list>
    <div class="flex justify-between">
        <input type="text" v-model="task" placeholder="Masukkan Task" class="w-10/12 form-control border border-blue-300 p-2">
        <input type="button" value="submit" class="w-1/12 p-2 bg-blue-400 text-white" @click="submitTask">
    </div>
</div>
</template>
<script>
    import List from './List.vue'

    export default {
        components: {
            List
        },
        props: ['tasks'],
        data() {
            return {
                task: "",
            };
        },
        methods: {
            submitTask() {
                if (this.task.length === 0) return;
                this.tasks.push(this.task,);
                this.task = "";
            },

        },
    };
</script>