document.getElementById("signupForm").onsubmit = function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    alert("Please fill in both fields.");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users") || "{}");

  if (users[username]) {
    alert("Username already exists!");
    return;
  }

  users[username] = password;
  localStorage.setItem("users", JSON.stringify(users));

  alert("Account created! Please log in.");
  window.location.href = "index.html";
};
