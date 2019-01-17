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
                                  "shit",
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
                                  "shit",
                                  null
                                ));


$objects[0]->renderProject();









 ?>
