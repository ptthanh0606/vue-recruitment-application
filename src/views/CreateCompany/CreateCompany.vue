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
                  class="remove-branch-label"
                  v-if="index === addressBranches.length - 1"
                  @click.prevent="handleRemoveBranchInput(index)"
                >Remove</a>
                <a
                  href
                  class="add-more-label"
                  v-if="index === addressBranches.length - 1"
                  @click.prevent="handleAddMoreBranchInput(index + 1)"
                >Add more</a>
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
      <div class="rgb-bar"></div>
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
        window.scrollTo(0, 0);
      });
    },
    handleAddMoreBranchInput(index) {
      this.addressBranches.push(index);
    },
    handleRemoveBranchInput(index) {
      this.addressBranches.pop(index);
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/CreateCompany/CreateCompany.scss";
</style>
