document.addEventListener ("keypress", function (event) {
 event.key=="+"? document.querySelector('[data-name="speedup"]').click():{};
 event.key=="-"? document.querySelector('[data-name="slowdown"]').click():{};
});
document.querySelector('[data-name="speedup"]').title="+";
document.querySelector('[data-name="slowdown"]').title="-"
