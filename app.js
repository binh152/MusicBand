var header = document.getElementById("header");
var mobileMenu = document.getElementById("mobile-menu");
mobileMenu.onclick = function () {
    var isClose = header.clientHeight === 46;
    if (isClose) {
        header.style.height = "auto";
    } else {
        header.style.height = null;
    }
};
// tu dong dong khi chon menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
    var MEnu = menuItems[i];

    MEnu.onclick = function (event) {
        var isparentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains("subnav");
        if (isparentMenu) {
            event.preventDefault();
        } else {
            header.style.height = null;
        }
    };
}

//

var imgCount = 5;
function bg() {
    var images = {
        0:'https://media.istockphoto.com/photos/nothing-beats-live-music-picture-id502088147?k=20&m=502088147&s=612x612&w=0&h=iD-IKDoAjDXEKZgEQ6f0ynqR3SQl9UqmNjv3rnBoW4w=',
        1: "https://p-u.popcdn.net/collections/covers/000/000/044/cover/music_cover.jpg?1602147553",
        2: "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_537,q_50,w_1084/v1/clients/omaha/Weekend_bbcda3db-c289-49ab-b43c-37bec47cbcd2.jpg",
        3: "https://data.junkee.com/wp-content/uploads/2019/05/The-Cure_Sydney-Opera-House_credit_Daniel-Boud_036-680x453.jpg",
        4: "https://www.uncovercolorado.com/wp-content/uploads/2019/12/OneRepublic-Top-1600x800-1-1600x800.jpg",
        5: "https://data.junkee.com/wp-content/uploads/2019/05/The-Cure_Sydney-Opera-House_credit_Daniel-Boud_036-680x453.jpghttps://upload.wikimedia.org/wikipedia/commons/9/9d/HIM_-_Helsinki_Ice_Hall_2017_%282%29.jpg",
    };
    var randomCount = Math.floor(Math.random() * imgCount);
    
    document
        .getElementById("slider")
        .setAttribute("style", "background: url(" + images[randomCount] + ") top center / cover no-repeat;");
}

setInterval(() => {
    bg();
}, 1000);
