
function addPara() // function to creat para1 dynamically
{
    var p1=document.createElement('p'); // creating the element <p>
    var t = document.createTextNode("The Document object model is a programming interface for HTML and XML"+
    " document.It represents the page so that programme can change the document structure,"+
    " style and content.The DOM represents the document as node and objects.That way programming "+
    "language can connect to the page ");                        // Create a text node
    p1.appendChild(t);    //appending the textnode to the element <p>
    p1.style.color='purple';    //setting the text color to purple
    document.body.appendChild(p1); // appending <p> to the <body>
}
function addAnotherPara()   // function to creat para2 dynamically
{
    var p2=document.createElement('p');     // creating the element <p>
    var t = document.createTextNode("A web page is a document.This document can be either displayed "+
    "in the browser window or as the HTML source.But it is the same document in both the cases.The DOM "+
    "represent that same document so it can be manipulated.The DOM is an object oriented representation "+
    "of the web page, which can be modified with a scripting language such as javascript");    // Create a text node
    p2.appendChild(t);     //appending the textnode to the element <p>
    p2.style.color='red';    //setting the text color to red
    document.body.appendChild(p2);  // appending <p> to the <body>
    document.body.style.backgroundColor='lightgray'; //setting the body color to gray
}
