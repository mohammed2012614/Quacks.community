/*
============================================
Quacks Community
copy.js
============================================
*/

"use strict";

/*
    Copy text to clipboard
*/

async function copyText(text, successMessage = "Copied!") {

    let success = false;

    // Modern Clipboard API

    if (navigator.clipboard && window.isSecureContext) {

        try {

            await navigator.clipboard.writeText(text);

            success = true;

        }

        catch (e) {}

    }

    // Fallback

    if (!success) {

        const textarea = document.createElement("textarea");

        textarea.value = text;

        textarea.setAttribute("readonly", "");

        textarea.style.position = "fixed";

        textarea.style.left = "-9999px";

        textarea.style.top = "-9999px";

        document.body.appendChild(textarea);

        textarea.focus();

        textarea.select();

        try {

            success = document.execCommand("copy");

        }

        catch (e) {

            success = false;

        }

        document.body.removeChild(textarea);

    }

    if (success) {

        showToast(successMessage);

    }

    else {

        showToast("Copy failed");

    }

}



/*
    Toast Notification
*/

function showToast(message) {

    let toast = document.querySelector(".toast");

    if (!toast) {

        toast = document.createElement("div");

        toast.className = "toast";

        document.body.appendChild(toast);

    }

    toast.textContent = message;

    toast.style.opacity = "1";

    toast.style.pointerEvents = "auto";

    clearTimeout(toast.hideTimer);

    toast.hideTimer = setTimeout(() => {

        toast.style.opacity = "0";

        toast.style.pointerEvents = "none";

    }, 2200);

}



/*
============================================
Quacks Community Copy Buttons
============================================
*/

function copyJavaIP() {

    copyText(
        "ducklin.ddns.net:26377",
        "Java IP Copied!"
    );

}


function copyBedrockIP() {

    copyText(
        "ducklin.ddns.net",
        "Bedrock IP Copied!"
    );

}


function copyBedrockPort() {

    copyText(
        "26377",
        "Port Copied!"
    );

}


function copyDiscord() {

    copyText(
        "https://discord.gg/quacks",
        "Discord Link Copied!"
    );

}



/*
============================================
Auto Events
============================================
*/

document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll("[data-copy]").forEach(button => {

        button.addEventListener("click", () => {

            copyText(

                button.dataset.copy,

                button.dataset.message || "Copied!"

            );

        });

    });

});
