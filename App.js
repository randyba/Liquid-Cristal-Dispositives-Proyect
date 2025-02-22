window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

const locales = ["en-GB","de-DE","es-ES","fr-FR","it-IT","pt-BR"];

function getFlagSrc(countryCode) {
  return /^[A-Z]{2}$/.test(countryCode)
       ? `https://flagsapi.com/${countryCode.toUpperCase()}/shiny/64.png`
    : "";
}

const dropdownBtn = document.getElementById("dropdown-btn");
const dropdownContent = document.getElementById("dropdown-content");

function setSelectedLocale(locale) {
  const intlLocale = new Intl.Locale(locale);
  const langName = new Intl.DisplayNames([locale], {
    type: "language",
  }).of(intlLocale.language);

  dropdownContent.innerHTML = "";

  const otherLocales = locales.filter((loc) => loc !== locale);
  otherLocales.forEach((otherLocale) => {
    const otherIntlLocale = new Intl.Locale(otherLocale);
    const otherLangName = new Intl.DisplayNames([otherLocale], {
      type: "language",
    }).of(otherIntlLocale.language);

    const listEl = document.createElement("li");
    listEl.innerHTML = `${otherLangName}<img src="${getFlagSrc(
      otherIntlLocale.region
    )}" />`;
    listEl.value = otherLocale;
    listEl.addEventListener("mousedown", function () {
      setSelectedLocale(otherLocale);
    });
    dropdownContent.appendChild(listEl);
  });

  dropdownBtn.innerHTML = `<img src="${getFlagSrc(
    intlLocale.region
  )}" />${langName}<span class="arrow-down"></span>`;
  loadHTML(locale)
}

function loadHTML(locale) {
  const filePath = `index-${locale}.html`; // Construir la ruta del archivo
  window.location.href = filePath; // Redirigir al archivo directamente
}


// function loadHTML(locale) {
//   const filePath = `index-${locale}.html`; // Ruta del archivo HTML
//   // const filePath1 = `/translations/index${locale}.html`; // Ruta del archivo HTML

//   fetch(filePath)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`Error al cargar ${filePath}`);
//       }
//       return response.text();
//     })
//     .then((html) => {
//       document.documentElement.innerHTML = html; // Reemplazar el contenido completo
//       // Reasignar el script del archivo JS
//       const scriptTag = document.createElement("App");
//       scriptTag.src = "App.js"; // Archivo de JavaScript principal
//       document.body.appendChild(scriptTag);
//     })
//     .catch((error) => {
//       console.error("Error cargando el HTML:", error);
//     });
// }


setSelectedLocale(locales[0]);
const browserLang = new Intl.Locale(navigator.language).language;
for (const locale of locales) {
  const localeLang = new Intl.Locale(locale).language;
  if (localeLang === browserLang) {
    setSelectedLocale(locale);
  }
}

