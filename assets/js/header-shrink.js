window.onscroll = function() {
  growShrinkLogo()
};

var Logo = document.getElementById("Logo");
var endOfDocumentTop = 110;
var size = 0;

function growShrinkLogo() {
var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

  if (size == 0 && scroll > endOfDocumentTop) {
    Logo.className = 'smallLogo';
    size = 1;
  } else if(size == 1 && scroll <= endOfDocumentTop){
    Logo.className = 'largeLogo';
   size = 0;
  }
}
