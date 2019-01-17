<?php
/**
 *
 */
 class sliderImage
{
  public $src;
  public $w;
  public $h;
public function __construct($src,$w,$h)
  {
$this->src =$src;
$this->w =$w;
$this->h =$h;


  }
   public function toString()
  {
    $str = "{ src: '{$this->src}',   w: {$this->w},  h: {$this->h}  }";
    return $str;
  }
}



/**
 *
 */
class Project
{
  public $name;
  public $mainTitle;
  public $secTitle;
  public $color;
  public $imgSrc;
  public $live;
  public $link;
  public $text;
  public $sliderArray;

  function __construct(
     $name,
     $mainTitle,
     $secTitle,
     $color,
     $imgSrc,
     $live,
     $link,
     $text,
     $sliderArray
    )
  {
    $this->mainTitle=$mainTitle;
    $this->secTitle=$secTitle;
    $this->color=$color;
    $this->imgSrc=$imgSrc;
    $this->live=$live;
    $this->link=$link;
    $this->text=$text;
    $this->sliderArray=$sliderArray;
  }
  public function renderProject()
  {
    $this->renderHero($this->imgSrc ,$this->color);
    $this->renderTitles($this->mainTitle,$this->secTitle);
    $this->renderBtns($this->live,$this->link,$this->text);


  }
  public function renderHero($img ,$color)
  {
  echo "<div class=\"hero\" style=\"background-color:{$color};\">
        <div class=\"img\" style=\"background-image:url('${img}')\">

        </div>
      </div>";
  }



  public function renderTitles($first,$second)
  {
    echo "    <h2 class=\"proj-name\">{$first}</h2>
        <h4 class=\"techs\">{$second}</h4>";
  }

  public function renderBtns($live,$link,$text)


  {
    $btn_text = 'View Live Copy';
    $btn_atrr ="href=\"{$link}\" target=\"_blank\"";
    if(!$live){
      $btn_text = 'View Gallery';
    }


    echo "  <div class=\"btns\">
        <div class=\"btn hvr-bounce-to-bottom\">
          View Repository
        </div>
        <div class=\"btn hvr-bounce-to-bottom read-btn\">
          Read More
        </div>
        <a class=\"btn hvr-bounce-to-bottom gallery-btn\" {$btn_atrr}  >
          {$btn_text}
        </a>
      </div>
      <div class=\"desc\">
        {$text}
      </div>";
  }

}

 ?>
