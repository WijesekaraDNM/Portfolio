


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

//contacts
// const form = document.querySelector("contact-form");
// const fullName = document.getElementById("name");
// const mobileNumber = document.getElementById("mobileNumber");
// const email = document.getElementById("emailAddress");
// const subject = document.getElementById("emailSubject");
// const message = document.getElementById("message");

// function sendEmail(){

//     const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${emailAddress.value}
//      <br> Phone Number: ${mobileNumber.value} <br> Message: ${message.value} `;
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "99.wijesekara@gmail.com",
//         Password : "1A5A24B4D3F53A317C1F90F4FF2FD80E5B4A",
//         To : "99.wijesekara@gmail.com",
//         From : "99.wijesekara@gmail.com",
//         Subject : subject.value,
//         Body : bodyMessage
//     }).then(
//         message => {
//             if (message == "OK"){
//                 Swal.fire({
//                     title: "Success!",
//                     text: "Message sent successfully!",
//                     icon: "success"
//                 });
//             }
//         }
//     ).catch(
//         error => console.error(error)
//     );
// }

// form.addEventListener("submit", (e)=> {
//     checkInputs();
//     sendEmail();
// });

// function checkInputs(){
//     const items = document.querySelectorAll(".item");

//     for (const item of items ){
//         if(item.value == ""){
//             item.classList.add("error");
//             item.parentElement.classList.add("error");

//         }

//         item.addEventListener("keyup", () =>{
//             if (item.value != ""){
//                 item.classList.remove("error");
//                 item.parentElement.classList.remove("error");
//             }
//             else{
//                 item.classList.add("error");
//                 item.parentElement.classList.add("error");
//             }
//         })
//     }
// }
