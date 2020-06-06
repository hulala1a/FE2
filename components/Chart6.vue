<template>
    <div ref="chart6" :style="{height: '600px'}">
    </div>
</template>

<script>
//const echarts = require('echarts/lib/echarts');
//require('echarts/lib/chart/sunburst');


export default {
    watch:{dataset(){
        this.chartInit();
    }},
    computed: {
        dataset(){return this.$store.state.Data.requirement;},
    },
    methods:{
        chartInit(){
            let myChart = this.$echarts.init(this.$refs.chart6);
            let data=[], j=0, that=this;
            data.push({name:this.dataset[0].requirement,value:this.dataset[0].requirement_point,children:[]});
            console.log(data);
            for(let i of this.dataset){
                if(i.requirement!=data[j].name){
                    data.push({name:i.requirement,value:i.requirement_point,children:[]});
                    j++;
                }
                data[j].children.push({name:i.target,value:i.target_point});
            }
            
            myChart.setOption({
                title: {
                    text: '毕业要求指标点图',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{b} :  {c}'
                },
                legend: {},
                series: [{
                    type: 'sunburst',
                    // highlightPolicy: 'ancestor',
                    data: data,
                    radius: [0, '90%']
                }]
            },true);
            myChart.on('click', function (params) {
                if(params.name[0]=='指'){
                    that.$store.commit('setDataTarget', {target:params.name});
                    that.$store.dispatch('changeZheData2');
                }
            });
        }

    }
}
</script>