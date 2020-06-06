<template>
    <div>
        <select v-model="selected">
            <option v-for="year in years" :key='year.year'>{{ year.year }}</option>
        </select>
    </div>
</template>

<script>
export default {
    computed: {
        years(){return this.$store.state.Data.years;}
    },
    data() {
        return {selected: this.$store.state.Data.datas.year};
    },
    watch: {
        selected(newValue){
            this.$store.commit('setDataYear', {year:parseInt(newValue)});
            this.$store.dispatch('changeZheData1');
            this.$store.dispatch('changeStudentData1');
        }
    },
    beforeCreate () {
        this.$store.dispatch('studentData');
    }
}
</script>