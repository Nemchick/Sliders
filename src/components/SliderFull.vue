<template>
  <section class="section_full_slider">
    <div class="container_slider" ref="slider">
      <img src="@/assets/img/1.png" class="img_slider" />
      <img src="@/assets/img/2.png" class="img_slider" />
      <img src="@/assets/img/3.png" class="img_slider" />
    </div>
    <div class="box_marker_slider">
      <div
        class="marker_slider_1"
        :class="{ active: sliderPosition === 0 }"
      ></div>
      <div
        class="marker_slider_2"
        :class="{ active: sliderPosition === -1 }"
      ></div>
      <div
        class="marker_slider_3"
        :class="{ active: sliderPosition === -2 }"
      ></div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      sliderPosition: 0, // Начальное положение слайдера
    };
  },
  mounted() {
    this.animateSlider();
  },
  methods: {
    animateSlider() {
      const slider = this.$refs.slider;
      let count = 0;
      setInterval(() => {
        switch (count % 6) {
          case 0:
            this.sliderPosition = 0;
            break;
          case 1:
            this.sliderPosition = -1; // -100vw
            break;
          case 2:
            this.sliderPosition = -2; // -200vw
            break;
          case 3:
            this.sliderPosition = -1; // -100vw
            break;
          case 4:
            this.sliderPosition = 0;
            break;
        }
        slider.style.transform = `translateX(${this.sliderPosition * 100}vw)`;
        count++;
      }, 2000);
    },
  },
};
</script>
