<template>
  <!-- eslint-disable object-shorthand -->
  <!-- eslint-disable max-len -->
  <!-- eslint-disable prefer-const -->
  <div class="welcome-container">
    <welcome-frame></welcome-frame>

    <div class="cover-color" :class="{
      'firstSectionBackground' : isFirst,
      'secondSectionBackground' : isSecond,
      'thirdSectionBackground' : isThird,
      'fourthSectionBackground' : isFourth,
      'fifthSectionBackground' : isFifth,
      'sixthSectionBackground' : isSixth,
    }">
    </div>

    <div class="cover-color brandCover" :class="{
      'colaBackground' : colaFlg,
      'appleBackground' : appleFlg,
      'nikeBackground' : nikeFlg,
      'paypalBackground' : paypalFlg,
      'googleBackground' : googleFlg,
    }">
    </div>

    <!--  -->
    <section class="firstSection">
      <div class="section-container">
        <svg
          class="logo"
          viewBox="0 0 98 20"
          width="1080"
          data-sal="slide-up"
          data-sal-delay="500"
          data-sal-easing="ease-out-quint"
          data-sal-duration="2000"
        >
          <defs>
            <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="30%" stop-color="#56d3d3" />
              <stop offset="60%" stop-color="#d46bdd" />
            </linearGradient>
            <pattern id="wave" x="0" y="0" width="200" height="50" patternUnits="userSpaceOnUse">
              <path
                id="wavePath"
                d="M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 V20 H-40z"
                mask="url(#mask)"
                fill="url(#gradient)"
              >
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  dur="1.5s"
                  type="translate"
                  from="0,0"
                  to="40,0"
                  repeatCount="indefinite"
                />
              </path>
            </pattern>
          </defs>
          <text
            text-anchor="middle"
            x="50"
            y="15"
            font-size="20"
            font-weight="800"
            fill="url(#wave)"
            fill-opacity="1"
          >JUSTIFY</text>
          <text
            text-anchor="middle"
            x="50"
            y="15"
            font-size="20"
            font-weight="800"
            fill="url(#gradient)"
            fill-opacity="0.5"
          >JUSTIFY</text>
        </svg>
        <h3
          data-sal="slide-up"
          data-sal-delay="500"
          data-sal-duration="3000"
        >Your Future.</h3>
      </div>
    </section>
    <!--  -->
    <section class="secondSection">
      <div class="section-container">
        <h2
          class="title"
          data-sal="slide-right"
          data-sal-delay="100"
          data-sal-easing="ease-out-quint"
          data-sal-duration="2000"
        >1st</h2>
        <h3
          class="sub-title"
          data-sal="slide-up"
          data-sal-delay="500"
          data-sal-easing="ease-out-quint"
          data-sal-duration="2000"
        >Leading recruitment system in Vietnam</h3>
      </div>
    </section>

    <img v-if="isSecond" class="feature-photo photo1" src="../../assets/img/office-lady.png"/>
    <!--  -->
    <section class="thirdSection">
      <div class="section-container">
        <div class="three-dot">
          <div class="dot dot1">
            <img @click="() => { this.googleFlg = !this.googleFlg;
              this.appleFlg = false;
              this.colaFlg = false;
              this.nikeFlg = false;
              this.paypalFlg = false;
            }" src="../../assets/img/google-logo.png" alt="google">
          </div>
          <div class="dot dot2">
            <img @click="() => { this.appleFlg = !this.appleFlg;
              this.googleFlg = false;
              this.colaFlg = false;
              this.nikeFlg = false;
              this.paypalFlg = false;
            }" src="../../assets/img/apple-logo.png" alt="apple">
          </div>
          <div class="dot dot3">
            <img @click="() => { this.colaFlg = !this.colaFlg;
              this.googleFlg = false;
              this.appleFlg = false;
              this.nikeFlg = false;
              this.paypalFlg = false;
            }" src="../../assets/img/coca-cola-logo.png" alt="Coca Cola">
          </div>
          <div class="dot dot4">
            <img @click="() => { this.nikeFlg = !this.nikeFlg;
              this.googleFlg = false;
              this.appleFlg = false;
              this.colaFlg = false;
              this.paypalFlg = false;
            }" src="../../assets/img/nike-logo.png" alt="Nike">
          </div>
          <div class="dot dot5">
            <img @click="() => { this.paypalFlg = !this.paypalFlg;
              this.googleFlg = false;
              this.appleFlg = false;
              this.colaFlg = false;
              this.nikeFlg = false;
            }" src="../../assets/img/paypal-logo.png" alt="PayPal">
          </div>
        </div>

        <div class="third-title">
          <h2
            class="title"
            data-sal="slide-up"
            data-sal-delay="100"
            data-sal-easing="ease-out-quint"
            data-sal-duration="2000"
          >615</h2>
          <h3
            class="sub-title"
            data-sal="slide-left"
            data-sal-delay="500"
            data-sal-easing="ease-out-quint"
            data-sal-duration="2000"
          >Companies hiring.</h3>
        </div>
      </div>
    </section>
    <!--  -->
    <section class="fourthSection">
      <div class="section-container">
        <h2
          class="title"
          data-sal="slide-right"
          data-sal-delay="100"
          data-sal-easing="ease-out-quint"
          data-sal-duration="2000"
        >1,012,578</h2>
        <h3
          class="sub-title"
          data-sal="slide-up"
          data-sal-delay="500"
          data-sal-easing="ease-out-quint"
          data-sal-duration="2000"
        >Jobs currently open.</h3>
      </div>
    </section>
    <!--  -->
    <section class="fifthSection">

    </section>
    <!--  -->
    <section class="sixthSection">
      <div class="button-label">
        Start
      </div>
      <div class="neu-button-wrapper">
        <div class="neu-button">Join Us</div>
      </div>
    </section>
  </div>
