import "./style.css";
import toggleMode from "./script.js";

const fotoPerfil =
  "https://scontent.fcpq4-1.fna.fbcdn.net/v/t39.30808-6/502429774_9203556759747864_8575822097609077800_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s1080x1080&_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFBv0Y1cAuoP5luVnSLe9RzVL3vfBhG311Uve98GEbfXXWP1_BxzqGmRNbzX5N8K_oVFv7yaCOH1AnGjljniU18&_nc_ohc=1sCRqSwfhQEQ7kNvwHCym-b&_nc_oc=AdoNOrI2KLZ0zEcJ4842Y-ndrtmYYkFhHeERE6m8raAuMBfqHVmqY76WGT4aSwF37hcmhMY5dW3h5OxAJkP9CVfs&_nc_zt=23&_nc_ht=scontent.fcpq4-1.fna&_nc_gid=cXpigpY_fkbaWdOh-eYgUg&_nc_ss=7b2a8&oh=00_AQFnJY51df32R-qCSDVjzfmEHSOPK-6KVaAD9S4vqw5CzA&oe=6A7D0A47";

document.querySelector("#app").innerHTML = `
<div id="container" class="w-full max-w-lg mt-14 px-6 m-auto text-center">
      <div id="profile" class="flex flex-col p-6 gap-2">
        <div
          class="w-37.5 m-auto rounded-full p-0.5 bg-linear-to-r from-[#9572FC] via-[#43E7AD] to-[#E2D45C]"
        >
          <img
            class="w-full rounded-full"
            src="${fotoPerfil}"
            ,
            alt="Foto Wedley"
          />
        </div>
        <p class="text-base font-medium">@wedleypereira</p>
      </div>

      <div
        id="switch"
        class="relative w-16 my-1 mx-auto"
      >
        <button
          class="size-8 absolute top-1/2 -translate-y-1/2 z-1 left-0 animate-slide-back light:animate-slide-in bg-white hover:outline-8 hover:outline-white/20 light:hover:outline-black/10 rounded-full bg-[url('/moon-stars.svg')] light:bg-[url('/sun.svg')] bg-no-repeat bg-center"
        ></button>
        <span
          class="block w-16 h-6 rounded-[9999px] bg-white/10 light:bg-black/10 border border-white/50 light:border-black/50 backdrop-blur-xs"
        ></span>
      </div>

      <ul class="flex flex-col gap-4 py-6">
        <li>
          <a
            class="font-bold py-4 px-6 flex justify-center items-center rounded-lg bg-white/10 light:bg-black/10 border border-white/50 light:border-black/50 backdrop-blur-xs transition-colors duration-200 hover:bg-white/5 light:hover:bg-black/5 hover:border-[1.5px] hover:border-white light:hover:border-black"
            href="https://github.com/wedleypereira"
            target="_blank"
          >
            Github
          </a>
        </li>

        <li>
          <a
            class="font-bold py-4 px-6 flex justify-center items-center rounded-lg bg-white/10 light:bg-black/10 border border-white/50 light:border-black/50 backdrop-blur-xs transition-colors duration-200 hover:bg-white/5 light:hover:bg-black/5 hover:border-[1.5px] hover:border-white light:hover:border-black"
            href="https://www.linkedin.com/in/wedley-furtado"
            target="_blank"
          >
            Linkedin
          </a>
        </li>

        <li>
          <a
            class="font-bold py-4 px-6 flex justify-center items-center rounded-lg bg-white/10 light:bg-black/10 border border-white/50 light:border-black/50 backdrop-blur-xs transition-colors duration-200 hover:bg-white/5 light:hover:bg-black/5 hover:border-[1.5px] hover:border-white light:hover:border-black"
            href="https://www.instagram.com/wedleypereira"
            target="_blank"
          >
            Instagram
          </a>
        </li>

        <li>
          <a
            class="font-bold py-4 px-6 flex justify-center items-center rounded-lg bg-white/10 light:bg-black/10 border border-white/50 light:border-black/50 backdrop-blur-xs transition-colors duration-200 hover:bg-white/5 light:hover:bg-black/5 hover:border-[1.5px] hover:border-white light:hover:border-black"
            href="https://www.youtube.com/@wedley172839"
            target="_blank"
          >
            Youtube
          </a>
        </li>
      </ul>

      <div id="social-links" class="flex justify-center py-6 text-2xl">
        <a
          class="p-4 flex justify-center items-center rounded-full transition-colors duration-200 hover:bg-white/20 light:hover:bg-black/10"
          href="https://github.com/wedleypereira"
          target="_blank"
        >
          <ion-icon name="logo-github"></ion-icon>
        </a>
        <a
          class="p-4 flex justify-center items-center rounded-full transition-colors duration-200 hover:bg-white/20 light:hover:bg-black/10"
          href="https://www.instagram.com/wedleypereira"
          target="_blank"
        >
          <ion-icon name="logo-instagram"></ion-icon>
        </a>
        <a
          class="p-4 flex justify-center items-center rounded-full transition-colors duration-200 hover:bg-white/20 light:hover:bg-black/10"
          href="https://www.linkedin.com/in/wedley-furtado"
          target="_blank"
        >
          <ion-icon name="logo-linkedin"></ion-icon>
        </a>
        <a
          class="p-4 flex justify-center items-center rounded-full transition-colors duration-200 hover:bg-white/20 light:hover:bg-black/10"
          href="https://www.youtube.com/@wedley172839"
          target="_blank"
        >
          <ion-icon name="logo-youtube"></ion-icon>
        </a>
      </div>

      <footer class="py-6 text-center text-sm">
        Feito com ♥ pela
        <a
          class="underline underline-offset-2"
          href="https://rocketseat.com.br"
        >
          Rocketseat
        </a>
      </footer>
    </div>
`;

const switchButton = document.querySelector("#switch");
switchButton.addEventListener("click", toggleMode);
