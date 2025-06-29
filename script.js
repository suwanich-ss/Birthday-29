const questions = [
    {
        image: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExM21tNnFzempyeG1na2t1NHFxeHZ3NDF1cDkzcmV2M2RhNzcwam5yMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Lv2VhwHrt6ljhvZ6LF/giphy.gif",
        question: "เราไปเดทครั้งแรกกันที่ไหน? 💕",
        options: ["โรงเรียน", "สวนสาธารณะ", "มหาลัย", "งานวัด"],
        correct: 3,
        story: "แฟนจำได้มั้ยย เราไปงานวัดด้วยกันแล้วมันเป็นอะไรที่มีความสุขมากเลยย แฟนสวยมากก 💕"
    },
    {
        image: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2RpdDYzNHNocG83eGNud2J4MjVjemQ0dTVycG5ldWtra292OXFkcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xR5cPyPoL5HVXSphqA/giphy.gif",
        question: "เราเป็นแฟนกันวันที่เท่าไหร่? 💖",
        options: ["26 กุมภาพันธ์", "16 มีนาคม", "1 เมษายน", "26 มีนาคม"],
        correct: 3,
        story: "ใช่แล้วมันคือวันที่ 26 มีนาคม เค้าตื้อแฟนนานมากก กว่าแฟนจะยอมรับ เค้ารักแฟนนะค้าบ เจ้าเด็กขี้น้อยใจของเค้า 💕✨"
    },
    {
        image: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGF5amloeTM1ZnRhbjdsa3gxYzNkbTFvaXd5eDI2cDVwZzV1czZ1YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/EbGJAAFcGwmrt4t4vo/giphy.gif",
        question: "อาหารที่แฟนชอบที่สุดคืออะไร? 🍜",
        options: ["ส้มตำ/ก๋วยเตี๋ยว/ข้าวมันไก่", "ผัดไทย", "ข้าวผัด", "ต้มยำกุ้ง"],
        correct: 0,
        story: "เค้าเห็นแฟนกินบ่อยย แล้วแฟนก็ชอบบอกว่าแฟนชอบกินเส้น เค้าเดาใจแฟนถูกใช่มะ อิอิ🍚💕"
    },
    {
        image: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmJnNTNpb2dpZmdqaTN6NXc1MHYxNHM5cndtb3ZjaWo5cWo2ZDdzOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/R26ERFVcOuANi3EWfT/giphy.gif",
        question: "เค้าเรียกแฟนว่าอะไร? 💝",
        options: ["ที่รัก", "แฟน", "คุณหนู", "เบบี๋"],
        correct: 1,
        story: "เอาจริงเค้าก็เรียกแฟนหลายอยากแหละแต่ชอบสุดก็คงเป็น แฟนน เพราะแฟนเค้าสวยย 🍯💕"
    },
    {
        image: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDMzdW13aXNxZDQwbm5lYW8wZ3JhaDNzOXh1b3Z3N2l1MW9kcmt1NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DdJ9RsY88uBarMvVsb/giphy.gif",
        question: "เค้าหวงแฟนแค่ไหน",
        options: ["100%", "15%", "50%", "0%"],
        correct: 0,
        story: "แน่นอนแฟน เค้าหวงแฟน 100% เพราะแฟนสวย ไม่อยากเสียแฟนไปเลยย💕"
    }
];
const floatingEmojis = ['💖', '🎂', '💕', '🎉', '💝', '🎈', '✨', '🌟', '💫', '🎁', '🎊', '💐', '🌹', '💗'];
let currentQuestion = 0;
let score = 0;
let answered = false;

function createFloatingEmoji() {
    const emojiContainer = document.querySelector('.floating-emojis');
    const emoji = document.createElement('div');
    emoji.className = 'floating-emoji';
    emoji.textContent = floatingEmojis[Math.floor(Math.random() * floatingEmojis.length)];
    emoji.style.left = Math.random() * 100 + '%';
    emoji.style.animationDuration = (Math.random() * 3 + 5) + 's';
    emoji.style.fontSize = (Math.random() * 1 + 1.5) + 'rem';

    emojiContainer.appendChild(emoji);


    setTimeout(() => {
        if (emoji.parentNode) {
            emoji.parentNode.removeChild(emoji);
        }
    }, 8000);
}


function startFloatingEmojis() {

    setInterval(() => {
        createFloatingEmoji();
    }, Math.random() * 2000 + 2000);
}

function startGame() {
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('questionScreen').style.display = 'block';
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestion];


    document.getElementById('questionCounter').textContent = `คำถามที่ ${currentQuestion + 1} จาก ${questions.length}`;
    document.getElementById('questionImage').src = question.image;
    document.getElementById('questionText').textContent = question.question;


    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.onclick = () => selectAnswer(index);
        optionsContainer.appendChild(optionElement);
    });


    document.getElementById('storyText').classList.add('hidden');
    document.getElementById('nextBtn').classList.add('hidden');
    answered = false;
}

function selectAnswer(selectedIndex) {
    if (answered) return;

    answered = true;
    const question = questions[currentQuestion];
    const options = document.querySelectorAll('.option');

    options.forEach((option, index) => {
        if (index === question.correct) {
            option.classList.add('correct');
        } else if (index === selectedIndex && index !== question.correct) {
            option.classList.add('wrong');
        }
        option.style.pointerEvents = 'none';
    });

    if (selectedIndex === question.correct) {
        score++;
        for (let i = 0; i < 3; i++) {
            setTimeout(() => createFloatingEmoji(), i * 200);
        }
    }

    // แสดงเรื่องราว
    setTimeout(() => {
        document.getElementById('storyText').textContent = question.story;
        document.getElementById('storyText').classList.remove('hidden');
        document.getElementById('nextBtn').classList.remove('hidden');
    }, 1000);
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion >= questions.length) {
        showFinalScreen();
    } else {
        showQuestion();
    }
}

function showFinalScreen() {
    document.getElementById('questionScreen').style.display = 'none';
    document.getElementById('finalScreen').style.display = 'block';

    const percentage = Math.round((score / questions.length) * 100);
    document.getElementById('finalScore').textContent = `คะแนน: ${score}/${questions.length} (${percentage}%)`;

    for (let i = 0; i < 10; i++) {
        setTimeout(() => createFloatingEmoji(), i * 100);
    }
}

function restartGame() {
    currentQuestion = 0;
    score = 0;
    answered = false;
    document.getElementById('finalScreen').style.display = 'none';
    document.getElementById('startScreen').style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function () {
    startFloatingEmojis();
});