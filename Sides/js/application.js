var a = "Hello World";
console.log(a);

var test = 99;

while (test =! 0) {
  var test = Number(prompt("Que souhaitez-vous faire?\n1:Jouer avec les chiffres\n2:Jouer avec les lettres\n0:Quitter"));
  if (test === 1) {
    var choice = Number(prompt("Combien de nombre voulez-vous rentrer ?"));
    console.log(choice);
    var array = [];
    var i;
    for (i = 0; i < choice ; i++) {
        var temp = Number(prompt(i+1 + "e numero :"));
        array.push(temp);
    };
    console.log(array);
    mymax(array)
    reverse(array);
  } else if (test === 2) {
    var choice = String(prompt("Rentrez un mot :"));
    reverse(choice);
    vowel(choice);
  } else if (test === 0) {
    console.log("Goodbye!");
    break;
  } else if (test === 69) {
    console.log("coquinou!");
    console.log("https://www.youtube.com/watch?v=P-ML82C3FV4");
  } else {
    ;
  };
};

function mymax(arr) {
    return console.log("chiffre le plus grand du tableau = " + Math.max(...arr) )
};

function reverse(som) {
  if(typeof som === "string" ) {
    arr = som.split('');
    arr.reverse();
    return console.log(arr.join(''));
  } else if (typeof som === "object" ){
    return console.log(som.reverse());
  } else {
    ;
  };

};

function vowel(som) {
  var regex = /[aeiouy]/gi;
  var lettres = som.match(regex);
  return console.log("Il y a " + lettres.length + " voyelles");
};
