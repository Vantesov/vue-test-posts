<script setup>
import PostsListBlock from "@/components/PostsListBlock.vue"
import {usePostsStore} from "@/stores/posts.store.js";
import {storeToRefs} from "pinia";

let { filteredPosts } = storeToRefs(usePostsStore())
</script>

<template>
  <PostsListBlock v-for="block in filteredPosts" :key="block" :post="block"/>
</template>

<style scoped lang="scss">

</style>