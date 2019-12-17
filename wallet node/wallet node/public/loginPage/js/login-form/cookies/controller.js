import cookiesModel from './model'
import verificationModel from '../verification/model'

export const setCookies = () => {
    cookiesModel.cookiesForm = new FormData(cookiesModel.formForCookies);
    cookiesModel.cookiesXhttp.open('GET',"/session.js", true);
    cookiesModel.cookiesXhttp.send();

    cookiesModel.cookiesXhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            if (verificationModel.verificationXhttp.response == 'true') {
                self.location = "public/dashboardPage/dashboard.html";
            }
            else{

            }
        }

        if (verificationModel.verificationXhttp.status == 404) {
            alert('file or resourse not found');
        }
    };
};
