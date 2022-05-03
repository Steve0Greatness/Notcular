fetch("https://scratchdb.lefty.one/v3/forum/search?q=HELLLO")
    .then(res => {
        let paragraph = document.createElement("p");
        paragraph.innerHTML = `Ocular is up, please go to <a href="//ocular.jeffalo.net/" class="ocular">Ocular</a> instead of using this`;
        if (res.status === 500) {
            paragraph.innerText = `Ocular seems to be down.`;
        }
        document.querySelector("#_other").appendChild(paragraph);
    })