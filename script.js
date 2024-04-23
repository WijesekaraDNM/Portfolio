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

//document.addEventListener('DOMContentLoaded', function() {
    // const circles = document.querySelectorAll('.circle');

    // console.log("Number of circles found:", circles.length);

    // circles.forEach(circle => {
    //     const dots = parseInt(circle.getAttribute("data-dots"));
    //     const marked = parseInt(circle.getAttribute("data-percent"));
    //     const percent = Math.floor(dots * marked / 100);
    //     let points = "";
    //     const rotate = 360 / dots;

    //     console.log("Dots:", dots);
    //     console.log("Marked:", marked);
    //     console.log("Percent:", percent);

    //     for (let i = 0; i < dots; i++) {
    //         points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    //     }

    //     circle.innerHTML = points;

    //     const pointsMarked = circle.querySelectorAll('.points');

    //     console.log("Number of points:", pointsMarked.length);

    //     pointsMarked.forEach((point, index) => {
    //         if (index < percent) {
    //             point.classList.add('marked');
    //         }
    //     });
    // });
//});


