<template>
  <img :src="imageLink" class="h-8 w-8 rounded-3xl object-contain" alt="user profile image" />
</template>

<script>
export default {
  name: "ProfileImage",
  data() {
    return {
      imageLink:
        "http:/www.pngitem.com/pimgs/m/487-4876417_link-head-png-toon-link-face-png-transparent.png",
    };
  },
};
</script>
