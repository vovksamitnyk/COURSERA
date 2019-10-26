(function (window) {
    let helloSpeaker = {};
    helloSpeaker.speak = speak;
    let speakWord = "Hello";
    function speak(name) {
        console.log(speakWord + " " + name);
    }
    window.helloSpeaker = helloSpeaker;
})(window);
