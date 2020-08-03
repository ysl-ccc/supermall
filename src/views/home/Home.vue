<template>
  <div id="home">
    <nav-bar ><div slot="center">购物街</div></nav-bar>
    <home-siper :banners="banners"/>
  </div>
</template>


// P156
<script>
  import NavBar from '@/components/common/navbar/NavBar'
  import HomeSiper from './childComps/HomeSwiper'

  import {getHomeMultidata} from '@/network/home'
 

  export default {
		name: "Home",
    components: {
      NavBar,
      HomeSiper
    },
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    created() {
        //1.请求多个数据
      getHomeMultidata().then(res => {
        this.banners = res.banner.list
        this.recommends = res.recommend.list
      })
    }
	}
</script>

<style scoped>
  #home {
    /*position: relative;*/
    height: 100vh;
  }

  .nav-bar {
    background-color: var(--color-tint);
    /* font-weight: 700; */
    color: #fff;
  }

  /* .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

  .fixed {
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
  }

  .back-top {
    position: fixed;
    right: 10px;
    bottom: 60px;
  } */
</style>
