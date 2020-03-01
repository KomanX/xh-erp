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
            <p>{{ helloMsg[Math.floor(Math.random(1)*helloMsg.length)] }}</p>
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
            <xh-chart
              class="xh-chart"
              :xh-data="chartList[0].xhData"
              :type="chartList[0].type"
              :prog-bar-args="{ 'err-rate': 0.4 }"
            ></xh-chart>
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
            <xh-chart
              class="xh-chart"
              :xh-data="chartList[1].xhData"
              :type="chartList[1].type"
              :prog-bar-args="{ 'err-rate': 0.4 }"
            ></xh-chart>
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
import XhChart from '@/components/XhChart';
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
      ],
      chartList: [
        {
          type: 'row',
          xhData: [
            {
              img: '',
              name: 'Task1',
              des: 'it is Task1',
              rate: '0.8'
            },
            {
              img: '',
              name: 'Task2',
              des: 'it is Task2',
              rate: '0.3'
            },
            {
              img: '',
              name: 'Task3',
              des: 'it is Task3',
              rate: '0.6'
            },
            {
              img: '',
              name: 'Task4',
              des: 'it is Task4',
              rate: '0.1'
            },
            {
              img: '',
              name: 'Task5',
              des: 'it is Task5',
              rate: '0.9'
            }
          ]
        },
        {
          type: 'schedule',
          xhData: [
            {
              name: [
                'writing',
                'programmer',
                'summarizing'
              ],
              rate: [2, 6, 2]
            },
            {
              name: [
                'learning',
                'writing',
                'programmer',
                'summarizing'
              ],
              rate: [2, 1, 6, 1]
            },
            {
              name: ['learning', 'summarizing'],
              rate: [7, 3]
            },
            {
              name: ['learning', 'writing', 'summarizing'],
              rate: [4, 4, 2]
            },
            {
              name: ['learning', 'writing', 'programmer'],
              rate: [3, 6, 1]
            },
            {
              name: ['programmer', 'summarizing'],
              rate: [8, 2]
            },
            {
              name: [
                'learning',
                'programmer',
                'summarizing'
              ],
              rate: [7, 2, 1]
            }
          ]
        }
      ]
    };
  },

  components: {
    XhNavigator,
    DateBox,
    SearchBox,
    TitleLR,
    ColorCards,
    UserInfo,
    XhChart
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
    flex: 0 0 200px;
    height: 100%;
  }
  > .content {
    flex: 1 0 740px;
    height: 100%;
    display: flex;
  }
}
.msg {
  height: 100%;
  flex: 2 1 auto;
  background-color: $back-grey;
  padding: 5vh 5% 5vh 5%;
  overflow: hidden;
}

.user {
  height: 100%;
  flex: 0 0 300px;
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
    font-size: 0.7rem;
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
    overflow: hidden;
    border-radius: 10px;
    padding: 1.2rem 1.2rem;
    background-color: white;
    display: flex;
    flex-direction: column;
    > .title {
      font-size: 0.8rem;
      margin-bottom: 1rem;
      flex: none;
    }
    > .xh-chart {
      flex: auto;
      overflow: hidden;
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
      padding: 0.9rem;
      display: flex;
      align-items: center;
      > div {
        margin-left: 0.5rem;
        color: white;
      }
      > img {
        height: 80%;
        object-fit: contain;
      }
      > div:nth-of-type(1) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: auto;
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
