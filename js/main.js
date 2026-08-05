function copyText(text){

    if(navigator.clipboard){

        navigator.clipboard.writeText(text)
        .then(function(){

            alert("Copied: " + text);

        });

    } else {

        let input = document.createElement("input");

        input.value = text;

        document.body.appendChild(input);

        input.select();

        document.execCommand("copy");

        input.remove();

        alert("Copied: " + text);

    }

}
