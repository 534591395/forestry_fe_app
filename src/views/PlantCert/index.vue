<style lang="less" scoped>
.plant-cert {
  background: #f8f8ff;
  margin-top: 46px;
  overflow: hidden;
  &__radio {
    margin-left: 20px;
    & > div {
      margin-top: 5px;
      margin-bottom: 5px;
    }
  }
  &-status {
    min-height: 60px;
    font-size: 14px;
    color: #FFF;
    &-top {
      margin-left: 18px;
      padding-top: 8px;
      padding-right: 8px;
      &__img {
        margin-right: 8px;
        height: 22px;
        width: 22px;
      }
    }
    &-bottom {
      margin: 4px 0 0 48px;
      padding-bottom: 6px;
    }
  }
  &-card {
    margin: 10px 10px 0 10px;
    background: #FFF;
    border-radius: 10px;
    &__header {
      border-bottom: 1px dashed #999999;
      height: 55px;
      padding: 0 10px;
      .plant-cert-card {
        &__img {
          height: 26px;
          width: 23px;
        }
        &__title {
          color: #333333;
          font-size: 16px;
          margin-left: 10px;
        }
      }
    }
  }
  &-btn {
    padding: 0 15px 0 15px;
    margin-top: 112px;
    margin-bottom: 20px;
  }
  .title-pic {
    font-family: 'SourceHanSansSC-regular';
    font-size: 14px;
    color: #333333;
    margin: 0 0 10px 15px;
    padding-top: 10px;
  }
}

.set-employee {
  background: #F8F8F8;
  margin-top: 46px;
  overflow: auto;
  &-add-employee {
    height: 61px;
    border-radius: 10px;
    background: #FFF;
    margin: 20px 10px 0 10px;
    &__text {
      color: #C7C7C7;
      font-size: 14px;
    }
  }
  &-btn {
    padding: 0 15px 0 15px;
    margin-top: 52px;
    margin-bottom: 20px;
  }
}
</style>

