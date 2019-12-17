import verificationModel from './model'
import {verificationCode} from './logic'

export const initVerificationControll = () => {
    verificationModel.verificationBtn.addEventListener('click', function (e) {
        e.preventDefault();
        verificationCode();
    });

    verificationModel.invalidModalBtn.addEventListener('click', function () {
        verificationModel.modal.style.display = 'none';
        verificationModel.errorVerificationModalWindow.style.display = 'none';
        verificationModel.verificationInput.value = '';
    });
};

