<script setup>
defineProps({ post: Object })
</script>

<template>
  <div class="postBlock">
    <h2>{{ post?.title }}</h2>
    <p>{{ post?.body }}</p>
    <span> {{ post?.author?.name }}</span>
  </div>
</template>

<style scoped lang="scss">
  .postBlock{
    background-color: $white;
    border: 1px solid $gray;
    border-radius: 4px;
    @include block_width;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 20px;

  }
</style>