<template>
  <div class="plant-cert">
    <van-nav-bar title="木材运输与植物检疫申请" left-arrow @click-left="goBack" fixed />

    <div class="plant-cert-status" v-if="formData.status" :style="{backgroundColor: statusObject[formData.status].backgroundColor}">
      <div class="flex-center-y plant-cert-status-top">
        <img :src="statusObject[formData.status].img" alt="" class="plant-cert-status-top__img">
        <span style="word-break: break-all;">{{ statusObject[formData.status].text }}</span>
      </div>
      <p class="plant-cert-status-bottom">{{ `${new Date(formData.createTime).getFullYear()}年${new Date(formData.createTime).getMonth() + 1}月${new Date(formData.createTime).getDate()}日` }}</p>
    </div>

    <div class="plant-cert-card">
      <div class="plant-cert-card__header flex-center-y">
        <img src="../../assets/cert.png" alt="" class="plant-cert-card__img">

        <div class="plant-cert-card__title">木材运输与植物检疫申请单</div>
      </div>

      <card v-for="(item, index) in woodList" :key="index" v-model="woodList[index]" :index="index" @del-card="handleDelCard" :notWoodsNames="notWoodsNames" :notWoods="notWoods"  :woodNames="woodNames" :firstVarietyList="firstVarietyList"  :plantNames="plantNames" :plantList="plantList"></card>
      <div class="set-employee-add-employee flex-center-xy" @click="addFn"  v-if="!formData.createTime && woodList.length<=10">
        <div class="set-employee-add-employee__text">
          <van-icon name="plus" />
          <span>
          新增一条
        </span>
        </div>
      </div>

      <van-cell-group class="van-hairline--bottom change-field__error-message" :border="false">
        <van-field :readonly="$route.params.createTime ? true : false" label="车船数" placeholder="车船数" input-align="right" required  type="number"
        v-model="formData.carAmount" :error-message="errMsg.car_amountErrMsg" @blur="handleInputBlur('carAmount')">
          <span slot="button" style="color: #323233;">辆</span>
        </van-field>
      </van-cell-group>

      <van-cell-group class="van-hairline--bottom change-field__error-message" :border="false">
        <van-field :readonly="$route.params.createTime ? true : false" label="每车/船" placeholder="多少立方米" input-align="right" required  type="number"
        v-model="formData.everyCarAmount" :error-message="errMsg.every_car_amountErrMsg" @blur="handleInputBlur('everyCarAmount')">
          <span slot="button" style="color: #323233;">m³</span>
        </van-field>
      </van-cell-group>

      <van-cell-group class="van-hairline--bottom change-center-y-cell__value" :border="false">
        <van-field :readonly="$route.params.createTime ? true : false" label="包装方式" placeholder="请输入包装方式" input-align="right"
        v-model="formData.packaging" />
      </van-cell-group>

      <van-cell-group class="van-hairline--bottom change-center-y-cell__value" :border="false">
        <van-field :readonly="$route.params.createTime ? true : false" label="规格" placeholder="请输入规格" input-align="right"
        v-model="formData.standard" />
      </van-cell-group>

      <van-cell-group class="van-hairline--bottom change-field__body change-field__error-message change-cell-title-width-default" :border="false">
        <van-field :readonly="$route.params.createTime ? true : false" label="收货单位（个人）" placeholder="请输入收货单位" input-align="right" required
        v-model="formData.receivePerson" :error-message="errMsg.receive_personErrMsg" @blur="handleInputBlur('receivePerson')" />
      </van-cell-group>

      <van-cell-group class="van-hairline--bottom change-cell__value change-field__error-message change-cell-title-width-default" :border="false">
        <van-field :readonly="$route.params.createTime ? true : false" label="收货单位详细地址" disabled>
          <van-radio-group
            :disabled="$route.params.createTime ? true : false"
            v-model="formData.receiveAddressType"
            slot="button"
            class="flex-center-y"
          >
            <van-radio :name="0">省内</van-radio>
            <van-radio :name="1" style="margin-left: 10px;">省外</van-radio>
          </van-radio-group>
        </van-field>
        <van-field :readonly="$route.params.createTime ? true : false" placeholder="请输入收货单位详细地址" type="textarea" rows="3" required
        v-model="formData.receiveAddress" :error-message="errMsg.receive_addressErrMsg" @blur="handleInputBlur('receiveAddress')" />
      </van-cell-group>

      <van-cell-group class="van-hairline--bottom change-field__body change-field__error-message change-cell-title-width-large" :border="false">
        <van-field :readonly="$route.params.createTime ? true : false" label="收货单位（个人）电话" placeholder="请输入电话" input-align="right" required
        v-model="formData.phone" :error-message="errMsg.phoneErrMsg" @blur="handleInputBlur('phone')" />
      </van-cell-group>

      <van-cell-group class="van-hairline--bottom change-field__body change-field__error-message change-cell-title-width-large" :border="false">
        <van-field :readonly="$route.params.createTime ? true : false" label="收货联系人身份证号码" placeholder="请输入收货联系人身份证号码" input-align="right" required
        v-model="formData.personId" :error-message="errMsg.person_idErrMsg" @blur="handleInputBlur('personId')" />
      </van-cell-group>

      <van-cell-group class="van-hairline--bottom change-field__body change-field__error-message" :border="false">
        <van-cell title="日期" is-link :value="formData.date_txt" @click="$route.params.createTime ? null : formData.show_date_time = true" />
        <van-popup v-model="formData.show_date_time" position="bottom" :overlay="true">
          <van-datetime-picker
            v-model="formData.dateTime"
            type="date"
            @confirm="dateConfirm"
          />
        </van-popup>
      </van-cell-group>

      <van-cell-group class="van-hairline--bottom change-field__body" :border="false">
        <van-field :readonly="$route.params.createTime ? true : false" label="申请人" placeholder="请输入申请人" input-align="right"
        v-model="formData.applyPerson" />
      </van-cell-group>

      <van-cell-group class="van-hairline--bottom change-field__body change-field__error-message" :border="false">
        <van-field :readonly="$route.params.createTime ? true : false" label="承运人" placeholder="请输入承运人" input-align="right" required
        v-model="formData.transportPerson" :error-message="errMsg.transport_personErrMsg" @blur="handleInputBlur('transportPerson')" />
      </van-cell-group>

      <van-cell-group class="van-hairline--bottom change-field__body change-field__error-message" :border="false">
        <van-field :readonly="$route.params.createTime ? true : false" label="对应报检单号" placeholder="请输入报检单号" input-align="right" required
        v-model="formData.reportNumber" :error-message="errMsg.report_numberErrMsg" @blur="handleInputBlur('reportNumber')" />
      </van-cell-group>

      <van-cell-group class="van-hairline--bottom change-field__body change-field__error-message" :border="false">
        <van-field :readonly="$route.params.createTime ? true : false" label="车牌号" placeholder="请输入车牌号" input-align="right" required type="textarea" rows="2"
        v-model="formData.carNumber" :error-message="errMsg.car_numberErrMsg" @blur="handleInputBlur('carNumber')" />
      </van-cell-group>

      <div v-if="formData.pictureUrl">
        <p class="title-pic">
          车辆照片
        </p>
        <van-cell-group class="van-hairline--bottom" :border="false" style="padding-bottom: 26px;">
          <div style="display: flex;flex-wrap: wrap;">
            <upload-picture v-for="(item, index) in formData.pictureUrl.split(',')" :key="index" :index="index" :canUpload="false"
            :sPictureUrl="item" style="margin-left: 10px;margin-bottom: 10px;" />
          </div>
        </van-cell-group>
      </div>
    </div>

    <div class="plant-cert-btn change-button-background">
      <van-button size="large" round type="primary" @click="submit" v-if="!this.$route.params.createTime">提交</van-button>
      <van-button size="large" round type="primary" @click="skipNewPath" v-if="this.$route.params.createTime && this.$route.params.status === 4">上传照片</van-button>
    </div>

    <!-- <div class="change-radio">
      <van-popup v-model="popup.plantNamePopup" position="bottom">
        <van-radio-group
          class="plant-cert__radio"
          v-model="formData.plantName"
          @change="popup.plantNamePopup = false"
        >
          <van-radio
            v-for="(item, index) in $store.getters.oBasicInfo['植物产品名称'].info"
            :key="index"
            :name="item"
          >
           {{ item }}
          </van-radio>
        </van-radio-group>
      </van-popup>

      <van-popup v-model="popup.varietyPopup" position="bottom">
        <van-radio-group
          v-model="formData.variety"
          class="plant-cert__radio"
          @change="popup.varietyPopup = false"
        >
          <van-radio
            v-for="(item, index) in $store.getters.oBasicInfo['品种'].info"
            :key="index"
            :name="item"
          >
            {{ item }}
          </van-radio>
        </van-radio-group>
      </van-popup>
    </div> -->
  </div>
