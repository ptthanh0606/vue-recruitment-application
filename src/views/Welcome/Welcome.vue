<template>
  <!-- eslint-disable no-console -->
  <!-- eslint-disable object-shorthand -->
  <!-- eslint-disable max-len -->
  <!-- eslint-disable prefer-const -->
  <!-- eslint-disable no-unused-vars -->
  <div>
    <navigation-frame></navigation-frame>
    <div class="welcome-container">
      <footer-frame :targetSection="targetSection"></footer-frame>
      <!--  -->
      <div
        class="cover-color"
        :class="{
        'firstSectionBackground' : isFirst,
        'secondSectionBackground' : isSecond,
        'thirdSectionBackground' : isThird,
        'fourthSectionBackground' : isFourth,
        'fifthSectionBackground' : isFifth,
        'sixthSectionBackground' : isSixth,
      }"
      >{{ sectionName }}</div>
      <!--  -->
      <div
        class="cover-color brandCover"
        :class="{
        'colaBackground' : colaFlg,
        'appleBackground' : appleFlg,
        'nikeBackground' : nikeFlg,
        'paypalBackground' : paypalFlg,
        'googleBackground' : googleFlg,
      }"
      ></div>
      <!--  -->
      <section id="firstSection">
        <div class="section-container">
          <svg
            id="slogan-text"
            viewBox="0 0 61.1 11.7"
            data-sal="slide-up"
            data-sal-delay="500"
            data-sal-easing="ease-out-quint"
            data-sal-duration="2000"
          >
            <defs>
              <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="30%" stop-color="#ff5151" />
                <stop offset="60%" stop-color="#ffa41b" />
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
            <text y="11.5" fill="url(#wave)" fill-opacity="1">ASCEND</text>
            <text y="11.5" fill="url(#gradient)" fill-opacity="0.5">ASCEND</text>
          </svg>
          <h3
            id="slogan-alt"
            data-sal="slide-up"
            data-sal-delay="500"
            data-sal-duration="3000"
          >Your Future.</h3>
        </div>
      </section>
      <!--  -->
      <section id="secondSection">
        <div class="section-container">
          <div class="label-desc">
            <h3
              class="keyword"
              data-sal="slide-up"
              data-sal-delay="500"
              data-sal-easing="ease-out-quint"
              data-sal-duration="2000"
            >FIND</h3>
            <form
              class="typing-animation"
              method="get"
              data-sal="slide-up"
              data-sal-delay="500"
              data-sal-easing="ease-out-quint"
              data-sal-duration="2000"
              @submit="this.handleSearchByName"
            >
              <div class="typing">
                <input class="word" name="jobTitle" v-model="jobSeachValue" />
              </div>
              <button class="button-search-job" type="submit">
                <svg class="search-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 60">
                  <path
                    d="M36.3,12.482a2.07,2.07,0,0,0-2.724.06,1.634,1.634,0,0,0,.066,2.469l14.78,12.7H9.927a1.755,1.755,0,1,0,0,3.493H48.365L33.647,43.915a1.633,1.633,0,0,0-.066,2.469,2.07,2.07,0,0,0,2.724.059l16.81-14.511a3.266,3.266,0,0,0-.034-4.968Z"
                  />
                </svg>
              </button>
            </form>
            <h3
              class="sub-title"
              data-sal="slide-up"
              data-sal-delay="500"
              data-sal-easing="ease-out-quint"
              data-sal-duration="2000"
            >Jobs have never been so easy.</h3>
          </div>
        </div>
      </section>
      <!--  -->
      <section id="thirdSection">
        <div class="section-container">
          <div class="three-dot">
            <div class="dot dot1">
              <img
                @click="() => { this.googleFlg = !this.googleFlg;
                this.appleFlg = false;
                this.colaFlg = false;
                this.nikeFlg = false;
                this.paypalFlg = false;
              }"
                src="../../assets/img/google-logo.png"
                alt="google"
              />
            </div>
            <div class="dot dot2">
              <img
                @click="() => { this.appleFlg = !this.appleFlg;
                this.googleFlg = false;
                this.colaFlg = false;
                this.nikeFlg = false;
                this.paypalFlg = false;
              }"
                src="../../assets/img/apple-logo.png"
                alt="apple"
              />
            </div>
            <div class="dot dot3">
              <img
                @click="() => { this.colaFlg = !this.colaFlg;
                this.googleFlg = false;
                this.appleFlg = false;
                this.nikeFlg = false;
                this.paypalFlg = false;
              }"
                src="../../assets/img/coca-cola-logo.png"
                alt="Coca Cola"
              />
            </div>
            <div class="dot dot4">
              <img
                @click="() => { this.nikeFlg = !this.nikeFlg;
                this.googleFlg = false;
                this.appleFlg = false;
                this.colaFlg = false;
                this.paypalFlg = false;
              }"
                src="../../assets/img/nike-logo.png"
                alt="Nike"
              />
            </div>
            <div class="dot dot5">
              <img
                @click="() => { this.paypalFlg = !this.paypalFlg;
                this.googleFlg = false;
                this.appleFlg = false;
                this.colaFlg = false;
                this.nikeFlg = false;
              }"
                src="../../assets/img/paypal-logo.png"
                alt="PayPal"
              />
            </div>
          </div>
          <div class="third-title">
            <h3
              class="keyword"
              data-sal="slide-up"
              data-sal-delay="500"
              data-sal-easing="ease-out-quint"
              data-sal-duration="2000"
            >TRUST</h3>
            <h2
              class="title"
              data-sal="slide-up"
              data-sal-delay="100"
              data-sal-easing="ease-out-quint"
              data-sal-duration="2000"
            >6,371</h2>
            <h3
              class="sub-title"
              data-sal="slide-left"
              data-sal-delay="500"
              data-sal-easing="ease-out-quint"
              data-sal-duration="2000"
            >Companies</h3>
          </div>
        </div>
      </section>
      <!--  -->
      <section id="fourthSection">
        <div class="section-container">
          <div class="content-wrapper-outer">
            <div class="content-wrapper-inner">
              <div class="label-desc">
                <div class="desc">
                  <h3
                    class="keyword"
                    data-sal="slide-up"
                    data-sal-delay="500"
                    data-sal-easing="ease-out-quint"
                    data-sal-duration="2000"
                  >DIVERSE</h3>
                  <h2
                    class="title"
                    data-sal="slide-left"
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

                <div
                  class="info"
                  data-sal="slide-right"
                  data-sal-delay="500"
                  data-sal-easing="ease-out-quint"
                  data-sal-duration="2000"
                >
                  SCROLL TO VIEW
                  <svg
                    class="right-arrow"
                    xmlns="http://www.w3.org/2000/svg"
                    width="23.279"
                    height="9.859"
                    viewBox="0 0 23.279 9.859"
                  >
                    <path
                      d="M18.026,14.1a.684.684,0,0,0-.943.991l5.272,3.063H1.824a.684.684,0,0,0,0,1.368H22.332l-5.25,3.068a.684.684,0,1,0,.943.991l5.992-3.776a1.367,1.367,0,0,0-.012-1.946Z"
                      transform="translate(-1.14 -13.915)"
                    />
                  </svg>
                </div>
              </div>
              <job-card v-for="(postInfo, index) in jobResults" :key="index" :postInfo="postInfo"></job-card>
            </div>
          </div>
        </div>
      </section>
      <!--  -->
      <section id="fifthSection">
        <div class="section-container">
          <h3
            class="keyword"
            data-sal="slide-up"
            data-sal-delay="500"
            data-sal-easing="ease-out-quint"
            data-sal-duration="2000"
          >MANAGE</h3>
          <h2
            class="title"
            data-sal="slide-right"
            data-sal-delay="100"
            data-sal-easing="ease-out-quint"
            data-sal-duration="2000"
          >Control</h2>
          <h3
            class="sub-title"
            data-sal="slide-up"
            data-sal-delay="500"
            data-sal-easing="ease-out-quint"
            data-sal-duration="2000"
          >Your organization HR</h3>
        </div>
      </section>
      <!--  -->
      <section id="sixthSection">
        <div class="start-button-wrapper">
          <div class="selection employee" @click="handleRoutingSelection('jobs')" :class="{ 'display' : btnJoinFlg }">
            <div class="contain-box">
              <h1 class="role-card-title">Employee</h1>
              <p class="role-card-detail">Discover hiring.</p>
            </div>
          </div>

          <div
            class="start-button"
            :class="{ 'rgb-animation' : btnJoinFlg }"
            @click="() => { btnJoinFlg = !btnJoinFlg }"
          >
            <div class="label">
              Start
              <div class="label-down">As</div>
            </div>
          </div>

          <div class="selection employer" @click="handleRoutingSelection('employers')" :class="{ 'display' : btnJoinFlg }">
            <div class="contain-box">
              <h1 class="role-card-title">Employer</h1>
              <p class="role-card-detail">Control your HR.</p>
            </div>
          </div>
        </div>
      </section>
      <!--  -->
      <footer-page-component></footer-page-component>
    </div>
  </div>
