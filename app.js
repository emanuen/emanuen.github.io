const containerNavHeader = document.getElementById("container-nav-header")
const headerIcon = document.getElementById("header-icon")
const containerDropDown = document.getElementById("container-dropdown")
const containerNavActions = document.getElementById("container-nav-actions")
const containerLanguageDropdown = document.getElementById("container-language-dropdown")

const sustitleMain = document.getElementById("subtitle-main")
const about = document.getElementById("about")
const aboutTitle = document.querySelectorAll("#about-title")
const textAbout = document.getElementById("text-about")

const containerSkills = document.getElementById("container-skills")
const skillsTitle = document.querySelectorAll("#skills-title")

const containerProjects = document.getElementById("container-projects")
const projectsTitle = document.querySelectorAll("#projects-title")

const contactTitle = document.querySelectorAll("#contact-title")

const portfolioText = document.getElementById("portfolio-text")

localStorage.setItem("lg", JSON.stringify("es"))

// TRANSLATE

function main() {

    if (JSON.parse(localStorage.getItem("lg")) === "es") {

        sustitleMain.innerText = "Analista de Datos"
        about.innerText = `¡Hola! Bienvenido a mi portafolio. En esta página te enseñare acerca de mi, sobre mis habilidades y mi experiencia.`

        aboutTitle.forEach((title) => {
            title.innerText = "Acerca de mí"
        })
        textAbout.innerText = `Soy estudiante de la carrera de Ingenieria en Sistemas de Información y estoy interesado en el mundo IT. 
        Me encuentro orientado en el análisis de datos voluntad de trabajar en proyectos, aprender nuevas herramientas y llevar mi experiencia a otro nivel.`

        skillsTitle.forEach((title) => {
            title.innerText = "Habilidades"
        })
        // projectsTitle.forEach((title) => {
        //     title.innerText = "Proyectos"
        // })
        contactTitle.forEach((title) => {
            title.innerText = "Contacto"
        })

        portfolioText.innerText = "Portafio de Emanuel Cavallin"


        return
    }

    sustitleMain.innerText = "Full-Stack Programmer"
    about.innerText = `Hello! Welcome to my portfolio. On this page I will teach you about me, about my programming skills and my experience in completed projects.`

    aboutTitle.forEach((title) => {
        title.innerText = "About me"
    })
    textAbout.innerText = `I am a student of Information Systems Engineering and I am interested in the IT world.
    I am focused on web development with a desire to work on projects, obtain achievements and learn new tools. I have worked in several projects according to the knowledge acquired.`

    skillsTitle.forEach((title) => {
        title.innerText = "Skills"
    })
    // projectsTitle.forEach((title) => {
    //     title.innerText = "Projects"
    // })
    contactTitle.forEach((title) => {
        title.innerText = "Contact"
    })

    portfolioText.innerText = "Portfolio of Emanuel Cavallin"
}

main()

// HEADER

const header = [{
    es: "Acerca de mí",
    en: "About",
    href: "#about"
}, {
    es: "Habilidades",
    en: "Skills",
    href: "#skills"
}, 
// {
//     es: "Proyectos",
//     en: "Projects",
//     href: "#projects"
// }, 
{
    es: "Contacto",
    en: "Contact",
    href: "#contact"
}]

var isDrowDown = false

headerIcon.addEventListener("click", () => {
    if (isDrowDown) {
        isDrowDown = !isDrowDown
        containerDropDown.style.display = "none"
    } else {
        isDrowDown = !isDrowDown
        containerDropDown.style.display = "block"
    }
})

