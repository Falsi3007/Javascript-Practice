// // logic.js
// const userInput = document.getElementById('user-input');
// const userCard = document.getElementById('user-card');

// // Debounce function to limit API calls
// function debounce(func, delay) {
//   let timeoutId;
//   return function () {
//     const context = this;
//     const args = arguments;

//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => {
//       func.apply(context, args);
//     }, delay);
//   };
// }

// // Function to fetch user data from the RandomUser.me API
// async function fetchUserData(username) {
//   try {
//     const response = await fetch(`https://randomuser.me/api/?results=1&username=${username}`);
//     const data = await response.json();

//     // Extract user information
//     const user = data.results[0];
//     const fullName = `${user.name.first} ${user.name.last}`;
//     const email = user.email;
//     const picture = user.picture.large;

//     // Display user information in the card
//     userCard.innerHTML = `
//       <div>
//         <img src="${picture}" alt="User Image" />
//       </div>
//       <div>
//         <p>Name: ${fullName}</p>
//         <p>Email: ${email}</p>
//       </div>
//     `;
//   } catch (error) {
//     console.error('Error fetching user data:', error);
//   }
// }

// // Debounced version of the fetchUserData function
// const debouncedFetchUserData = debounce((username) => {
//   if (username.trim() !== '') {
//     fetchUserData(username);
//   } else {
//     // Clear the user card if the input is empty
//     userCard.innerHTML = '';
//   }
// }, 500); // Adjust the debounce delay as needed

// // Event listener for user input
// userInput.addEventListener('input', function () {
//   const username = userInput.value.trim();
//   debouncedFetchUserData(username);
// });
