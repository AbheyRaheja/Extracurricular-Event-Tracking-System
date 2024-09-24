var orgButton = document.getElementById("org-login-btn");
var studentButton = document.getElementById("student-login-btn");
var mainDiv = document.getElementById("main-container");


const generateOrgView = () => `
        
        <div class="dropdown">
        <button class = "btn btn-primary login-btn" onClick = "location.reload()" >back</button>
  <select id="Organisations" name="Organizations" class="dropbtn">
    <option value="Organizer">Organizer</option>
  <option value="Faculty">Faculty</option>
  <option value="Admin">Admin</option>
  <option value="Member of Adminstration">Adminstration</option>
  </select>
</div>

    <form action="">
                  <label for="first" class = "wh">
                        Email:
                  </label>
                  <input type="text" 
                         id="first" 
                         name="first" 
                         placeholder="Enter your Email" required>

                  <label for="password" class = "wh">
                        Password:
                  </label>
                  <input type="password"
                         id="password" 
                         name="password"
                         placeholder="Enter your Password" required>

                  <div class="wrap">
                        <button type="button"
                                class = "btn btn-primary login-btn "
                                onclick="myFunction()">
                                
                              Login
                        </button>
                  </div>
            </form>
            </script>
    `;

const generateStudentView = () => `
        <button class = "btn btn-primary login-btn" onClick = "location.reload()" style="width:auto">back</button>
        <form action="">
        
                  <label for="first" class = "wh">
                        Email:
                  </label>
                  <input type="text" 
                         id="first" 
                         name="first" 
                         placeholder="Enter your Email" required>

                  <label for="password" class = "wh">
                        Password:
                  </label>
                  <input type="password"
                         id="password" 
                         name="password"
                         className = "rax"
                         placeholder="Enter your Password" required>

                  <div class="wrap">
                        <button type="button"
                        class = "btn btn-primary login-btn"
                                onclick="myFunction()">
                              Login
                        </button>
                  </div>
            </form>
            
    `;

const updateMainContent = (content) => {
    if (mainDiv) {
        mainDiv.innerHTML = content;
    } else {
        console.error("Main div not found");
    }
};

if (orgButton) {
    console.log("44")
    orgButton.addEventListener("click", () => {
        updateMainContent(generateOrgView());
    });
}
else {
    console.log("1")
}

if (studentButton) {
    studentButton.addEventListener("click", () => {
        updateMainContent(generateStudentView());
    });
}
else {
    console.log("2")
}

