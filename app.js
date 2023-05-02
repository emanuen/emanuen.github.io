const leftProject = document.getElementById("left-project")
const rightProject = document.getElementById("right-project")
const leftProjectPy = document.getElementById("left-project-py")
const rightProjectPy = document.getElementById("right-project-py")

const containerProjects = document.getElementById("container-projects")
const containerProjectsPy = document.getElementById("container-projects-py")

const containerGetProject = document.getElementById("container-getproject")
const containGetproject = document.getElementById("contain-getproject")
const containerInfoGetProject = document.getElementById("container-info-getproject")
const close = document.getElementById("close")

const formContact = document.getElementById("form-contact")
const closeMessage = document.getElementById("close-message")

const headerIcon = document.getElementById("header-icon")
const containerDropDown = document.getElementById("container-dropdown")

var projectsJS = [{
    title: "Countries",
    description: "Python Y Pandas.",
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1683044113/countries_ccjaqu.jpg",
    content: "Proyecto de análisis de datos en todos los países del mundo.",
    link: "https://github.com/EmanuelCav/Countries"
},{
    title: "Premier League",
    description: "Python Y Pandas.",
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1683044433/premier_dokqwk.png",
    content: "Proyecto de análisis de datos en equipos que compiten en Premier League.",
    link: "https://github.com/EmanuelCav/Premier-League"
},{
    title: "Generador de dataframes",
    description: "Python - Pandas Y NumPy.",
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1683044402/dataframe_zdvtbr.png",
    content: "Generador de marcos de datos.",
    link: "https://github.com/EmanuelCav/Dataframe-generator"
},{
    title: "Anecdotes",
    description: "Stack PERN Y Redux.",
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1671843279/anecdotes_wqshbw.png",
    content: "Pagina web para compartir anecdotas.",
    link: "https://github.com/EmanuelCav/Anecdotes"
}, {
    title: "Generador de fixture",
    description: "Python - NumPy Y Pandas.",
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1683044651/fixture_tmii93.jpg",
    content: "Proyecto para la realización de uun fixture de manera dinámica.",
    link: "https://github.com/EmanuelCav/Excel-Fixture-Generator"
}, {
    title: "Posts",
    description: "Angular, Mysql y Bootstrap.",
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1671843280/Posts_trglhh.png",
    content: "Pagina web para la subida de publicaciones.",
    link: "https://github.com/EmanuelCav/Posts"
}, {
    title: "Contacts",
    description: "Stack PEAN.",
    image: "https://res.cloudinary.com/projects-emanuek/image/upload/v1671843279/contacts_glvfsk.png",
    content: "Plataforma web para la subida de contactos.",
    link: "https://github.com/EmanuelCav/Contacts"
}]

var firstImageProject = 0
var lastImageProject = 4

const addEvent = (id, i, event = 'click') => {
    document.getElementById(id).addEventListener(event, function () {
        getProject(i, id)
    });
}

function showProjects() {

    var id = 0

    for (var i = firstImageProject; i < lastImageProject; i++) {
        var containProject = document.createElement("div")
        containProject.className = "contain-project"
        containProject.id = id

        var imageContainProject = document.createElement("img")
        imageContainProject.src = projectsJS[i].image
        imageContainProject.alt = projectsJS[i].title
        imageContainProject.className = "image-project"

        var titleContainProject = document.createElement("h1")
        titleContainProject.innerHTML += projectsJS[i].title
        titleContainProject.className = "title-project"

        var descriptionContainProject = document.createElement("p")
        descriptionContainProject.innerHTML += projectsJS[i].description
        descriptionContainProject.className = "description-project"

        containProject.appendChild(imageContainProject)
        containProject.appendChild(titleContainProject)
        containProject.appendChild(descriptionContainProject)

        containerProjects.appendChild(containProject)

        addEvent(id, i)
        id++
    }

}
function isLeftOrRightProjects() {
    if (firstImageProject == 0) {
        leftProject.style.display = "none"
    } else {
        leftProject.style.display = "block"
    }
    if (lastImageProject == projectsJS.length) {
        rightProject.style.display = "none"
    } else {
        rightProject.style.display = "block"
    }
}

