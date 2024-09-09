var isLiked = false;
function like() {
    var icon = document.getElementById("btn-like");
    if (!icon)
        return;
    if (isLiked) {
        icon.classList.remove("liked");
        icon.classList.remove("fa-heart");
        icon.classList.add("fa-heart-o");
    }
    else {
        icon.classList.remove("fa-heart-o");
        icon.classList.add("fa-heart");
        icon.classList.add("liked");
    }
    isLiked = !isLiked;
}
