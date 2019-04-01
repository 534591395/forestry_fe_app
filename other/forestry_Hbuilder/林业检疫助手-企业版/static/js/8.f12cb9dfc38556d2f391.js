webpackJsonp([8],{Udrs:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("mvHQ"),s=r.n(a),o={name:"EmployeeCard",components:{UploadPicture:r("SJTH").a},props:{value:{type:Object,required:!0},index:{type:Number,required:!0}},data:function(){return{errMsg:{nameErrMsg:"",usernameErrMsg:""}}},methods:{handleInputBlur:function(e){console.log(s()(this.value)),""==this.value[e]?this.errMsg[e+"ErrMsg"]="此项不能为空":this.errMsg[e+"ErrMsg"]=""},validate:function(){var e=!0;return""==this.value.name&&(this.errMsg.nameErrMsg="此项不能为空",e=!1),""==this.value.username&&(this.errMsg.usernameErrMsg="此项不能为空",e=!1),e?(""==this.value.socialSecurityPic&&(e=!1),""==this.value.cardFrontPic&&(e=!1),""==this.value.cardOppositePic&&(e=!1),e||(this.$toast("请提交社保证明和身份证正反面照片"),e)):e},setSocialSecurityPictureUrl:function(e){this.value.socialSecurityPic=e},setCardFrontPictureUrl:function(e){this.value.cardFrontPic=e},setCardOppositePictureUrl:function(e){this.value.cardOppositePic=e}}},n={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"employee-card"},[r("van-icon",{staticClass:"employee-card__icon",attrs:{name:"cross"},on:{click:function(t){return e.$emit("del-card",e.index)}}}),e._v(" "),r("div",[r("span",{staticClass:"employee-card__title"},[e._v("个人信息")]),e._v(" "),r("van-cell-group",{staticClass:"van-hairline--bottom",staticStyle:{"margin-bottom":"20px","margin-top":"10px"},attrs:{border:!1}},[r("van-field",{attrs:{readonly:1===e.$store.getters.oCompanyInfo.status||4===e.$store.getters.oCompanyInfo.status,placeholder:"请输入业务员姓名","left-icon":"contact",required:"","error-message":e.errMsg.nameErrMsg},on:{blur:function(t){return e.handleInputBlur("name")}},model:{value:e.value.name,callback:function(t){e.$set(e.value,"name",t)},expression:"value.name"}},[r("span",{staticStyle:{color:"transparent"},attrs:{slot:"button"},slot:"button"},[e._v("1")])])],1),e._v(" "),r("van-cell-group",{staticClass:"van-hairline--bottom",staticStyle:{"margin-bottom":"20px"},attrs:{border:!1}},[r("van-field",{attrs:{readonly:1===e.$store.getters.oCompanyInfo.status||4===e.$store.getters.oCompanyInfo.status,placeholder:"请输入业务员手机号","left-icon":"phone-o",required:"","error-message":e.errMsg.usernameErrMsg},on:{blur:function(t){return e.handleInputBlur("username")}},model:{value:e.value.username,callback:function(t){e.$set(e.value,"username",t)},expression:"value.username"}},[r("span",{staticStyle:{color:"transparent"},attrs:{slot:"button"},slot:"button"},[e._v("1")])])],1)],1),e._v(" "),r("div",[r("span",{staticClass:"employee-card__title employee-card__title--required"},[e._v("附件添加")]),e._v(" "),r("span",{staticClass:"employee-card__tips"},[e._v("1.所在公司6个月社保证明（法人股东除外）")]),e._v(" "),r("span",{staticClass:"employee-card__tips"},[e._v("2.清晰的身份证正反面照片")]),e._v(" "),r("van-cell-group",{staticStyle:{"margin-top":"20px"},attrs:{border:!1}},[r("div",{staticStyle:{display:"flex"}},[r("upload-picture",{staticStyle:{"margin-right":"15px"},attrs:{sPictureUrl:e.value.socialSecurityPic,fSetPicturUrl:e.setSocialSecurityPictureUrl,canUpload:!(1==e.$store.getters.oCompanyInfo.status||4==e.$store.getters.oCompanyInfo.status)}}),e._v(" "),r("upload-picture",{staticStyle:{"margin-right":"15px"},attrs:{sPictureUrl:e.value.cardFrontPic,fSetPicturUrl:e.setCardFrontPictureUrl,canUpload:!(1==e.$store.getters.oCompanyInfo.status||4==e.$store.getters.oCompanyInfo.status)}}),e._v(" "),r("upload-picture",{attrs:{sPictureUrl:e.value.cardOppositePic,fSetPicturUrl:e.setCardOppositePictureUrl,canUpload:!(1==e.$store.getters.oCompanyInfo.status||4==e.$store.getters.oCompanyInfo.status)}})],1)])],1)],1)},staticRenderFns:[]};var i={name:"SetEmployee",components:{EmployeeCard:r("VU/8")(o,n,!1,function(e){r("gQSr")},"data-v-5dab0f92",null).exports},created:function(){window.$storage.get("isReg")||this.getEmployee()},data:function(){return{employee:[{name:"",username:"",socialSecurityPic:"",cardFrontPic:"",cardOppositePic:""}],employeeInit:[]}},methods:{getEmployee:function(){var e=this;this.$http({url:"/employee/getEmployee",method:"GET"}).then(function(t){t&&0==t.data.code&&(e.employeeInit=JSON.parse(s()(t.data.data)),e.employee=t.data.data||[{name:"",username:"",socialSecurityPic:"",cardFrontPic:"",cardOppositePic:""}])})},submit:function(){var e=this;if(window.$underscore.isEqual(this.employeeInit,this.employee))this.$router.push({name:"companySetting"});else{var t=!0;for(var r in this.employee)this.$refs["employee-card"][r].validate()||(t=!1);t&&this.$http({url:"/employee/editEmployee",method:"POST",data:{employee:this.employee}}).then(function(t){t&&0==t.data.code&&(e.$toast.success("修改业务员成功"),window.$storage.get("isReg")?e.$router.push({name:"chooseCert"}):e.$router.push({name:"companySetting"}))})}},handleDelCard:function(e){1!=this.employee.length&&1!==this.$store.getters.oCompanyInfo.status&&4!==this.$store.getters.oCompanyInfo.status&&this.employee.splice(e,1)},addEmployee:function(){1!==this.$store.getters.oCompanyInfo.status&&4!==this.$store.getters.oCompanyInfo.status&&this.employee.push({name:"",username:"",socialSecurityPic:"",cardFrontPic:"",cardOppositePic:""})}}},l={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"set-employee"},[e.$window.$storage.get("isReg")?r("van-nav-bar",{attrs:{title:"添加业务员","right-text":"跳过",fixed:""},on:{"click-right":function(t){return e.$router.push({name:"chooseCert"})}}}):r("van-nav-bar",{attrs:{title:"修改业务员","left-arrow":"",fixed:""},on:{"click-left":function(t){return e.$router.push({name:"setCompanyInfo"})}}}),e._v(" "),e._l(e.employee,function(t,a){return r("employee-card",{key:a,ref:"employee-card",refInFor:!0,attrs:{index:a},on:{"del-card":e.handleDelCard},model:{value:e.employee[a],callback:function(t){e.$set(e.employee,a,t)},expression:"employee[index]"}})}),e._v(" "),1==e.employee.length?r("div",{staticClass:"set-employee-add-employee flex-center-xy",on:{click:e.addEmployee}},[r("div",{staticClass:"set-employee-add-employee__text"},[r("van-icon",{attrs:{name:"plus"}}),e._v(" "),r("span",[e._v("\n        添加一位业务员\n      ")])],1)]):e._e(),e._v(" "),r("div",{staticClass:"set-employee-btn change-button-background"},[2===e.$store.getters.oCompanyInfo.status||3===e.$store.getters.oCompanyInfo.status||e.$window.$storage.get("isReg")?r("van-button",{attrs:{size:"large",round:"",type:"primary"},on:{click:e.submit}},[e._v("提交")]):e._e(),e._v(" "),1===e.$store.getters.oCompanyInfo.status||4===e.$store.getters.oCompanyInfo.status?r("van-button",{attrs:{size:"large",round:"",type:"primary"},on:{click:function(t){return e.$router.push({name:"companySetting"})}}},[e._v("返回")]):e._e()],1)],2)},staticRenderFns:[]};var c=r("VU/8")(i,l,!1,function(e){r("fY76")},"data-v-60f58fd2",null);t.default=c.exports},fY76:function(e,t){},gQSr:function(e,t){}});
//# sourceMappingURL=8.f12cb9dfc38556d2f391.js.map