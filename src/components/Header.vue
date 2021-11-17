<template lang="pug">
header.website_redesign_header
  .main_menu
    .website_redesign_logo
      button#burger.openbtn ☰
      span.website_redesign_logo_text
       | Website Redesign
      .meatball_circle
        span.meatball_dot
        span.meatball_dot
        span.meatball_dot
    .menu_items
      .item(v-for='item in items' :key='item' v-on:click='activeMenu' :class="{ active: item.toLowerCase() === $route.path.slice(1) }")
        router-link(:to='{path: item.toLowerCase()}')
          | {{ item }}
  .members
    .members_photo
      img(src='~@/assets/woman_1.jpg' alt='woman_1')
      img(src='~@/assets/woman_2.jpg' alt='woman_2')
      img(src='~@/assets/woman_3.jpg' alt='woman_3')
    button.members_share Share
    button.members_chat Chat
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  data() {
    return {
      items: [
        'Tasks',
        'Kanban',
        'Activity',
        'Calendar',
        'Files',
      ],
    };
  },
  methods: {
    activeMenu(event: any) {
      const current = document.getElementsByClassName('active');
      current[0].classList.remove('active');
      event.currentTarget.classList.add('active');
      console.log(this.$route.path);
    },
  },
});
</script>

<style lang="scss">
.website_redesign_header {
    display: flex;
    justify-content: left;
    width: 100%;
    height: 136px;
    background-color: white;
    align-items: center;
}

.main_menu {
    display: flex;
    flex-direction: column;
}

.website_redesign_logo {
    display: flex;
    margin-top: 40px;
    margin-left: 30px;
    align-items: center;
    justify-content: center;

    &_text {
      font-family: Helvetica, sans-serif;
      font-size: 32px;
      color: #131313;
      white-space: nowrap;
      display: flex;
      align-items: center;

      &::before {
        width: 40px;
        height: 40px;
        background-color: #ffc200;
        border-radius: 10px;
        background-image: url("~@/assets/Shapes@2x.png");
        content: "";
        background-size: 40px 40px;
        display: inline-block;
        margin-right: 15px;
    }
  }
}

.openbtn {
    display: none;
}

.meatball_circle {
    border-radius: 50%;
    width: 30px;
    height: 30px;
    background: #eaeaea;
    margin-left: 11px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.menu_items {
    margin-left: 30px;
    margin-top: 21px;
    display: flex;
    justify-content: space-between;
}

%active-shared {
  font-family: Helvetica, sans-serif;
    font-size: 16px;
    color: #696969;
    text-decoration: none;
    border-bottom-style: solid;
    border-color: #ffc200;
    padding-bottom: 12px;
}

.item {
    opacity: 0.7;
    font-family: Helvetica, sans-serif;
    font-size: 16px;
    cursor: pointer;

    a {
      text-decoration: none;
      color: #131313;
    }

    &:hover {
      @extend %active-shared;
    }
}

.active {
  @extend %active-shared;
}

.members {
    display: flex;
    margin-left: 471px;
    align-items: center;
    margin-bottom: 15px;

    &_photo {
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      img {
        width: 30px;
         height: 30px;
        border-radius: 50%;
         margin-left: 5px;
      }
    }

    &_share {
      margin-left: 15px;
      border-radius: 12px;
      border: none;
      text-decoration: none;
      height: 30px;
      width: 67px;
      cursor: pointer;
      font-family: Helvetica, sans-serif;
      font-size: 14px;
      color: #131313;
    }

    &_chat {
      display: flex;
      align-items: center;
      margin-left: 15px;
      border-radius: 12px;
      border: none;
      text-decoration: none;
      height: 30px;
      width: 67px;
      cursor: pointer;
      font-family: Helvetica, sans-serif;
      font-size: 14px;
      color: #ffc200;
      background: #fff8dd;

      &::before {
        content: url("~@/assets/Combined\ Shape@1x.svg");
        padding-right: 5px;
    }
  }
}
</style>
