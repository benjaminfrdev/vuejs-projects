<script lang="ts">
import { Post } from "../posts";


const props = defineProps<{
    post: Post
}>()
</script>

<template>
    <a class="panel-block">
        <a>{{ post.title }}</a>
        <div>{{ post.created.toFormat("d MMM") }}</div>
    </a>
</template>