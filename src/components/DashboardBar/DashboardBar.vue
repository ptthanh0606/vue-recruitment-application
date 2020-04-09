<template>
  <!-- eslint-disable object-shorthand -->
  <!-- eslint-disable max-len -->
  <!-- eslint-disable prefer-const -->
  <!-- eslint-disable no-unused-vars -->
  <div class="dashboard-bar-container">
    <img src="https://i.imgur.com/nb30rLD.jpg" alt class="userImage" />
    <div class="freq-function-button">
      <div
        class="func-button main-dashboard"
        :class="{'clicked' : isMainClicked}"
        @click="handleRoute('main')"
      >
        <svg class="icon main-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.773 18.773">
          <g transform="translate(0)">
            <path
              id="Path_149"
              data-name="Path 149"
              class="cls-1"
              d="M7.235,6.258H1.369A1.37,1.37,0,0,1,0,4.889V1.369A1.37,1.37,0,0,1,1.369,0H7.235A1.37,1.37,0,0,1,8.6,1.369v3.52A1.37,1.37,0,0,1,7.235,6.258ZM1.369,1.173a.2.2,0,0,0-.2.2v3.52a.2.2,0,0,0,.2.2H7.235a.2.2,0,0,0,.2-.2V1.369a.2.2,0,0,0-.2-.2Zm0,0"
            />
            <path
              id="Path_150"
              data-name="Path 150"
              class="cls-1"
              d="M7.235,224.283H1.369A1.37,1.37,0,0,1,0,222.914V214.7a1.37,1.37,0,0,1,1.369-1.369H7.235A1.37,1.37,0,0,1,8.6,214.7v8.213A1.37,1.37,0,0,1,7.235,224.283Zm-5.867-9.778a.2.2,0,0,0-.2.2v8.213a.2.2,0,0,0,.2.2H7.235a.2.2,0,0,0,.2-.2V214.7a.2.2,0,0,0-.2-.2Zm0,0"
              transform="translate(0 -205.51)"
            />
            <path
              id="Path_151"
              data-name="Path 151"
              class="cls-1"
              d="M284.568,347.59H278.7a1.37,1.37,0,0,1-1.369-1.369V342.7a1.37,1.37,0,0,1,1.369-1.369h5.867a1.37,1.37,0,0,1,1.369,1.369v3.52A1.37,1.37,0,0,1,284.568,347.59Zm-5.867-5.084a.2.2,0,0,0-.2.2v3.52a.2.2,0,0,0,.2.2h5.867a.2.2,0,0,0,.2-.2V342.7a.2.2,0,0,0-.2-.2Zm0,0"
              transform="translate(-267.163 -328.817)"
            />
            <path
              id="Path_152"
              data-name="Path 152"
              class="cls-1"
              d="M284.568,10.951H278.7a1.37,1.37,0,0,1-1.369-1.369V1.369A1.37,1.37,0,0,1,278.7,0h5.867a1.37,1.37,0,0,1,1.369,1.369V9.582A1.37,1.37,0,0,1,284.568,10.951ZM278.7,1.173a.2.2,0,0,0-.2.2V9.582a.2.2,0,0,0,.2.2h5.867a.2.2,0,0,0,.2-.2V1.369a.2.2,0,0,0-.2-.2Zm0,0"
              transform="translate(-267.163)"
            />
          </g>
        </svg>
      </div>
      <div
        class="func-button posts-dashboard"
        :class="{'clicked' : isPostClicked}"
        @click="handleRoute('posts')"
      >
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.7 20.83">
          <path
            id="portfolio"
            class="cls-1"
            d="M23.01,2.777h-6.3V2.083A2.085,2.085,0,0,0,14.627,0H9.072A2.085,2.085,0,0,0,6.99,2.083v.694H.694A.7.7,0,0,0,0,3.472V18.747A2.085,2.085,0,0,0,2.083,20.83H21.617A2.085,2.085,0,0,0,23.7,18.747V3.484a.674.674,0,0,0-.69-.706ZM8.378,2.083a.7.7,0,0,1,.694-.694h5.555a.7.7,0,0,1,.694.694v.694H8.378ZM22.042,4.166l-2.156,6.468a.693.693,0,0,1-.659.475H15.321v-.694a.694.694,0,0,0-.694-.694H9.072a.694.694,0,0,0-.694.694v.694H4.472a.693.693,0,0,1-.659-.475L1.658,4.166Zm-8.109,6.943V12.5H9.767V11.109Zm8.378,7.638a.7.7,0,0,1-.694.694H2.083a.7.7,0,0,1-.694-.694v-11L2.5,11.074A2.08,2.08,0,0,0,4.472,12.5H8.378v.694a.694.694,0,0,0,.694.694h5.555a.694.694,0,0,0,.694-.694V12.5h3.906A2.08,2.08,0,0,0,21.2,11.074L22.311,7.75Zm0,0"
            transform="translate(0 0)"
          />
        </svg>
      </div>
      <div
        class="func-button candidates-dashboard"
        :class="{'clicked' : isCandClicked}"
        @click="handleRoute('candidates')"
      >
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.046 25">
          <path
            id="resume"
            d="M75.714,0H61.507a2.421,2.421,0,0,0-2.418,2.418c0,17.983-.02,16.9.042,17.082a.811.811,0,0,0,.193.314c.05.05,4.946,4.952,5.018,5.007.319.245-.171.168,11.373.168a2.421,2.421,0,0,0,2.418-2.418V2.418A2.421,2.421,0,0,0,75.714,0ZM64.026,22.236l-2.185-2.185h2.185Zm12.494.334a.807.807,0,0,1-.806.806H65.638V19.245a.806.806,0,0,0-.806-.806H60.7V2.418a.807.807,0,0,1,.806-.806H75.714a.807.807,0,0,1,.806.806Zm-2.569-6.3a.806.806,0,0,1-.806.806H64.026a.806.806,0,1,1,0-1.612h9.119A.806.806,0,0,1,73.951,16.273Zm0,4.131a.806.806,0,0,1-.806.806H67.956a.806.806,0,1,1,0-1.612h5.189A.806.806,0,0,1,73.951,20.4ZM68.578,8.468a2.713,2.713,0,1,0-2.713-2.713A2.716,2.716,0,0,0,68.578,8.468Zm0-3.814a1.1,1.1,0,1,1-1.1,1.1,1.1,1.1,0,0,1,1.1-1.1ZM64.5,12.416V11.311A1.771,1.771,0,0,1,65.544,9.7l1.278-.571c.214-.1.064-.07,3.164-.07.227,0,.219.021,1.607.641a1.771,1.771,0,0,1,1.048,1.615v1.105a.806.806,0,0,1-1.612,0V11.311a.157.157,0,0,0-.093-.143l-1.122-.5H67.322l-1.122.5a.157.157,0,0,0-.093.143v1.105a.806.806,0,0,1-1.612,0Z"
            transform="translate(-59.086)"
          />
        </svg>
      </div>
    </div>
    <div class="home-function-button" :class="{'clicked' : isClicked}" @click="handleRoute('home')">
      <div class="func-button home-dashboard">
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.331 19.324">
          <path
            id="Path_148"
            data-name="Path 148"
            class="cls-1"
            d="M19.989,21.261,18.272,19.7V14.507a.6.6,0,0,0-.6-.6H13.54a.6.6,0,0,0-.6.6v.333l-2.074-1.89a1.038,1.038,0,0,0-1.4,0L.342,21.261a1.043,1.043,0,0,0,.7,1.813H2.5V31.4a.6.6,0,0,0,.6.6h5a.6.6,0,0,0,.6-.6V26.345h2.938V31.4a.6.6,0,0,0,.6.6h5a.6.6,0,0,0,.6-.6V23.074h1.457a1.043,1.043,0,0,0,.7-1.813Zm-2.757.617a.6.6,0,0,0-.6.6V30.8h-3.8V25.747a.6.6,0,0,0-.6-.6H8.1a.6.6,0,0,0-.6.6V30.8H3.7V22.476a.6.6,0,0,0-.6-.6H1.439l8.726-7.951,2.972,2.708a.6.6,0,0,0,1-.442V15.1h2.939V19.96a.6.6,0,0,0,.2.442l1.62,1.476H17.232Z"
            transform="translate(0 -12.676)"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dashboard-bar',
  methods: {
    handleRoute(routeName) {
      switch (routeName) {
        case 'main':
          this.isMainClicked = true;
          this.isPostClicked = false;
          this.isCandClicked = false;
          this.$router.push({ name: 'main' });
          break;
        case 'posts':
          this.isMainClicked = false;
          this.isPostClicked = true;
          this.isCandClicked = false;
          this.$router.push({ name: 'posts' });
          break;
        case 'candidates':
          this.isMainClicked = false;
          this.isPostClicked = false;
          this.isCandClicked = true;
          this.$router.push({ name: 'candidates' });
          break;
        case 'home':
          this.$router.push({ name: 'welcome' });
          break;
        default:
          this.$router.push({ name: '' });
      }
    },
  },
  mounted() {
    this.$router.push({ name: 'main' });
  },
  data() {
    return {
      isMainClicked: true,
      isPostClicked: false,
      isCandClicked: false,
    };
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/_globalVariable.scss";

.dashboard-bar-container {
  position: fixed;
  width: 80px;
  height: 100%;
  background-color: $backgroundColor;
  border-top-right-radius: 30px;
  box-shadow: 4px 4px 10px #00000031;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .userImage {
    width: 50px;
    height: 50px;
    border-radius: 30px;
    margin-top: 2rem;
  }

  .freq-function-button {
    display: flex;
    width: 100%;
    height: 190px;
    flex-direction: column;
    justify-content: space-between;
  }

  .func-button {
    width: 55px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0 10px 10px 0;
    background-color: $backgroundColor;
    box-shadow: 3px 3px 5px #0000004d, -3px -3px 5px #ffffffd5;
    transition: all ease-in-out 300ms;

    .icon {
      width: 20px;
      height: 20px;
      fill: $fontColor;
    }

    &:hover {
      cursor: pointer;
    }
  }

  .clicked {
    width: 80px;
    border-radius: 0;
    box-shadow: 0px 3px 5px #0000004d, -3px -3px 5px #ffffffd5;

    animation: rgbFuncButtonBorder infinite 15s;

    @keyframes rgbFuncButtonBorder {
      0% {
        border-right: 5px solid #adadad;
      }
      25% {
        border-right: 5px solid #ff00f2;
      }
      50% {
        border-right: 5px solid #02d1c7;
      }
      75% {
        border-right: 5px solid #ff00f2;
      }
      100% {
        border-right: 5px solid #adadad;
      }
    }
  }

  .home-function-button {
    width: 100%;
    .home-dashboard {
      margin-bottom: 2rem;
      background-color: #707070;

      .icon {
        fill: white;
      }
    }
  }
}
</style>
