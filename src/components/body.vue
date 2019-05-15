<template>
  <div>
    <div v-if="step === 1">
      <hx-list v-for="(list, index) in lists" :key="index" :list="list"></hx-list>
    </div>
    <div v-if='step === 2'>
        <hx-add :image='image'></hx-add>
    </div >
    <div v-if='step === 3'>
        <hx-release :image='image' :filter='filter'></hx-release>
    </div>
  </div>
</template>
<script>
import listBody from "./listBody.vue";
import add from './add.vue';
import release from './release.vue';
import eventBus from '../eventBus';
export default {
  created () {
    eventBus.$on('next', (e) => {
        console.log(e);
        this.filter = e;
    })
  },
  data () {
      return {
          filter: ''
      }
  },
  props: {
    lists: Array,
    step: Number,
    image: String
  },
  components: {
    hxList: listBody,
    hxAdd: add,
    hxRelease: release
  }
};
</script>
<style>
</style>
