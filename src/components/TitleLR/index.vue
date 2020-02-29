<template>
  <div class="title-l-r">
    <slot name="left"></slot>
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  name: 'TitleLR'
};
</script>

<style scoped>
.title-l-r {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
