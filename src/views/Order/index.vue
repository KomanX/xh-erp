<template>
  <div class="view-order">
    <div class="nav">
      <xh-navigator :current="current"></xh-navigator>
    </div>
    <div class="content">Order</div>
  </div>
</template>

<script>
import XhNavigator from '@/components/XhNavigator';
export default {
  data() {
    return {
      current: 1
    };
  },
  components: { XhNavigator }
};
</script>

<style lang="scss" scoped>
.view-order {
  width: 100%;
  height: 100%;
  display: flex;

  > .nav {
    width: 16%;
    height: 100%;
  }
  > .content {
    width: 84%;
    height: 100%;
  }
}
</style>
