<template>
  <div class="msg-icon">
    <strong v-if="message">{{ message }}</strong>
    <img
      v-else-if="type"
      :src="'/images/msg-icon-' + type + '.png'"
    />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String
    },
    message: {
      type: String
    }
  }
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
  > strong {
    width: 50%;
    line-height: 50%;
    text-align: center;
  }
}
</style>
