<template>
  <!-- eslint-disable max-len -->
  <div class="footer-frame-container">
    <div class="wrapper">
      <svg id="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.46 100.168">
        <g transform="translate(-148 -568)">
          <a href="https://www.facebook.com/">
            <path
              id="twitter-icon"
              class="cls-1"
              d="M16.493,10.079V6.414a1.833,1.833,0,0,1,1.833-1.833h1.833V0H16.493A5.5,5.5,0,0,0,11,5.5v4.581H7.33v4.581H11V29.321h5.5V14.661h3.665l1.833-4.581Z"
              transform="translate(145.5 627.763)"
            />
          </a>
          <a href="https://www.instagram.com/">
            <g id="instagram" transform="translate(148 590.237)">
              <path
                id="Path_522"
                data-name="Path 522"
                d="M20.877,0H3.583A3.587,3.587,0,0,0,0,3.583V20.877A3.587,3.587,0,0,0,3.583,24.46H20.877a3.587,3.587,0,0,0,3.583-3.583V3.583A3.587,3.587,0,0,0,20.877,0Zm-8.6,18.632a6.449,6.449,0,1,1,6.449-6.449A6.457,6.457,0,0,1,12.278,18.632ZM19.444,7.166a2.15,2.15,0,1,1,2.15-2.15A2.152,2.152,0,0,1,19.444,7.166Zm0,0"
              />
              <path
                id="Path_523"
                data-name="Path 523"
                d="M392.717,90a.717.717,0,1,0,.717.717A.717.717,0,0,0,392.717,90Zm0,0"
                transform="translate(-373.273 -85.7)"
              />
              <path
                id="Path_524"
                data-name="Path 524"
                d="M157.016,150a5.016,5.016,0,1,0,5.016,5.016A5.022,5.022,0,0,0,157.016,150Zm0,0"
                transform="translate(-144.738 -142.834)"
              />
            </g>
          </a>
          <a href="https://www.twitter.com/">
            <path
              id="twitter-icon"
              d="M24.4,50.347a10.427,10.427,0,0,1-2.882.79,4.973,4.973,0,0,0,2.2-2.764,9.995,9.995,0,0,1-3.171,1.211A5,5,0,0,0,11.891,53a5.15,5.15,0,0,0,.116,1.14A14.156,14.156,0,0,1,1.7,48.912,5,5,0,0,0,3.235,55.6a4.939,4.939,0,0,1-2.26-.616v.055a5.024,5.024,0,0,0,4.007,4.914,4.992,4.992,0,0,1-1.311.165,4.422,4.422,0,0,1-.947-.085A5.049,5.049,0,0,0,7.4,63.512a10.049,10.049,0,0,1-6.2,2.133A9.37,9.37,0,0,1,0,65.577a14.08,14.08,0,0,0,7.672,2.244A14.136,14.136,0,0,0,21.907,53.59c0-.221-.008-.435-.018-.646A9.977,9.977,0,0,0,24.4,50.347Z"
              transform="translate(148.065 506.916)"
            />
          </a>
        </g>
      </svg>

      <a id="next-button" :href="targetSection">
        <svg id="next-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.678 93.243">
          <g transform="translate(17.495 20) rotate(90)">
            <path
              id="Path_322"
              data-name="Path 322"
              class="cls-1"
              d="M15.724,45.838v5.7h-84.36c-.762,0-1.364-.041-1.364.365v1.17c0,.5.6.425,1.364.425h84.36v6.015l7.52-6.995Z"
              transform="translate(50 -42.022)"
            />
          </g>
        </svg>
      </a>
    </div>
    <!--  -->
  </div>
</template>

<script>
export default {
  name: 'coverUtils',
  props: ['targetSection'],
};
</script>

<style lang="scss">
@import "../../assets/scss/FooterFrame/FooterFrame.scss";
</style>
