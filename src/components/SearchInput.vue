<script setup>
import {ref} from "vue";
import {usePostsStore} from "@/stores/posts.store.js";

let input = ref()
</script>

<template>
  <input type="text" v-model="input" placeholder="Filter by author..." @input="usePostsStore().filterByName(input)">
</template>


<style scoped lang="scss">
  input{
    background-color: $white;
    border: 1px solid $gray;
    border-radius: 4px;
    @include block_width;
    text-align: center;
    height: 40px;
    padding: 10px 10px;
    color: $black;
    font-weight: 500;
    font-size: inherit;
    letter-spacing: 1px;
    line-height: inherit;
  }
</style>