<?php
require 'classes.php';
$objects=[];


//template ::::______
// (
//    $name,
//    $mainTitle,
//    $secTitle,
//    $color,
//    $imgSrc,
//    $live,
//    $link,
//    $text,
//    $sliderArray
//   )
//////////////////////////////////
/////////////////////////////////



//Creating ArabianDevs Object

array_push($objects, new Project("arabiandevs",
                                  "Arabian Developers Website",
                                  "php - jquery - syntax highlighter - css - html",
                                  "#79c79c",
                                  "../assets/projects/ad.svg",
                                  true,
                                  "https://arabiandevs.com",
                                  "https://github.com/Ibrahimrahhal/ArabianDevs.com",
                                  "Arabic content is very poor in many areas online especially in the programming side, <br>

It’s right that you can find many blogs on programming but most of it is either not completed, written by some professional who is busy all the time to complete it or just a newbies trying to Provide content that is mostly wrong or just not provided in simple professional way. <br>

W3schools website is the place I used to visit when I want to start learning something new, it’s simple, to the point and easy to use (no logins or registrations) so arabiandevs.com is meant to be the Arabic version w3schools not the exact same but coping its simplicity and clarity. <br>

The website is almost 75% done but we still need time to provide quality content. <br>
",
                                  null
                                ));



//Creating Arabic Name Generator Object

array_push($objects, new Project("arabicnamegenerator",
                                  "Arabic Fake Name Generator With API",
                                  "Node js - Express - Angular - Typescript - css - html",
                                  "#121212",
                                  "../assets/projects/ang.svg",
                                  true,
                                  "https://ibrahimrahhal.github.io/AANG_Deploy/",
                                  "https://github.com/Ibrahimrahhal/Arabic_name_Generator_Front_End",
                                  "I used to participate in a lot of designing competition on crowdsource and 99design. <br /> most of the time I have to create testimonials with fake names and positions and stuff like that I would use an online tools for that every time I needed like fake name generator, company name generator and job position title generator. <br>

After learning express js I thought why not build an Arabic name generator API with a front end and that was Arabic Name Generator <br>

Simple Documentation is Provided in the live Copy. <br>
",
                                  null
                                ));





//Creating Arabic Name Generator Object

array_push($objects, new Project("youtubesync",
                                  "Synchronous Realtime Youtube Player",
                                  "Node js - Express - Socket IO - Youtube Player API - css - html",
                                  "#da1f26",
                                  "../assets/projects/sync.svg",
                                  true,
                                  "https://syncyt.herokuapp.com/",
                                  "https://github.com/Ibrahimrahhal/Synchronous_Youtube_player",
                                  "I and some of my friends watch a lot of YouTube videos <br> Pranks, Vlogs and even anime or movies’ Epic moments and talk about whatever video we have watched in the morning with a cup of tea or coffee in the university, so I thought why not watch it together remotely thanks to Socket IO and YouTube player’s amazing API
<br>
I built this website that allows Realtime synchronous video playing. <br>

you can Pause whenever you like, skip to a specific point or just play the video normally you can be sure that your friend is watching whatever you are watching. <br>

Also, there is chatting window. <br>

 Feel free to try the app. <br>
",
                                  null
                                ));



//Creating Arabic Name Generator Object

array_push($objects, new Project("blockchain",
                                  "Simple Blockchain Implementation Using Node Js",
                                  "Node js - Express - Electron - Socket IO - Elliptic",
                                  "#079DD4",
                                  "../assets/projects/bc.svg",
                                  true,
                                  "null",
                                  "https://github.com/Ibrahimrahhal/BlockChain-App",
                                  "I started this project way long ago but I stopped after failing to discover how peers could to each other without a central server if the router is going to block you every time you try to connect to their IP address of course the way around this is to configure your router to redirect the requests to your local ip adress but I used to mine bitcoin back in the days without even knowing about these stuff <br /> I have searched the web several times but didn’t find anything just people keep repeating that in the blockchain people connect to each other’s and there is no central server after a while I was examining the blockchain explorer and looking through the recent mined blocks I noticed that most of the mined bitcoins is mined by a mining website (that owns mining pools) and in a matter of seconds I understood how the network operates it’s just a small centralized networks in big decentralized one <br /> what clever idea. <br>
This project is still under development I have implement the the block and the some of the main modules feel free to check the source code. <br>
",
                                  null
                                ));

//Creating BusinessHash Object


$bg_items = "

[  {
         src: 'gallery/bh/0.png',
         w: 1280,
         h: 1024
     },
     {
              src: 'gallery/bh/1.png',
              w: 1280,
              h: 1024
          },
          {
                   src: 'gallery/bh/2.png',
                   w: 1280,
                   h: 1024
               },
               {
                        src: 'gallery/bh/3.png',
                        w: 1280,
                        h: 1024
                    },
                    {
                             src: 'gallery/bh/4.png',
                             w: 1280,
                             h: 1024
                         },
                         {
                                  src: 'gallery/bh/5.png',
                                  w: 1280,
                                  h: 1024
                              }
 ]

";
array_push($objects, new Project("businesshash",
                                  "Business Hash Website",
                                  "php - jquery - typetype js - jquery ui - css - html",
                                  "#da1f26",
                                  "../assets/projects/bh.svg",
                                  false,
                                  "null",
                                  "https://github.com/Ibrahimrahhal/Businesshash.com",
                                  "My first full website project, it was quite a messy experience everything was messy I didn’t make a plan , hierarchy or even a backend architecture I ended up redoing a lot of things and every time I opened the project folders best described as the spaghetti folder it was so messy that I would moving one file would break the whole project I even ended up writing the header html and CSS several times. <br>

This is the most project I’m grateful that I have built, I have learned to break my code , refactor it when needed, everything is a plugin in a separate file and to never repeat myself.
",
                                  $bg_items
                                ));








// Creating Http Client Object


$hc_items = "

[  {
         src: 'gallery/hc/0.png',
         w: 1654,
         h: 1128
     }
 ]

";
array_push($objects, new Project("http",
                                  "Native Desktop http Client",
                                  "Electron - Node js - Angular - Typescript - css - html",
                                  "#FFD700",
                                  "../assets/projects/http.svg",
                                  false,
                                  "null",
                                  "https://github.com/Ibrahimrahhal/GUI_HTTP_C",
                                  "After learning about Electron framework I was excited to build my first Desktop application. <br>

This project is inspired by post man application of course it’s not complication or powerful as postman as I didn’t spend much time developing it, feel free to check the gallery or even the source code it you want to try using it just clone the repository and run npm I and npm start. <br>
",
                                  $hc_items
                                ));

// $objects[0]->renderProject();







$GLOBALS["objectArray"]=$objects;
 ?>
