const API_URL = "https://api.spacexdata.com/v3/capsules";

fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
        var screen = document.getElementById('screen');
        data.map((element) => {
            const a = document.createElement("a");
            const linkText = document.createElement(element.capsule_serial);
            a.appendChild(linkText);
            a.target="_blank"
            a.href = "https://api.spacexdata.com/v3/capsules/" + element.capsule_serial;
            a.classList.add(element.capsule_serial);
            const newContent = document.createTextNode(element.capsule_serial);  
            a.appendChild(newContent)
            document.body.insertBefore(a, screen);
        })
        
    });

(() => {


})