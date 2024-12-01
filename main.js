var table = document.getElementById("table")
var links = document.getElementById("links-list")
var statistics = document.getElementById("statistics-body")

var verbs = [
    ["Base form", "Past tense", "Past participle", "Translation"],
    ["abide", "abode", "abode", "demeurer"],
    ["awake", "awoke", "awoken", "(se) réveiller, aussi awake/awoke/awoke"],
    ["be", "was/were", "been", "être"],
    ["bear", "bore", "borne", "porter/supporter/soutenir"],
    ["beat", "beat", "beaten", "battre"],
    ["become", "became", "become", "become"],
    ["beget", "begat", "begotten", "engendrer, aussi beget/begot/begotten"],
    ["begin", "began", "begun", "commencer"],
    ["bend", "bent", "bent", "se courber, etc."],
    ["bereave", "bereft", "bereft", "déposséder/priver"],
    ["bring", "brought", "brought", "apporter"],
    ["build", "built", "built", "construire"],
    ["burn", "burnt", "burnt", "brûler"],
    ["burst", "burst", "burst", "éclater"],
    ["buy", "bought", "", "acheter"],
    ["cast", "cast", "cast", "jeter, etc."],
    ["catch", "caught", "caught", "attraper"],
    ["chide", "chid", "chidden", "gronder/réprimander, aussi chide/chid/chid"],
    ["choose", "chose", "chosen", "choisir"],
    ["cleave", "cleft", "cleft", "fendre/coller, aussi cleave/clove/clove"],
    ["cling", "clung", "clung", "se cramponner"],
    ["come", "came", "come", "venir"],
    ["cost", "cost", "cost", "coûter"],
    ["creep", "crept", "crept", "ramper/se glisser/se hérisser"],
    ["crow", "crew", "crowed", "chanter (un coq)/jubiler"],
    ["cut", "cut", "cut", "couper"],
    ["deal", "dealt", "dealt", "distribuer/traiter"],
    ["dig", "dug", "dug", "bêcher"],
    ["do", "did", "", "faire"],
    ["draw", "drew", "drawn", "tirer/dessiner"],
    ["dream", "dreamt", "dreamt", "rêver"],
    ["drink", "drank", "drunk", "boire"],
    ["drive", "drove", "driven", "conduire"],
    ["dwell", "dwelt", "dwelt", "habiter/rester"],
    ["eat", "ate", "eaten", "manger"],
    ["fall", "fell", "fallen", "tomber"],
    ["feed", "fed", "fed", "nourrir"],
    ["feel", "felt", "felt", "(se) sentir"],
    ["fight", "fought", "fought", "combattre"],
    ["find", "found", "found", "trouver"],
];


var previousLetter = "";

var startLetters = [];

function generateElements() {
    var totalVerbs = 0;
    var verbAverage = 0;
    var alphabetDistribution = [];


    table.innerHTML = "";
    links.innerHTML = "";
    startLetters = [];

    for (let i = 65; i <= 90; i++) {
        alphabetDistribution[String.fromCharCode(i)] = 0;
    }


    for (var i = 0; i < verbs.length; i++) {
        const [baseForm, pastTense, pastParticiple, translation] = verbs[i];

        totalVerbs++;
        const firstLetter = baseForm[0].toUpperCase();
        if (alphabetDistribution[firstLetter] !== undefined) {
            alphabetDistribution[firstLetter]++;
        }


        td1 = document.createElement('td');
        var texteNode = document.createTextNode(verbs[i][0]);
        td1.setAttribute("id", verbs[i][0])
        td1.appendChild(texteNode);


        td2 = document.createElement('td');
        var texteNode = document.createTextNode(verbs[i][1]);
        td2.appendChild(texteNode);

        td3 = document.createElement('td');
        var texteNode = document.createTextNode(verbs[i][2]);
        td3.appendChild(texteNode);

        td4 = document.createElement('td');
        var texteNode = document.createTextNode(verbs[i][3]);
        td4.appendChild(texteNode);


        var btnedit = document.createElement("input");
        btnedit.setAttribute("type", "button");
        btnedit.setAttribute("onclick", `editVerb(${i})`);
        btnedit.value = "edit";

        var btnupdate = document.createElement("input");
        btnupdate.setAttribute("type", "button");
        btnupdate.setAttribute("onclick", `updateVerb(this,${i})`);
        btnupdate.value = "update";


        var btndelete = document.createElement("input");
        btndelete.setAttribute("type", "button");
        btndelete.setAttribute("onclick", "deleteVerb(this)");
        btndelete.value = "delete";


        td5 = document.createElement('td');

        if (i != 0) {
            td5.appendChild(btnedit);
            td5.appendChild(btnupdate);
            td5.appendChild(btndelete);
        }

        var row = document.createElement("tr");
        if (previousLetter !== verbs[i][0].substring(0, 1) && i !== 0) {
            row.setAttribute("id", verbs[i][0].substring(0, 1))
            previousLetter = verbs[i][0].substring(0, 1);
            startLetters.push(previousLetter);
        }
        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        row.appendChild(td4);

        row.appendChild(td5)

        table.appendChild(row);
    }

    startLetters.forEach((value) => {
        var li = document.createElement("li")
        li.innerHTML = `Here is a link to <a onclick="linkClick('${value}')" href="#${value}">verbs that start with the
                                    letter <span style="color:red;font-weight:900;" > ${value}</span></a>`
        links.appendChild(li);

    })


    statistics.innerHTML = Math.round((totalVerbs / startLetters.length)) + " Verbs on Average per letter <br>"
    for (const letter in alphabetDistribution) {
        statistics.innerHTML += `${letter} ---> ${alphabetDistribution[letter]} <br>`
    }
    console.log(alphabetDistribution);


}




