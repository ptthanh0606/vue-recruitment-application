<template>
  <div class="candidate-post-preview">
    <div class="header-title">
      <span class="candidate-id-label">#11345</span>
      <span class="candidate-date-uploaded">Feb, 2 12:00 AM</span>
    </div>
    <div class="post-content">
      <h3 class="post-title">ReactJS Developer</h3>
    </div>
    <div class="footer-desc">
      <div class="candidate-wrapper">
        <img src="#" class="candidate-image" />
        <span class="candidate-name">Phan Thong Thanh</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'candidate-post-preview',
};
</script>

<style lang="scss">
@import "../../assets/scss/_globalVariable.scss";

.candidate-post-preview {
  border-radius: 15px;
  box-shadow: 4px 4px 8px #0000003b, -4px -4px 10px #ffffffbb;
  padding: 1.7rem;
  transition: all ease-in-out 500ms;
  width: 100%;

  .header-title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: $subfontColor;
  }

  .post-content {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }

  .footer-desc {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    font-size: 14px;

    .candidate-wrapper {
      display: flex;

      .candidate-image {
        margin-right: 10px;
      }
    }

    .view-cv-button {
      font-weight: bold;
      animation: rgb-label infinite 15s;
      color: #009fa5;
    }
  }
}
</style>
