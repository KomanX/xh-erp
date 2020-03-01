<template>
  <div>
    <div v-if="type === 'row'" class="row">
      <ul>
        <li v-for="(item, index) in xhData" :key="index">
          <div>
            {{ item.name }}
            <span>- {{ item.des }}</span>
          </div>
          <div>
            <progress-bar
              class="progress-bar"
              :rate="item.rate"
              v-bind="$attrs['prog-bar-args']"
              :percentage="true"
            ></progress-bar>
          </div>
        </li>
      </ul>
    </div>
    <div v-if="type === 'row-img'" class="row-img">
      <ul>
        <li
          v-for="(item, index) in xhData"
          :key="index"
          pointer
        >
          <msg-icon
            class="msg-icon"
            :message="item.level"
          ></msg-icon>
          <div overtext-s>
            <strong>{{ item.name }}</strong>
            <span>{{ item.des }}</span>
          </div>
          <div>
            <progress-bar
              :rate="item.rate"
              class="progress-bar"
            ></progress-bar>
          </div>
        </li>
      </ul>
    </div>
    <div v-if="type === 'schedule'" class="schedule">
      <ul>
        <li
          v-for="(item, index) in scheduleData"
          :key="index"
        >
          <div>{{ item.day }}</div>
          <progress-bar
            class="progress-bar"
            :bar-color="item.color"
            :rate="item.rate"
            :col="true"
          ></progress-bar>
        </li>
      </ul>
      <ul>
        <li v-for="(item, index) in events" :key="index">
          <div
            :style="{ 'background-color': item[1] }"
          ></div>
          <div>
            {{
              item[0][0].toUpperCase() + item[0].slice(1)
            }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ProgressBar from '@/components/ProgressBar';
import MsgIcon from '@/components/MsgIcon';

let count = 0;

export default {
  name: 'XhChart',
  props: {
    'xh-data': {
      type: Array
    },
    type: {
      type: String
    }
  },
  data() {
    return {
      colors: [
        '#4C4CAD',
        '#9799D7',
        '#FF818B',
        '#1E90FF',
        '#2F4F4F',
        '#7CFC00',
        '#00FFFF'
      ],
      scheduleData: [],
      events: {}
    };
  },
  methods: {
    getScheduleData() {
      let days = [
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat',
        'Sun'
      ];
      let events = new Map();
      let schedule = [];

      this.xhData.forEach((item, index) => {
        let buf = {
          day: days[index],
          rate: [],
          color: []
        };
        item.name.forEach((e, i) => {
          events.has(e) ||
            events.set(e, this.colors[count++ % 7]);
          buf.rate.push(item.rate[i]);
          buf.color.push(events.get(e));
        });
        schedule.push(buf);
      });
      return { events, schedule };
    }
  },
  mounted() {
    if (this.type === 'schedule') {
      let { events, schedule } = this.getScheduleData();
      this.events = events;
      this.scheduleData = schedule;
    }
  },

  components: { ProgressBar, MsgIcon }
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
}
.row {
  height: 100%;
  > ul {
    height: 100%;
    width: 125%;
    overflow-y: scroll;
    > li {
      width: 80%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.9rem 0;
      border-bottom: 1px solid #e6e6e6;
      > div:first-child {
        flex: none;
        font-size: 0.7rem;
        font-weight: bolder;
        margin-right: 1.5rem;
        > span {
          color: $font-grey;
        }
      }
      > div:last-child {
        flex: auto;
        display: flex;
        .progress-bar {
          flex: auto;
          height: 5px;
        }
      }
    }
    > li:last-child {
      border-bottom: none;
    }
  }
}
.row-img {
  > ul {
    > li {
      display: flex;
      justify-content: flex-start;
      margin-bottom: 1rem;
      > div:nth-child(1) {
        width: 2.5rem;
        height: 2.5rem;
        flex: none;
        font-size: 0.9rem;
        margin-right: 1rem;
      }
      > div:nth-child(2) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 0.9rem;
        > span {
          font-size: 0.7rem;
          color: $font-grey;
        }
      }
      > div:nth-child(3) {
        flex: auto;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        > .progress-bar {
          width: 4rem;
          height: 5px;
        }
      }
    }
  }
}
.schedule {
  height: 100%;
  display: flex;
  flex-direction: column;
  > ul:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex: auto;
    > li {
      height: 100%;
      flex: auto;
      margin-right: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      > div:first-child {
        flex: none;
        font-size: 0.7rem;
        color: $font-grey;
        font-weight: bolder;
        margin-bottom: 1rem;
      }
      > .progress-bar {
        flex: auto;
        width: 5px;
      }
    }
    > li:last-child {
      margin-right: 0;
    }
  }
  > ul:nth-child(2) {
    width: 100%;
    flex: 0 0 2rem;
    margin-top: 1rem;
    display: flex;
    > li {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: auto;
      margin-right: 0.5rem;
      > div:nth-child(1) {
        border-radius: 50%;
        height: 0.6rem;
        width: 0.6rem;
        margin-right: 0.3rem;
      }
      > div:nth-child(2) {
        font-size: 0.7rem;
        color: $font-grey;
      }
    }
  }
}
</style>
