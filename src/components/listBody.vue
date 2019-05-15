<template>
  <div class="body container">
    <div class="list container">
      <div class="list-header">
        <div class="col-md-2 col-lg-1 col-sm-2 col-2 userImage">
          <img :src="list.userImage">
        </div>
        <div class="username">
          <p>{{ list.username }}</p>
        </div>
      </div>
      <p class="caption container">{{ list.caption }}</p>
      <p class="postImage noselect" :class="list.filter" @dblclick="addLike">
        <img :src="list.postImage" :class='list.filter'>
      </p>
      <p class="like container noselect" @click="addLike">
        <span class="iconfont clickLike" v-if="list.hasBeenLiked">&#xe757;</span>
        <span class="iconfont" v-else>&#xe601;</span>
      </p>
      <p class="likes container">{{ list.likes }}点赞</p>
    </div>
  </div>
</template>

<script>

export default {
    props: {
        list: Object
    },
    methods: {
        addLike () {
            this.list.hasBeenLiked = !this.list.hasBeenLiked;
            this.list.hasBeenLiked ? this.list.likes ++ : this.list.likes --;
        }
    },
};
</script>

<style>
</style>