</template>

<script>
import Sal from 'sal.js';
import Anime from 'animejs';
import Typed from 'typed.js';

import { mapActions, mapState } from 'vuex';
import FooterFrame from '../../components/FooterFrame/FooterFrame.vue';
import JobPreviewCard from '../../components/JobPreviewCard/JobPreviewCard.vue';
import NavigationFrame from '../../components/NavigationFrame/NavigationFrame.vue';
import FooterPageComponent from '../../components/FooterPageComponent/FooterPageComponent.vue';

export default {
  name: 'welcome',
  components: {
    'footer-frame': FooterFrame,
    'job-card': JobPreviewCard,
    'navigation-frame': NavigationFrame,
    'footer-page-component': FooterPageComponent,
  },

  computed: {
    ...mapState('Welcome', ['initJobsList']),
  },

  mounted() {
    window.scrollTo(0, 0);

    Sal({
      threshold: 0.5,
      once: false,
    });

    // eslint-disable-next-line no-unused-vars
    const type = new Typed('.word', {
      strings: [
        'Software Developer.',
        'Dentist',
        'Physician Assistant',
        'Veterian',
        'Therapist',
        'Fiancial Manager',
        'Pilot',
        'MRI Technologist',
        'Plumber',
        'HR Specialist',
      ],
      shuffle: true,
      typeSpeed: 60,
      backSpeed: 30,
      showCursor: true,
      attr: 'placeholder',
      loop: true,
    });

    // First Section animation
    this.createIntersectObserver(
      () => {
        this.isSecond = false;
        this.isFirst = true;

        this.targetSection = '#secondSection';
        this.sectionName = '';
      },
      {
        targets: '.cover-color',
        width: '0%',
        easing: 'easeInOutQuad',
        delay: '300',
      },
      { threshold: 0.6 },
    ).observe(document.querySelector('#firstSection'));

    // Second Section animation
    this.createIntersectObserver(
      () => {
        this.isFirst = false;
        this.isSecond = true;
        this.isThird = false;

        this.googleFlg = false;
        this.appleFlg = false;
        this.colaFlg = false;
        this.nikeFlg = false;
        this.paypalFlg = false;

        this.targetSection = '#thirdSection';
        this.sectionName = 'FIND';
      },
      {
        targets: '.cover-color',
        width: '30%',
      },
      { threshold: 0.6 },
    ).observe(document.querySelector('#secondSection'));

    // Third Section animation
    this.createIntersectObserver(
      () => {
        this.isSecond = false;
        this.isThird = true;
        this.isFourth = false;

        this.targetSection = '#fourthSection';
        this.sectionName = '';
      },
      {
        targets: '.cover-color',
        width: '100%',
      },
      { threshold: 0.6 },
    ).observe(document.querySelector('#thirdSection'));

    // Fourth Section animation
    this.createIntersectObserver(
      () => {
        this.isThird = false;
        this.isFourth = true;
        this.isFifth = false;

        this.googleFlg = false;
        this.appleFlg = false;
        this.colaFlg = false;
        this.nikeFlg = false;
        this.paypalFlg = false;

        this.targetSection = '#fifthSection';
        this.sectionName = 'DIVERSE';
      },
      {
        targets: '.cover-color',
        width: '70%',
      },
      { threshold: 0.6 },
    ).observe(document.querySelector('#fourthSection'));

    // Fifth Section animation
    this.createIntersectObserver(
      () => {
        this.isFourth = false;
        this.isFifth = true;
        this.isSixth = false;
        this.btnJoinFlg = false;

        this.googleFlg = false;
        this.appleFlg = false;
        this.colaFlg = false;
        this.nikeFlg = false;
        this.paypalFlg = false;

        this.targetSection = '#sixthSection';
        this.sectionName = 'MANAGE';
      },
      {
        targets: '.cover-color',
        width: '30%',
      },
      { threshold: 0.6 },
    ).observe(document.querySelector('#fifthSection'));

    // Sixth Section animation
    this.createIntersectObserver(
      () => {
        this.isFifth = false;
        this.isSixth = true;
        this.isSeventh = false;

        this.googleFlg = false;
        this.appleFlg = false;
        this.colaFlg = false;
        this.nikeFlg = false;
        this.paypalFlg = false;

        this.targetSection = '#firstSection';
        this.sectionName = '';
      },
      {
        targets: '.cover-color',
        width: '0%',
      },
      { threshold: 0.6 },
    ).observe(document.querySelector('#sixthSection'));

    this.getInitJobs().then(() => {
      this.jobResults = this.initJobsList;
    });
  },

  updated() {
    this.createIntersectObserver(
      () => {
        Anime({
          targets: '.dot2 img',
          translateY: () => '10vw',
          translateX: () => '-25vw',
          scale: (el, i, l) => l - i + 6,
          duration: () => '1800',
          delay: () => '100',
        });

        Anime({
          targets: '.dot3 img',
          translateY: () => '17vw',
          scale: (el, i, l) => l - i + 6,
          duration: () => '1800',
          delay: () => '100',
        });

        Anime({
          targets: '.dot4 img',
          translateY: () => '10vw',
          translateX: () => '25vw',
          scale: (el, i, l) => l - i + 6,
          duration: () => '1800',
          delay: () => '100',
        });

        Anime({
          targets: '.dot5 img',
          translateY: () => '-10vw',
          translateX: () => '28vw',
          scale: (el, i, l) => l - i + 6,
          duration: () => '1800',
          delay: () => '100',
        });
      },
      {
        targets: '.dot1 img',
        translateY: () => '-10vw',
        translateX: () => '-28vw',
        scale: (el, i, l) => l - i + 6,
        duration: () => '1800',
        delay: () => '100',
      },
      { threshold: 0.7 },
    ).observe(document.querySelector('#thirdSection'));
  },

  methods: {
    ...mapActions('Welcome', ['getInitJobs']),
    handleRoutingSelection(routeName) {
      this.$router.push({ name: routeName });
      window.scrollTo(0, 0);
    },
    createIntersectObserver(callback, animateOption, intersectOption) {
      return new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          callback();
          Anime(animateOption);
        }
      }, intersectOption);
    },
    handleSearchByName(event) {
      event.preventDefault();
      this.$router.push({
        name: 'jobs',
        query: {
          limit: 10,
          page: 0,
          jobName: this.jobSeachValue,
        },
      });
      window.scrollTo(0, 0);
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

      btnJoinFlg: false,

      targetSection: '',
      sectionName: '',

      jobResults: [],
      jobSeachValue: '',
    };
  },
};
</script>

<style lang="scss">
@import "../../../src/assets/scss/Welcome/welcome.scss";
@import "../../../node_modules/sal.js/dist/sal.css";
</style>
