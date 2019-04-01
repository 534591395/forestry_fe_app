webpackJsonp([14],{SIFZ:function(a,e){},eSXO:function(a,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=r("mvHQ"),o=r.n(t),n={name:"PlantCert",components:{UploadPicture:r("SJTH").a},created:function(){var a=this;window.scrollTo(0,0),this.$route.params.create_time&&(this.formData=this.$route.params,this.statusObject[2].text="审核已通过，请至城厢镇林业局"+this.formData.windows+"号窗口领取",this.statusObject[3].text="审核未通过，被拒原因: "+this.formData.refuse_reason,4===this.formData.status&&this.$dialog.confirm({title:"提示",message:"您的开证审核已通过，请尽快上传装车照片",confirmButtonText:"上传",cancelButtonText:"取消"}).then(function(){a.skipNewPath()}).catch(function(){}))},data:function(){return{formData:{producing_area:"",processing_area:"",plant_name:this.$store.getters.oBasicInfo["植物产品名称"].info[0],variety:this.$store.getters.oBasicInfo["品种"].info[0],car_amount:"",every_car_amount:"",packaging:"",standard:"",receive_person:"",receive_address_type:0,receive_address:"",phone:"",person_id:"",date_time:"",apply_person:"",transport_person:"",report_number:"",car_number:""},errMsg:{car_amountErrMsg:"",every_car_amountErrMsg:"",receive_personErrMsg:"",receive_addressErrMsg:"",phoneErrMsg:"",person_idErrMsg:"",date_timeErrMsg:"",transport_personErrMsg:"",report_numberErrMsg:"",car_numberErrMsg:""},statusObject:{1:{img:r("3EKw"),backgroundColor:"#01B6AF",text:"已提交，等待工作人员审核"},2:{img:r("eprD"),backgroundColor:"#01B6AF",text:""},3:{img:r("KWn/"),backgroundColor:"#FF8F3B",text:""},4:{img:r("eprD"),backgroundColor:"#01B6AF",text:"审核已通过，请立即上传装车照片"}},popup:{plantNamePopup:!1,varietyPopup:!1}}},methods:{submit:function(){var a=this;if(this.validate()){var e=JSON.parse(o()(this.formData));this.$http({url:"/cert/addPlantCert",method:"POST",data:e}).then(function(e){e&&0===e.data.code&&(a.$toast.success("添加木材运输证与植物检疫申请成功"),a.goBack())})}},validate:function(){var a=!0;return""==this.formData.car_amount&&(this.errMsg.car_amountErrMsg="此项不能为空",a=!1),""==this.formData.every_car_amount&&(this.errMsg.every_car_amountErrMsg="此项不能为空",a=!1),""==this.formData.receive_person&&(this.errMsg.receive_personErrMsg="此项不能为空",a=!1),""==this.formData.phone&&(this.errMsg.phoneErrMsg="此项不能为空",a=!1),""==this.formData.person_id&&(this.errMsg.person_idErrMsg="此项不能为空",a=!1),""==this.formData.date_time&&(this.errMsg.date_timeErrMsg="此项不能为空",a=!1),""==this.formData.transport_person&&(this.errMsg.transport_personErrMsg="此项不能为空",a=!1),""==this.formData.report_number&&(this.errMsg.report_numberErrMsg="此项不能为空",a=!1),""==this.formData.car_number&&(this.errMsg.car_numberErrMsg="此项不能为空",a=!1),a},handleInputBlur:function(a){""===this.formData[a]?this.errMsg[a+"ErrMsg"]="此项不能为空":this.errMsg[a+"ErrMsg"]=""},goBack:function(){window.history.back()},skipNewPath:function(){this.$router.push({name:"certUpload",query:{id:this.formData.id}})}}},s={render:function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("div",{staticClass:"plant-cert"},[r("van-nav-bar",{attrs:{title:"木材运输与植物检疫申请","left-arrow":"",fixed:""},on:{"click-left":a.goBack}}),a._v(" "),a.formData.status?r("div",{staticClass:"plant-cert-status",style:{backgroundColor:a.statusObject[a.formData.status].backgroundColor}},[r("div",{staticClass:"flex-center-y plant-cert-status-top"},[r("img",{staticClass:"plant-cert-status-top__img",attrs:{src:a.statusObject[a.formData.status].img,alt:""}}),a._v(" "),r("span",{staticStyle:{"word-break":"break-all"}},[a._v(a._s(a.statusObject[a.formData.status].text))])]),a._v(" "),r("p",{staticClass:"plant-cert-status-bottom"},[a._v(a._s(a.formData.create_time))])]):a._e(),a._v(" "),r("div",{staticClass:"plant-cert-card"},[a._m(0),a._v(" "),r("van-cell-group",{staticClass:"van-hairline--bottom change-center-y-cell__value change-cell-title-width-default",attrs:{border:!1}},[r("van-field",{attrs:{readonly:a.$route.params.create_time,label:"植物来源（产地）",placeholder:"请输入产地","input-align":"right"},model:{value:a.formData.producing_area,callback:function(e){a.$set(a.formData,"producing_area",e)},expression:"formData.producing_area"}})],1),a._v(" "),r("van-cell-group",{staticClass:"van-hairline--bottom change-center-y-cell__value change-cell-title-width-large",attrs:{border:!1}},[r("van-field",{attrs:{readonly:a.$route.params.create_time,label:"植物产品来源（加工地）",placeholder:"请输入加工地","input-align":"right"},model:{value:a.formData.processing_area,callback:function(e){a.$set(a.formData,"processing_area",e)},expression:"formData.processing_area"}})],1),a._v(" "),r("van-cell-group",{staticClass:"van-hairline--bottom change-cell__value",attrs:{border:!1}},[r("van-field",{attrs:{readonly:"",label:"植物产品名称","input-align":"right"},on:{focus:function(e){!a.$route.params.create_time&&(a.popup.plantNamePopup=!0)}},model:{value:a.formData.plant_name,callback:function(e){a.$set(a.formData,"plant_name",e)},expression:"formData.plant_name"}})],1),a._v(" "),r("van-cell-group",{staticClass:"van-hairline--bottom change-cell__value",attrs:{border:!1}},[r("van-field",{attrs:{readonly:"",label:"品种","input-align":"right"},on:{focus:function(e){!a.$route.params.create_time&&(a.popup.varietyPopup=!0)}},model:{value:a.formData.variety,callback:function(e){a.$set(a.formData,"variety",e)},expression:"formData.variety"}})],1),a._v(" "),r("van-cell-group",{staticClass:"van-hairline--bottom change-field__error-message",attrs:{border:!1}},[r("van-field",{attrs:{readonly:a.$route.params.create_time,label:"车船数",placeholder:"车船数","input-align":"right",required:"","error-message":a.errMsg.car_amountErrMsg},on:{blur:function(e){a.handleInputBlur("car_amount")}},model:{value:a.formData.car_amount,callback:function(e){a.$set(a.formData,"car_amount",e)},expression:"formData.car_amount"}},[r("span",{staticStyle:{color:"#323233"},attrs:{slot:"button"},slot:"button"},[a._v("辆")])])],1),a._v(" "),r("van-cell-group",{staticClass:"van-hairline--bottom change-field__error-message",attrs:{border:!1}},[r("van-field",{attrs:{readonly:a.$route.params.create_time,label:"每车/船",placeholder:"多少立方米","input-align":"right",required:"","error-message":a.errMsg.every_car_amountErrMsg},on:{blur:function(e){a.handleInputBlur("every_car_amount")}},model:{value:a.formData.every_car_amount,callback:function(e){a.$set(a.formData,"every_car_amount",e)},expression:"formData.every_car_amount"}},[r("span",{staticStyle:{color:"#323233"},attrs:{slot:"button"},slot:"button"},[a._v("m³")])])],1),a._v(" "),r("van-cell-group",{staticClass:"van-hairline--bottom change-center-y-cell__value",attrs:{border:!1}},[r("van-field",{attrs:{readonly:a.$route.params.create_time,label:"包装方式",placeholder:"请输入包装方式","input-align":"right"},model:{value:a.formData.packaging,callback:function(e){a.$set(a.formData,"packaging",e)},expression:"formData.packaging"}})],1),a._v(" "),r("van-cell-group",{staticClass:"van-hairline--bottom change-center-y-cell__value",attrs:{border:!1}},[r("van-field",{attrs:{readonly:a.$route.params.create_time,label:"规格",placeholder:"请输入规格","input-align":"right"},model:{value:a.formData.standard,callback:function(e){a.$set(a.formData,"standard",e)},expression:"formData.standard"}})],1),a._v(" "),r("van-cell-group",{staticClass:"van-hairline--bottom change-field__body change-field__error-message change-cell-title-width-default",attrs:{border:!1}},[r("van-field",{attrs:{readonly:a.$route.params.create_time,label:"收货单位（个人）",placeholder:"请输入收货单位","input-align":"right",required:"","error-message":a.errMsg.receive_personErrMsg},on:{blur:function(e){a.handleInputBlur("receive_person")}},model:{value:a.formData.receive_person,callback:function(e){a.$set(a.formData,"receive_person",e)},expression:"formData.receive_person"}})],1),a._v(" "),r("van-cell-group",{staticClass:"van-hairline--bottom change-cell__value change-field__error-message change-cell-title-width-default",attrs:{border:!1}},[r("van-field",{attrs:{readonly:a.$route.params.create_time,label:"收货单位详细地址",disabled:""}},[r("van-radio-group",{staticClass:"flex-center-y",attrs:{slot:"button"},slot:"button",model:{value:a.formData.receive_address_type,callback:function(e){a.$set(a.formData,"receive_address_type",e)},expression:"formData.receive_address_type"}},[r("van-radio",{attrs:{name:0}},[a._v("省内")]),a._v(" "),r("van-radio",{staticStyle:{"margin-left":"10px"},attrs:{name:1}},[a._v("省外")])],1)],1),a._v(" "),r("van-field",{attrs:{readonly:a.$route.params.create_time,placeholder:"请输入收货单位详细地址",type:"textarea",rows:"3",required:"","error-message":a.errMsg.receive_addressErrMsg},on:{blur:function(e){a.handleInputBlur("receive_address")}},model:{value:a.formData.receive_address,callback:function(e){a.$set(a.formData,"receive_address",e)},expression:"formData.receive_address"}})],1),a._v(" "),r("van-cell-group",{staticClass:"van-hairline--bottom change-field__body change-field__error-message change-cell-title-width-large",attrs:{border:!1}},[r("van-field",{attrs:{readonly:a.$route.params.create_time,label:"收货单位（个人）电话",placeholder:"请输入电话","input-align":"right",required:"","error-message":a.errMsg.phoneErrMsg},on:{blur:function(e){a.handleInputBlur("phone")}},model:{value:a.formData.phone,callback:function(e){a.$set(a.formData,"phone",e)},expression:"formData.phone"}})],1),a._v(" "),r("van-cell-group",{staticClass:"van-hairline--bottom change-field__body change-field__error-message change-cell-title-width-large",attrs:{border:!1}},[r("van-field",{attrs:{readonly:a.$route.params.create_time,label:"收货联系人身份证号码",placeholder:"请输入收货联系人身份证号码","input-align":"right",required:"","error-message":a.errMsg.person_idErrMsg},on:{blur:function(e){a.handleInputBlur("person_id")}},model:{value:a.formData.person_id,callback:function(e){a.$set(a.formData,"person_id",e)},expression:"formData.person_id"}})],1),a._v(" "),r("van-cell-group",{staticClass:"van-hairline--bottom change-field__body change-field__error-message",attrs:{border:!1}},[r("van-field",{attrs:{readonly:a.$route.params.create_time,label:"日期",placeholder:"按年-月-日输入（中间要加横线）","input-align":"right",required:"","error-message":a.errMsg.date_timeErrMsg},on:{blur:function(e){a.handleInputBlur("date_time")}},model:{value:a.formData.date_time,callback:function(e){a.$set(a.formData,"date_time",e)},expression:"formData.date_time"}})],1),a._v(" "),r("van-cell-group",{staticClass:"van-hairline--bottom change-field__body",attrs:{border:!1}},[r("van-field",{attrs:{readonly:a.$route.params.create_time,label:"申请人",placeholder:"请输入申请人","input-align":"right"},model:{value:a.formData.apply_person,callback:function(e){a.$set(a.formData,"apply_person",e)},expression:"formData.apply_person"}})],1),a._v(" "),r("van-cell-group",{staticClass:"van-hairline--bottom change-field__body change-field__error-message",attrs:{border:!1}},[r("van-field",{attrs:{readonly:a.$route.params.create_time,label:"承运人",placeholder:"请输入承运人","input-align":"right",required:"","error-message":a.errMsg.transport_personErrMsg},on:{blur:function(e){a.handleInputBlur("transport_person")}},model:{value:a.formData.transport_person,callback:function(e){a.$set(a.formData,"transport_person",e)},expression:"formData.transport_person"}})],1),a._v(" "),r("van-cell-group",{staticClass:"van-hairline--bottom change-field__body change-field__error-message",attrs:{border:!1}},[r("van-field",{attrs:{readonly:a.$route.params.create_time,label:"对应报检单号",placeholder:"请输入报检单号","input-align":"right",required:"","error-message":a.errMsg.report_numberErrMsg},on:{blur:function(e){a.handleInputBlur("report_number")}},model:{value:a.formData.report_number,callback:function(e){a.$set(a.formData,"report_number",e)},expression:"formData.report_number"}})],1),a._v(" "),r("van-cell-group",{staticClass:"van-hairline--bottom change-field__body change-field__error-message",attrs:{border:!1}},[r("van-field",{attrs:{readonly:a.$route.params.create_time,label:"车牌号",placeholder:"请输入车牌号","input-align":"right",required:"",type:"textarea",rows:"2","error-message":a.errMsg.car_numberErrMsg},on:{blur:function(e){a.handleInputBlur("car_number")}},model:{value:a.formData.car_number,callback:function(e){a.$set(a.formData,"car_number",e)},expression:"formData.car_number"}})],1),a._v(" "),a.formData.picture_url?r("div",[r("p",{staticClass:"title-pic"},[a._v("\n        车辆照片\n      ")]),a._v(" "),r("van-cell-group",{staticClass:"van-hairline--bottom",staticStyle:{"padding-bottom":"26px"},attrs:{border:!1}},[r("div",{staticStyle:{display:"flex","flex-wrap":"wrap"}},a._l(a.formData.picture_url.split(","),function(a,e){return r("upload-picture",{key:e,staticStyle:{"margin-left":"10px","margin-bottom":"10px"},attrs:{index:e,canUpload:!1,sPictureUrl:a}})}),1)])],1):a._e()],1),a._v(" "),r("div",{staticClass:"plant-cert-btn change-button-background"},[this.$route.params.create_time?a._e():r("van-button",{attrs:{size:"large",round:"",type:"primary"},on:{click:a.submit}},[a._v("提交")]),a._v(" "),this.$route.params.create_time&&4===this.$route.params.status?r("van-button",{attrs:{size:"large",round:"",type:"primary"},on:{click:a.skipNewPath}},[a._v("上传照片")]):a._e()],1),a._v(" "),r("div",{staticClass:"change-radio"},[r("van-popup",{attrs:{position:"bottom"},model:{value:a.popup.plantNamePopup,callback:function(e){a.$set(a.popup,"plantNamePopup",e)},expression:"popup.plantNamePopup"}},[r("van-radio-group",{staticClass:"plant-cert__radio",on:{change:function(e){a.popup.plantNamePopup=!1}},model:{value:a.formData.plant_name,callback:function(e){a.$set(a.formData,"plant_name",e)},expression:"formData.plant_name"}},a._l(a.$store.getters.oBasicInfo["植物产品名称"].info,function(e,t){return r("van-radio",{key:t,attrs:{name:e}},[a._v("\n         "+a._s(e)+"\n        ")])}),1)],1),a._v(" "),r("van-popup",{attrs:{position:"bottom"},model:{value:a.popup.varietyPopup,callback:function(e){a.$set(a.popup,"varietyPopup",e)},expression:"popup.varietyPopup"}},[r("van-radio-group",{staticClass:"plant-cert__radio",on:{change:function(e){a.popup.varietyPopup=!1}},model:{value:a.formData.variety,callback:function(e){a.$set(a.formData,"variety",e)},expression:"formData.variety"}},a._l(a.$store.getters.oBasicInfo["品种"].info,function(e,t){return r("van-radio",{key:t,attrs:{name:e}},[a._v("\n          "+a._s(e)+"\n        ")])}),1)],1)],1)],1)},staticRenderFns:[function(){var a=this.$createElement,e=this._self._c||a;return e("div",{staticClass:"plant-cert-card__header flex-center-y"},[e("img",{staticClass:"plant-cert-card__img",attrs:{src:r("mxBT"),alt:""}}),this._v(" "),e("div",{staticClass:"plant-cert-card__title"},[this._v("木材运输与植物检疫申请单")])])}]};var l=r("VU/8")(n,s,!1,function(a){r("SIFZ")},"data-v-06177d62",null);e.default=l.exports}});
//# sourceMappingURL=14.a8b0e3c955fdf965a78c.js.map