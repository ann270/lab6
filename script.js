function getRandomUsers() {
    fetch('https://randomuser.me/api/?results=5')  // Отримуємо 5 користувачів
        .then(response => response.json())  // Обробляємо відповідь в форматі JSON
        .then(data => {
            const users = data.results;
            let usersContainer = document.getElementById('users-container');
            usersContainer.innerHTML = '';  // Очищаємо попередній вміст

            users.forEach(user => {
                // Створюємо HTML елемент для кожного користувача
                let userCard = `
                    <div class="user-card">
                        <img src="${user.picture.large}" alt="User picture">
                        <h3>${user.name.first} ${user.name.last}</h3>
                        <p><strong>Country:</strong> ${user.location.country}</p>
                        <p><strong>Postcode:</strong> ${user.location.postcode}</p>
                        <p><strong>Phone:</strong> ${user.phone}</p>
                    </div>
                `;
                usersContainer.innerHTML += userCard;
            });
        })
        .catch(error => console.error('Error:', error));  // Обробка помилок
    }