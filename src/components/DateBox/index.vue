<template>
  <div>{{ date }}</div>
</template>

<script>
export default {
  name: 'DateBox',
  data() {
    return {
      date: ''
    };
  },
  mounted() {
    let days = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ];
    let months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ];
    let d = new Date();
    this.date = `${d.getDay()} ${
      months[d.getMonth()]
    } ${d.getYear()},${days[d.getDay()]}`;
  }
};
</script>

<style scoped lang="scss"></style>
