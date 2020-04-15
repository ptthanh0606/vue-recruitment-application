<template>
  <!-- eslint-disable -->
  <div>
    <div class="rgb-bar"></div>
    <footer class="footer">
      <div class="social-wrapper">
        <a href="https://www.facebook.com/" target="_blank">
          <svg id="facebook-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.661 29.321">
            <path
              data-name="Path 520"
              class="cls-1"
              d="M16.493,10.079V6.414a1.833,1.833,0,0,1,1.833-1.833h1.833V0H16.493A5.5,5.5,0,0,0,11,5.5v4.581H7.33v4.581H11V29.321h5.5V14.661h3.665l1.833-4.581Z"
              transform="translate(-7.33)"
            />
          </svg>
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <svg id="instagram-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.861 28.861">
            <path
              data-name="Path 522"
              d="M24.633,0H4.228A4.233,4.233,0,0,0,0,4.228V24.633a4.233,4.233,0,0,0,4.228,4.228H24.633a4.233,4.233,0,0,0,4.228-4.228V4.228A4.233,4.233,0,0,0,24.633,0ZM14.487,21.984a7.61,7.61,0,1,1,7.61-7.61A7.618,7.618,0,0,1,14.487,21.984ZM22.942,8.455a2.537,2.537,0,1,1,2.537-2.537A2.539,2.539,0,0,1,22.942,8.455Zm0,0"
            />
            <path
              data-name="Path 523"
              d="M392.846,90a.846.846,0,1,0,.846.846A.846.846,0,0,0,392.846,90Zm0,0"
              transform="translate(-369.904 -84.927)"
            />
            <path
              data-name="Path 524"
              d="M157.919,150a5.919,5.919,0,1,0,5.919,5.919A5.926,5.926,0,0,0,157.919,150Zm0,0"
              transform="translate(-143.432 -141.545)"
            />
          </svg>
        </a>
        <a href="https://twitter.com/" target="_blank">
          <svg
            id="twitter-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="30.853"
            height="25.068"
            viewBox="0 0 30.853 25.068"
          >
            <path
              data-name="Path 525"
              d="M30.853,50.968a13.188,13.188,0,0,1-3.645,1,6.29,6.29,0,0,0,2.783-3.5A12.641,12.641,0,0,1,25.98,50a6.325,6.325,0,0,0-10.941,4.325,6.513,6.513,0,0,0,.147,1.442A17.9,17.9,0,0,1,2.148,49.153a6.327,6.327,0,0,0,1.944,8.454,6.247,6.247,0,0,1-2.858-.779V56.9A6.354,6.354,0,0,0,6.3,63.112a6.313,6.313,0,0,1-1.658.208,5.593,5.593,0,0,1-1.2-.108,6.385,6.385,0,0,0,5.91,4.406,12.709,12.709,0,0,1-7.843,2.7A11.85,11.85,0,0,1,0,70.23a17.807,17.807,0,0,0,9.7,2.839c11.639,0,18-9.642,18-18,0-.28-.01-.55-.023-.818A12.619,12.619,0,0,0,30.853,50.968Z"
              transform="translate(0 -48)"
            />
          </svg>
        </a>
      </div>
      <div class="copyright">© Phan Thong Thanh, Ly Phuoc Hiep - SE1304 - SWD101 Project</div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import '../../assets/scss/_globalVariable.scss';

.rgb-bar {
  width: 100%;
  height: 5px;
  animation: 10s rgb-bar infinite;
}

footer {
  position: relative;
  z-index: 0;
  text-align: center;
  padding: 90px 0;
  overflow: hidden;
  background-color: #3d3d3d;

  .social-wrapper {
    width: 100%;
    max-width: 150px;
    margin: 0 auto;
    padding: 16px 0;

    display: flex;
    justify-content: space-between;
    position: relative;

    #facebook-icon {
      width: 13px;
      fill: #b1b1b1;
      transition: all ease-in-out 1s;
    }

    #instagram-icon {
      width: 23px;
      fill: #b1b1b1;
      transition: all ease-in-out 1s;
    }

    #twitter-icon {
      width: 25px;
      fill: #b1b1b1;
      transition: all ease-in-out 1s;
    }

    svg:hover {
      cursor: pointer;
      fill: #f1f1f1;
    }
  }

  .copyright {
    width: 100%;
    margin: 0 auto;

    font-size: 12px;
    color: #b1b1b1;

    @media only screen and (max-width: 769px) {
      font-size: 12px;
    }
  }
}
</style>
