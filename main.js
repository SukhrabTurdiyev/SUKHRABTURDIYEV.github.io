// Get DOM elements
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const submitButton = document.querySelector('button[type="submit"]');

const alertContainer = document.getElementById('alert-container');

// Event listeners
form.addEventListener('submit', handleSubmit);

// Functions
function handleSubmit(event) {
  event.preventDefault(); // Prevent form submission

  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  // Simulate sending data to a server
  setTimeout(() => {
    const alertMessage = `Thank you for your message, ${name}! We will get back to you as soon as possible.`;
    showAlert(alertMessage, 'success');
    form.reset();
  }, 2000);
}

function showAlert(message, type) {
  const alertDiv = document.createElement('div');
  alertDiv.classList.add('alert', `alert-${type}`);
  alertDiv.textContent = message;
  alertContainer.appendChild(alertDiv);

  // Remove alert after 5 seconds
  setTimeout(() => {
    alertDiv.remove();
  }, 5000);
}

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active");
});