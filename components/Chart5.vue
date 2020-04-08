<template>
    <div ref="chart5" :style="{height: '600px'}">
    </div>
</template>

<script>
const echarts = require('echarts/lib/echarts')
require('echarts/map/js/china')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/legendScroll')


export default {
    watch:{dataset(){
        this.chartInit();
    }},
    computed: {
        dataset(){return this.$store.state.Data.nativePlace;},
    },
    methods:{
        chartInit(){
            let myChart = echarts.init(this.$refs.chart5); 
            myChart.setOption({ 
                title: {
                    text: '籍贯分布',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{b} :  {c}人'
                },// 进行相关配置
                dataRange: {
                    show: false,
                    min: 0,
                    max: 30,
                    text: ['High', 'Low'],
                    realtime: true,
                    calculable: true,
                    color: ['orangered', 'yellow', 'lightskyblue']
                },
                geo: { 
                    map: 'china', 
                    roam: true,
                    label: {
                        normal: {
                            show: true,
                            textStyle: {
                                color: 'rgba(0,0,0,0.4)'
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            borderColor: 'rgba(0, 0, 0, 0.2)'
                        },
                        emphasis: {
                            areaColor: null,
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                            shadowBlur: 20,
                            borderWidth: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                },
                series: [{
                    type: 'scatter',
                    coordinateSystem: 'geo' // 对应上方配置
                },
                {
                    type: 'map',
                    geoIndex: 0,
                    data: this.dataset
                }]
            },true)
        }
    }
}
</script>