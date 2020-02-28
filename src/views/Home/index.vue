<template>
  <div class="main">
    <div class="nav">
      <xh-navigator :current="current"></xh-navigator>
    </div>
    <div class="content">
      <div class="msg">
        <div class="title">
          Home
          <div class="search">
            <date-box></date-box>
            <search-box></search-box>
          </div>
        </div>
        <div class="hello"></div>
        <div class="chart"></div>
        <div class="team"></div>
      </div>
      <div class="user"></div>
    </div>
  </div>
</template>

<script>
import XhNavigator from '@/components/XhNavigator';
import DateBox from '@/components/DateBox';
import SearchBox from '@/components/SearchBox';
export default {
  data() {
    return {
      current: 0
    };
  },

  components: { XhNavigator, DateBox, SearchBox }
};
</script>

<style lang="scss" scoped>
.main {
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
.msg {
  height: 100%;
  width: 70%;
  background-color: $back-grey;
  padding: 0 10%;
}
.user {
  height: 100%;
  width: 30%;
}
.search{
  >:nth-child(2){
    width: 2rem;
    height: 2rem;
  }
}
</style>
