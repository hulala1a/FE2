<template>
    <div ref="chart9" :style="{height: '300px'}">
    </div>
</template>

<script>
const echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/bar');


export default {
    watch:{dataset(){
        this.chartInit();
    }},
    computed: {
        dataset(){return this.$store.state.Data.class1;},
    },
    methods:{
        chartInit(){
            let myChart = echarts.init(this.$refs.chart9);
            let that=this;
            myChart.setOption({
                title: {
                    text: '班级达成度\n',
                    left: 'center'
                },
                tooltip: {},
                xAxis: {type:'category'},
                yAxis: {max:1},
                dataset: {source:this.dataset},
                series: [{
                    type: 'bar'
                }]
            },true);
            myChart.on('click', function (params) {
                that.$store.commit('setDataClass', {class1:params.name});
                that.$store.dispatch('changeStudentData');
            });
        }

    },
    mounted () {
        this.$store.dispatch('studentData');
    }
}
</script>