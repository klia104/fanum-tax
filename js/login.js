document.getElementById("loginForm").onsubmit = function (e) {
  e.preventDefault();
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();

  const credentials = {
    user1: "iamuser",
    admin: "iamadmin"
  };

  if (credentials[user] === pass) {
    localStorage.setItem("loggedInUser", user);
    if (user === "admin") {
      window.location.href = "admin_notifications.html";
    } else {
      window.location.href = "notifications.html";
    }
  } else {
    alert("Invalid username or password");
  }
};
