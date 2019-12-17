import  translateModel  from './model'
import {switchLanguage} from './logic'

export const initTranslation = () => {
    for (let button of translateModel.languages) {
        button.addEventListener("click", function(t) {
            switchLanguage(button.getAttribute("id")),
                translateModel.languageSwitcherBtn.innerHTML = t.target.textContent
        })
    }

}