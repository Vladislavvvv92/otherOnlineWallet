import authorizationModel from './model'
import {openVerification} from '../verification/logic'
import validationModel from "../validation/model";

export const authorization = () => {
    authorizationModel.formData = new FormData(authorizationModel.form);
    authorizationModel.xhttp.open("POST", "/authorization.js", true);
    authorizationModel.xhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    const formData = {
        login: authorizationModel.formData.get('login'),
        deviceName: authorizationModel.formData.get('device-name'),
        password: authorizationModel.formData.get('password')
    };

    authorizationModel.xhttp.send(JSON.stringify(formData));
    authorizationModel.xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            if (authorizationModel.xhttp.response == 'true') {
                openVerification()
            } else {

                if (validationModel.notCorrectValidation.style.display === 'flex') {
                    validationModel.notCorrectValidation.style.display = 'none';
                }
                authorizationModel.errorAuthorization.style.display = 'flex';
            }
        }

        if (authorizationModel.xhttp.status == 404) {
            alert('file or resourse not found');
        }
    }
};
