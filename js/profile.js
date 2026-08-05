const upload = document.getElementById("upload");

const avatar = document.getElementById("avatar");


upload.addEventListener("change", function(){

    const file = this.files[0];


    if(file){

        avatar.src = URL.createObjectURL(file);

    }

});
