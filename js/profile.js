// Load user data


let user = JSON.parse(
    localStorage.getItem("quacksUser")
);



if(user){


    document.getElementById("profileName").innerText =
    user.username;



    document.getElementById("profileRank").innerText =
    "👤 " + user.rank;



    document.getElementById("profileEmail").innerText =
    "📧 " + user.email;



}





// Upload avatar


const upload =
document.getElementById("upload");


const avatar =
document.getElementById("avatar");



upload.addEventListener("change", function(){


    let file = this.files[0];


    if(file){


        avatar.src =
        URL.createObjectURL(file);


    }


});
