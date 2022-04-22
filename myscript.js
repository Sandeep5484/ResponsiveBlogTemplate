function responsive_menu() {
    var e = document.getElementById(`menu_small`);
    if (e.className === `navigation`) {
        e.className += " responsive";
    } else {
        e.className = `navigation`;
    }
}