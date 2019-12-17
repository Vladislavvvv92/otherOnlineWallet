import '../style/main.less'

import {initQrCods} from './qr-cods/controller';
import {initMobileModal} from  './mobile-modal/controller';
import {initLoginForm} from './login-form/initLoginForm'
import {initTranslation} from './translation/controller';
import {initLanguageSwitcher} from './language-switcher/controller';

    document.addEventListener('DOMContentLoaded', init);

function init() {
    initQrCods();
    initLoginForm();
    initTranslation();
    initMobileModal();
    initLanguageSwitcher();
}