<template>
<div class="container mx-auto">
    <div class="flex justify-between">
        <input type="text" v-model="task" placeholder="Masukkan Task" class="w-10/12 p-2 border border-blue-300 form-control">
        <input type="button" value="submit" class="w-1/12 p-2 text-white bg-blue-400" @click="submitTask">
    </div>
</div>
</template>
<script>

    export default {
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