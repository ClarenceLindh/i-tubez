<template>
  <header>
    <nav class="container">
      <div class="branding">
        <router-link class="header" :to="{ name: 'Songs' }">iTubez</router-link>
      </div>
      <Search id="Search" />
      <div class="nav-links">
        <ul v-show="!mobile">
          <router-link class="link" :to="{ name: 'Songs' }">Songs</router-link>
          <router-link class="link" :to="{ name: 'Artists' }">Artists</router-link>
          <router-link class="link" :to="{ name: 'Albums' }">Albums</router-link>
        </ul>
      </div>
    </nav>
    <menuIcon @click="toggleMobileNav" class="menu-icon" v-show="mobile" />
    <transition name="mobile-nav">
      <ul class="mobile-nav" v-show="mobileNav">
        <router-link class="link" :to="{ name: 'Songs' }"
          >Songs</router-link
        >
        <router-link class="link" :to="{ name: 'Artists' }">Artists</router-link>
        <router-link class="link" :to="{ name: 'Albums' }">Albums</router-link>
      </ul>
    </transition>
  </header>
</template>

<script>
import menuIcon from "../assets/Icons/bars-regular.svg";
import Search from "./Search.vue";

export default {
  name: "Navigation",
  components: {
    menuIcon,
    Search,
  },
  data() {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 800) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },

    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    mobileNavFalse() {
      this.mobileNav = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  font-size: 50px !important;
  color: #fff;
}
header {
  padding: 0 ;
  top: 0;
  width: 100%;
  z-index: 1;
  // position: fixed;
  background: #303030;

  .branding > a {
    font-size: 30px;
    margin-left: 10px;
  }

  .link {
    font-weight: 500;
    padding: 0 ;
    transition: 0.3s color ease;
    color: #fff;

    &:hover {
      color: #1eb8b8;
    }
    &:active {
      transition: ease-in 0.1s;
      color: rgb(15, 15, 15);
    }
  }

  nav {
    display: flex;
    padding: 10px 2px;

    .branding {
      display: flex;
      align-items: center;

      .header {
        font-weight: 600;
        font-size: 24px;
        color: #fff;
        text-decoration: none;
      }
    }

    .nav-links {
      position: relative;
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: flex-end;

      ul {
        margin-right: 10px;

        .link {
          margin-right: 15px;
        }

        .link:last-child {
          margin-right: 0;
        }
      }
    }
  }

  .menu-icon {
    cursor: pointer;
    position: absolute;
    top: 55px;
    right: 25px;
    height: 25px;
    width: auto;
  }

  .mobile-nav {
    padding: 20px;
    width: 70%;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: rgb(29, 29, 29);
    position: absolute;
    top: 0;
    left: 0;

    .link {
      padding: 15px 0;
      color: #fff;
      &:hover {
      color: #1eb8b8;
    }
    &:active {
      transition: ease-in 0.1s;
      color: rgb(15, 15, 15);
    }
    }
  }

  .mobile-nav-enter-active,
  .mobile-nav-leave-active {
    transition: all 1s ease;
  }

  .mobile-nav-enter {
    transform: translateX(-250px);
  }

  .mobile-nav-enter-to {
    transform: translateX(0);
  }

  .mobile-nav-leave-to {
    transform: translateX(-250px);
  }
}
</style>