<template>
  <header class="w-full text-sm">
    <div class="fixed left-0 top-0 h-16 w-full bg-white font-bold">
      <div
        class="flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8"
      >
        <a :href="url" class="flex h-full items-center text-xl font-bold">{{
          company
        }}</a>
        <nav v-for="(item, i) of menuItems" :key="i" class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li class="ml-9 h-full">
              <a href="" class="flex h-full items-center py-2.5">
                {{ item }}
              </a>
            </li>
          </ul>
        </nav>
        <div class="ml-auto flex h-full items-center">
          <ProfileImage v-if="isLoggedIn" />
          <ActionButton v-else text="Sign In" @:click="loginUser" />
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
  setup(props) {
    let isLoggedIn = ref(false);
    const loginUser = () => {
      isLoggedIn.value = true;
    };
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
      loginUser,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
