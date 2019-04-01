webpackJsonp([6],{F1XD:function(t,s){},F2y0:function(t,s){},V1p8:function(t,s){},Yyv5:function(t,s,o){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=o("AQL0"),r={render:function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticClass:"change-password"},[o("van-nav-bar",{attrs:{title:"修改密码","left-arrow":""},on:{"click-left":function(s){return t.$emit("close-popup")}}}),t._v(" "),o("div",{staticClass:"field"},[o("van-cell-group",{staticClass:"van-hairline--bottom",staticStyle:{"margin-top":"50px"},attrs:{border:!1}},[o("van-field",{attrs:{placeholder:"请输入当前密码","error-message":t.errMsg.currentPasswordErrMsg,"right-icon":t.showPassword?"closed-eye":"eye-o",type:t.showPassword?"":"password"},on:{"click-right-icon":function(s){t.showPassword=!t.showPassword},blur:function(s){return t.handleInputBlur("currentPassword")}},model:{value:t.formData.currentPassword,callback:function(s){t.$set(t.formData,"currentPassword",s)},expression:"formData.currentPassword"}})],1),t._v(" "),o("van-cell-group",{staticClass:"van-hairline--bottom",staticStyle:{"margin-top":"20px"},attrs:{border:!1}},[o("van-field",{attrs:{placeholder:"请输入新密码","error-message":t.errMsg.newPasswordErrMsg,type:t.showPassword?"":"password"},on:{blur:function(s){return t.handleInputBlur("newPassword")}},model:{value:t.formData.newPassword,callback:function(s){t.$set(t.formData,"newPassword",s)},expression:"formData.newPassword"}},[o("span",{staticStyle:{color:"transparent"},attrs:{slot:"button"},slot:"button"},[t._v("1")])])],1),t._v(" "),o("van-cell-group",{staticClass:"van-hairline--bottom",staticStyle:{"margin-top":"20px"},attrs:{border:!1}},[o("van-field",{attrs:{placeholder:"请再次输入新密码","error-message":t.errMsg.confirmPasswordErrMsg,type:t.showPassword?"":"password"},on:{blur:function(s){return t.handleInputBlur("confirmPassword")}},model:{value:t.formData.confirmPassword,callback:function(s){t.$set(t.formData,"confirmPassword",s)},expression:"formData.confirmPassword"}},[o("span",{staticStyle:{color:"transparent"},attrs:{slot:"button"},slot:"button"},[t._v("1")])])],1)],1),t._v(" "),o("div",{staticClass:"btn change-button-background"},[o("van-button",{attrs:{size:"large",round:"",type:"primary"},on:{click:t.submit}},[t._v("确认")])],1)],1)},staticRenderFns:[]};var e={render:function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticClass:"set-notice"},[o("van-nav-bar",{attrs:{title:"通用设置","left-arrow":""},on:{"click-left":function(s){return t.$emit("close-popup")}}}),t._v(" "),o("van-switch-cell",{staticClass:"switch",attrs:{title:"接受新消息通知","active-color":"#FFF","inactive-color":"#01B6AF","active-value":!1,"inactive-value":!0},on:{change:function(s){return t.$window.$storage.set("notShowNotice",t.notShowNotice)}},model:{value:t.notShowNotice,callback:function(s){t.notShowNotice=s},expression:"notShowNotice"}})],1)},staticRenderFns:[]};var n={name:"Setting",components:{ChangePassword:o("VU/8")({name:"ChangePassword",data:function(){return{showPassword:!1,errMsg:{currentPasswordErrMsg:"",newPasswordErrMsg:"",confirmPasswordErrMsg:""},formData:{currentPassword:"",newPassword:"",confirmPassword:""}}},methods:{submit:function(){var t=this;this.validate()&&this.$http({url:"/auth/changePassword",method:"POST",data:this.formData}).then(function(s){s&&0==s.data.code&&(t.$toast.success("修改密码成功"),t.$emit("close-popup"))})},validate:function(){var t=!0;return""==this.formData.currentPassword&&(this.errMsg.currentPasswordErrMsg="此项不能为空",t=!1),""==this.formData.newPassword&&(this.errMsg.newPasswordErrMsg="此项不能为空",t=!1),""==this.formData.confirmPassword&&(this.errMsg.confirmPasswordErrMsg="此项不能为空",t=!1),t?(this.formData.newPassword!=this.formData.confirmPassword&&this.$toast.fail("新密码输入不一致"),t):t},handleInputBlur:function(t){""===this.formData[t]?this.errMsg[t+"ErrMsg"]="此项不能为空":this.errMsg[t+"ErrMsg"]=""}}},r,!1,function(t){o("V1p8")},"data-v-2e9d839f",null).exports,SetNotice:o("VU/8")({name:"SetNotice",data:function(){return{notShowNotice:!1}},methods:{}},e,!1,function(t){o("u+iE")},"data-v-54147a6c",null).exports},data:function(){return{showLoading:!1,showPopupPage:!1,showPage:""}},methods:{showPopup:function(t){this.showPage=t,this.showPopupPage=!0},delCache:function(){var t=this;this.showLoading=!0,setTimeout(function(){t.showLoading=!1,t.$toast.success("清除缓存成功")},2e3)},logout:function(){var t=this;this.$http({url:"/auth/logout",method:"GET"}).then(function(s){s&&0==s.data.code&&(Object(a.delAllInfo)(),t.$toast.success("退出登陆成功"),t.$router.push({name:"login"}))})},goBack:function(){window.history.back()}}},i={render:function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticClass:"setting"},[o("van-nav-bar",{attrs:{title:"设置","left-arrow":""},on:{"click-left":t.goBack}}),t._v(" "),o("van-cell-group",{staticStyle:{"margin-bottom":"7px"}},[o("van-cell",{attrs:{title:"通用设置","is-link":"",size:"large"},on:{click:function(s){return t.showPopup("setNotice")}}}),t._v(" "),o("van-cell",{attrs:{title:"修改密码","is-link":"",size:"large"},on:{click:function(s){return t.showPopup("changePassword")}}})],1),t._v(" "),o("van-cell-group",{staticStyle:{"margin-bottom":"7px"}},[o("van-cell",{attrs:{title:"清理缓存","is-link":"",size:"large"},on:{click:t.delCache}})],1),t._v(" "),t.showLoading?o("van-loading",{staticClass:"setting-loading",attrs:{color:"white",size:"60px"}}):t._e(),t._v(" "),o("van-cell-group",{staticStyle:{"margin-bottom":"7px"}},[o("van-cell",{attrs:{title:"反馈","is-link":"",size:"large"}}),t._v(" "),o("van-cell",{attrs:{title:"关于林业检疫助手","is-link":"",size:"large"}})],1),t._v(" "),o("van-cell-group",[o("van-cell",{staticClass:"change-cell",attrs:{title:"退出登陆",size:"large"},on:{click:t.logout}})],1),t._v(" "),o("van-popup",{attrs:{position:"right",overlay:!1},model:{value:t.showPopupPage,callback:function(s){t.showPopupPage=s},expression:"showPopupPage"}},["changePassword"===t.showPage?o("change-password",{on:{"close-popup":function(s){t.showPopupPage=!1}}}):t._e(),t._v(" "),"setNotice"===t.showPage?o("set-notice",{on:{"close-popup":function(s){t.showPopupPage=!1}}}):t._e()],1)],1)},staticRenderFns:[]};var c=o("VU/8")(n,i,!1,function(t){o("F1XD"),o("F2y0")},"data-v-61949d46",null);s.default=c.exports},"u+iE":function(t,s){}});
//# sourceMappingURL=6.f5602fe4d8da513c0f9a.js.map