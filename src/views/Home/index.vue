<template>
  <div class="view-home">
    <div class="nav">
      <xh-navigator :current="current"></xh-navigator>
    </div>
    <div class="content">
      <div class="msg">
        <title-l-r class="title">
          <template #left>
            <strong>Home</strong>
          </template>
          <template #right>
            <div class="search">
              <date-box class="date-box"></date-box>
              <search-box></search-box>
            </div>
          </template>
        </title-l-r>
        <div class="hello">
          <div>
            <h3>Welcome back {{ user.name }}!</h3>
            <p
              v-for="(item, index) in helloMsg"
              :key="index"
            >
              {{ item }}
            </p>
          </div>
          <img src="/images/hello.png" />
        </div>
        <div class="chart">
          <div>
            <title-l-r class="title">
              <template #left>
                <strong>Task Progress</strong>
              </template>
              <template #right>
                <div pointer>More →</div>
              </template>
            </title-l-r>
            <div></div>
          </div>
          <div>
            <title-l-r class="title">
              <template #left>
                <strong>Schedule</strong>
              </template>
              <template #right>
                <div pointer>More →</div>
              </template>
            </title-l-r>
            <div></div>
          </div>
        </div>
        <div class="team">
          <title-l-r class="title">
            <template #left>
              <strong>Your Team</strong>
            </template>
            <template #right>
              <div pointer>More →</div>
            </template>
          </title-l-r>
          <color-cards class="color-cards">
            <template>
              <div
                v-for="(item, index) in user.team"
                :key="index"
              >
                <img :src="item.img" />
                <div>
                  <span>{{ item.pro }}</span>
                  {{ item.name }}
                </div>
                <div>→</div>
              </div>
            </template>
          </color-cards>
        </div>
      </div>
      <div class="user"><user-info></user-info></div>
    </div>
  </div>
</template>

<script>
import XhNavigator from '@/components/XhNavigator';
import UserInfo from '@/components/UserInfo';
import DateBox from '@/components/DateBox';
import SearchBox from '@/components/SearchBox';
import TitleLR from '@/components/TitleLR';
import ColorCards from '@/components/ColorCards';

export default {
  data() {
    return {
      current: 0,
      user: {
        name: 'NiChenxi',
        team: [
          {
            img: '/images/boy1.png',
            name: 'Bob',
            pro: 'Web Developer'
          },
          {
            img: '/images/girl1.png',
            name: 'Ami',
            pro: 'Web Developer'
          },
          {
            img: '/images/boy2.png',
            name: 'Leon',
            pro: 'Web Developer'
          }
        ]
      },
      helloMsg: [
        'You never know how strong you really are until being strong is the only choice you have!',
        'You cannot change what you refuse to confront!'
      ]
    };
  },

  components: {
    XhNavigator,
    DateBox,
    SearchBox,
    TitleLR,
    ColorCards,
    UserInfo
  }
};
</script>

<style lang="scss" scoped>
$module-mt: 1rem;
.view-home {
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
    display: flex;
  }
}
.msg {
  height: 100%;
  flex: 1;
  background-color: $back-grey;
  padding: 5vh 5% 0 5%;
}

.user {
  height: 100%;
  width: 350px;
}
.search {
  display: flex;
  align-items: center;
  > :nth-child(2) {
    width: 2rem;
    height: 2rem;
    margin-left: 1rem;
  }
}
.date-box {
  color: $font-grey-dark;
  font-size: 0.8rem;
}
.hello {
  background-color: #f7e5e9;
  border-radius: 1rem;
  height: 20%;
  width: 100%;
  padding: 1rem 3rem;
  margin-top: $module-mt;
  position: relative;
  > div {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 0.8rem;
    > h3 {
      color: #ff616f;
      margin-bottom: 1rem;
    }
  }
  > img {
    width: 50%;
    height: 120%;
    object-fit: contain;
    object-position: center;
    position: absolute;
    bottom: 10%;
    right: 3rem;
  }
}
.chart {
  width: 100%;
  height: 45%;
  display: flex;
  margin-top: $module-mt;
  > div {
    height: 100%;
    border-radius: 10px;
    padding: 1.2rem 1.1rem;
    background-color: white;
    > .title {
      font-size: 0.8rem;
    }
  }
  > div:first-child {
    flex: 2;
    margin-right: 1rem;
  }
  > div:nth-child(2) {
    flex: 3;
  }
}
.team {
  margin-top: $module-mt;
  > .color-cards {
    width: 100%;
    height: 6rem;
    margin-top: $module-mt;
    > div > div {
      height: 100%;
      padding: 1rem;
      display: flex;
      > div {
        margin-left: 1.5rem;
        color: white;
      }
      > img {
        height: 100%;
        object-fit: contain;
      }
      > div:nth-of-type(1) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 1;
        > span {
          font-size: 0.8rem;
          color: $font-grey;
        }
      }
      > div:last-child {
        align-self: flex-end;
      }
    }
  }
}
</style>
