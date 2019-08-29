<template>
  <div class="container mt-5">
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Tombol from "./components/Tombol";
import Inputan from "./components/Inputan"
import Navbar from "./components/Navbar"

export default {
  components: {
    Tombol,
    Inputan,
    Navbar
  },
  // data() {
  //   return {};
  // },
  methods: {
    // say() {
    //   window.alert("Its Britney");
    // }
  }
};
</script>