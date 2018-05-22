var guesses = 10;
var wins = 0;
var losses = 0;

var alphabet = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i",
  "j", "k", "l", "m", "n", "o", "p", "q", "r",
  "s", "t", "u", "v", "w", "x", "y", "z"
];

var wordPool = [
  "chupacabra",
  "yeti",
  "loch ness monster",
  "sasquatch",
  "jersey devil",
  "minotaur",
  "leprechaun",
  "sprite",
  "troll",
  "goblin",
  "orc",
];

var hangManWord;

var randomChoice = Math.floor(Math.random() * 11) + 1;

for (var i = 0; i < randomChoice; i++) {
   hangManWord = wordPool[i];
}



$("#banner").html(hangManWord.toUpperCase());
