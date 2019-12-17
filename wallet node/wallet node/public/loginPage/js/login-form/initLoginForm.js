import {initValidationControl} from './validation/controller'
import {initVerificationControll} from './verification/controller'
import {initControlLoginForm} from './password-view/controller'

export const initLoginForm = () => {
    initControlLoginForm();
    initValidationControl();
    initVerificationControll();
};