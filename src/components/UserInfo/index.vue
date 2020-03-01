<template>
  <div class="user-info">
    <div class="logout">
      <title-l-r class="title">
        <template #left>
          <strong>Logout</strong>
        </template>
        <template #right>
          <img pointer src="/images/logout.png" />
        </template>
      </title-l-r>
    </div>
    <div class="photo">
      <img :src="user.img" />
      <strong>{{ user.name }}</strong>
      <span>{{ user.pro }}</span>
    </div>
    <div class="progress">
      <xh-chart
        :xh-data="projects"
        :type="'row-img'"
      ></xh-chart>
    </div>
    <div class="reminders">
      <title-l-r class="title">
        <template #left>
          <strong>Reminders</strong>
        </template>
        <template #right>
          <div pointer>
            <img src="/images/reminder.png" />
          </div>
        </template>
      </title-l-r>
      <div class="content">
        <div class="shadow"></div>
        <ul>
          <li
            v-for="(item, index) in reminders"
            :key="index"
            pointer
          >
            <msg-icon
              class="msg-icon"
              :type="item.type"
            ></msg-icon>
            <div>
              <strong overtext-s>{{ item.title }}</strong>
              <date-box
                class="date-box"
                :date="item.time"
              ></date-box>
            </div>
          </li>
          <li>----- 没有更多了 -----</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import TitleLR from '@/components/TitleLR';
import MsgIcon from '@/components/MsgIcon';
import XhChart from '@/components/XhChart';
import DateBox from '@/components/DateBox';

export default {
  name: 'UserInfo',
  data() {
    return {
      user: {
        name: 'Nichenxi',
        pro: 'Web Developer',
        img: '/images/boy1.png'
      },
      projects: [
        {
          level: 'B2',
          name: 'XhERP',
          des: 'A simple ERP system',
          rate: '0.1'
        },
        {
          level: 'C1',
          name: 'n°24',
          des: 'Luxury renovation website',
          rate: '0.2'
        }
      ],
      reminders: [
        {
          type: 'todo',
          title: 'Completed XhERP！',
          time: '2020-2-28'
        },
        {
          type: 'msg',
          title: 'hard work!hard work!hard work!hard work!',
          time: '2020-2-27'
        },
        {
          type: 'msg',
          title: 'hard work',
          time: '2020-2-26'
        },
        {
          type: 'msg',
          title: 'hard work',
          time: '2020-2-25'
        },
        {
          type: 'msg',
          title: 'hard work',
          time: '2020-2-24'
        },
        {
          type: 'todo',
          title: 'Learn more!',
          time: '2020-2-23'
        }
      ]
    };
  },
  components: { TitleLR, MsgIcon, DateBox, XhChart }
};
</script>

<style lang="scss" scoped>
.user-info {
  width: 100%;
  height: 100%;
  box-shadow: 0 0 $border-width $border-width $border-grey;
  padding-top: 5vh;
  padding: 5vh 10% 5vh 10%;
  display: flex;
  flex-direction: column;
}
.logout {
  flex: none;
  font-size: 0.8rem;
  > .title > img {
    width: 1.5rem;
    height: 1.5rem;
  }
}
.photo {
  flex: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  > img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  > strong {
    margin-top: 1rem;
    line-height: 2rem;
    font-size: 1rem;
  }
  > span {
    line-height: 2rem;
    color: $font-grey;
  }
}
.progress {
  flex: none;
  margin-top: 2rem;
  
}
.reminders {
  flex: auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-top: 2rem;
  > .title {
    height: 2rem;
    font-size: 0.9rem;
    margin-bottom: 1rem;
    > div {
      position: relative;
      display: flex;
      align-items: center;
      &::after {
        content: '·';
        position: absolute;
        font-size: 3rem;
        color: red;
        line-height: 1rem;
        width: 1rem;
        background: white;
        top: -0.5rem;
        right: -0.3rem;
      }
      > img {
        width: 1.2rem;
        height: 1.2rem;
      }
    }
  }
  > .content {
    height: 100%;
    position: relative;
    overflow: hidden;

    > .shadow {
      width: 150%;
      position: absolute;
      top: 100%;
      left: -25%;
      box-shadow: 0 0 4rem 3.5rem white;
    }
    > ul {
      height: 100%;
      width: 125%;
      overflow-y: scroll;
      list-style: none;
      padding-bottom: 50px;
      > li {
        width: 80%;
        display: flex;
        margin-bottom: 1rem;
        > .msg-icon {
          flex: none;
          height: 2.5rem;
          width: 2.5rem;
          margin-right: 1rem;
        }
        > :nth-child(2) {
          font-size: 0.9rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          > .date-box {
            font-size: 0.8rem;
            color: $font-grey;
          }
        }
      }
      > li:last-child {
        font-size: 0.7rem;
        color: $font-grey;
        justify-content: center;
      }
    }
  }
}
</style>
