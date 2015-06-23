// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


//JavaScript

function show_body() {
  alert(document.body.innerHTML);
}


function change_text() {
  var x = document.getElementById('change_text')
  x.style.fontSize = "25px";
  x.style.color = "green";
  x.innerHTML = "Hello JavaScript";
}

function get_date() {
  document.getElementById('get_date').innerHTML = Date()
}

function change_image() {
  var image = document.getElementById('my_image');
  if (image.src.match("bulbon")) {
    image.src = "http://www.w3schools.com/js/pic_bulboff.gif";
  } else {
    image.src = "http://www.w3schools.com/js/pic_bulbon.gif";
  }
}

function validate_data() {
  var x, text;
  x = document.getElementById("validate_data").value;
  if (isNaN(x) || x < 1 || x > 10) {
	text = "Input not valid";
  } else {
	text = "Input OK";
  }
  document.getElementById("validate_text").innerHTML = text;
}

function window_alert() {
  window.alert("It works!");
}

function where_locate() {
  var str = document.getElementById("sample_text_to_locate").innerHTML;
  var pos = str.search("locate");
  document.getElementById("show_where_is_locate_text").innerHTML = pos;
}

var fruits = ["Banana", " Orange", " Apple", " Mango"];

window.onload = downScripts;

function downScripts() {
  document.getElementById("fruits").innerHTML = fruits;
}

function pop() {
  fruits.pop();
  document.getElementById("fruits").innerHTML = fruits;
}

function push() {
  fruits.push(" Fruit");
  document.getElementById("fruits").innerHTML = fruits;
}

function click_button_and_confirm() {
    var x;
    if (confirm("Press a button!") == true) {
        x = "You pressed OK!";
    } else {
        x = "You pressed Cancel!";
    }
    document.getElementById("button_and_confirm").innerHTML = x;
}

function click_button_prompt() {
    var person = prompt("Please enter your name", "Harry Potter");

    if (person != null) {
        document.getElementById("button_prompt").innerHTML =
        "Hello " + person + "! How are you today?";
    }
}

//jQuery

$(document).ready(function(){
  $("#hide_it").click(function(){
    $(this).hide();
  });
});

$(document).ready(function(){
  $("#hide_it_by_dblclick").dblclick(function(){
    $(this).hide();
  });
});