function showHeader() {

    for (let i = 0; i < header.length; i++) {

        const redirectHeader = document.createElement("a")
        redirectHeader.href = header[i].href
        redirectHeader.className = "redirect-header"

        const redirectDropdown = document.createElement("a")
        redirectDropdown.href = header[i].href
        redirectDropdown.className = "redirect-header"

        const textHeader = document.createElement("p")
        if (JSON.parse(localStorage.getItem("lg")) === "es") {
            textHeader.innerHTML = header[i].es
        } else {
            textHeader.innerHTML = header[i].en
        }
        textHeader.className = "text-header no-select"

        const textDropdown = document.createElement("p")
        if (JSON.parse(localStorage.getItem("lg")) === "es") {
            textDropdown.innerHTML = header[i].es
        } else {
            textDropdown.innerHTML = header[i].en
        }
        textDropdown.className = "text-drowdown no-select"

        redirectHeader.appendChild(textHeader)
        redirectDropdown.appendChild(textDropdown)

        containerNavHeader.appendChild(redirectHeader)
        containerDropDown.appendChild(redirectDropdown)

    }

    // const language = document.createElement("p")
    // language.id = "language_item"
    // language.className = "icon-language"
    // if (JSON.parse(localStorage.getItem("lg")) === "es") {
    //     language.innerHTML = "es🠻"
    // } else {
    //     language.innerHTML = "en🠻"
    // }
    // containerNavActions.prepend(language)

}

showHeader()

// const languageItem = document.getElementById("language_item")

// languageItem.addEventListener("click", () => {

//     if (containerLanguageDropdown.style.display === "block") {
//         containerLanguageDropdown.style.display = "none"
//         containerLanguageDropdown.children[0].remove()
//         return
//     }

//     containerLanguageDropdown.style.display = "block"
//     const anotherLanguage = document.createElement("p")
//     anotherLanguage.className = "text-language-header"
//     anotherLanguage.innerText = JSON.parse(localStorage.getItem("lg")) === "es" ? "en" : "es"
//     containerLanguageDropdown.appendChild(anotherLanguage)

// })

// containerLanguageDropdown.addEventListener("click", () => {
//     containerLanguageDropdown.style.display = "none"
//     containerLanguageDropdown.children[0].remove()
//     // translate()
// })

// SKILLS

const skills = [{
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1707957765/portfolio/python_zwlsm2.png",
    text: "Python"
}, {
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1707957765/portfolio/pandas_d7j9lg.png",
    text: "Pandas"
}, {
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1707957762/portfolio/numpy_wpj8lv.png",
    text: "NumPy"
}, {
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1707960061/portfolio/matplotlib_lpm7hd.png",
    text: "Matplotlib"
}, {
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1707957791/portfolio/sql_ztqbw0.png",
    text: "Base de Datos"
}, {
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1707957756/portfolio/google_sheets_o6yi9f.png",
    text: "Hojas de Cálculo"
}, {
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1707960164/portfolio/google_docs_ul0na5.png",
    text: "Hojas de Texto"
}, {
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1707960223/portfolio/google_slides_axvl1z.png",
    text: "Diapositivas"
}, {
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1707957755/portfolio/Google_Apps_Script.svg_tdprnj.png",
    text: "App Script"
}, {
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1707960414/portfolio/desarrollo_web_l7yd7k.png",
    text: "Desarrollo Web"
}, {
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1707957828/portfolio/desarrollo_movil_kizysf.png",
    text: "Desarrollo Móvil"
}]


function showSkills() {

    for (let i = 0; i < skills.length; i++) {

        var containSkill = document.createElement("div")
        containSkill.className = "contain-skill no-select"

        var imageSkill = document.createElement("img")
        imageSkill.src = skills[i].image
        imageSkill.alt = skills[i].text
        imageSkill.loading = "lazy"
        imageSkill.className = "image-skill"

        var textSkill = document.createElement("p")
        textSkill.innerHTML = skills[i].text
        textSkill.className = "text-skill"

        containSkill.appendChild(imageSkill)
        containSkill.appendChild(textSkill)

        containerSkills.appendChild(containSkill)

    }

}

showSkills()

// PROJECTS

