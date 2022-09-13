(function ()
{
    [...document.querySelectorAll(".control")].forEach(button =>
    {
        button.addEventListener("click", function ()
        {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            console.log(button.dataset.id);
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });

    document.querySelector(".theme-btn").addEventListener("click", () =>
    {
        document.body.classList.toggle("light-mode");
    })
})();


function goToMeme()
{
    window.open("https://i.kym-cdn.com/entries/icons/mobile/000/000/056/itsover1000.jpg", '_blank').focus();
}