function getProject(i, id) {
    containerGetProject.style.display = "block"
    containGetproject.style.display = "block"

    const titleProject = document.createElement("h1")
    if (id >= 4) {
        titleProject.innerHTML += projectsPy[i].title
    } else {
        titleProject.innerHTML += projectsJS[i].title
    }
    titleProject.className = "title-getproject"

    const imageProject = document.createElement("img")
    if (id < 4) {
        imageProject.src = projectsJS[i].image
        imageProject.alt = projectsJS[i].title
        imageProject.className = "image-getproject"
    }

    const descriptionProject = document.createElement("p")
    if (id >= 4) {
        descriptionProject.innerHTML += projectsPy[i].description
    } else {
        descriptionProject.innerHTML += projectsJS[i].description
    }
    descriptionProject.className = "text-getproject"

    const contentProject = document.createElement("p")
    if (id >= 4) {
        contentProject.innerHTML += projectsPy[i].content
    } else {
        contentProject.innerHTML += projectsJS[i].content
    }
    contentProject.className = "text-getproject"

    const linkProject = document.createElement("a")
    linkProject.innerHTML += "Haz click aqui para visualizar el código"
    if (id >= 4) {
        linkProject.href = projectsPy[i].link
    } else {
        linkProject.href = projectsJS[i].link
    }
    linkProject.className = "link-project"

    containerInfoGetProject.appendChild(titleProject)
    containerInfoGetProject.appendChild(imageProject)
    containerInfoGetProject.appendChild(descriptionProject)
    containerInfoGetProject.appendChild(contentProject)
    containerInfoGetProject.appendChild(linkProject)
}

isLeftOrRightProjects()
showProjects()

function validForm(name, email, description) {

    var msg

    if (!name || !email || !description) {
        msg = "Asegurate de completar todos los campos."
        return msg
    }

    var validEmail = validateEmail(email)

    if (!validEmail) {
        msg = "Asegurate de haber escrito bien la direccion de correo electronico."
        return msg
    }

    for (var i = 0; i < description.length; i++) {
        if (description[i] == "<" || description[i] == ">") {
            msg = 'En la descripcion los caracteres especiales como "<,>" no estan permitidos'
            return msg
        }
    }

    msg = "Mensaje enviado correctamente"

    return msg
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

leftProject.addEventListener("click", () => {
    while (containerProjects.firstChild) {
        containerProjects.removeChild(containerProjects.firstChild)
    }
    firstImageProject--
    lastImageProject--
    isLeftOrRightProjects()
    showProjects()
})
rightProject.addEventListener("click", () => {
    while (containerProjects.firstChild) {
        containerProjects.removeChild(containerProjects.firstChild)
    }
    firstImageProject++
    lastImageProject++
    isLeftOrRightProjects()
    showProjects()
})

close.addEventListener("click", () => {
    while (containerInfoGetProject.lastChild) {
        if (containerInfoGetProject.lastChild.nodeName == "svg") {
            break
        }
        containerInfoGetProject.removeChild(containerInfoGetProject.lastChild)
    }
    containerGetProject.style.display = "none"
    containGetproject.style.display = "none"
})

var containerMessage = document.getElementById("container-message")

formContact.addEventListener("submit", (e) => {
    e.preventDefault()

    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var description = document.getElementById("description").value

    var valid = validForm(name, email, description)

    var textMessage = document.getElementById("text-message")

    if (valid == "Mensaje enviado correctamente") {
        containerMessage.style.display = "flex"
        containerMessage.style.backgroundColor = "#6f6"
        Email.send({
            SecureToken: "f07b59b4-1d8c-49d6-93ad-0ad62103837c",
            To: 'cavallinema@gmail.com',
            From: 'cavallinema@gmail.com',
            Subject: `New message from ${name}. The email is ${email}`,
            Body: description
        })
        document.getElementById("name").value = ""
        document.getElementById("email").value = ""
        document.getElementById("description").value = ""
    } else {
        containerMessage.style.display = "flex"
        containerMessage.style.backgroundColor = "#f66"
    }

    textMessage.innerHTML = ""
    textMessage.innerHTML += `${valid}`

})

closeMessage.addEventListener("click", () => {
    containerMessage.style.display = "none"
})

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
