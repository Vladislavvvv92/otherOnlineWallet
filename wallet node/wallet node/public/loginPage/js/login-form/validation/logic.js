import validationModel from './model'

export const validation = (login, RegExp, password, deviceName, error) => {
    if (login.value === "" || password.value === "" || deviceName.value === "") {
        errorValidation(error);

        return false;
    }

    for (let i = 0; i < login.value.length; i++) {
        validationModel.isValid = RegExp.test(login.value[i]);

        if (validationModel.isValid === false  || (!passwordValidation(password.value) || (login.value.length > 20 ) ) ) {
            errorValidation(error);

            return false;
        }
    }
    return true;
};

const passwordValidation = (value) =>  {
    if (value.length < 6 || value.length > 20) {
        return false;
    } else {
        return true;
    }

};

const errorValidation = (value) => {
    if (validationModel.errorAuthorization.style.display === 'flex') {
        validationModel.errorAuthorization.style.display = 'none';
    }

    value.style.display = 'flex';
};