</template>

<script>
import sal from 'sal.js';
import anime from 'animejs';
import WelcomeFrame from './WelcomeFrame/WelcomeFrame.vue';

export default {
  name: 'welcome',
  components: {
    'welcome-frame': WelcomeFrame,
  },
  mounted() {
    sal({
      threshold: 0.5,
      once: false,
    });

    // First Section animation
    this.createIntersectObserver(() => {
      this.isSecond = false;
      this.isFirst = true;
    }, {
      targets: '.cover-color',
      width: '0%',
      easing: 'easeInOutQuad',
      delay: '300',
    }, { threshold: 0.3 }).observe(document.querySelector('.firstSection'));

    // Second Section animation
    this.createIntersectObserver(() => {
      this.isFirst = false;
      this.isSecond = true;
      this.isThird = false;

      this.googleFlg = false;
      this.appleFlg = false;
      this.colaFlg = false;
      this.nikeFlg = false;
      this.paypalFlg = false;
    }, {
      targets: '.cover-color',
      width: '30%',
    }, { threshold: 0.7 }).observe(document.querySelector('.secondSection'));

    // Third Section animation
    this.createIntersectObserver(() => {
      this.isSecond = false;
      this.isThird = true;
      this.isFourth = false;
    }, {
      targets: '.cover-color',
      width: '100%',
    }, { threshold: 0.7 }).observe(document.querySelector('.thirdSection'));

    // Fourth Section animation
    this.createIntersectObserver(() => {
      this.isThird = false;
      this.isFourth = true;
      this.isFifth = false;

      this.googleFlg = false;
      this.appleFlg = false;
      this.colaFlg = false;
      this.nikeFlg = false;
      this.paypalFlg = false;
    }, {
      targets: '.cover-color',
      width: '70%',
    }, { threshold: 0.7 }).observe(document.querySelector('.fourthSection'));

    // Fifth Section animation
    this.createIntersectObserver(() => {
      this.isFourth = false;
      this.isFifth = true;
      this.isSixth = false;

      this.googleFlg = false;
      this.appleFlg = false;
      this.colaFlg = false;
      this.nikeFlg = false;
      this.paypalFlg = false;
    }, {
      targets: '.cover-color',
      width: '30%',
    }, { threshold: 0.7 }).observe(document.querySelector('.fifthSection'));

    // Sixth Section animation
    this.createIntersectObserver(() => {
      this.isFifth = false;
      this.isSixth = true;
      this.isSeventh = false;

      this.googleFlg = false;
      this.appleFlg = false;
      this.colaFlg = false;
      this.nikeFlg = false;
      this.paypalFlg = false;
    }, {
      targets: '.cover-color',
      width: '0%',
    }, { threshold: 0.7 }).observe(document.querySelector('.sixthSection'));
  },

  updated() {
    if (this.isSecond) {
      this.createIntersectObserver(() => {
      }, {
        targets: '.photo1',
        right: '10%',
      }, { threshold: 0.7 }).observe(document.querySelector('.photo1'));
    }

    this.createIntersectObserver(() => {
      anime({
        targets: '.dot2 img',
        translateY: () => '10vw',
        translateX: () => '-25vw',
        scale: (el, i, l) => (l - i) + 6,
        duration: () => '1800',
        delay: () => '100',
      });

      anime({
        targets: '.dot3 img',
        translateY: () => '17vw',
        scale: (el, i, l) => (l - i) + 6,
        duration: () => '1800',
        delay: () => '100',
      });

      anime({
        targets: '.dot4 img',
        translateY: () => '10vw',
        translateX: () => '25vw',
        scale: (el, i, l) => (l - i) + 6,
        duration: () => '1800',
        delay: () => '100',
      });

      anime({
        targets: '.dot5 img',
        translateY: () => '-10vw',
        translateX: () => '28vw',
        scale: (el, i, l) => (l - i) + 6,
        duration: () => '1800',
        delay: () => '100',
      });
    }, {
      targets: '.dot1 img',
      translateY: () => '-10vw',
      translateX: () => '-28vw',
      scale: (el, i, l) => (l - i) + 6,
      duration: () => '1800',
      delay: () => '100',
    }, { threshold: 0.7 }).observe(document.querySelector('.thirdSection'));
  },
  methods: {
    createIntersectObserver(callback, animateOption, intersectOption) {
      return new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          callback();
          anime(animateOption);
        }
      }, intersectOption);
    },
  },
  data() {
    return {
      isFirst: false,
      isSecond: false,
      isThird: false,
      isFourth: false,
      isFifth: false,
      isSixth: false,
      isSeventh: false,

      googleFlg: false,
      appleFlg: false,
      colaFlg: false,
      nikeFlg: false,
      paypalFlg: false,
    };
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/Welcome/Welcome.scss";
@import "../../../node_modules/sal.js/dist/sal.css";
</style>
