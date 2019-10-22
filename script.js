window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("myHeader").style.height = "150px";
  } else {
    document.getElementById("myHeader").style.height = "200px";
  }
}



