<template>
    <div>
        <h2 style="text-align:center;">理学院本科教学大屏</h2>
        <div class="column" style="width:25%">
            <YearCheckBox1></YearCheckBox1>
            <Chart7></Chart7>
            <Chart8></Chart8>
        </div>
        <div class="column" style="width:45%">
            <Chart6></Chart6>
        </div>
        <div class="column" style="width:30%">
            <Chart9></Chart9>
            <Chart10></Chart10>
        </div>
    </div>
</template>

<script>
import YearCheckBox1 from './YearCheckBox1.vue'
import Chart6 from './Chart6.vue'
import Chart7 from './Chart7.vue'
import Chart8 from './Chart8.vue'
import Chart9 from './Chart9.vue'
import Chart10 from './Chart10.vue'
export default {
    components: { YearCheckBox1, Chart6, Chart7, Chart8, Chart9, Chart10 }
}
</script>

<style scoped>
.column {
  float: left;
}
 
#app:after {
  content: "";
  display: table;
  clear: both;
}
</style>