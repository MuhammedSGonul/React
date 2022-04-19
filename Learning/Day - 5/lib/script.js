var id, bookName, authorName, categories, password, removeBookID;

var dataA = [],
  dataB = [],
  dataC = [];

  
id = localStorage.getItem("id");
dataA = JSON.parse(localStorage.getItem("dataA")) || [];
dataB = JSON.parse(localStorage.getItem("dataB")) || [];
dataC = JSON.parse(localStorage.getItem("dataC")) || [];




checkTable();


function getDataBook() {
  bookName = document.getElementById("bookName").value;
  authorName = document.getElementById("authorName").value;
  categories = document.getElementById("categoriesSelect").value;
  password = document.getElementById("bookPassword").value;

  if (
    password === "aslanamca" &&
    bookName !== null &&
    authorName !== null &&
    categories !== null
  ) {
    addBook();
    console.log("Added Book!");
    alert(bookName + " - " + authorName + " " + "added!");
    window.location.href = "index.html";
  } else {
    alert("Invalid Values!");
  }
}

function addBook() {
  if (id == null) {
    id = 0;
    localStorage.setItem("id", id);
  }

  id = localStorage.getItem("id");
  id = Number(id) + 1;
  dataA.push(bookName);
  dataB.push(authorName);
  dataC.push(categories);

  localStorage.setItem("id", id);
  localStorage.setItem("dataA", JSON.stringify(dataA));
  localStorage.setItem("dataB", JSON.stringify(dataB));
  localStorage.setItem("dataC", JSON.stringify(dataC));
}

function checkTable() {
  dataA = JSON.parse(localStorage.getItem("dataA")) || [];
  dataB = JSON.parse(localStorage.getItem("dataB")) || [];
  dataC = JSON.parse(localStorage.getItem("dataC")) || [];

  for (var i = 0; i < id; i++) {
    createTable(Number(i + 1), dataA[i], dataB[i], dataC[i]);
  }
}

function createTable(r1, r2, r3, r4) {
  let tr = document.createElement("tr");
  let r_id = document.createElement("td");
  let r_name = document.createElement("td");
  let r_author = document.createElement("td");
  let r_categ = document.createElement("td");

  tr.appendChild(r_id);
  tr.appendChild(r_name);
  tr.appendChild(r_author);
  tr.appendChild(r_categ);

  document.getElementById("tbody").appendChild(tr);

  r_id.innerHTML = r1;
  r_name.innerHTML = r2;
  r_author.innerHTML = r3;
  r_categ.innerHTML = r4;
}



function removeBook(){
    removeBookID = document.getElementById("removeBookID").value;
    

    alert(dataA[removeBookID - 1] + " " + "succesfully removed");


    dataA.splice(removeBookID - 1, 1);
    dataB.splice(removeBookID - 1, 1);
    dataC.splice(removeBookID - 1, 1);
    id = Number(id) - 1;

    localStorage.setItem("dataA", JSON.stringify(dataA));
    localStorage.setItem("dataB", JSON.stringify(dataB));
    localStorage.setItem("dataC", JSON.stringify(dataC));
    localStorage.setItem("id", id);
    
    window.location.href = "index.html";

}