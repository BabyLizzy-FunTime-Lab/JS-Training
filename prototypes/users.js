// constructor function
function User(userName, userAge) {
  // "this" represents the context in which the function is called
  // in case of a constructor, "this" always refers to the object being constructed
  this.name = userName;
  this.age = userAge;
}

User.prototype.isANicePerson = true;

User.prototype.display = function() {
  let userElement = document.createElement("div");
  userElement.setAttribute("id", this.name)
  userElement.innerText = this.name + " (" + this.age + ")";
  document.getElementById("container").appendChild(userElement);

  let deleteBtn = document.createElement("BUTTON");

  let btnText = document.createTextNode("DELETE");
  deleteBtn.appendChild(btnText);

  deleteBtn.setAttribute("id", this.name + this.age);
  
  document.getElementById(this.name).appendChild(deleteBtn);

  deleteBtn.addEventListener("click", function(event) {
    let elementToRemove = event.target.parentNode;
    elementToRemove.remove();
  });
};

let g_users = [
  new User("Erwin", 44),
  new User("Gabor", 25),
  new User("Melvin", 30)
];

document.addEventListener("DOMContentLoaded", function() {
  for (let user of g_users) {
    //displayUser(user);
    // the variable 'user' is the context in which display() gets called => inside display(), this === user
    user.display();
  }

  document.getElementById("addUserBtn").addEventListener("click",
    function(event) {
      let newUser = new User(
        document.getElementById("userName").value,
        document.getElementById("userAge").value
      );

      g_users.push(newUser);
      //displayUser(newUser);
      newUser.display();

      event.preventDefault();
    }
  );
});

