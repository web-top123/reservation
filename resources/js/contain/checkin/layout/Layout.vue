<template>
  <div>
    <section id="topbar" class="d-none d-lg-flex align-items-center">
      <div
        class="
          container-fluid
          d-flex
          justify-content-center justify-content-md-end
        "
      >
        <div class="d-flex align-items-center">
          <a href="#" class="home"><img src="img/theme/home.png" />Home</a>
          <a
            href="#"
            class="search d-flex justify-content-between align-items-center"
            ><span>Search</span><img src="img/theme/search.png"
          /></a>
        </div>
      </div>
    </section>
    <!-- End Top Bar-->
    <header id="header" class="d-flex">
      <section class="container-fluid">
        <div class="d-flex justify-content-between align-items-start">
          <div id="logo" class="d-flex flex-row">
            <div class="d-flex align-items-center">
              <img src="img/theme/logo.png" />
              <h4 class="logo-title">Aviation Services</h4>
            </div>
          </div>
          <nav
            id="navbar"
            class="navbar"
            v-bind:class="{ 'navbar-mobile': isActive }"
            v-on:click="toggleMobileClass"
          >
            <ul>
              <li><a class="nav-link" href="#">About us</a></li>
              <li><a class="nav-link" href="#">What we do</a></li>
              <li><a class="nav-link" href="#">Flying with us</a></li>
              <li><a class="nav-link" href="#">News</a></li>
              <li><a class="nav-link" href="#">Careers</a></li>
              <li><a class="nav-link" href="#">Contact</a></li>
            </ul>
            <i
              class="fa fa-solid mobile-nav-toggle"
              v-bind:class="{ 'fa-bars': hasBars, 'fa-times': isActive }"
            ></i>
          </nav>
        </div>
      </section>
    </header>
    <!-- End Header -->
    <div class="main-content">
      <zoom-center-transition :duration="pageTransitionDuration" mode="out-in">
        <router-view></router-view>
      </zoom-center-transition>
    </div>
    <footer id="footer">
      <section>
        <div class="container-fluid">
          <div
            class="
              top-footer
              d-flex
              justify-content-center
              align-items-center
              justify-content-md-between
              flex-column flex-md-row
              align-items-md-start
            "
          >
            <img class="footer-log-img" src="img/theme/logo.png" />
            <div class="social mobile-social-footer">
              <a href=""><i class="fab fa-twitter-square"></i></a>
              <a href=""><i class="fab fa-facebook-square"></i></a>
              <a href=""><i class="fab fa-instagram-square"></i></a>
              <a href=""><i class="fab fab fa-linkedin"></i></a>
            </div>
            <div class="footer-links d-flex">
              <div class="footer-link-block">
                <div><a href="">About us</a></div>
                <div><a href="">What we do</a></div>
                <div><a href="">Flying with us</a></div>
              </div>
              <div class="footer-link-block">
                <div><a href="">News</a></div>
                <div><a href="">Careers</a></div>
                <div><a href="">Contact</a></div>
              </div>
            </div>
          </div>
          <div class="social">
            <i class="fa fa-twitter" aria-hidden="true"></i>
            <a href=""><i class="fab fa-twitter-square"></i></a>
            <a href=""><i class="fab fa-facebook-square"></i></a>
            <a href=""><i class="fab fa-instagram-square"></i></a>
            <a href=""><i class="fab fab fa-linkedin"></i></a>
          </div>
        </div>
      </section>

      <section id="footer-copyright">
        <div
          class="
            container-fluid
            d-flex
            justify-content-center justify-content-md-between
            flex-column flex-md-row
          "
        >
          <div class="copyright-links d-flex flex-column flex-md-row">
            <div><a href="">Privacy & security</a></div>
            <div><a href="">Website terms of use</a></div>
            <div><a href="">Websiteblowing Report</a></div>
            <div><a href="">Purchase Order Terms & Conditions</a></div>
          </div>
          <div class="copyright-mark">© 2021 Cobham Aviation Services</div>
        </div>
      </section>
    </footer>
    <!-- End Footer -->
  </div>
</template>

<script>
import { BaseNav } from "@/components";
import { ZoomCenterTransition } from "vue2-transitions";

export default {
  components: {
    BaseNav,
    ZoomCenterTransition,
  },
  props: {
    backgroundColor: {
      type: String,
      default: "black",
    },
  },
  data() {
    return {
      showMenu: false,
      menuTransitionDuration: 250,
      pageTransitionDuration: 200,
      year: new Date().getFullYear(),
      pageClass: "login-page",
      isActive: false,
      hasBars: true,
    };
  },
  computed: {
    title() {
      return `${this.$route.name} Page`;
    },
  },
  methods: {
    toggleNavbar() {
      document.body.classList.toggle("nav-open");
      this.showMenu = !this.showMenu;
    },
    toggleMobileClass() {
      this.isActive = !this.isActive;
      this.hasBars = !this.hasBars;
    },
    closeMenu() {
      document.body.classList.remove("nav-open");
      this.showMenu = false;
    },
    setBackgroundColor() {
      document.body.classList.add("");
    },
    removeBackgroundColor() {
      document.body.classList.remove("bg-default");
    },
    updateBackground() {
      if (!this.$route.meta.noBodyBackground) {
        this.setBackgroundColor();
      } else {
        this.removeBackgroundColor();
      }
    },
  },
  beforeDestroy() {
    this.removeBackgroundColor();
  },
  beforeRouteUpdate(to, from, next) {
    // Close the mobile menu first then transition to next page
    if (this.showMenu) {
      this.closeMenu();
      setTimeout(() => {
        next();
      }, this.menuTransitionDuration);
    } else {
      next();
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler: function () {
        this.updateBackground();
      },
    },
  },
};
</script>

<style lang="scss">
$scaleSize: 0.8;
@keyframes zoomIn8 {
  from {
    opacity: 0;
    transform: scale3d($scaleSize, $scaleSize, $scaleSize);
  }
  100% {
    opacity: 1;
  }
}
.brand-footer {
  width: 40%;
}
.right-footer {
  width: 45%;
}
.main-content .zoomIn {
  animation-name: zoomIn8;
}
.tabs-nav {
  padding: 0 !important;
}
@keyframes zoomOut8 {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: scale3d($scaleSize, $scaleSize, $scaleSize);
  }
}
.main-content .zoomOut {
  animation-name: zoomOut8;
}
.text-white {
  font-size: 14px;
}
</style>
