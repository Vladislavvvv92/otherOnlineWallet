import qrCodsModel from "./model";
export const closeCods = () => {
    qrCodsModel.popUpBackground.style.display = 'none';
    qrCodsModel.qrCods.style.display = 'none';
    qrCodsModel.qrCodAppStoreImg.style.display = 'none';
    qrCodsModel.appStoreText.style.display = 'none';
    qrCodsModel.qrCodGooglePlayImg.style.display = 'none';
    qrCodsModel.googlePlayText.style.display = 'none';
};
