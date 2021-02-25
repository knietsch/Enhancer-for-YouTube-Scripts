/*

  change videospeed even in fullscreen mode
  change speed faster with + key
  change speed slower with + key

*/

document.addEventListener ("keypress", function (event) {
 event.key=="+"? document.getElementById('efyt-speed-plus').click():{};
 event.key=="-"? document.getElementById('efyt-speed-minus').click():{};
// event.key=="+"? document.querySelector('[data-name="speedup"]').click():{};
// event.key=="-"? document.querySelector('[data-name="slowdown"]').click():{};
});
//document.querySelector('[data-name="speedup"]').title="+";
//document.querySelector('[data-name="slowdown"]').title="-"
