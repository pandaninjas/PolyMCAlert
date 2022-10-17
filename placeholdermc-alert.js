window.onload = function () {
    let elem = document.createElement("div");
    elem.style.cssText = "background-color: coral;font: 15px Arial, sans-serif;padding: 10px;position: relative;z-index:auto;margin:0px 0px 0px 0px;";
    elem.innerHTML = "<p>PolyMC has been taken over by a hostile maintainer who may have been hacked. Please see <a href='https://gist.github.com/Earthcomputer/dc65391f84a2c19ebac6c33506fd7751'>this</a> for info on how to stay safe if you're a user. The new GitHub is PlaceholderMC. Want to spread the word? Use <a href='https://github.com/thefightagainstmalware/PolyMCAlert'>this</a> link</p>"
    document.body.insertBefore(elem, document.body.children[0]);
}
