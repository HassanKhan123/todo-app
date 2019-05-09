var ide;
var sib;

function add() {

  var input = document.getElementById("todo");
  var text = document.querySelector("#todo").value;

  if (text === "") {
    input.placeholder="Please insert some value";
    
  }
  else {

    var ul = document.querySelector("ul");

    var li = document.createElement("li");
    var span = document.createElement("span");
    span.innerHTML = text;

    var btn = document.createElement("button");
    var edit = document.createElement("button");
    ide = Math.random();
    span.setAttribute("id", ide);


    console.log(span.innerHTML + "------------" + span.id);
    console.log(span);



    edit.style.marginRight = "20px";
    btn.setAttribute("onClick", "del(this)");
    //edit.setAttribute("id",Math.random());
    edit.setAttribute("onClick", "edit(this,ide)");


    li.className = "list-group-item d-flex flex-row align-items-center";
    span.className = "flex-grow-1";
    btn.className = "btn btn-danger";
    edit.className = "btn btn-primary";



    btn.innerHTML = "Delete";
    edit.innerHTML = "Edit";
    li.appendChild(span);

    li.appendChild(edit);
    li.appendChild(btn);


    ul.appendChild(li);


    input.value = "";




  }




  //return false;


}


function edit(e, ide) {
  var input = document.getElementById("todo");
  var span = document.getElementById(ide);


  var upd = document.getElementById("update");

  sib = e.previousSibling;
  input.value = sib.innerHTML;


  upd.setAttribute("onClick", "insert(ide,sib)");
  console.log(e.previousSibling.innerHTML);





  //input.value=e.span.innerHTML;


}

function insert(ide, e) {
  var text = document.getElementById("todo");
  var input = document.getElementById("todo").value;
  var span = document.getElementById(ide);


  if (input === "") {
    text.placeholder="Please insert some value";
    
    
  }
  else {
    //span.innerHTML =input ;
    e.innerHTML = input;
    text.value = "";

    //console.log(span);
    console.log(e);

  }


}

function del(e) {
  var ul = document.querySelector("ul");

  var parent = e.parentNode;
  ul.removeChild(parent);
}


