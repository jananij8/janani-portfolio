// Typing Animation

const text = [
    "IoT Systems",
    "Cloud Integration",
    "Embedded C++",
    "Machine Learning"
];

let index = 0;
let charIndex = 0;
let currentText = "";

const typing = document.getElementById("typing");


function typeEffect(){

    if(charIndex < text[index].length){

        currentText += text[index].charAt(charIndex);
        typing.textContent = currentText;
        charIndex++;

        setTimeout(typeEffect,100);

    }
    else{

        setTimeout(eraseEffect,1500);

    }

}


function eraseEffect(){

    if(charIndex > 0){

        currentText = text[index].substring(0,charIndex-1);
        typing.textContent = currentText;
        charIndex--;

        setTimeout(eraseEffect,50);

    }
    else{

        index++;

        if(index >= text.length){
            index = 0;
        }

        setTimeout(typeEffect,500);

    }

}


typeEffect();



// Scroll Animation

const sections = document.querySelectorAll("section");


window.addEventListener("scroll",()=>{

    sections.forEach(section=>{

        let position = section.getBoundingClientRect().top;

        if(position < window.innerHeight - 100){

            section.style.opacity="1";
            section.style.transform="translateY(0)";

        }

    });

});


// Initial animation style

sections.forEach(section=>{

    section.style.opacity="0";
    section.style.transform="translateY(50px)";
    section.style.transition="0.8s";

});