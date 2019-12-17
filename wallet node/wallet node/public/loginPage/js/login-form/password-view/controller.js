import passModel from './model'
import {switchView} from './logic'
export const initControlLoginForm = () =>{
    passModel.iconOff.addEventListener('click', function () {
        switchView(passModel.iconOff, passModel.iconOn, passModel.inputPass);
    });

    passModel.iconOn.addEventListener('click', function () {
        switchView(passModel.iconOn, passModel.iconOff, passModel.inputPass);
    });
}

