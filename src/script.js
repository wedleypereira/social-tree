function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  const img = document.querySelector("#profile img");
  if (html.classList.contains("light")) {
    img.setAttribute("src", "https://github.com/wedleypereira.png");
  } else {
    img.setAttribute(
      "src",
      "https://scontent.fcpq4-1.fna.fbcdn.net/v/t39.30808-6/502429774_9203556759747864_8575822097609077800_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s1080x1080&_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFBv0Y1cAuoP5luVnSLe9RzVL3vfBhG311Uve98GEbfXXWP1_BxzqGmRNbzX5N8K_oVFv7yaCOH1AnGjljniU18&_nc_ohc=1sCRqSwfhQEQ7kNvwHCym-b&_nc_oc=AdoNOrI2KLZ0zEcJ4842Y-ndrtmYYkFhHeERE6m8raAuMBfqHVmqY76WGT4aSwF37hcmhMY5dW3h5OxAJkP9CVfs&_nc_zt=23&_nc_ht=scontent.fcpq4-1.fna&_nc_gid=cXpigpY_fkbaWdOh-eYgUg&_nc_ss=7b2a8&oh=00_AQFnJY51df32R-qCSDVjzfmEHSOPK-6KVaAD9S4vqw5CzA&oe=6A7D0A47",
    );
  }
}
