


document.addEventListener("DOMContentLoaded", function() {
    let words = document.querySelectorAll(".word");
    words.forEach((word) =>{
        let letters = word.textContent.split("");
        word.textContent = "";
        letters.forEach((letter)=>{
            let span = document.createElement("span");
            span.textContent = letter;
            span.className = "letter";
            word.append(span);
        });
    });

    let currentWordIndex = 0;
    let maxWordIndex = words.length - 1;
    words[currentWordIndex].style.opacity = "1";

    let changingText = () => {
        let currentWord = words[currentWordIndex];
        let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

        Array.from(currentWord.children).forEach((letter, i) => {
            setTimeout(() => {
                letter.className = "letter out";
            }, i * 80);
        });

        nextWord.style.opacity = "1";
        Array.from(nextWord.children).forEach((letter, i) => {
            letter.className = "letter behind";
            setTimeout(() => {
                letter.className = "letter in";
            }, 340 + i * 80);
        });

        currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
    };

    changingText();
    setInterval(changingText, 3000);
});
// education

window.addEventListener('scroll', function() {
    var element0 = document.getElementById('targetElement0');
    var element1 = document.getElementById('targetElement1');
    var element2 = document.getElementById('targetElement2');

    animateIfInView(element0);
    animateIfInView(element1);
    animateIfInView(element2);
});

function animateIfInView(element) {
    var position = element.getBoundingClientRect();

    // Check if the top of the element is within the viewport
    if (position.top >= 0 && position.top <= window.innerHeight) {
        element.classList.add('animate');
    } else {
        element.classList.remove('animate');
    }
}


// about

function moreFunction(){
    var dots = document.getElementById("dotsId");
    var moreText = document.getElementById("more");
    var btn = document.getElementById("moreId");
    if(dots.style.display === "none"){
        dots.style.display = "inline";
        btn.innerHTML ="Read more";
        moreText.style.display = "none";
    }else{
        dots.style.display = "none";
        btn.innerHTML = "Read less";
        moreText.style.display = "inline"
    }
}


// circle skills
 document.addEventListener("DOMContentLoaded", function() {
    const circles = document.querySelectorAll('.circle');
    circles.forEach(elem=>{
        var dots = parseInt(elem.getAttribute("data-dots"));
        var marked = parseInt(elem.getAttribute("data-percent"));
        var percent = Math.floor(dots * marked/ 100);
        var points = "";
        var rotate = 360 / dots;

        for(let i=0; i < dots ; i++){
            points +=`<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
        }
        elem.innerHTML = points;

        const pointsMarked = elem.querySelectorAll('.points');
        for(let j = 0; j < percent; j++){
            pointsMarked[j].classList.add('marked');
        }
    });   
 });  
//contact section
document.getElementById('contactForm').addEventListener('submit', function(event) {

    const form = event.target;
    const formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Clear each input field individually
            document.getElementById('name').value = '';
            document.getElementById('mobileNumber').value = '';
            document.getElementById('emailAddress').value = '';
            document.getElementById('emailSubject').value = '';
            document.getElementById('message').value = '';
        } else {
            alert('There was an error submitting the form. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting the form. Please try again.');
    });
});