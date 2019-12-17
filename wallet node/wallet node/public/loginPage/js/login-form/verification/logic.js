import verificationModel from './model'
import {setCookies} from '../cookies/controller'
import authorizationModel from "../authorization/model";

export const verificationCode = () => {
    verificationModel.verificationformData = new FormData(verificationModel.verificationForm);
    verificationModel.verificationXhttp.open("POST", "/verification.js", true);
    verificationModel.verificationXhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    const verifData = {
        verification: verificationModel.verificationformData.get('verification')
    };
    verificationModel.verificationXhttp.send(JSON.stringify(verifData));

    verificationModel.verificationXhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {

            if (verificationModel.verificationXhttp.response == 'true') {
                setCookies();
            } else {
                openErrorVerificcation();
            }
        } else if (verificationModel.verificationXhttp.status == 404) {
            alert('file or resourse not found');
        }
    }
};

export const openVerification = () => {
    verificationModel.modal.style.display = 'flex';
    verificationModel.verificationModalWindow.style.display = 'flex';
};

export const openErrorVerificcation = () => {
    verificationModel.verificationModalWindow.style.display = 'none';
    verificationModel.errorVerificationModalWindow.style.display = 'flex';
    verificationModel.errorBigText.style.marginTop = '25px';
    verificationModel.errorBigText.innerHTML = 'Verification code error';
};
