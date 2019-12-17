import mobileModal from './model';
import {disableModal} from './logic';

export const initMobileModal = () => {
    mobileModal.btnClose.addEventListener('click',function () {
       disableModal(mobileModal.popBackground);
   });
};


