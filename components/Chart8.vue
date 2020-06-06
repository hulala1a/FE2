<template>
    <div ref="chart8" :style="{height: '300px'}">
    </div>
</template>

<script>
//const echarts = require('echarts/lib/echarts');
//require('echarts/lib/chart/radar');


export default {
    watch:{dataset(){
        this.chartInit();
    }},
    computed: {
        dataset(){return this.$store.state.Data.zhe;},
    },
    methods:{
        chartInit(){
            let myChart = this.$echarts.init(this.$refs.chart8);
            myChart.setOption({
                title: {
                    text: '年度课程指标点得分\n',
                    left: 'center'
                },
                tooltip: {},
                xAxis: {type:'category'},
                yAxis: {type:'value'},
                dataset: {source:this.dataset},
                series: [{
                    type: 'line'
                }]
            },true);
        }

    }
}
</script>