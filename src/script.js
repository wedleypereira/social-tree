import profileDark from "../public/foto-perfil-dark.jpg";

export default function toggleMode() {
  const profileLight = "https://github.com/wedleypereira.png";
  //const profileDark =

  const html = document.documentElement;
  const img = document.querySelector("#profile img");

  html.classList.toggle("light");

  const isLight = html.classList.contains("light");
  img.src = isLight ? profileLight : profileDark;
}
