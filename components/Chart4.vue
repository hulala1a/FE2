<template>
    <div ref="chart4" :style="{height: '250px'}">
    </div>
</template>

<script>
//const echarts = require('echarts/lib/echarts');
//require('echarts/lib/chart/pie');


export default {
    watch:{dataset(){
        this.chartInit();
    }},
    computed: {
        dataset(){return this.$store.state.Data.nation;},
    },
    methods:{
        chartInit(){
            let myChart = this.$echarts.init(this.$refs.chart4);
            myChart.setOption({
                title: {
                    text: '民族分布',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{b} : {d}%'
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