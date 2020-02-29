<template>
  <div class="progress-bar">
    <div :style="rateStyle"></div>
  </div>
</template>

<script>
export default {
  name:'ProgressBar',
  props: ['rate'],
  computed: {
    rateStyle: function() {
      return {
        'background-color':
          this.rate < 0.4 ? '#FF616F' : '#5A7DF3',
        width: this.rate * 100 + '%'
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.progress-bar {
  position: relative;
  border-radius: 2px;
  background-color: $back-grey;
  > div {
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: inherit;
  }
}
</style>
