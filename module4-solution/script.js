(function (window) {
    let names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    let firstLetter = "j";

    for ( let i = 0; i < names.length; i++) {
        if (names[i].charAt(0).toLowerCase() === firstLetter) {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})(window);
