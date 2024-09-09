const url = 'https://randomuser.me/api/';

document.getElementById('fetchUserBtn').addEventListener('click', () => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            const userCard = document.getElementById('userCard');

            userCard.innerHTML = `
                <img src="${user.picture.large}" alt="User Image">
                <h2>${user.name.first} ${user.name.last}</h2>
                <p>${user.gender.charAt(0).toUpperCase() + user.gender.slice(1)}</p>
                <p>${user.email}</p>
                <p>${user.cell}</p>
            `;

            userCard.style.display = 'block';
        })
        .catch(error => console.error('Error:', error));
});

