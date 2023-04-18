const word_el = document.getElementById('word');
const popup = document.getElementById('popup-container');
const massage = document.getElementById('success-message')
function getRandomWord(){
    const words = ["javascript", "java", "python"];
    return words[Math.floor(Math.random() * words.length)]
}

const correctLetters = ['j','a'];
const wrongLetters = [];
function displayWord(){
    const selectedWord = getRandomWord()

    word_el.innerHTML = `
    ${selectedWord.split('').map(letter => `
    <div class="letter">
    ${correctLetters.includes(letter) ? letter : ''}</div>`).join('')}
    `;

    const w = word_el.innerText.replace(/\n/g,'')
    if(w === selectedWord) {
        popup.style.display = 'flex';
        message_el.innerText = 'Congratulations you won'
    }
}

displayWord()

