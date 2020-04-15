<template>
  <!-- eslint-disable object-shorthand -->
  <!-- eslint-disable max-len -->
  <!-- eslint-disable prefer-const -->
  <!-- eslint-disable no-unused-vars -->
  <div>
    <navigation-frame></navigation-frame>
    <div class="edit-info-container">
      <div class="center-wrapper">
        <div class="left-col">
          <div class="user-info-wrapper">
            <div class="user-avatar">
              <a href="#">
                <img src="https://i.imgur.com/nb30rLD.jpg" height="50px" width="80px" alt />
              </a>
            </div>
            <a href="#" class="user-name">Phan Thong Thanh</a>
            <span class="user-email">phanthongthanh0606@gmail.com</span>
          </div>
          <a href @click="handleChangeImage" class="edit-info-label">Change your profile picture</a>
          <div class="log-out-wrapper">
            <svg id="log-out-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 19">
              <path
                data-name="Path 2"
                class="cls-1"
                d="M9.024,17.395H2.256a.752.752,0,0,1-.752-.752V3.106a.752.752,0,0,1,.752-.752H9.024a.752.752,0,0,0,0-1.5H2.256A2.259,2.259,0,0,0,0,3.106V16.643A2.259,2.259,0,0,0,2.256,18.9H9.024a.752.752,0,1,0,0-1.5Z"
              />
              <path
                data-name="Path 1"
                class="cls-1"
                d="M181.969,111.893l-4.572-4.512a.752.752,0,1,0-1.056,1.071l3.268,3.225h-8.756a.752.752,0,0,0,0,1.5h8.756l-3.268,3.225a.752.752,0,1,0,1.056,1.071l4.572-4.512a.752.752,0,0,0,0-1.071Z"
                transform="translate(-164.084 -102.554)"
              />
            </svg>
            <a href @click="handleLogout">Log out</a>
          </div>
        </div>
        <div class="middle-col">
          <h1 class="change-info-title">Change your info</h1>
          <form action="#">
            <form @submit.prevent="handleCreateAccount">
              <div class="full-name-input-container">
                <input
                  class="userinput firstName"
                  type="text"
                  placeholder="First name"
                  v-model="userFirstName"
                  required
                />
                <input
                  class="userinput lastName"
                  type="text"
                  placeholder="Last name"
                  v-model="userLastName"
                  required
                />
              </div>
              <input
                class="userinput userName"
                type="text"
                placeholder="Choose a username"
                v-model="userName"
                required
              />
              <input
                class="userinput email"
                type="email"
                placeholder="Email"
                v-model="userEmail"
                required
              />
              <input
                class="userinput password"
                type="password"
                placeholder="New Password"
                v-model="userPassword"
                required
              />
              <input
                class="userinput password"
                type="password"
                placeholder="Confirm Password"
                v-model="userPassword"
                required
              />
              <input
                class="userinput phoneNumber"
                type="tel"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                title="Example: 0765413668"
                placeholder="Phone number"
                v-model="phoneNumber"
                required
              />
              <div class="birthday-input-container">
                <span class="birthday-label">Your birthday</span>
                <date-picker type="date" placeholder="Pick a day" v-model="inputDate" clearable></date-picker>
              </div>
              <div class="buttons-wrapper">
                <button type="submit" class="apply-button">Confirm update info</button>
                <button type="submit" class="clear-button">Clear all</button>
              </div>
            </form>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { DatePicker } from 'element-ui';
import NavigationFrame from '../../components/NavigationFrame/NavigationFrame.vue';

export default {
  name: 'edit-info-container',
  components: {
    'date-picker': DatePicker,
    'navigation-frame': NavigationFrame,
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/_globalVariable.scss";

.edit-info-container {
  height: 100vh;
  padding-top: 5rem;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;

  .center-wrapper {
    width: 100%;
    max-width: 1350px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;

    .left-col {
      position: sticky;
      top: 5rem;
      width: 240px;
      height: 80vh;

      @media only screen and (max-width: 769px) {
        width: 100%;
      }

      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .user-info-wrapper {
        margin-top: 3rem;
        height: 130px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .user-avatar {
          width: 3.5rem;
          height: 3.5rem;
          overflow: hidden;
          border-radius: 30px;
          margin-bottom: 2rem;
        }

        .user-name {
          width: fit-content;
          color: $fontColor;
          font-size: 18px;
          font-weight: bolder;
        }

        .user-email {
          color: $subfontColor;
          font-weight: normal;
          font-size: 14px;
        }
      }

      .edit-info-label {
        display: block;
        font-size: 14px;
        font-weight: bold;
        margin-top: 1rem;
        color: $pColorYellow;
      }

      .log-out-wrapper {
        margin-top: auto;
        display: flex;
        align-items: center;

        #log-out-icon {
          width: 18px;
          margin-right: 10px;
          fill: #406aa8;
        }

        a {
          color: #406aa8;
        }
      }
    }

    .middle-col {
      padding: 3rem 32px;
      width: 800px;
      color: $fontColor;

      @media only screen and (max-width: 769px) {
        padding: 0;
      }

      .change-info-title {
        color: $titleFontColor;
        margin-bottom: 2rem;
      }

      form {
        .userinput {
          width: 100%;
          border: none;
          background-color: transparent;
          border-radius: 10px;
          border: 1.5px solid #adadad;
          outline: none;
          padding: 0.6rem;
          margin-top: 1.5rem;
          transition: border-bottom ease-in-out 0.2s;

          &:focus {
            animation: rgb-border infinite 6s;
          }
        }

        .full-name-input-container {
          width: 100%;
          display: flex;
          justify-content: space-between;

          .userinput {
            width: 48%;
          }
        }

        .birthday-input-container {
          width: 100%;
          margin-top: 3rem;
          display: flex;
          align-items: center;

          .birthday-label {
            display: block;
            font-weight: bold;
            color: $fontColor;
            margin-right: 2rem;
          }

          ::placeholder {
            color: $fontColor;
          }

          .el-input {
            flex: 1;
          }

          .el-input__inner {
            border-radius: 10px;
            background-color: $backgroundColor;
            box-shadow: inset 8px 8px 8px rgba(0, 0, 0, 0.137),
              inset -8px -8px 8px rgba(255, 255, 255, 0.596);
          }

          .el-input__prefix {
            color: $iconColor;
          }
        }

        .buttons-wrapper {
          width: 40%;
          display: flex;
          justify-content: space-between;

          button {
            margin-top: 2rem;
            height: 2.5rem;
            border: none;
            border-radius: 10px;
            color: $backgroundColor;
            font-weight: bolder;
            box-shadow: 4px 4px 5px #00000046, -4px -4px 5px #ffffff;

            &:focus {
              outline: none;
            }

            &:hover {
              cursor: pointer;
            }
          }
          .apply-button {
            width: 60%;
            background-color: #43a2a7;
          }
          .clear-button {
            width: 30%;
            background-color: $backgroundColor;
            color: $fontColor;
          }
        }
      }
    }
  }
}
</style>
