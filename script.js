console.log("chargé");

const boutonTheme = document.querySelector("#bouton-theme");
console.log(boutonTheme);
boutonTheme.addEventListener("click", function () { document.body.classList.toggle("sombre");
    if (document.body.classList.contains("sombre")){
        boutonTheme.textContent = "Mode claire"
    } 
    else{
        boutonTheme.textContent = "Mode sombre"// ce qui se passe à chaque clic
    });
