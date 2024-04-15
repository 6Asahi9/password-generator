function generatePassword() {
    const passwordlength = document.getElementById("passwordlength").value;
    const includeLowercase = document.getElementById("lowercase").checked;
    const includeUppercase = document.getElementById("uppercase").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSymbols = document.getElementById("symbols").checked;

    const lowercasechars = "abcdefghijklmnopqrstuvwxyz";
    const uppercasechars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberschars = "0123456789";
    const symbolschars = "!@#$%^&*()_+=-?/<>`";

    const charSets = [ ];

    if (includeLowercase) charSets.push([...lowercasechars]);
    if (includeUppercase) charSets.push([...uppercasechars]);
    if (includeNumbers) charSets.push([...numberschars]);
    if (includeSymbols) charSets.push([...symbolschars]);

    if (passwordlength <= 0) {
        document.getElementById("password").textContent = "Password length must be above 0";
        return;
    }
    if (charSets.length === 0) {
        document.getElementById("password").textContent = "At least 1 set of characters needs to be selected";
        return;
    }

    let allowedChars = charSets.flat().join("");
    let password = "";

    for (let i = 0; i < passwordlength; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    document.getElementById("password").textContent = `Generated password is: ${password}`;
}
