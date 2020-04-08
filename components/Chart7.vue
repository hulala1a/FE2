<template>
    <div ref="chart7" :style="{height: '300px'}">
    </div>
</template>

<script>
const echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/radar');


export default {
    watch:{dataset(){
        this.chartInit();
    }},
    computed: {
        dataset(){return this.$store.state.Data.course;},
    },
    methods:{
        chartInit(){
            let myChart = echarts.init(this.$refs.chart7);
            let data1 = [], data2 = [];
            let that = this;
            for(let i=0; i<this.dataset.length; i++){
                data1.push({text:this.dataset[i]['course'],max:1});
                data2.push(this.dataset[i]['course_point']);
            }
            
            myChart.setOption({
                title: {
                    text: '课程指标点得分\n',
                    left: 'center'
                },
                tooltip: {},
                radar: {
                    indicator: data1,
                    radius: 80,
                    center: ['50%', '60%'],
                    shape: 'circle',
                    triggerEvent:true
                },
                series: [{
                    type: 'radar',
                    tooltip: {
                    trigger: 'item'
                },
                data: [{value:data2}]
            }]
            },true);
            myChart.on('click', function (params) {
                if(params.name!=''){
                    that.$store.commit('setDataCourse', {course:params.name});
                    that.$store.dispatch('changeZheData');
                }
            });
        }

    }
}
</script>