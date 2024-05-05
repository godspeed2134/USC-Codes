const form = document.getElementById('name-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    alert(`Hello, ${name}!`);
});
