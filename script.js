// Wait until the page fully loads
document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("button");

  // Add a click event listener to the button
  button.addEventListener("click", () => {
    // Redirect to the library page
    window.location.href = "/inkbit/public/index.html";
  });
});
