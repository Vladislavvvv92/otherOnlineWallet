import validationModel from './model'
import {validation} from './logic'
import {authorization} from '../authorization/controller'

export const initValidationControl = () =>{
    validationModel.logInBtn.addEventListener('click', function (e) {
        e.preventDefault();
        if (validation(validationModel.userNameValidate, validationModel.loginValidateRegExp, validationModel.userPasswordValidate, validationModel.deviceName, validationModel.notCorrectValidation)) {
            authorization();
        }
    });
}