<template>
    <div class="YearCheckBox">
        <label v-for="year in years" :key='year.year'>
            <input type="checkbox" :name="year.year" :checked="year.checked" @change="getChecked">
            {{ year.year }}
        </label>
    </div>
</template>

<script>
export default {
    computed: {
        years(){return this.$store.state.Data.years;}
    },
    methods: {
        getChecked: function (event) {
            this.$store.commit('changeYear', {year:parseInt(event.target.name)});
            this.$store.dispatch('changeSpecialtyData');
            this.$store.dispatch('changeNumData');
            this.$store.dispatch('changeSexData');
            this.$store.dispatch('changeNationData');
            this.$store.dispatch('changeNativePlaceData');
        }
    },
    mounted () {
        this.$store.dispatch('nativePlaceData');
    }
}
</script>