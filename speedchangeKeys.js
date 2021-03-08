/*

change videospeed even in fullscreen mode
change speed faster with + key
change speed slower with - key

 */

if (document.getElementById('efyt-speed-plus')) {
    document.addEventListener("keypress", function (event) {
        //efyt-size
        //ytd-toggle-button-renderer.style-scope:nth-child(2)
        console.log(event);
        if (event.shiftKey == true) {
            console.log("1");
            event.key == "+" ? document.querySelector('ytd-toggle-button-renderer.style-scope:nth-child(1)').click() : {};
            event.key == "-" ? document.querySelector('ytd-toggle-button-renderer.style-scope:nth-child(2)').click() : {};
        } else {
            event.key == "*" ? document.getElementById('efyt-size').click() : {};
            event.key == "z" ? document.getElementById('efyt-size').click() : {};
            event.key == "+" ? document.getElementById('efyt-speed-plus').click() : {};
            event.key == "-" ? document.getElementById('efyt-speed-minus').click() : {};
        }
    });
} else {
    document.addEventListener("keypress", function (event) {
        //resize
        console.log(event);
        if (event.shiftKey == true) {
            console.log("1");
            event.key == "+" ? document.querySelector('ytd-toggle-button-renderer.style-scope:nth-child(1)').click() : {};
            event.key == "-" ? document.querySelector('ytd-toggle-button-renderer.style-scope:nth-child(2)').click() : {};
        } else {
            event.key == "*" ? document.querySelector('[data-name="resize"]').click() : {};
            event.key == "z" ? document.querySelector('[data-name="resize"]').click() : {};

            event.key == "+" ? document.querySelector('[data-name="speedup"]').click() : {};
            event.key == "-" ? document.querySelector('[data-name="slowdown"]').click() : {};
        }
    });
    document.querySelector('[data-name="speedup"]').title = "+";
    document.querySelector('[data-name="slowdown"]').title = "-"
}
