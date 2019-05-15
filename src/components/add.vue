<template>
    <div class="container filter-body">
        <div>
            <img :src="image" :class='filters'>
        </div>
        <ul class='filter-list'>
            <li v-for='(val, index) in filter' :key='index' @click='changeFilter(val)'>
                <p>{{ val.name }}</p>
                <img :src="image" :alt="val.name" :class='val.name'>
            </li>
        </ul>
    </div>
</template>

<script>
import eventBus from '../eventBus.js'
import filter from '../data/filters.js'
export default {
    props: {
        image: String
    },
    data () {
        return {
            filter,
            filters: 'normal'
        }
    },
    methods: {
        changeFilter (val) {
            this.filters = val.name;
        }
    },
    watch: {
        filters () {
            eventBus.$emit('next', this.filters)
        }
    }
}
</script>

<style>

</style>