const projectsJS = [
    //     {
    //     title: "Surveys",
    //     description: "Stack MERN, Redux & TypeScript",
    //     image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1705094965/surveys_hkztfb.png",
    //     link: "https://surveys-ef4r.onrender.com",
    //     es: {
    //         content: "Plataforma web para publicar y responder encuestas",
    //         contentMore: "Comparte, publica e invita a personas a participar en encuestras de cualquier tipo",
    //     },
    //     en: {
    //         content: "Web platform to publish and respond to surveys",
    //         contentMore: "Share, publish and invite people to participate in meetings of any type",
    //     }
    // }, {
    //     title: "Social Media",
    //     description: "Stack MERN, Redux & TypeScript",
    //     image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1705094966/social_media_a7cugi.png",
    //     link: "https://socialmedia-33gt.onrender.com",
    //     es: {
    //         content: "Aplicación web de una red social",
    //         contentMore: "Permite publicar archivos multimedia, seguir publicaciones de usuario e interactuar con ellos",
    //     },
    //     en: {
    //         content: "Web application of a social network",
    //         contentMore: "Allows you to publish multimedia files, follow user posts and interact with them",
    //     }
    // }, {
    //     title: "Emails",
    //     description: "Stack MERN, Sockeo.io & TypeScript.",
    //     image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1671843279/Emails_x0hbr7.png",
    //     link: "https://emails-kn32.onrender.com",
    //     es: {
    //         content: "Plataforma web para el recibo y envío de correos electrónicos",
    //         contentMore: "Envía mensajes en tiempo real a cualquier dirrección de correo que este registrado en la plataforma",
    //     },
    //     en: {
    //         content: "Web platform for receiving and sending emails",
    //         contentMore: "Send messages in real time to any email address that is registered on the platform",
    //     }
    // }, {
    //     title: "Argentina Quiz",
    //     description: "Node.js, MongoDB, React Native & TypeScript",
    //     image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1706790450/favicon_tvx4ge.png",
    //     link: "https://play.google.com/store/apps/details?id=com.argentinaquiz.triviagame",
    //     es: {
    //         content: "Aplicación móvil de un juego de preguntas y respuestas de Argentina",
    //         contentMore: "Juego educativo y de entretenimiento de un Trivia donde vas a encontrar todo tipo de preguntas acerca del país."
    //     },
    //     en: {
    //         content: "Mobile application of a question and answer game from Argentina",
    //         contentMore: "Argentina Quiz is an educational and entertaining Trivia game where you will find all kinds of questions about the country."
    //     }
    // }
]

function showProjects() {

    for (var i = 0; i < projectsJS.length; i++) {

        var linkProject = document.createElement('a')
        linkProject.className = "redirect-project"

        var containProject = document.createElement("div")
        containProject.className = "contain-project hvr-bounce-in"

        var containImageProject = document.createElement("div")
        containImageProject.className = "contain-image-project"

        var containMedia = document.createElement("div")
        containMedia.className = "contain-media"

        var imageContainProject = document.createElement("img")
        imageContainProject.src = projectsJS[i].image
        imageContainProject.alt = projectsJS[i].title
        imageContainProject.loading = "lazy"
        imageContainProject.className = "image-project"

        var titleContainProject = document.createElement("h1")
        titleContainProject.innerHTML = projectsJS[i].title
        titleContainProject.className = "title-project"

        var descriptionContainProject = document.createElement("p")
        descriptionContainProject.innerHTML = projectsJS[i].description
        descriptionContainProject.className = "description-project"


        var contentContainProject = document.createElement("p")
        if (JSON.parse(localStorage.getItem("lg")) === "es") {
            contentContainProject.innerHTML = projectsJS[i].es.content
        } else {
            contentContainProject.innerHTML = projectsJS[i].en.content
        }
        contentContainProject.className = "content-project"

        var contentProjectMore = document.createElement("p")
        if (JSON.parse(localStorage.getItem("lg")) === "es") {
            contentProjectMore.innerHTML = projectsJS[i].es.contentMore
        } else {
            contentProjectMore.innerHTML = projectsJS[i].en.contentMore
        }
        contentProjectMore.className = "content-project-more"

        containImageProject.appendChild(imageContainProject)

        containMedia.appendChild(titleContainProject)
        containMedia.appendChild(descriptionContainProject)
        containMedia.appendChild(contentContainProject)
        containMedia.appendChild(contentProjectMore)

        containProject.appendChild(containImageProject)
        containProject.appendChild(containMedia)

        linkProject.setAttribute('href', projectsJS[i].link)

        linkProject.appendChild(containProject)
        containerProjects.appendChild(linkProject)
    }

}

showProjects()

// TRANSLATE HEADER

function translate() {

    if (JSON.parse(localStorage.getItem("lg")) === "es") {
        localStorage.setItem("lg", "en")
    } else {
        localStorage.setItem("lg", "es")
    }

    // main()
    // showHeader()
    // showSkills()
    // showProjects()

}