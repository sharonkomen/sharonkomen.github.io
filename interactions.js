function filterChecks() {
    let paidElems = document.getElementsByClassName("paid");
    let volElems = document.getElementsByClassName("voluntary");
    let eduElems = document.getElementsByClassName("education");
    let publElems = document.getElementsByClassName("publications");

    if (document.getElementById("showPaid").checked) {
        for (let i = 0; i < paidElems.length; i++) {
            paidElems[i].style.display = "initial";
        }
    }
    else {
        for (let i = 0; i < paidElems.length; i++) {
            paidElems[i].style.display = "none";
        }
    }

    if (document.getElementById("showVoluntary").checked) {
        for (let i = 0; i < volElems.length; i++) {
            volElems[i].style.display = "initial";
        }
    }
    else {
        for (let i = 0; i < volElems.length; i++) {
            volElems[i].style.display = "none";
        }
    }

    if (document.getElementById("showEducation").checked) {
        for (let i = 0; i < eduElems.length; i++) {
            eduElems[i].style.display = "initial";
        }
    }
    else {
        for (let i = 0; i < eduElems.length; i++) {
            eduElems[i].style.display = "none";
        }
    }

    if (document.getElementById("showPublications").checked) {
        for (let i = 0; i < publElems.length; i++) {
            publElems[i].style.display = "initial";
        }
    }
    else {
        for (let i = 0; i < publElems.length; i++) {
            publElems[i].style.display = "none";
        }
    }
}

window.onload = function getAge() {
    let today = new Date();
    let birthday = new Date(1994, 10, 6, 0, 0, 0);
    let age = today.getFullYear() - birthday.getFullYear();

    if (today.getMonth() == birthday.getMonth()) {
        if (today.getDate() >= birthday.getDate()) {
            age = age;
        }
        else {
            age = age - 1;
        }
    }
    else if (today.getMonth() <= birthday.getMonth()) {
        age = age - 1;
    }

    return document.getElementById('age').innerHTML = age + ' years old';
}

function showGeneral() {
    let backgroundInfo = document.getElementById('background');
    if (window.getComputedStyle(backgroundInfo).display == "none") {
        document.getElementById('generalBtn').style.backgroundColor = "#fb0";
        return backgroundInfo.style.display = "flex";
    }
    document.getElementById('generalBtn').style.backgroundColor = "#fff";
    return backgroundInfo.style.display = "none";
}

function showFilter() {
    if (window.getComputedStyle(document.getElementById('filter')).display == "none") {
        document.getElementById('filterBtn').style.backgroundColor = "#fb0";
        return document.getElementById('filter').style.display = "flex";
    }
    document.getElementById('filterBtn').style.backgroundColor = "#fff";
    return document.getElementById('filter').style.display = "none";
}