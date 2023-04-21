<script setup lang="ts">
import { Ref, ref, computed } from 'vue';
import { Post, today, thisWeek, thisMonth } from "../posts";
import { DateTime } from 'luxon';
import { TimeLinePost } from '../posts';
import  TimeLineItem  from './TimeLineItem.vue'

const periods = ["Today", "This Week", "This Month"] as const;
type Period = typeof periods[number];
let selectedPeriod = ref<Period>("Today")
function selectPeriod(period: Period) {
    selectedPeriod.value = period;
}
const posts = computed<TimeLinePost[]>(() => {
    return [
        today,
        thisWeek,
        thisMonth
    ].map((post) => {
        return {
            ...post,
            created: DateTime.fromISO(post.created)
        }
    }).filter(post => {
        if (selectedPeriod.value == "Today") {
            return post.created >= DateTime.now().minus({ day: 1 })
        }
        if (selectedPeriod.value == "This Week") {
            return post.created >= DateTime.now().minus({ week: 1 })
        }
        if (selectedPeriod.value == "This Month") {
            return post.created >= DateTime.now().minus({ month: 1 })
        }
    })
})
console.log(posts);

</script>


<template>
    <nav class="is-primary panel">
        <span class="panel-tabs">
            <a v-for="(period, index) of periods" :key="index" @:click="selectPeriod(period)"
                :class="{ 'is-active': period === selectedPeriod }">
                {{ period }}
            </a>
        </span>

       <TimeLineItem 
       v-for="post of posts"
       :key="post.id"
       :post="post"></TimeLineItem>
    </nav>
</template>


<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>