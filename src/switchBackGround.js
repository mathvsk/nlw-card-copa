let isIgnite = false
export function switchBackGround(seletor) {
  seletor.addEventListener("click", () => {
    const bg = isIgnite ? "explorer" : "ignite"
    isIgnite = !isIgnite
    seletor.style.backgroundImage = `url(./assets/bg-${bg}.svg)`
  })
}

