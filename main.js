
console.log("hidden message");
console.log(new Date());
console.log(100);


document.writeln("Hello, from JavaScript");
document.writeln("<br>");
document.writeln(new Date());

document.writeln("<h2> This is H2 format </h2>");
document.writeln("<h3 style='background-color:red;'> This is H3 format </h3>");

function paint (params) {
    document.getElementById("dynamicSection");

    var section = document.getElementById("dynamicSection");
 
    section.className = "highlight";

    var color= document.getElementById("colorvalue");
    section.style.backgroundColor = color.value;

    //alert(color.value);
    console.log(color.value);

    //create text, then set, then append
    var text = document.createElement("p")

    text.innerHTML = "You selected..." + color.value;

    section.appendChild(text);
    section.innerText = "You selected..." + color.value;
}


function sayHello(){
    alert("hello, world");


    //1)ask the name

    var input = prompt("What is your name");

    //2)Say: "Hello, <name>"
    alert("Hello, "+ input);

    //3)Show it (append)
    section.appendChild (input)

    alert("What is your name");
    text.innerHTML = "Hello," + name.value;

function togglehighlight(){
    var textSection = document.getElementById("textsection");

    textSection.className = "highlight"
}


}