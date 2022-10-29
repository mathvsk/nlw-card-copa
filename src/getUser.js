import { seletorDOM } from "./DomSelector.js";

export function getUser(user) {
  fetch(`https://api.github.com/users/${user}`)
    .then((response) => response.json())
    .then((data) => {
      seletorDOM.image.src = data.avatar_url
      seletorDOM.name.textContent = data.name
      seletorDOM.description.textContent = ""
      
      if (data.login == "mathvsk") {
        seletorDOM.description.textContent = "Student at Rocketseat"
      }
    })
}