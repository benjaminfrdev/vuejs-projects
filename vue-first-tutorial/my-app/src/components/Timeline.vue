<script setup lang="ts">
import { Ref, ref } from 'vue';
import { Post, today, thisWeek, thisMonth } from "../posts";

const periods = ["Today", "This Week", "This Month"] as const;
type Period = typeof periods[number];
let selectedPeriod = ref<Period>("Today")
function selectPeriod(period: Period) {
    console.log(period)
    selectedPeriod.value = period;

}
const posts: Post[] = [
    today,
    thisWeek,
    thisMonth
]
</script>


<template>
    <nav class="is-primary panel">
        {{ selectedPeriod }}
        <span class="panel-tabs">
            <a v-for="(period, index) of periods" :key="index" @:click="selectPeriod(period)"
                :class="{ 'is-active': period === selectedPeriod }">
                {{ period }}
            </a>
        </span>

        <a v-for="post of posts" :key="post.id" class="panel-block">
            {{ post.title }}
            <div>{{ post.created }}</div>
        </a>
    </nav>
</template>


<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>