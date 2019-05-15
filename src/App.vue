<template>
  <div class="container" id="app">
    <div class=" container header">
      <div class="header-img">
        <span v-if='step === 2 || step === 3' class='noselect' @click='gohome'>取消</span>
        <img src="./assets/vue_gram_logo_cp.png" alt>
        <span v-if='step === 2' class='noselect' @click='next'>下一步</span>
        <span v-if='step === 3' class='noselect' @click='rele'>发布</span>
      </div>
    </div>
    <hx-body :lists='lists' :step='step' :image='image'></hx-body>
    <hx-loader v-show='!loader'></hx-loader>
    <div class=" container">
      <div class="footer container noselect">
        <div class="col-md-1 col-sm-1 col-1 home">
          <span class="iconfont" @click='gohome'>&#xe61b;</span>
        </div>
        <div class="col-md-1 col-sm-1 col-1 add">
          <input type="file" id = 'img' hidden @change='updataImg' :disabled='step===1?false:true'>
          <label for="img">
            <span class="iconfont">&#xe752;</span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import lists from './data/posts.js'
import body from './components/body.vue'
import loader from './components/loader.vue'
import eventBus from './eventBus';
// import eventBus from './eventBus.js'
export default {
  created () {
    eventBus.$on('reset', () => {
      this.step = 1;
    })
  },
  data () {
    return {
      lists,
      step: 1,
      image: '',
      loader: true,
      file: null
    }
  },
  methods: {
    updataImg (e) {
      let files = e.target.files[0];
      this.file = e.target
      if(!(files.type.indexOf('image') === 0)){
        alert('请上传图片');
        return;
      }
      let reader = new FileReader();
      reader.readAsDataURL(files);
      this.loader = false;
      reader.onload = (e) => {
        this.loader = true;
        this.image = e.target.result;
        this.step = 2;
        e.target.value = ''
      }
    },
    gohome () {
      this.step = 1;
      this.image = '';
    },
    next () {
      this.step = 3;
  
    },
    rele () {
      eventBus.$emit('rele', '')
    }
  },
  components: {
    hxBody: body,
    hxLoader: loader
  },
  watch: {
    step () {
      this.file.value = '';
    }
  }
};
</script>

<style lang="scss" src='./style/app.scss'>
</style>
<style lang="scss" src='./style/font.scss'>
</style>
<style lang="scss" src='./style/body.scss'>
</style>
<style lang="scss" src='./style/loader.scss'>
</style>
<style lang="scss" src='./style/add.scss'>

</style>




