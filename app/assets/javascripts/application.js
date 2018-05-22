// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require_self


// Init de l'environnement
var buffer = 0;
var memory = 0;
var operator = "";

//mise en cache des valeurs pointées sur la calculatrice
function input(value) {
    if (!(buffer.toString().includes(".") && value === ".")) {
      buffer += value;
      document.getElementById("result").innerHTML = Number(buffer);
    };
    debug();
  };

function action(symbol) {
  if (operator === "") {
    memory += Number(buffer);
    buffer = 0;
    operator = symbol;
  };
  debug();
};

function equal() {
  switch (operator) {
    case "+":
      add();
      refresh();
      break;
    case "-":
      substract();
      refresh();
      break;
    case "/":
      divide();
      refresh();
      break;
    case "*":
      multiply();
      refresh();
      break;
  };
  debug();
};

function clean() {
  refreshBuffer();
  refreshMemory();
  refreshOperator();
  debug();
};

function refresh() {
  refreshBuffer();
  refreshOperator();
  debug();
};

function refreshBuffer() {
  return buffer = 0;
};

function refreshMemory() {
  return memory = 0;
};

function refreshOperator() {
  return operator = "";
};


function showMemory() {
  if (memory === 0 && operator === "") {
    showBuffer();
  } else {
    document.getElementById("result").innerHTML = Number(memory);
  }
};

function showBuffer() {
  document.getElementById("result").innerHTML = Number(buffer);
};

function show() {
  document.getElementById("result").innerHTML = 0;
};

function debug() {
  console.log("mémoire de : " + Number(memory));
  console.log("buffer de : " + Number(buffer));
  console.log("opérateur sélectionné :" + operator);
};

// Fonctions Maths
function add() {
  return memory += +buffer;
};
function substract() {
  return memory -= +buffer;
};
function divide() {
  return memory /= +buffer;
};
function multiply() {
  return memory *= +buffer;
};
