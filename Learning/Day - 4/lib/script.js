

var bookName, authorName, categories, password;


function newBook(){

    bookName = document.getElementById('bookName').value;
    authorName = document.getElementById('authorName').value;
    categories = document.getElementById('categoriesSelect').value;
    password = document.getElementById('bookPassword').value;


    if(password === "aslanamca" && bookName !== null && authorName !== null && categories !== null){
        console.log("added book!");
        alert(bookName + " - " + authorName + "   " + "added!");
        window.location.href = "index.html";
    }
    else{
        alert("invalid values!");
    }

    
}




