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

function filterChecks() {
    let paidElems = document.getElementsByClassName("paid");
    let volElems = document.getElementsByClassName("voluntary");
    let eduElems = document.getElementsByClassName("education");
    let publElems = document.getElementsByClassName("publications");

    let filterElems = [[paidElems, "showPaid"], [volElems, "showVoluntary"], [eduElems, "showEducation"], [publElems, "showPublications"]];

    for (let i = 0; i < filterElems.length; i++) {
        for (let j = 0; j < filterElems[i][0].length; j++) {
            if (document.getElementById(filterElems[i][1]).checked) {
                filterElems[i][0][j].style.display = "initial";
            }
            else {
                filterElems[i][0][j].style.display = "none";
            }
        }
    }
}

window.onload = function showSummary() {
    let variables = ['.summary', '.courses', '.start', '.end'];
    document.querySelectorAll('.wrapper section').forEach((section) => {
        section.addEventListener('click', function() {
            variables.forEach((variable) => {
                if (section.querySelector(variable)) {
                    if (section.querySelector(variable).style.visibility == "visible") { 
                        section.querySelector(variable).style.visibility = "hidden"; 
                        section.querySelector(variable).style.opacity = 0;
                    }
                    else {
                        document.querySelectorAll(variable).forEach((varia) => {
                            if (varia.style.visibility == "visible") {
                                varia.style.visibility = "hidden";
                                varia.style.opacity = 0;
                            }
                        });
                        section.querySelector(variable).style.visibility = "visible"; 
                        section.querySelector(variable).style.opacity = 1;
                    }
                }
            });
        })
    });
}
