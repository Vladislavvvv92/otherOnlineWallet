import qrCodsModel from './model'
import {closeCods} from './logic'

export const initQrCods = () => {
   qrCodsModel.showGooglePlayBtn.addEventListener('click',function (e) {
      qrCodsModel.popUpBackground.style.display = 'flex';
      qrCodsModel.qrCods.style.display = 'flex';
      qrCodsModel.qrCodGooglePlayImg.style.display = 'flex';
      qrCodsModel.googlePlayText.style.display = 'block';
   });

   qrCodsModel.showAppStoreBtn.addEventListener('click',function (e) {
      qrCodsModel.popUpBackground.style.display = 'flex';
      qrCodsModel.qrCods.style.display = 'flex';
      qrCodsModel.qrCodAppStoreImg.style.display = 'flex';
      qrCodsModel.appStoreText.style.display = 'block';
   });

   qrCodsModel.qrCodsCloseBtn.addEventListener('click', function () {
      closeCods()
   });

   qrCodsModel.popUpBackground.addEventListener('click', function () {
      if ( qrCodsModel.verificationModalWindow.style.display != 'flex'){
         closeCods()
      }
   });

   qrCodsModel.qrCods.addEventListener('click', function (e) {
      e.stopPropagation()
   })


   /*popUpBackground.addEventListener('click',function (e) {
      let elem = e.target;

      if (!elem.classList.contains('doNotClose')) {
         if(verificationModalWindow.style.display != 'flex'){
      popUpBackground.style.display = 'none';
      qrCods.style.display = 'none';
      qrCodAppStoreImg.style.display = 'none';
      appStoreText.style.display = 'none';
      qrCodGooglePlayImg.style.display = 'none';
      googlePlayText.style.display = 'none';
   }

}
});*/
};

   /*showGooglePlayBtn.addEventListener('click',function () {
      setImage(qrCodGooglePlayImg, googlePlayText, styleDisplayValue);
   });

   showAppStoreBtn.addEventListener('click',function () {
      setImage(qrCodAppStoreImg, appStoreText, styleDisplayValue);
   });

   qrCodsCloseBtn.addEventListener('click', function () {
      changeQrBody(styleDisplayValue);
      closeAll(qrCodAppStoreImg, qrCodGooglePlayImg, googlePlayText, appStoreText, styleDisplayValue);
   });

   popUpBackground.addEventListener('click',function (e) {
       let elem = e.target;

       if (!elem.classList.contains('doNotClose')) {
          if(verificationModalWindow.style.display != 'flex'){
             changeQrBody(styleDisplayValue);

             closeAll(qrCodAppStoreImg, qrCodGooglePlayImg, googlePlayText, appStoreText, styleDisplayValue);
          }

      }
   });*/



