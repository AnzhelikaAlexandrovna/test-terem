const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const data = [];
    Array.from(event.target)
        .filter(function (el) {
            return el.name;
        })
        .forEach(function (el) {
            data.push({ name: el.name, value: el.value });
        });
        
    const output = document.getElementById('output');
    output.innerText = JSON.stringify(data, null, 4);

    fetch('/').then(function(response) {
        alert('Данные получены');
    });
});