<template>
     <header class="website_redesign_header">
            <div class="main_menu">
                <div class="website_redesign_logo">
                    <button class="openbtn" id="burger">☰</button>
                    <span class="website_redesign_logo_text">Website Redesign</span>
                    <div class="meatball_circle">
                        <span class="meatball_dot"></span>
                        <span class="meatball_dot"></span>
                        <span class="meatball_dot"></span>
                    </div>
                </div>
                <div class="menu_items">
                     <div class="item" v-for="item in items" :key="item" v-on:click="activeMenu" :class="{ active: item === 'Activity' }">
                         <router-link :to="{path: item.toLowerCase()}">
                            {{ item }}
                        </router-link>
                     </div>
                </div>

            </div>
            <div class="members">
                <div class="members_photo">
                    <img src="../assets/woman_1.jpg" alt="woman_1">
                    <img src="../assets/woman_2.jpg" alt="woman_2">
                    <img src="../assets/woman_3.jpg" alt="woman_3">
                </div>
                <button class="members_share">Share</button>
                <button class="members_chat">Chat</button>
            </div>
        </header>
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
}

.openbtn {
    display: none;
}

.website_redesign_logo_text {
    font-family: Helvetica, sans-serif;
    font-size: 32px;
    color: #131313;
    white-space: nowrap;
    display: flex;
    align-items: center;
}

.website_redesign_logo_text::before {
    width: 40px;
    height: 40px;
    background-color: #ffc200;
    border-radius: 10px;
    background-image: url("../assets/Shapes@2x.png");
    content: "";
    background-size: 40px 40px;
    display: inline-block;
    margin-right: 15px;
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

.item {
    opacity: 0.7;
    font-family: Helvetica, sans-serif;
    font-size: 16px;
    cursor: pointer;

    a {
      text-decoration: none;
      color: #131313;
    }
}

.item:hover,
.active {
    font-family: Helvetica, sans-serif;
    font-size: 16px;
    color: #696969;
    text-decoration: none;
    border-bottom-style: solid;
    border-color: #ffc200;
    padding-bottom: 12px;
}

.members {
    display: flex;
    margin-left: 471px;
    align-items: center;
    margin-bottom: 15px;
}

.members_photo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
}

.members_photo img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-left: 5px;
}

.members_share {
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

.members_chat::before {
    content: url("../assets/Combined\ Shape@1x.svg");
    padding-right: 5px;
}

.members_chat {
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
}
</style>
