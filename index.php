<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <link href="https://fonts.googleapis.com/css?family=Arvo|Cabin:400,500|Raleway" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.0/css/swiper.min.css">
    <link href="index.css" rel="stylesheet">
    <link href="header.css" rel="stylesheet">
    <link href="chat.css" rel="stylesheet">
    <link href="scrollbar.css" rel="stylesheet">
    <link href="skill.css" rel="stylesheet">
    <link href="code_slide.css" rel="stylesheet">
    <link href="education.css" rel="stylesheet">



    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <div id="particles-js">

    </div>
    <div class="everything">


    <div class="first-page" >

<nav>
  <div class="logo" >
    Ibrahim Rahhal
    </div>
    <div class="nav-cont">
    <div class="nav">
      <a href="#skill" class="nav-link hvr-underline-from-center">Skills Set</a>
      <a href="#" class="nav-link hvr-underline-from-center">Education</a>
      <a href="#" class="nav-link hvr-underline-from-center">Projects</a>
      <a href="#" class="nav-link hvr-underline-from-center">Contact</a>
    </div>
    </div>
</nav>

    <header>

        <a class="hello-link hvr-bounce-to-bottom">Get in Touch</a>
    </header>
    <div class="full-page-hero">


    <div class="circle">

    </div>
    <h1 class="main-h1">Designer,<span> Fullstack Developer and Student</span></h1>
    <h3 class="main-h3">Welcome to My Website</h3>

    </div>
    <div class="hr-2px">

    </div>
    <div class="project-callToAction">
      <h2 class="project-text">Have an <span>Intersting</span> Project</h2>
      <a class="project-btn project-btn-hover">Start a Project</a>

    </div>
    </div>


<h2 class="thing-im-good-at" id="skill">[ Things I Can Do ]</h2>
<!--
<div class="skill-wrapper">
  <h2 class="skill-h2">{ Coding }</h2> -->
  <div class="swiper-container" style ="">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
          <!-- Slides -->
          <div class="swiper-slide slide_angular">
          <div class="angular_logo">
          </div>

          <!-- <div class="angular_text_wrapper">
            <div class="maintext">Build <span class="large">Single-Page</span> Web Applications using <span class="angular"> Angular </span> Framework</div>
          </div> -->


          </div>
          <div class="swiper-slide slide_node">
          <div class="node_logo">
          </div>

          </div>

          <div class="swiper-slide slide_database">
          <div class="database_logo">
          </div>

          </div>
          <div class="swiper-slide slide_frameworks">
          <div class="frameworks_logo">
          </div>

          </div>
          <div class="swiper-slide slide_foundation">
          <div class="foundation_logo">
          </div>

          </div>
          <div class="swiper-slide slide_agile">Slide 3</div>
          ...
      </div>
      <!-- If we need pagination -->
      <div class="swiper-pagination"></div>

      <!-- If we need navigation buttons -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>

      <!-- If we need scrollbar -->
  </div>


  <!-- <div style="
  width:90%;
  height:8px;
  opacity:0.5;
  background-color:#121212;
  clip-path: polygon(0 0, 100% 0, 95% 100%, 5% 100%);
  margin: 40px auto">

  </div> -->
  <h2 class="thing-im-good-at designer">[ I'm Also A Designer ]</h2>

  <div class="designer-img">

  </div>
  <div class="thing-im-good-at" style="font-weight:500;font-size:1.5rem; margin:0; transform:translateY(-80px);">
    Creating Websites Mockups using Photoshop and Illustrator Nothing Fancy but still Good
  </div>

<div class="education">

</div>


  <!-- <div class="skill-set"> -->

    <!-- <div class="skill">
      <div class="skill-img">

      </div>
      <h3 class="skill-title"></h3>

    </div> -->
    <!-- <?php
    require 'skill_render.php';
    echo renderall($myskills);

     ?> -->



  <!-- </div> -->
<!-- </div> -->






<!-- chat ox -->
<div class="chat-box">
<div class="container">
    <div class="message-blue">
        <p class="message-content">Talk is Cheap Just Show us The Code !!!!</p>
        <div class="message-timestamp-left">SMS 13:37</div>
    </div>

    <div class="message-orange">
        <p class="message-content">tALK iS cHeAp ShOw uS tHe CoDE </p>
        <div class="message-timestamp-right">SMS 13:37</div>
    </div>
    <div class="message-orange bird">
      <div class="bird-in">

      </div>
        <!-- <img src="assets/meme.jpg" alt="" width="200px" height="200px"> -->
        <div class="message-timestamp-right">SMS 13:37</div>
    </div>

</div>
</div>
<!-- chat box endx -->
</div>
 <script src="http://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
 <script src="appp.js"></script>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.0/js/swiper.min.js"></script>
 <script>
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })
  </script>
  </body>
</html>
