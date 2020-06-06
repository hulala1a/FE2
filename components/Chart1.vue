<template>
    <div ref="chart1" :style="{ height: '350px'}">
    </div>
</template>

<script>
//const echarts = require('echarts/lib/echarts');
//require('echarts/lib/chart/bar');
//require('echarts/lib/component/tooltip');
//require('echarts/lib/component/title');
//require('echarts/lib/component/legend');

export default {
    watch:{dataset(){
        this.chartInit();
    }},
    computed: {
        dataset(){return this.$store.state.Data.specialty;},
    },
    methods:{
        chartInit(){
            let myChart = this.$echarts.init(this.$refs.chart1);
            let that = this;
            let rtn = ['specialty'];
            for(let i of this.$store.state.Data.years){
                if(i.checked) rtn.push(i.year.toString());
            }
            let data = [];
            let j = 0;
            data.push(rtn);
            for(let i of this.dataset){
                if(i.specialty!=data[j][0]){data.push([]);data[++j].push(i.specialty);}
            }
            for(let i of this.dataset){
                for(let n=0;n<data.length;n++){
                    if(i.specialty==data[n][0]){data[n].push(i.reaching_point);break;}
                }
            }
            let series = [];
            for(let i=0;i<data[0].length-1;i++){series.push({type: 'bar'})};
            console.log(data);
            myChart.setOption({
                title: {
                    text: '专业达成度',
                    left: 'center'
                },
                legend: {
                    top: "8%"
                },
                tooltip: {},
                dataset: {
                    source: data
                },
                xAxis: {type: 'category'},
                yAxis: {},
                series: series
            },true);
            myChart.on('click', function (params) {
                that.$router.push('/specialty');
                that.$store.commit('setDataSpecialty', {specialty:params.name});
            });
        }
    },
    
}
</script>