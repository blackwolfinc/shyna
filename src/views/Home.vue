<template>
  <div class="home">
    <!-- Header Section Begin -->
    <HdShyna />
    <CsShyna />
    <BnShyna />
    <Instashyna />
    <LogoShyna />
    <FootShyna />
    <!-- Hero Section Begin -->

    <!-- Hero Section End -->

    <!-- Header End -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import HdShyna from "@/components/HdShyna.vue";
import CsShyna from "@/components/CsShyna.vue";
import BnShyna from "@/components/BnShyna.vue";
import Instashyna from "@/components/Instashyna.vue";
import LogoShyna from "@/components/LogoShyna.vue";
import FootShyna from "@/components/FootShyna.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld,
    HdShyna,
    CsShyna,
    BnShyna,
    Instashyna,
    LogoShyna,
    FootShyna,
  },
};
</script>
