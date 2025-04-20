aws_amplify.Amplify.configure({
  Auth: {
    region: 'us-east-1',
    userPoolId: 'us-east-1_8S6jxmVJk',
    userPoolWebClientId: 'ibod29isen6271n532dgvine8',
    identityPoolId: 'us-east-1:68aa067a-98ab-4830-9766-4c667df1c5db'
  }
});
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  aws_amplify.Auth.signIn(username, password)
    .then(user => {
      alert("Login successful!");
      window.location.href = "dashboard.html";  // 🔁 Redirect to dashboard
    })
    .catch(err => {
      alert("Login failed: " + err.message);
      console.error(err);
    });
}
function checkAuth() {
  aws_amplify.Auth.currentAuthenticatedUser()
    .then(user => {
      console.log("User is authenticated:", user.username);
      // You can also load user data here if needed
    })
    .catch(err => {
      console.warn("User not authenticated, redirecting...");
      window.location.href = "login.html";  // 🔁 Redirect if not logged in
    });
}
