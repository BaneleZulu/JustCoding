const signup = document.getElementById("signup");
const maleRadioButton = document.getElementById("maleRadioButton");
const femaleRadioButton = document.getElementById("femaleRadioButton");
const femalelbl = document.getElementById("femalelbl");
const malelbl = document.getElementById("malelbl");
const password = document.getElementById("passwordtxt");

const weak = document.getElementById("weakSymbol");
const medium = document.getElementById("mediumSymbol");
const strong = document.getElementById("strongSymbol");
const passwordlbl = document.getElementById("passwordlbl");

var signupButton = document.getElementById("signupButton");

var isSignupChanged = false;
function repeatingFunc() {
    if (isSignupChanged == false) {
        signup.style.color = "gray";
        isSignupChanged = true;
    }
    else {
        signup.style.color = "white";
        isSignupChanged=false
    }    
    setTimeout(repeatingFunc, 5000);
}
setTimeout(repeatingFunc, 5000);


maleRadioButton.addEventListener("click", () => {
  malelbl.style.color = "rgba(21, 122, 221, 100%)";
  femalelbl.style.color = "white";
});

femaleRadioButton.addEventListener("click", () => {
  femalelbl.style.color = "rgba(211, 21, 132, 100%)";
  malelbl.style.color = "white";
});

password.addEventListener("click", () => {
    password.ariaPlaceholder = "amdnas";
});

function passwordStrengthChecker() {
    var isNotWeak = false;
    var isNotMedium = false;
    var isNotStrong = false;

    while (onfocus==true) {
        var passwordLength = password.innerHTML.length;
        console.log(passwordLength);
        if (passwordLength > 0 && passwordLength < 4) {
            isNotWeak = true;
            console.log("IF-1");
            if (isNotWeak == true) {
                console.log("INNR");
                alert(passwordLength);
                weak.style.backgroundColor = "red";
                passwordlbl.innerHTML = "WEAK";
                passwordlbl.style.color = "red";
            }
        }
        if (passwordLength > 4) {
            isNotMedium = true;
            console.log("IF-2");
            if (isNotMedium == true) {
                medium.style.backgroundColor = "yellow";
                passwordlbl.innerHTML = "MEDIUM";
                passwordlbl.style.color = "yellow";
            }
        }
        if (passwordLength > 10) {
            isNotStrong = true;
            console.log("IF-3");
            if (isNotStrong == true) {
                strong.style.backgroundColor = "green";
                passwordlbl.innerHTML = "Strong";
                passwordlbl.style.color = "green";
            }
        }
    }
}

signupButton.addEventListener("click", () => {
  // alert("OVER");

  weak.style.backgroundColor = "red";
  medium.style.backgroundColor = "yellow";
  strong.style.backgroundColor = "green";
  passwordlbl.innerHTML = "FUNCTION";
  //malelbl.innerHTML = "<SHKAJSHFKJ";
  //weak.style.backgroundColor = "red";
  //malelbl.style.backgroundColor = "Blue";
});
