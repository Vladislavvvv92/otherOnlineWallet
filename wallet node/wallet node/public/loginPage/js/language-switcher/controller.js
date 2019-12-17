import langSwitchModel from './model'
import {switchCurrentText} from './logic'
import {activeLanguageSwitcher} from './logic'

export const initLanguageSwitcher = () => {
    langSwitchModel.languageSwitcherBtn.addEventListener('click', function (e) {
        addListner(e)
    });

    langSwitchModel.arrow.addEventListener('click', function (e) {
        addListner(e)
    });

    for (let i = 0; i < langSwitchModel.languages.length; i++) {
        langSwitchModel.languages[i].addEventListener('click', function() {
            switchCurrentText(langSwitchModel.languages[i], langSwitchModel.languages);
            langSwitchModel.arrow.classList.toggle('rotateArrow')
        });
    }

    langSwitchModel.container.addEventListener('click',function (e) {
        if (langSwitchModel.allLanguages.classList.contains('active-language_switcher')) {
            langSwitchModel.allLanguages.classList.toggle('active-language_switcher');
            langSwitchModel.arrow.classList.toggle('rotateArrow')
        }
    });
};

function addListner(e) {
    e.stopPropagation();
    activeLanguageSwitcher(langSwitchModel.allLanguages);
    langSwitchModel.arrow.classList.toggle('rotateArrow')
}