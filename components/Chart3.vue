<template>
    <div ref="chart3" :style="{height: '250px'}">
    </div>
</template>

<script>
//const echarts = require('echarts/lib/echarts');
//require('echarts/lib/chart/pie');
//require('echarts/lib/component/legend');


export default {
    watch:{dataset(){
        this.chartInit();
    }},
    computed: {
        dataset(){return this.$store.state.Data.sex;},
    },
    methods:{
        chartInit(){
            let myChart = this.$echarts.init(this.$refs.chart3);
            myChart.setOption({
                title: {
                    text: '男女比例',
                    left: 'center'
                },
                legend: {top:'10%'},
                tooltip: {
                    trigger: 'item',
                    formatter: '{b} :  {d}%'
                },
                dataset: {
                    source: this.dataset
                },
                series: [
                    {
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
            },true);
        }
    }
}
</script>