// Switching Tabs
var isReversed = false;
function switchTab() {
    if (!isReversed) {
        var mainContainer = document.getElementById("main")
        mainContainer.style.flexDirection = "row-reverse";
        isReversed = true;
    } else {
        var mainContainer = document.getElementById("main")
        mainContainer.style.flexDirection = "row";
        isReversed = false;
    }
}




// Expand panels

isExpaned = false;
function expand() {
    var leftSide = document.getElementById("left-panel");
    var rightSide = document.getElementById("right-panel");
    if (!isExpaned) {
        leftSide.style.width = "60%";
        rightSide.style.width = "40%";
        isExpaned = true;
    } else {
        leftSide.style.width = "98%";
        rightSide.style.width = "2%";
        isExpaned = false;
    }

}


function editVerb(id) {
    alert("Base Form :  " + verbs[id][0] + "\n Past tense :  " + verbs[id][1] + "\n Past Participle :  " + verbs[id][2] + "\n Translation :  " + verbs[id][3])

}

function updateVerb(ele, id) {
    var base_form = prompt(`Base Form : `, verbs[id][0]);
    var past_tense = prompt(`Past tense : `, verbs[id][1]);
    var past_participle = prompt(`Past Participle : `, verbs[id][2]);
    var translation = prompt(`Translation  : `, verbs[id][3]);
    var tr = ele.parentNode.parentNode;
    var tds = Array.from(tr.childNodes);

    tds[0].innerHTML = base_form
    verbs[id][0] = base_form
    tds[1].innerHTML = past_tense
    verbs[id][1] = past_tense
    tds[2].innerHTML = past_participle
    verbs[id][2] = past_participle
    tds[3].innerHTML = translation
    verbs[id][3] = translation
    generateElements();
}

function deleteVerb(ele) {
    var tr = ele.parentNode.parentNode;
    tr.parentNode.removeChild(tr);
}



function addVerb() {
    var base_form = prompt(`Base Form : `);

    if (base_form !== "") {
        var past_tense = prompt(`Past tense : `);
        var past_participle = prompt(`Past Participle : `);
        var translation = prompt(`Translation  : `);

        verbs.push([base_form, past_tense, past_participle, translation])
        verbs.sort()
        generateElements();
    } else {
        alert("Can't add an empty Verb")
    }
}




var oldElement;
function linkClick(id) {
    if (!oldElement) {

        var ele = document.getElementById(id)
        oldElement = ele;

        ele.style.color = "red";
        ele.style.fontWeight = 900;
    } else {
        oldElement.style.color = "black"
        oldElement.style.fontWeight = 500;
        var ele = document.getElementById(id)
        oldElement = ele;
        ele.style.color = "red";
        ele.style.fontWeight = 900;
    }

}


function find() {
    var ele = document.getElementById("find-input");
    window.location = "#" + ele.value
}


document.onload = generateElements();
