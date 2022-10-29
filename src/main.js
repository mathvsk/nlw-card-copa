import { switchBackGround } from "./switchBackGround.js";
import { seletorDOM } from "./DomSelector.js";
import { getUser } from "./getUser.js";

switchBackGround(seletorDOM.card)

seletorDOM.user.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    getUser(seletorDOM.user.value)

    seletorDOM.user.value = ""
  }
})

