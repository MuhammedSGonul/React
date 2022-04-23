
/* User login check */

loginState = localStorage.getItem("loginState");

const checkUserSign = () => {
    let nav1 = document.getElementById("nav-1");
    
    if(loginState == "true"){
        let signOutBtn = document.createElement("a");
        nav1.appendChild(signOutBtn);
        signOutBtn.innerText = "Sign Out";
        signOutBtn.href = "";
        signOutBtn.className = "nav-login";
        signOutBtn.addEventListener("click", userSignOut);   


        let accountBtn = document.createElement("a");
        nav1.appendChild(accountBtn);
        accountBtn.innerText = "Account";
        accountBtn.href = "account.html";
        accountBtn.className = "nav-account";
    }
    else{
        let signInBtn = document.createElement("a");
        nav1.appendChild(signInBtn);
        signInBtn.innerText = "Sign In";
        signInBtn.href = "signIn.html";
        signInBtn.className = "nav-login";
    }
}

/* User login check */

/* User sign out*/

const userSignOut = () => {
    loginState = false;
    localStorage.setItem("loginState", false);
    window.location.href = "index.html";
}

/* User sign out*/

/* Start */

checkUserSign();

/* Start */