const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const digitChars = "0123456789";
const symbolChars = "@#$%&*!";

/* Show / Hide sections */
function showManual() {
    document.getElementById("manualBox").style.display = "block";
    document.getElementById("autoBox").style.display = "none";
    document.getElementById("strength").innerText =
        "Password Strength: Weak (0%)";
}

function showAuto() {
    document.getElementById("manualBox").style.display = "none";
    document.getElementById("autoBox").style.display = "block";
}

/* Password strength checker */
function checkStrength() {
    let pwd = document.getElementById("manualPassword").value;
    let score = 0;

    if (pwd.length >= 12) score += 20;
    if (/[A-Z]/.test(pwd)) score += 20;
    if (/[a-z]/.test(pwd)) score += 20;
    if (/[0-9]/.test(pwd)) score += 20;
    if (/[@#$%&*!]/.test(pwd)) score += 20;

    let level = "Weak";
    if (score >= 80) level = "Strong";
    else if (score >= 50) level = "Medium";

    document.getElementById("strength").innerText =
        "Password Strength: " + level + " (" + score + "%)";
}

/* Auto password generator */
function generatePassword() {
    let length = parseInt(document.getElementById("length").value);
    if (length < 12) {
        alert("Password length must be at least 12");
        return;
    }

    let chars = "";
    if (upper.checked) chars += upperChars;
    if (lower.checked) chars += lowerChars;
    if (digit.checked) chars += digitChars;
    if (symbol.checked) chars += symbolChars;

    if (chars === "") {
        alert("Enable at least one option");
        return;
    }

    let password = "";

    while (password.length < length) {
        let ch = chars[Math.floor(Math.random() * chars.length)];
        if (!password.includes(ch)) {
            password += ch;
        }
    }

    document.getElementById("result").value = password;
}
