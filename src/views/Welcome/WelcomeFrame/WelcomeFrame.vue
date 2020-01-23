<template>
<div class="welcome-frame-container">
  <navigation-bar></navigation-bar>
  <cover-utils></cover-utils>
</div>
</template>

<script>
import NavigationBar from '../../NavigationBar/NavBar.vue';
import CoverUtils from '../../../components/CoverUtils/CoverUtils.vue';

export default {
  name: 'welcome-frame',
  components: {
    'navigation-bar': NavigationBar,
    'cover-utils': CoverUtils,
  },
};
</script>
