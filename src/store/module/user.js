const user = {
  state: {
    oUserInfo: {}
  },
  mutations: {
    setUserInfo(state, data) {
      state.oUserInfo = data;
    }
  },
  actions: {
    login(context, { oLoginFormData, oVm }) {
      let params = {};
      let url = '';
      if (oLoginFormData.sLoginType == 'code') {
        params = {
          mobile: oLoginFormData.sUsername,
          smsCode: oLoginFormData.sPassword
        };
        url = '/auth/loginBySmsCode';
      } else 
      if (oLoginFormData.sLoginType == 'password'){
        params = {
          mobile: oLoginFormData.sUsername,
          password: oLoginFormData.sPassword
        };
        url = '/auth/login';
      }
      return oVm.$http({
        url: url,
        method: 'POST',
        headers: {
          //'Content-Type': 'application/x-www-form-urlencoded',
        },
        //data: oVm.$qs.stringify(params)
        data: params
      }).then((res) => {
        if(res && res.data.success) {
          context.commit('setUserInfo', res.data.data);
          window.$storage.set('user', res.data.data);
        }
      });
    }
  }
}

export default user;
