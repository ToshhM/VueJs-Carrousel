<template>

<div>
<vueper-slides
  ref="myVueperSlides"
  autoplay
  :pause-on-hover="pauseOnHover"
  @autoplay-pause="internalAutoPlaying = false"
  @autoplay-resume="internalAutoPlaying = true">
  <vueper-slide
    v-for="(slide, i) in slides"
    :key=i
    :title="slide.title"
    :content="slide.content"
    />
  <template v-slot:pause>
    <i class="icon pause_circle_outline"></i>
  </template>
</vueper-slides>
</div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {

data: () => ({
  pauseOnHover: true,
  autoPlaying: true,
  internalAutoPlaying: true,
  slides: [
    {
      id: 'slide-1',
      title: 'Slide <b style="font-size: 1.3em;color: yellow">#1</b>',
      content: 'Slide title can be HTML.<br>And so does the slide content, <span style="font-size: 1.2em;color: yellow">why not?</span>'
    },
    {
      id:'slide-2',
      title: 'Deuxième projet ',
      content: 'Rezume, projet piloté, par un étudiant en 5eme année de EMLV'
    },
    {
      id:'slide-3',
      title: '3eme projet' ,
      content: 'Priska'
    },
     {
      id:'slide-4',
      title: 'Good job  ' ,
      content: 'Mario kart'
    },
  ]
 }),
components: {

     VueperSlides,
     VueperSlide,
    
  }

}

</script>

<style>
.vueperslide{
background: chocolate;

}
.vueperslides{
color:white;
background-color: brown;
}

.vueperslides__bullet .default {
  background-color: rgba(0, 0, 0, 0.3);
  color:blue;
  border: none;
  box-shadow: none;
  transition: 0.3s;
  width: 16px;
  height: 16px;
}

.vueperslides__bullet--active .default {background-color: #42b983;}

.vueperslides__bullet span {
  display: block;
  color: #fff;
  font-size: 10px;
  opacity: 0.8;
}

.vueperslides__progress {
  background: rgba(0, 0, 0, 0.25);
  color: #529dff;
}
</style>