(function (window) {
    let byeSpeaker = {};
    byeSpeaker.speak = speak;
    var speakWord = "Good Bye";
    function speak(name) {
        console.log(speakWord + " " + name);
    }
    window.byeSpeaker = byeSpeaker;
})(window);
