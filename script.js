const textArea = document.getElementById('text');
const submit = document.querySelector('.submit');
const count = document.querySelector('.word-count');

textArea.addEventListener('keydown', () => {
  submit.classList.remove('hide');
})

submit.addEventListener('click', (e) => {
  e.preventDefault();
  wordArr = textArea.value.split(' ')
  console.log(wordArr.length);

  wordArr.length === 1 ? count.innerHTML = 'Just one' :
    count.innerHTML = `${wordArr.length} words`;
})