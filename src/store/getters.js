export default {
  oUserInfo: state => state.user.oUserInfo,
  oCompanyInfo: state => state.info.oCompanyInfo,
  oBasicInfo: state => state.info.oBasicInfo,
  oFileInfo: state => state.info.oFileInfo,
  token: state => state.user.token,
  WOOD_VARIETY: state => state.sysParam.WOOD_VARIETY,
  PLANT_VARIETY: state => state.sysParam.PLANT_VARIETY
};