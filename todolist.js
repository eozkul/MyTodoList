function showTime() {
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;

  setTimeout(showTime, 1000);
}

showTime();



var list = document.querySelector("#todo");
list.addEventListener('click', function(e) {
    var text = e.target
    document.getElementById("progress").appendChild(text);
    
}, false);


var list = document.querySelector("#progress");
list.addEventListener('click', function(e) {
    var text = e.target
    document.getElementById("completed").appendChild(text);

}, false);


function newElement() {
  var x = "";
  radiobtn1 = document.getElementById("easy");
  radiobtn2 = document.getElementById("med");
  radiobtn3 = document.getElementById("hard");

  if (radiobtn1.checked) { x = radiobtn1.value}
  else if (radiobtn3.checked) { x = radiobtn3.value}
  else if (radiobtn2.checked) { x = radiobtn2.value}
  else{
    alert("En az bir tane zorluk secmelisiniz!");
    return
  }
  

  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue + " " + x);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Alan bos birakilamaz!");
  } else {
    document.getElementById("todo").appendChild(li);
  }
  document.getElementById("myInput").value = "";
 
}
