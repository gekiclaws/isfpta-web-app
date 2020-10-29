<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        img-src="carousel1.jpg" 
      ></b-carousel-slide>
      <!-- caption="First slide" text="Nulla vitae elit libero, a pharetra augue mollis interdum." -->

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="carousel2.jpg">
        <!-- <h1>Hello world!</h1> -->
      </b-carousel-slide>

      <!-- Slides with image only -->
      <!-- <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide> -->

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <!-- <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://picsum.photos/1024/480/?image=55"
            alt="image slot"
          >
        </template>
      </b-carousel-slide> -->

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <!-- <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide> -->
    </b-carousel>
  
    <b-card-group deck class="container row mt-5 mb-4 mx-auto">  
      <div class="col-12 col-md-6 col-xl-3">
        <b-card img-src="logo_isfa.png" img-alt="Card image" img-left class="d-flex align-items-center mb-3">
          <b-card-text class="my-auto">
            The ISF Academy
          </b-card-text>
        </b-card>
      </div>
      <div class="col-12 col-md-6 col-xl-3">
        <b-card img-src="logo_isfa.png" img-alt="Card image" img-left class="d-flex align-items-center mb-3">
          <b-card-text>
            University Guidance & Careers
          </b-card-text>
        </b-card>
      </div>
      <div class="col-12 col-md-6 col-xl-3">
        <b-card img-src="logo_isf.png" img-alt="Card image" img-left class="d-flex align-items-center mb-3">
          <b-card-text>
            Friends of The ISF
          </b-card-text>
        </b-card>
      </div>
      <div class="col-12 col-md-6 col-xl-3">
        <b-card img-src="logo_isfps.png" img-alt="Card image" img-left class="d-flex align-items-center mb-3">
          <b-card-text>
            The ISF Pre-School
          </b-card-text>
        </b-card>
      </div>
    </b-card-group>
  </div>
  
</template>

<script>
  export default {
    name: 'Main',
  }
</script>

<style>
</style>