</template>

<script>
import UploadPicture from '../../components/UploadPicture';
import moment from 'moment'

import card from './card'
export default {
  name: 'PlantCert',
  components: {
    UploadPicture,
    card
  },
  async mounted() {
    await this.$store.dispatch('getCompanyInfo', this);
    await this.$store.dispatch('getPlantList', this);
    await this.$store.dispatch('getWoodList', this);

    window.scrollTo(0, 0);
    if(this.$route.params.createTime) {
      this.materialss = this.getNotWoodNameList();
      this.plantNames = this.getPlantNameList();

      this.formData = Object.assign(this.formData, this.$route.params);
      

      this.formData.date_txt =  this.$route.params.dateTime;
      const timeArr = this.$route.params.dateTime.split('-');
      this.formData.dateTime= new Date(timeArr[0],timeArr[1],timeArr[2]);
      console.log(this.formData, 123)
      this.statusObject['2'].text = `审核已通过，请至城厢镇林业局${this.formData.windows}号窗口领取`;
      this.statusObject['3'].text = `审核未通过，被拒原因: ${this.formData.refuseReason}`;
      try {
        const woodJson = JSON.parse(this.$route.params.woodJson);
        this.woodList = woodJson.woodList;
        const processingAreaArr =  (this.formData.processingArea+'').split(',');
        const producingAreaArr =  (this.formData.producingArea+'').split(',');
        // 地址初始化
        this.woodList.map( (item, i) => {
          item.processingArea = processingAreaArr[i];
          item.producingArea = producingAreaArr[i];
        } );
      } catch (error) {
        this.woodList = [];
      }

      if(this.formData.status === 4) {
        this.$dialog.confirm({
          title: '提示',
          message: '您的开证审核已通过，请尽快上传装车照片',
          confirmButtonText: '上传',
          cancelButtonText: '取消'
        }).then(() => {
          this.skipNewPath();
        }).catch(() => {

        });
      }
    } else {
      await this.getFirst();
      if (this.woodNames.indexOf('原木类') > -1) {
        await this.getWoodPlant();
      } else
      if (this.woodNames.indexOf('非原木类') > -1) {
        await this.getNotWoods();
        await this.getNotWoodPlant(this.notWoods[0].plantVarietyValue);
      }
      this.addFn();
    }
  },
  data() {
    let self = this;
    return {
      woodList: [
        // {
         //    first_variety: '',
        //   producingArea: '',
        //   processingArea: '',
        //   plant_variety: '',
        //   wood_variety: '',
        //   amount: ''
        // },
      ],
      // 一级目录，该用户有什么（原木、非原木）,详细数据
      firstVarietyList: [],
      // 一级目录，文案
      woodNames: [],
      plantNames: [],
      //植物品种列表
      plantList: [],
      // 非原木类品种列表，比如：板材。。
      notWoods: [],
      notWoodsNames: [],
      formData: {
        producingArea: '',
        processingArea: '',
        plantName: '',
        carAmount: '',
        everyCarAmount: '',
        packaging: '',
        standard: '',
        receivePerson: '',
        receiveAddressType: 0,
        receiveAddress: '',
        phone: '',
        personId: '',
        date_txt: '',
        show_date_time: false,
        dateTime: new Date(),
        applyPerson: '',
        transportPerson: '',
        reportNumber: '',
        carNumber: ''
      },
      errMsg: {
        car_amountErrMsg: '',
        every_car_amountErrMsg: '',
        receive_personErrMsg: '',
        receive_addressErrMsg: '',
        phoneErrMsg: '',
        person_idErrMsg: '',
        date_timeErrMsg: '',
        transport_personErrMsg: '',
        report_numberErrMsg: '',
        car_numberErrMsg: ''
      },
      statusObject: {
        1: {
          img: require('../../assets/statusWait.png'),
          backgroundColor: '#01B6AF',
          text: '已提交，等待工作人员审核'
        },
        2: {
          img: require('../../assets/statusHappy.png'),
          backgroundColor: '#01B6AF',
          text: ''
        },
        3: {
          img: require('../../assets/statusSad.png'),
          backgroundColor: '#FF8F3B',
          text: ''
        },
        4: {
          img: require('../../assets/statusHappy.png'),
          backgroundColor: '#01B6AF',
          text: '审核已通过，请立即上传装车照片'
        },
      },
      popup: {
        plantNamePopup: false,
        varietyPopup: false
      }
    }
  },
  methods: {
    submit() {
      if(this.validate()) {
        let data = JSON.parse(JSON.stringify(this.formData));
        data.dateTime = data.date_txt;

        let processingAreaArr = [];
        let producingAreaArr = [];
        let woodList = JSON.parse(JSON.stringify(this.woodList));
        // 地址初始化
        woodList.map( (item, i) => {
          processingAreaArr.push(item.processingArea);
          producingAreaArr.push(item.producingArea);
          delete item.processingArea;
          delete item.producingArea;
        } );
        data.processingArea = processingAreaArr.join(',');
        data.producingArea = producingAreaArr.join(',');
        data.woodJson = JSON.stringify({woodList: woodList});
        if (this.$store.getters.oBasicInfo['植物产品名称']) {
          data.plantName =  this.$store.getters.oBasicInfo['植物产品名称'].info[0];
        }
        delete data.show_date_time;
        delete data.date_txt;

        this.$http({
          url: '/cert/authApi/addPlantCert',
          method: 'POST',
          data
        }).then((res) => {
          if(res && res.data.success) {
            this.$toast.success('添加木材运输证与植物检疫申请成功');
            this.goBack();
          }
        });
      }
    },
    validateWoodList() {
      let bool = true;
      this.woodList.map( item => {
        if (!item.processingArea) {
          bool = false;
        }
        if (!item.producingArea) {
          bool = false;
        }
        if (!item.plant_variety) {
          bool = false;
        }
        if (!item.wood_variety) {
          bool = false;
        }
        if (item.amount == '') {
          bool = false;
        }
      } );
      return bool;
    },
    validate() {
      let flag = true;

      if(!this.woodList.length) {
        this.$toast('木材种类必须添加一项');
        return false;
      }
      if (!this.validateWoodList()) {
        this.$toast('木材种类有选项未填写');
        return false;
      }
      if(this.formData.carAmount == '') {
        this.errMsg.car_amountErrMsg = '此项不能为空';
        flag = false;
      }
      if(this.formData.everyCarAmount == '') {
        this.errMsg.every_car_amountErrMsg = '此项不能为空';
        flag = false;
      }
      if(this.formData.receivePerson == '') {
        this.errMsg.receive_personErrMsg = '此项不能为空';
        flag = false;
      }
      if(this.formData.phone == '') {
        this.errMsg.phoneErrMsg = '此项不能为空';
        flag = false;
      }
      if(this.formData.personId == '') {
        this.errMsg.person_idErrMsg = '此项不能为空';
        flag = false;
      }
      if(this.formData.dateTime == '') {
        this.errMsg.date_timeErrMsg = '此项不能为空';
        flag = false;
      }
      if(this.formData.transportPerson == '') {
        this.errMsg.transport_personErrMsg = '此项不能为空';
        flag = false;
      }
      if(this.formData.reportNumber == '') {
        this.errMsg.report_numberErrMsg = '此项不能为空';
        flag = false;
      }
      if(this.formData.carNumber == '') {
        this.errMsg.car_numberErrMsg = '此项不能为空';
        flag = false;
      }

      return flag;
    },
    //获取非原木名称列表
    getNotWoodNameList() {
      let list = [];
      this.$store.getters.WOOD_VARIETY.map(item => {
        if (item.paramName !== '原木') {
          list.push(item.paramName);
        }
      });
      return list;
    },
    // 获取植物品种名称列表
    getPlantNameList() {
      let list = [];
      this.$store.getters.PLANT_VARIETY.map(item => {
        list.push(item.paramName);
      });
      return list;
    },
    // 获取一级分类原木下的列表
    getFirst() {
      const data = {
        code:1,
        firstparamValue: '',
        secondparamValue: ''
      };
      return this.$http({
        url: '/cert/authApi/getCertSort',
        method: 'POST',
        data
      }).then((res) => {
        if(res && res.data.success) {
          this.woodNames = [];
          this.firstVarietyList = res.data.module || [];
          this.firstVarietyList.map( item => {
            this.woodNames.push(item.plantVarietyName);
          } );
        }
      });
    },
    // 获取原木对应的植物品种列表
    getWoodPlant() {
      const data = {
        code:3,
        firstparamValue: 'first_variety_01',
        secondparamValue: 'wood_variety_01'
      };
      return this.$http({
        url: '/cert/authApi/getCertSort',
        method: 'POST',
        data
      }).then((res) => {
        if(res && res.data.success) {
          this.plantNames = [];
          this.plantList = res.data.module || [];
          this.plantList.map( item => {
            this.plantNames.push(item.plantVarietyName);
          } );
        }
      });
    },
    // 选择非原木时，获取板材品种
    getNotWoods() {
      const data = {
        code:2,
        firstparamValue: 'first_variety_02',
        secondparamValue: ''
      };
      return this.$http({
        url: '/cert/authApi/getCertSort',
        method: 'POST',
        data
      }).then((res) => {
        if(res && res.data.success) {
          this.notWoodsNames = [];
          this.notWoods = res.data.module || [];
          this.notWoods.map( item => {
            this.notWoodsNames.push(item.plantVarietyName);
          } );
        }
      });
    },
    // 选择非原木 -> 品种 -> 获取植物品种列表
    getNotWoodPlant(secondparamValue) {
      if (!secondparamValue) {
        return ;
      }
      const data = {
        code:3,
        firstparamValue: 'first_variety_02',
        secondparamValue: secondparamValue
      };
      return this.$http({
        url: '/cert/authApi/getCertSort',
        method: 'POST',
        data
      }).then((res) => {
        if(res && res.data.success) {
          this.plantNames = [];
          this.plantList = res.data.module || [];
          this.plantList.map( item => {
            this.plantNames.push(item.plantVarietyName);
          } );
        }
      });
    },
    handleInputBlur(inputName) {
      if(this.formData[inputName] === '') {
        this.errMsg[inputName + 'ErrMsg'] = '此项不能为空';
      }
      else {
        this.errMsg[inputName + 'ErrMsg'] = '';
      }
    },
    goBack() {
      window.history.back();
    },
    skipNewPath() {
      this.$router.push({
        name: 'certUpload',
        query: {
          id: this.formData.id
        }
      });
    },
    dateConfirm() {
      this.formData.show_date_time = false;
      this.$set(this.formData, 'date_txt', moment(this.formData.dateTime).format('YYYY-MM-DD'));
    },
    addFn() {
      // 默认值，植物数组第一个，默认选择 firstVarietyList[0]
      if (this.woodList.length >= 10) {
        return;
      }
      if (this.woodNames.indexOf('原木类') > -1) {
        this.woodList.push(
          {
            first_variety: 'first_variety_01',
            plant_variety: this.plantList[0].plantVarietyValue,
            wood_variety: 'wood_variety_01',
            amount: 0,
            // 植物来源（产地）
            producingArea: '',
            // 植物产品来源（加工地）
            processingArea: ''
          }
        );
      } else if(this.woodNames.indexOf('非原木类') > -1){
        this.woodList.push(
          {
            first_variety: 'first_variety_02',
            plant_variety: this.plantList[0].plantVarietyValue,
            wood_variety: this.notWoods[0].plantVarietyValue,
            amount: 0,
            // 植物来源（产地）
            producingArea: '',
            // 植物产品来源（加工地）
            processingArea: ''
          }
        );
      }
    },
    handleDelCard(index) {
      if(this.woodList.length != 1) {
        this.woodList.splice(index, 1);
      }
    }
  },
  created() {
    this.$set(this.formData, 'date_txt', moment().format('YYYY-MM-DD'));
  }
}
</script>
