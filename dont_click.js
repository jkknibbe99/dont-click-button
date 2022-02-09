
/*** dont_click.js ***/
// this is the don't click button script. the '#dont-click-me-button' will move away from the mouse when you try to click it



$(function() {
    // Setup dont-click-container
    let dont_click_container = document.getElementById("dont-click-container");
    let container_width = 400;
    let container_height = 400;
    let container_left = window.innerWidth/2 - container_width/2;
    let container_top = 200;
    dont_click_container.style.width = container_width.toString() + "px";
    dont_click_container.style.height = container_height.toString() + "px";
    dont_click_container.style.left = container_left.toString() + "px";
    dont_click_container.style.top = container_top.toString() + "px";
    // Setup dont-click-button
    let dont_click_button = document.getElementById("dont-click-me-button");
    let button_width = 100;
    let button_height = 60;
    let button_left = container_width/2 - button_width/2;
    let button_top = container_height/2 - button_height/2;
    dont_click_button.style.left = button_left.toString() + "px";
    dont_click_button.style.top = button_top.toString() + "px";
    dont_click_button.style.width = button_width.toString() + "px";
    dont_click_button.style.height = button_height.toString() + "px";
    const buttonClicked = function () {
        this.innerHTML = "You got me...";
        dont_click_button.style.transition = "all 2s ease;";
        dont_click_button.style.left = button_left.toString() + "px";
        dont_click_button.style.top = button_top.toString() + "px";
        setTimeout(() => { this.innerHTML = "Don't Click Me!"; }, 1500);
    }
    dont_click_button.onclick = buttonClicked;
    $("#dont-click-me-button").on({
        mouseover: function() {
            // calculate left value
            let left = this.style.left.substring(0, this.style.left.indexOf("px"));
            left = parseInt(left);
            if (left < button_width) {
                left += button_width;
            } else {
                if (left + button_width > container_width - button_width) {
                    left -= button_width;
                } else {
                    if (Math.round(Math.random()) == 0) {
                        left -= button_width;
                    } else {
                        left += button_width;
                    }
                }
            }
            left = left.toString();

            // calculate top value
            let top = this.style.top.substring(0, this.style.top.indexOf("px"));
            top = parseInt(top);
            if (top < button_height) {
                top += button_width;
            } else {
                if (top + button_height > container_width - button_height) {
                    top -= button_width;
                } else {
                    if (Math.round(Math.random()) == 0) {
                        top -= button_height;
                    } else {
                        top += button_height;
                    }
                }
            }
            top = top.toString();

            $(this).css({
                left: (left) + "px",
                top: (top) + "px",
            });
        }
    });
});
