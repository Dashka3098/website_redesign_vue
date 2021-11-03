<template>
  <div class="events_notification">
    <span class="events_text">TODAY</span>
    <div class="event_done">
          <span class="event_text">
              Darika Samak mark as done Listing on Product Hunt so that<br>we can reach as many potential users
          </span>
    </div>

    <div class="event_message">
          <span class="event_text">
              Emilee Simchenko commented on Account for teams and <br>personal in bottom style
          </span>
      <div class="event_message_note">
            <span>
                During a project build, it is necessary to evaluate the product design<br>and development against project requirements and outcomes
            </span>
      </div>
    </div>
    <div class="event_download">
      <div class="event_download_main">
            <span class="event_text">
                Darika Samak uploaded 4 files on An option to search in<br>current projects or in all projects
            </span>
      </div>
      <div class="event_download_picture" id="event_download_picture">
        <img v-for="image in images" :key="image.link" :src="image.link" :alt="image.alt">
      </div>
    </div>
  </div>
  <div class="event_time">
        <span>
            8:40 PM
        </span>
    <span>
            7:32 PM
        </span>
    <span>
            6:02 PM
        </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Activity',
  data() {
    return {
      images: [
        {
          link: 'https://blog.ostrovok.ru/wp-content/uploads/2019/08/ostrovok-filters-4-10.46.2238.jpg',
          alt: 'Italic',
        },
        {
          link: 'http://photo.baliforum.ru/u/i/2018/06/15/5b2363c8217a5bF4IHC.jpg',
          alt: 'Bali',
        },
        {
          link: 'https://lifeistravel.com.ua/media/k2/items/cache/da22e32f78e379097189580a04383c67_L.jpg',
          alt: 'Maldives',
        },
        {
          link: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Pico_Gilbo._Agosto_2005_%28editada%29.jpg',
          alt: 'Mountains',
        },
      ],
    };
  },
});
</script>

<style lang="scss">
.events_notification {
  display: flex;
  flex-direction: column;
  padding-left: 30px;
}

.event_time {
  margin-left: 5px;
  margin-top: 86px;
  display: flex;
  flex-direction: column;
}

.event_time > span {
  opacity: 0.7;
  font-family: Helvetica, sans-serif;
  font-size: 14px;
  color: #131313;
  text-align: right;
  line-height: 20px;
}

.event_time > span:nth-child(2n) {
  margin-top: 50px;
}

.event_time > span:last-child {
  margin-top: 158px;
}

.events_text {
  font-family: Helvetica, sans-serif;
  font-size: 14px;
  color: #131313;
  opacity: 0.5;
  margin-top: 35px;
}

.event_done {
  display: flex;
  margin-top: 32px;
  justify-content: left;
}

.event_done span {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0;
}

.event_done span::before {
  background-color: #cef9c6;
  display: inline-block;
  margin-right: 20px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  content: url("../../assets/Icon@3x.svg");
}

.event_img {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  position: absolute;
}

.event_text {
  font-family: Helvetica, sans-serif;
  font-size: 16px;
  color: #131313;
  line-height: 20px;
  margin-left: 20px;
}

.event_message {
  display: flex;
  margin-top: 32px;
  justify-content: left;
  flex-direction: column;
}

.event_message > span {
  display: flex;
  align-items: center;
  margin-left: 0;
}

.event_message > span::before {
  background-color: #fff8dd;
  display: inline-block;
  margin-right: 20px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 50px;
  content: url("../../assets/Icon_message.png");
}

.event_message_note {
  background: #f7f6f3;
  border-radius: 10px;
  width: 551px;
  height: 88px;
  margin-left: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.event_message_note > span {
  font-family: Helvetica, sans-serif;
  font-size: 15px;
  color: #131313;
}

.event_download {
  display: flex;
  margin-top: 32px;
  justify-content: left;
  flex-direction: column;
}

.event_download_main {
  display: flex;
  justify-content: left;
}

.event_download_main span {
  display: flex;
  justify-content: left;
  margin-left: 0;
}

.event_download_main span::before {
  background-color: #e3efff;
  display: inline-block;
  margin-right: 20px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 50px;
  content: url("../../assets/Icon_download.png");
}

.event_download_picture {
  display: flex;
  justify-content: left;
  margin-top: 20px;
}

.event_download_picture > img:first-child {
  margin-left: 60px;
}

.event_download_picture > img {
  width: 100px;
  height: 100px;
  margin-left: 10px;
  border-radius: 8px;
  cursor: pointer;
}
</style>
