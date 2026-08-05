async function copyText(text) {

    let success = false;


    if (navigator.clipboard && navigator.clipboard.writeText) {

        try {

            await navigator.clipboard.writeText(text);

            success = true;

        } catch (err) {

            success = false;

        }

    }



    if (!success) {

        const textarea = document.createElement("textarea");

        textarea.value = text;

        textarea.style.position = "fixed";

        textarea.style.left = "-9999px";


        document.body.appendChild(textarea);


        textarea.select();


        try {

            success = document.execCommand("copy");

        } catch (err) {

            success = false;

        }


        document.body.removeChild(textarea);

    }



    if (success) {

        alert("Copied: " + text);

    } else {

        alert("Copy failed");

    }

}
