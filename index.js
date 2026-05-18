const btnEl = document.querySelector(" .btn")

const inputEl = document.getElementById("input")

btnEl.addEventListener("click", () => {
    createPassword()
})



function createPassword(){
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const passwordLenght = 16
    let password = ""
    for (let index = 0; index < passwordLenght; index++) {
        const randomNum  = Math.floor (Math.random() * chars.length)
        password += chars.substring(randomNum, randomNum +1);
        console.log( randomNum, password);
    }
    inputEl.value = password;
}