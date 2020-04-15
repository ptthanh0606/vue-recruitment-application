<template>
  <!-- eslint-disable object-shorthand -->
  <!-- eslint-disable max-len -->
  <!-- eslint-disable prefer-const -->
  <!-- eslint-disable no-unused-vars -->
  <div>
    <navigation-frame></navigation-frame>
    <div class="create-company-container">
      <div class="center-wrapper">
        <div class="middle-wrapper">
          <div class="create-company-form-wrapper">
            <h1 class="title">Before we start, provide us your organization info</h1>
            <form class="create-company-form" @submit.prevent="handleCreateCompany">
              <input
                class="userinput"
                type="email"
                placeholder="Orgranization email"
                v-model="companyEmail"
                required
              />
              <input
                class="userinput"
                type="text"
                placeholder="Organization name"
                v-model="companyName"
                required
              />
              <select
                name="address-dropdown"
                class="userinput address-dropdown"
                v-model="companyTypeID"
              >
                <option value disabled selected>What is your company specialty</option>
                <option
                  v-for="(type, index) in companyTypes"
                  :key="index"
                  :value="type.compTypeID"
                >{{type.compTypeName}}</option>
              </select>
              <input
                class="userinput"
                type="text"
                placeholder="Your website"
                v-model="companyWebsite"
                required
              />
              <div class="address-wrapper" v-for="(branch, index) in addressBranches" :key="index">
                <input
                  name="company-address"
                  class="userinput address-box"
                  type="text"
                  placeholder="Your address"
                  required
                />
                <select name="city-dropdown" class="userinput city-dropdown">
                  <option value disabled selected>Your city</option>
                  <option
                    v-for="(city, index) in cityList"
                    :key="index"
                    :value="city.id"
                  >{{city.name}}</option>
                </select>
                <a
                  href
                  class="add-more-label"
                  v-if="index === addressBranches.length - 1"
                  @click.prevent="handleAddMoreBranchInput(index + 1)"
                >Add more</a>
                <a
                  href
                  class="remove-branch-label"
                  v-else
                  @click.prevent="handleRemoveBranchInput(index)"
                >Remove</a>
              </div>
              <textarea
                name="create-desc"
                class="userinput input-create-desc"
                cols="30"
                rows="10"
                placeholder="About your company"
                v-model="companyDesc"
              ></textarea>
              <button class="btn-create-company" type="submit">Start recruiting</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <footer-page-component></footer-page-component>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

import NavigationFrame from '../../components/NavigationFrame/NavigationFrame.vue';
import FooterPageComponent from '../../components/FooterPageComponent/FooterPageComponent.vue';

export default {
  name: 'create-company',
  components: {
    'navigation-frame': NavigationFrame,
    'footer-page-component': FooterPageComponent,
  },
  computed: {
    ...mapState('DropdownDataStore', ['cityList', 'companyTypes']),
  },
  data() {
    return {
      companyEmail: '',
      companyName: '',
      companyTypeID: '',
      companyWebsite: '',
      companyDesc: '',
      // selectedCityID: '',
      // companyAddress: '',
      addressBranches: [1],
    };
  },
  async mounted() {
    window.scrollTo(0, 0);
    await this.initCity();
    await this.initCompanyTypes();
  },
  methods: {
    ...mapActions('CreateCompany', ['createCompany']),
    ...mapActions('DropdownDataStore', ['initCity', 'initCompanyTypes']),
    handleCreateCompany() {
      const cities = [];
      const addresses = [];
      const branches = [];

      const addressesNode = document.getElementsByName('company-address');
      addressesNode.forEach((node) => {
        addresses.push(node.value);
      });

      const citiesNode = document.getElementsByName('city-dropdown');
      citiesNode.forEach((node) => {
        cities.push(node.value);
      });

      cities.forEach((cityID, index) => {
        branches.push({
          address: addresses[index],
          cityID,
        });
      });

      this.createCompany({
        compEmail: this.companyEmail,
        compName: this.companyName,
        compDesc: this.companyDesc,
        compTypeID: this.companyTypeID,
        imageUrl: 'https://i.imgur.com/iVtNw0H.png',
        website: this.companyWebsite,
        addressBranches: branches,
      }).then(() => {
        this.$router.push({ name: 'employers' });
      });
    },
    handleAddMoreBranchInput(index) {
      this.addressBranches.push(index);
    },
    handleRemoveBranchInput() {},
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/_globalVariable.scss";

.create-company-container {
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

    .middle-wrapper {
      width: 50%;
      margin: 0 auto;
      height: 100%;
      padding: 1rem;

      @media only screen and (max-width: 969px) {
        width: 60%;
      }

      @media only screen and (max-width: 769px) {
        width: 100%;
        padding: 0rem 1rem;
      }

      display: flex;
      flex-direction: column;

      .create-company-form-wrapper {
        width: 100%;

        .title {
          text-align: center;
          color: $darkBlueGray;
          margin-bottom: 2rem;
          font-size: 1.5rem;
        }

        .create-company-form {
          margin-bottom: 2rem;

          .userinput {
            width: 100%;
            background-color: transparent;
            border-radius: 10px;
            border: 1.5px solid #adadad;
            outline: none;
            padding: 0.6rem;
            margin-bottom: 1rem;

            &:focus {
              animation: rgb-border infinite 6s;
            }
          }

          .address-wrapper {
            display: flex;
            justify-content: space-between;

            .address-box {
              width: 40%;
              margin-right: 16px;
            }

            .city-dropdown {
              flex: 1;
            }

            .add-more-label {
              width: 15%;
              line-height: 2.5em;
              text-align: center;
              font-weight: bold;
              color: #1aa7c0;
            }

            .remove-branch-label {
              width: 15%;
              line-height: 2.5em;
              text-align: center;
              font-weight: bold;
              color: #cf4747;
            }
          }

          .input-create-desc {
            height: 130px;
          }

          .btn-create-company {
            margin-top: 2rem;
            width: 100%;
            height: 2.8rem;
            background-color: $darkBlueGray;
            border: none;
            border-radius: 10px;
            color: $backgroundColor;
            font-weight: bolder;
            box-shadow: 3px 3px 7px #00000060, -3px -3px 7px #ffffffab;

            &:focus {
              outline: none;
            }

            &:hover {
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}
</style>
