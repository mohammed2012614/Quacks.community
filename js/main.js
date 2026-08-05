function copyText(text){

    const temp = document.createElement("input");

    temp.value = text;

    document.body.appendChild(temp);

    temp.select();

    document.execCommand("copy");

    document.body.removeChild(temp);


    alert("Copied: " + text);

}
