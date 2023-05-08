<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-white font-bold">
      <div
        class="flex flex-nowrap h-full border-b border-solid border-brand-gray-1 px-8"
      >
        <a :href="url" class="flex h-full items-center text-xl font-bold">{{
          company
        }}</a>
        <nav class="ml-12 h-full" v-for="item of menuItems">
          <ul class="flex h-full list-none">
            <li class="h-full ml-9">
              <a href="" class="flex h-full items-center py-2.5">
                {{ item }}
              </a>
            </li>
          </ul>
        </nav>
        <div class="ml-auto flex h-full items-center">
          <profile-image v-if="isLoggedIn" />
          <action-button v-else @:click="loginUser" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import ActionButton from "@/components/ActionButton.vue";
import ProfileImage from "@/components/ProfileImage.vue";
import { ref } from "vue";
export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
  },
  methods: {},
  setup(props) {
    let isLoggedIn = ref(false);
    const loginUser = () => {
        isLoggedIn.value = true
    }
    return {
      company: "Developer Careers",
      author: {
        firstName: "Benjamin",
        lastName: "Vo",
      },
      url: "https://careers.google.com",
      menuItems: [
        "Teams",
        "Location",
        "Life at Ben Corp",
        "How We hire",
        "Students",
        "Jobs",
      ],
      isLoggedIn,
      loginUser
    };
  },
};
</script>

<style lang="scss" scoped></style>
