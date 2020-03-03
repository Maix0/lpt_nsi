function addPage(link: string, icon: string, title: string) {
    let html = `<li class="nav-item" data-page="${link}"><a href="#" class="nav-link" ><i class="material-icons">${icon}</i><span class="link-text">${title}</span></a></li>`;
    document.querySelector(".navbar-nav") !.innerHTML += html;
    console.log({
        link,
        icon,
        title
    });
}

const pages = [{
    link: "./accueil.html",
    icon: "home",
    title: "Accueil"
}, {
    link: "./apps.html",
    icon: "apps",
    title: "Apps"
}];
const iframe = document.querySelector(".page_viewer") as HTMLIFrameElement;

function main() {
    pages.forEach(({
        link,
        icon,
        title
    }) => {
        addPage(link, icon, title);
    });
    document.querySelectorAll(".navbar-nav .nav-item").forEach(el => {
        (el as HTMLLIElement).addEventListener("click", function (this) {
            iframe.src = this.dataset.page!;
            document.querySelector("title") !.innerText = "HPT - " + iframe.contentWindow!.document.querySelector("title") !.innerText;
        })
    })
}



main()