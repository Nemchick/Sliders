<template>
  <div class="container_slider_reviews">
    <swiper
      :modules="{ Autoplay }"
      :slidesPerView="slidesPerView"
      :spaceBetween="30"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      :speed="5000"
      class="mySwiper"
    >
      <swiper-slide v-for="(review, index) in reviewsData" :key="index">
        <div class="review-card">
          <p class="review-name">{{ review.name }}</p>
          <p class="review-text">{{ review.text }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
  <!-- вот это надо прописать в консоль
//npm i swiper 
// npm install swiper@9 
//npm i @swiper/core -->
</template>

<script>
import { ref } from "vue"; //, onMounted, onUpdated
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Autoplay } from "swiper/core";
import "swiper/swiper-bundle.css";

SwiperCore.use([Autoplay]);

export default {
  components: { Swiper, SwiperSlide },
  setup() {
    const reviewsData = ref([
      {
        name: "Иван Иванов",
        text: "Отличный продукт! Очень доволен покупкой.",
      },
      {
        name: "Петр Петров",
        text: "Рекомендую всем! Качество на высоте.",
      },
      {
        name: "Сидор Сидоров",
        text: "Спасибо за быструю доставку и отличный сервис!",
      },
      {
        name: "Анна Аннова",
        text: "Очень довольна покупкой. Буду заказывать еще!",
      },
      {
        name: "Мария Маринова",
        text: "Превосходное качество по доступной цене. ",
      },
      {
        name: "Екатерина Екатеринова",
        text: "Очень удобно и просто в использовании! ",
      },
    ]);

    const slidesPerView = ref(2.5);

    // const updateSlidesPerView = () => {
    //   if (window.innerWidth <= 980) {
    //     slidesPerView.value = 1;
    //   } else {
    //     slidesPerView.value = 3;
    //   }
    // };

    // onMounted(() => {
    //   updateSlidesPerView();
    // });
    // onUpdated(updateSlidesPerView);

    return {
      reviewsData,
      slidesPerView,
      SwiperCore,
      modules: {
        Autoplay,
      },
    };
  },
};
</script>
