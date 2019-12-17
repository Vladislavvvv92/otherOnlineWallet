import langSwitchModel from './model'

const switchCurrent = (langList) => {
    for (let i = 0; i < langList.length; i++) {
        if (langList[i].classList.contains('language-switcher__all-languages--selected') ) {
            langList[i].classList.toggle('language-switcher__all-languages--selected');
            break;
        }
    }

    langSwitchModel.allLanguages.classList.toggle('active-language_switcher');
};

export const switchCurrentText = (lang, langList) => {
    switchCurrent(langList);
    lang.classList.add('language-switcher__all-languages--selected');
    langSwitchModel.languageSwitcherBtn.innerHTML = lang.textContent;
};

export const activeLanguageSwitcher = (allLanguages) => {
    allLanguages.classList.toggle('active-language_switcher');
};
