<template>
    <div>
        <h2 style="text-align:center;">理学院本科教学大屏</h2>
        <div class="column" style="width:25%">
            <YearCheckBox></YearCheckBox>
            <Chart2></Chart2>
            <Chart1></Chart1>
        </div>
        <div class="column" style="width:55%">
            <Chart5></Chart5>
        </div>
        <div class="column" style="width:20%">
            <Chart3></Chart3>
            <Chart4></Chart4>
        </div>
    </div>
</template>

<script>
import YearCheckBox from './YearCheckBox.vue'
import Chart1 from './Chart1.vue'
import Chart2 from './Chart2.vue'
import Chart3 from './Chart3.vue'
import Chart4 from './Chart4.vue'
import Chart5 from './Chart5.vue'
export default {
    components: { YearCheckBox, Chart1, Chart2, Chart3, Chart4, Chart5 }
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