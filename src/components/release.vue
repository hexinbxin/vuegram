<template>
  <div class="container form-group">
    <input type="text" class="form-control" v-model="username" placeholder="请输入名字">
    <input type="file" hidden id="userImage" @change="changeuserImage">
    <label for="userImage" class = 'container'>
      <div class='UIMG'>
          <p>请选择头像</p>
        <img :src="userImage" alt>
      </div>
    </label>
    <textarea cols="30" rows="10" class="form-control" v-model="caption" placeholder='输入你的心情'></textarea>
    <div class="controls">
      <img :src="image" :class='filter'>
    </div>
  </div>
</template>

<script>
// import filter from '../data/filters.js';
import posts from "../data/posts.js";
import eventBus from "../eventBus";
export default {
  created() {
    eventBus.$on("rele", () => {
      posts.unshift({
        username: this.username,
        userImage: this.userImage,
        postImage: this.image,
        likes: 0,
        hasBeenLiked: false,
        caption: this.caption,
        filter: this.filter ? this.filter : "normal"
      });
      eventBus.$emit("reset", "");
    });
  },
  props: {
    image: String,
    filter: String
  },
  data() {
    return {
      username: "",
      userImage: "",
      likes: 0,
      hasBeenLiked: false,
      caption: ""
    };
  },
  methods: {
    changeuserImage(e) {
      let files = e.target.files[0];
      if (!(files.type.indexOf("image") === 0)) {
        alert("请上传图片");
        return;
      }
      this.file = e.target;
      let reader = new FileReader();
      reader.readAsDataURL(files);
      this.loader = false;
      reader.onload = e => {
        this.userImage = e.target.result;
        e.target.value = "";
      };
    }
  }
};
</script>

<style lang="scss" scoped>
    div {
        margin-top: 20px;
        .UIMG{
            text-align: center;
            img{
                width: 20%;
            }
        }
        .controls{
            img{
                width: 100%;
            }
        }
    }

</style>


