<script>

var ip = '<?php
function getRealIpAddr()
{
    if (!empty($_SERVER['HTTP_CLIENT_IP']))   //check ip from share internet
    {
      $ip=$_SERVER['HTTP_CLIENT_IP'];
    }
    elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR']))   //to check ip is pass from proxy
    {
      $ip=$_SERVER['HTTP_X_FORWARDED_FOR'];
    }
    else
    {
      $ip=$_SERVER['REMOTE_ADDR'];
    }
    return $ip;
}
echo getRealIpAddr();
 ?>';
 var link = "http://api.ipstack.com/"+ip+"?access_key=f085c49c37ff1058a10ac797bbb3086d"
axios(link).then((Data) => {
  data = Data.data;
  console.log(data);
  // data = JSON.parse()
  ip= "Hello Ibrahim New Request Has Been Sent to the page ("+document.title+") and we are informing you with all the information we could get"
  ip += "User Information \n"+
        "IP Address: "+data.ip+"\n"+
        "Countrey: "+data.country_name+"\n"+
        "latitude : "+data.latitude+"\n"+
        "longitude : "+data.longitude+"\n";
  axios('https://ibrahimrahhal.herokuapp.com/?ip=' + ip).then((data) => {});


});

</script>
