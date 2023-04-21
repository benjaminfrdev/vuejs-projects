<script setup lang="ts">
import { Post } from "../posts";
import { TimeLinePost } from "../posts";

function setup(){
    defineProps<{post:TimeLinePost}>()
}

</script>

<template>
    <a class="panel-block is-flex is-flex-direction-column is-align-item-flex-start">
        <a>{{ post.title }}</a>
        <div>{{ post.created.toFormat("d MMM") }}</div>
    </a>
</template>