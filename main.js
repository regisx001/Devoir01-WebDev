var table = document.getElementById("table")

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
    ["...", "...", "...", "..."]
];


function mount() {

    for (var i = 0; i < verbs.length; i++) {

        td1 = document.createElement('td');
        var texteNode = document.createTextNode(verbs[i][0]);
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
        btnedit.setAttribute("onclick", "update(this)");
        btnedit.value = "edit";

        var btnupdate = document.createElement("input");
        btnupdate.setAttribute("type", "button");
        btnupdate.setAttribute("onclick", "update(this)");
        btnupdate.value = "update";


        var btndelete = document.createElement("input");
        btndelete.setAttribute("type", "button");
        btndelete.setAttribute("onclick", "remove(this)");
        btndelete.value = "delete";


        td5 = document.createElement('td');
        td5.appendChild(btnedit);
        td5.appendChild(btnupdate);
        td5.appendChild(btndelete);

        var row = table.insertRow(i);
        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        row.appendChild(td4);
        row.appendChild(td5)
    }

}



document.onload = mount();