/*!
  GitHub Halloween Contribution Graph
  (c) 2016 Amit Merchant
  updated: 2016-11-07
  license: MIT
*/

var rects = document.getElementsByTagName('rect');

for (var i = 0, l = rects.length; i < l; i++) {
  let color = rects[i].getAttribute('fill');

  halloween = 1;
  if(halloween==1){
    if(color == '#d6e685') {
      rects[i].style.fill = '#FDF156';
    } else if(color == '#8cc665') {
      rects[i].style.fill = '#FFC722';
    } else if(color == '#44a340') {
      rects[i].style.fill = '#FF9711';
    } else if(color == '#1e6823') {
      rects[i].style.fill = '#04001B';
    }
  }
}

var doc = document.getElementsByClassName("legend");
var allLis = doc[0].getElementsByTagName("li");

for (var i = 0; i < allLis.length; i++) {
    if (i==0) {
      allLis[i].style.backgroundColor = '#eee';
    } else if (i==1) {
      allLis[i].style.backgroundColor = '#FDF156';
    } else if (i==2) {
      allLis[i].style.backgroundColor = '#FFC722';
    } else if (i==3) {
      allLis[i].style.backgroundColor = '#FF9711';
    } else if (i==4) {
      allLis[i].style.backgroundColor = '#04001B';
    }
}
