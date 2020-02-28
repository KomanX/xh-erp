<template>
  <div class="navbox">
    <div class="title">
      <div>XH</div>
      <strong>XhERP</strong>
    </div>
    <nav>
      <router-link
        tag="li"
        v-for="(item, index) in list"
        :key="item"
        :to="'/' + item"
        :class="{ current: index == current }"
      >
        <img
          :src="
            '/images/' +
              item +
              (index == current ? '_a' : '_u') +
              '.png'
          "
          :alt="item"
        />
        {{ item[0].toUpperCase() + item.slice(1) }}
      </router-link>
    </nav>
    <div class="tip">
      <div>
        <img src="/images/nav-tip.png" />
        <div class="tip-content">
          Upgrade to
          <strong>PRO</strong>
          for more resources
        </div>
        <div class="tip-btn">Upgrade</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'XhNavigator',
  props: {
    current: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      list: [
        'home',
        'order',
        'chart',
        'photo',
        'product',
        'shop'
      ]
    };
  }
};
</script>

<style lang="scss" scoped>

.navbox {
  width: 100%;
  height: 100%;
  box-shadow: 0 0 $border-width $border-width $border-grey;
  padding-top: 10%;
}
.title {
  height: 10%;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 18%;
  font-size: 1.2rem;
  margin-bottom: 24%;
  > div:first-child {
    border-radius: 3px;
    background: $my-blue;
    color: white;
    width: 1.75rem;
    line-height: 1.75rem;
    text-align: center;
    margin-right: 3rem;
  }
}

nav {
  list-style: none;
  > li {
    color: $font-grey;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 18%;
    margin-bottom: 2rem;
    cursor: pointer;
    font-weight: bolder;
    font-size: 0.8rem;
    > img {
      width: 1.44rem;
      height: 1.44rem;
      margin-right: 3rem;
    }
  }
  > li.current {
    color: black;
    position: relative;
    &:after {
      content: '';
      position: absolute;
      width: 0;
      height: 100%;
      left: 100%;
      border-right: $border-width solid $my-blue;
    }
  }
}
.tip {
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  > div {
    width: 80%;
    height: 80%;
    border-radius: 10px;
    background: $back-grey;
    padding: 20% 15% 15% 15%;
    position: relative;
    > img {
      width: 4rem;
      height: 4rem;
      position: absolute;
      top: -20%;
      left: 50%;
      transform: translate(-50%, 0);
    }
    > .tip-content {
      color: $font-grey;
      font-size: 0.8rem;
      text-align: center;
      margin-bottom: 2rem;
      > strong {
        color: black;
      }
    }
    > .tip-btn {
      color: white;
      border-radius: 15px;
      background: $my-blue;
      text-align: center;
      padding: 0.5rem 0;
    }
  }
}
</style>
