<script setup>
  import SearchInput from "@/components/SearchInput.vue"
  import PostsList from "@/components/PostsList.vue"
  import { usePostsStore } from "@/stores/posts.store.js";

  usePostsStore().initializeStore()
</script>
<template>
  <div class="app_wrapper">
    <header>
      <SearchInput/>
    </header>
    <main>
      <PostsList/>
    </main>
  </div>
</template>
<style scoped lang="scss" >
  header{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  main{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    justify-content: flex-start;
    gap: 20px;
  }

</style>