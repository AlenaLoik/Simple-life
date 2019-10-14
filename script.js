window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("myHeader").style.height = "215px";
  } else {
    document.getElementById("myHeader").style.height = "265px";
  }
}