<template>
    <div ref="chart2" :style="{height: '250px'}">
    </div>
</template>

<script>
//const echarts = require('echarts/lib/echarts');
//require('echarts/lib/chart/gauge');


export default {
    watch:{dataset(){
        this.chartInit();
    }},
    computed: {
        dataset(){return this.$store.state.Data.num;},
    },
    methods:{
        chartInit(){
            let myChart = this.$echarts.init(this.$refs.chart2);
            myChart.setOption({
                title: {
                    text: '年级总人数',
                    left: 'center'
                },
                legend: {},
                series: [
                    {
                        type: 'gauge',
                        data: [{value: this.dataset[0].num, name: '人数'}],
                        max: 200
                    }
                ]
            },true);
        }
    }
}
</script>