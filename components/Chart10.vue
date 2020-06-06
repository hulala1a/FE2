<template>
    <div ref="chart10" :style="{height: '300px'}">
    </div>
</template>

<script>
//const echarts = require('echarts/lib/echarts');
//require('echarts/lib/chart/scatter');


export default {
    watch:{dataset(){
        this.chartInit();
    }},
    computed: {
        dataset(){return this.$store.state.Data.student;},
    },
    methods:{
        chartInit(){
            let myChart = this.$echarts.init(this.$refs.chart10);
            myChart.setOption({
                title: {
                    text: '学生达成度\n',
                    left: 'center'
                },
                tooltip: {data:['达成度']},
                xAxis: {type:'category'},
                yAxis: {max:1},
                dataset: {source:this.dataset},
                series: [{
                    type: 'bar'
                }]
            },true);
        }

    }
}
</script>