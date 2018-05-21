<template>
  <div class="root">
    <div class="space"></div>
    <div class="space"></div>
    <!-- Tags -->
    <ul class="tags">
      <li v-on:click="setTag">vuex</li>
      <li v-on:click="setTag">tutorial</li>
      <li v-on:click="setTag">talks</li>
      <li v-on:click="setTag">conf</li>
      <li v-on:click="setTag">axios</li>
      <li v-on:click="setTag">testing</li>
      <li v-on:click="setTag">vue-router</li>
      <li v-on:click="setTag">vue-material</li>
      <li v-on:click="setTag">nuxt</li>
    </ul>
    <div class="space"></div>
    <!-- Videos -->
    <div class="listing">
      <article class="video" v-for="video in videos" :key="video.snippet.id">
        <router-link
          :to="{ name: 'Player', params: { id: video.id.videoId }}"
          :title="video.snippet.title"
        >
          <div class="thumb"
          :style="'background-image: url(' + video.snippet.thumbnails.medium.url + ')'"
        ></div>
        </router-link>
        <div class="space"></div>
        <div class="meta">
          <div class="title">
            <router-link
              :to="{ name: 'Player', params: { id: video.id.videoId }}"
            >
              <b>{{ video.snippet.title }}</b>
            </router-link>
          </div>
          <div class="space single"></div>
          <span class="time">{{ video.snippet.publishedAt | date }}</span>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'Feed',
  data() {
    return {
      err: '',
      videos: [],
      tags: [],
    };
  },
  computed: {
    genTags() {
      let tags = '';
      // Check if is the last iteration, to avoid adding another +
      this.tags.forEach((tag, i) => {
        console.log(i);
        if ((i + 1) === this.tags.length) {
          tags += tag;
        } else {
          tags += `${tag}+`;
        }
      });
      return tags;
    },
  },
  filters: {
    date(value) {
      return moment(value).fromNow();
    },
  },
  created() {
    this.getVideos();
  },
  methods: {
    getVideos() {
      // Config options
      const KEY = 'AIzaSyBlSc4Zavlls-c_K2cESn1jyuiUSckHgwM';
      const OPTS = `part=snippet&type=video&q=vuejs${this.genTags}&maxResults=50`;
      const BASE_URL = `https://www.googleapis.com/youtube/v3/search?&${OPTS}&key=${KEY}`;

      // Get request to youtube API
      fetch(BASE_URL, { method: 'GET' })
        .then(response => response.json())
        .then((json) => {
          this.videos = json.items;
          // console.log(this.videos);
        })
        .catch((err) => { this.err = err; });
    },
    setTag(event) {
      const tagName = event.target.innerHTML;
      // Chech if the tags is active by checking the classname
      if (event.target.classList.value === "") {
        // Add a special class to the selected element
        event.target.classList.add('tag-on');
        // Add clicked tag to tags array
        this.tags.push(tagName);
        // Make a new request with the new parameters
        this.getVideos();
      } else {
        this.tags.forEach((tag, i) => {
          if (tagName === tag) {
            this.tags.splice(i, 1);
          }
        });
        console.log(this.tags);
        event.target.classList.remove('tag-on');
        this.getVideos();
      }
    },
  },
};
</script>

<style>
  .listing{
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .video{
    width: 32%;
    position: relative;
    margin-bottom: 35px;
    padding-bottom: 10px;
  }

  .video::before,
  .video::after{
    bottom: 0;
    width: 0%;
    height: 4px;
    content: "";
    position: absolute;
    transition: width .5s;
    background-color: #5bc498;
  }

  .video::before{
    left: 0;
  }

  .video::after{
    right: 0;
  }

  .video:hover::before,
  .video:hover::after{
    width: 50%;
  }

  .video .thumb{
    width: 100%;
    height: 140px;
    border-radius: 3px;
    background-size: cover;
  }

  .video .meta{
    color: #666;
  }

  .video .meta .title{
    font-size: 14px;
  }

  .video .meta span{
    font-size: 12px;
  }

  .video .meta a{
    color: #333;
    text-decoration: none;
  }

  .video:hover .meta a{
    color: #5bc498;
  }

  /* Tags */
  .tags{
    list-style: none;
  }

  .tags li{
    color: #FFF;
    padding: 5px;
    cursor: pointer;
    display: inline;
    border-radius: 3px;
    background-color: #5bc498;
    transition: background-color .3s;
  }

  .tags li:hover,
  .tag-on{
    background-color: #333 !important;
  }
</style>
