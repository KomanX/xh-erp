<template>
  <div class="msg-icon">
    <img
      v-if="type"
      :src="'/images/msg-icon-' + type + '.png'"
    />
    <strong v-else-if="message">{{ message }}</strong>
  </div>
</template>

<script>
export default {
  props: ['type', 'message']
};
</script>

<style lang="scss" scoped>
.msg-icon {
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $back-grey;
  > img {
    width: 50%;
    height: 50%;
  }
  >strong{
    width: 50%;
    line-height: 50%;
    text-align: center;
  }
}
</style>
