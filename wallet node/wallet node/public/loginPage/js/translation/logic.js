import translateModel  from './model'

export const switchLanguage = (elem) => {
    translateModel.language = translateModel.arrLang[elem];

    for (let elem of translateModel.translatedEl) {
        elem.innerHTML = translateModel.language[elem.getAttribute("key")];
    }
}


