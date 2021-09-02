// for (i = 0; i < 10; i++) {
//   document.body.innerHTML += `<p>${i}</p>`;
// }

const ans = "Password";
let user = "";
while (user != ans) {
  user = prompt("Enter your Password");
  if (user === ans) {
    alert("Welcome to the program");
  } else {
    alert("Incorrect password, try again");
  }
}
