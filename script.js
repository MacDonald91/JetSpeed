///var mainTitle = document.getElementById("mainTitle");
///console.log("This is an element of type:", mainTitle.nodeType );
//console.log("This inner HTML is ", mainTitle.innerHTML );
//console.log("There are this many child objects ", mainTitle.childNodes );


//var myLinks = document.getElementsByTagName("a");
//var firstLink = myLinks(0).getAttribute("href");
//console.log(firstLink);

///document.getElementById("mainTitle").innerHTML = "Why Travel with Us!"
//var allign = mainTitle.getAttribute("align")
///console.log(allign);



//var para = document.createElement("p");
//var node = document.createTextNode("It will be the most fun you have ever had! !");
//para.appendChild(node);

//var myElement = document.getElementById("p3");
//myElement.insertBefore(para, child); //here is the aleternative to the append child.
//var  child = document.getElementById("p3")
//myElement.insertBefore(para, child);
//myElement.appendChild(para);
//as long as you have created a div, this is where you would do thi.


//document.getElementById("mainTitle").onclick = function () {alert("Hello World")};


//document.getElementById("mainTitle").addEventListener("click", function() {
  //alert("Hello World");
//});

//document.getElementById("mainTitle").addEventListener("mouseover", function() {
    //alert("Hello Again");
  //});

  //function simpleMessage () {
    //alert("This is a simple alert box")
  //}

  //setTimeout(simpleMessage, 5000);

var myImage = document.getElementById("malaysia");

var imaageArray = ["images/malaysia.jpg", "images/malaysia2.jpg", "images/malaysia3.jpg", "images/malaysia4.jpg", "images/malaysia5.jpg"];

var imageindex = 0;

function changeImage () {
  myImage.setAttribute("src", imaageArray[imageindex]);
  imageindex++;
  if (imageindex >= imaageArray.length) {
    imageindex = 0;
  }
}

setInterval(changeImage, 5000);

