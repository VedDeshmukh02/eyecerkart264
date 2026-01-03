const checkbox = document.getElementById('notescb');
const inputs = document.getElementsByClassName('inputs');

const today = new Date().toDateString();
const savedDate = localStorage.getItem('savedDate')

if (savedDate !== today) {
    for (let input of inputs) {
        input.value = ''
    }
    checkbox.checked = false;

    localStorage.clear();
    localStorage.setItem('savedDate', today);
} 

checkbox.checked = localStorage.getItem('checkState') === 'true';

checkbox.addEventListener('change', () => {
    localStorage.setItem('checkState', checkbox.checked);
});

for (let i = 0; i < inputs.length; i++) {
    const savedValue = localStorage.getItem('input-' + i);
    if (savedValue !== null) {
        inputs[i].value = savedValue;
    }
     inputs[i].addEventListener('input', function() {
        localStorage.setItem('input-' + i, this.value);
     });
}

