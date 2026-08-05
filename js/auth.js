// Quacks Community - Simple Auth System


// Register

function registerUser(){

    let username = document.getElementById("username").value;

    let email = document.getElementById("email").value;

    let password = document.getElementById("password").value;



    if(username === "" || email === "" || password === ""){

        alert("Please fill all fields");

        return;

    }



    let user = {

        username: username,

        email: email,

        password: password,

        rank: "Member",

        avatar: "default.png"

    };



    localStorage.setItem(
        "quacksUser",
        JSON.stringify(user)
    );


    alert("Account created successfully!");

    window.location.href="login.html";


}





// Login

function loginUser(){


    let username =
    document.getElementById("username").value;


    let password =
    document.getElementById("password").value;



    let savedUser =
    JSON.parse(
        localStorage.getItem("quacksUser")
    );



    if(
        savedUser &&
        savedUser.username === username &&
        savedUser.password === password
    ){


        localStorage.setItem(
            "loggedIn",
            "true"
        );


        alert("Welcome "+username);


        window.location.href="profile.html";


    }

    else{


        alert("Wrong username or password");


    }


}
