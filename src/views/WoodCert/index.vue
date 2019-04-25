<style lang="less" scoped>
.wood-cert {
  background: #f8f8ff;
  margin-top: 46px;
  overflow: hidden;
  padding-bottom: 36px;
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
      .wood-cert-card {
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
    &__tips {
      color: #FF8F3B;
      font-size: 14px;
      padding-bottom: 42px;
    }
  }
  &__btn {
    margin-top: 40px;
    padding:0 15px;
  }
  .title-pic {
    font-family: 'SourceHanSansSC-regular';
    font-size: 14px;
    color: #333333;
    &:after {
      content: ' *';
      color: red;
    }
  }
  .add-btn {
    font-size: 14px;
    margin-top: 17px;
    margin-left: 10px;
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
  <div class="wood-cert">
    <van-nav-bar title="原木类开证" left-arrow @click-left="goBack" fixed />

    <div class="wood-cert-status" v-if="formData.status" :style="{backgroundColor: statusObject[formData.status].backgroundColor}">
      <div class="flex-center-y wood-cert-status-top">
        <img :src="statusObject[formData.status].img" alt="" class="wood-cert-status-top__img">
        <span style="word-break: break-all;">{{ statusObject[formData.status].text }}</span>
      </div>
      <p class="wood-cert-status-bottom">{{ `${new Date(formData.createTime).getFullYear()}年${new Date(formData.createTime).getMonth() + 1}月${new Date(formData.createTime).getDate()}日` }}</p>
    </div>

    <div class="wood-cert-card">
      <div class="wood-cert-card__header flex-center-y">
        <img src="../../assets/cert.png" alt="" class="wood-cert-card__img">

        <div class="wood-cert-card__title">原木类开证单</div>
      </div>

      <div style="margin-left: 12px;">
        <p class="title-pic" style="margin: 0;padding-top: 37px;">1.太仓出入境检验检疫局进境散装木材准运通知单</p>

        <div style="margin-bottom: 10px;">
          <a href="javascript: void(0);" class="add-btn" @click="formData.noticepic.push('')" v-if="!$route.params.createTime">+新增</a>
          <a href="javascript: void(0);" class="add-btn" v-if="!$route.params.createTime"
          @click="formData.noticepic.length == 1 ? formData.noticepic.splice(formData.noticepic.length - 1, 0) : formData.noticepic.splice(formData.noticepic.length - 1, 1)">- 删除</a>
        </div>

        <van-cell-group class="van-hairline--bottom" :border="false" style="padding-bottom: 26px;">
          <div style="display: flex;flex-wrap: wrap;">
            <upload-picture v-for="(item, index) in formData.noticepic" :key="index" :index="index" :canUpload="!$route.params.createTime"
            :sPictureUrl="item" :fSetPicturUrl="setNoticePictureUrl" style="margin-left: 10px;margin-bottom: 10px;" />
          </div>
        </van-cell-group>

        <p class="title-pic" style="margin: 0 0 22px 0;padding-top: 37px;">
          2.进口小提单
          <a href="javascript: void(0);" class="add-btn" @click="formData.ladingpic.push('')" v-if="!$route.params.createTime">+新增</a>
          <a href="javascript: void(0);" class="add-btn" v-if="!$route.params.createTime"
          @click="formData.ladingpic.length == 1 ? formData.ladingpic.splice(formData.ladingpic.length - 1, 0) : formData.ladingpic.splice(formData.ladingpic.length - 1, 1)">- 删除</a>
        </p>
        <van-cell-group class="van-hairline--bottom" :border="false" style="padding-bottom: 26px;">
          <div style="display: flex;flex-wrap: wrap;">
            <upload-picture v-for="(item, index) in formData.ladingpic" :key="index" :index="index" :canUpload="!$route.params.createTime"
            :sPictureUrl="item" :fSetPicturUrl="setLadingPictureUrl" style="margin-left: 10px;margin-bottom: 10px;" />
          </div>
        </van-cell-group>

        <p class="title-pic" style="margin: 0;padding-top: 37px;">
          3.中华人民共和国海关进口货物报关单
        </p>

        <div style="margin-bottom: 10px;">
          <a href="javascript: void(0);" class="add-btn" @click="formData.declarationpic.push('')" v-if="!$route.params.createTime">+新增</a>
          <a href="javascript: void(0);" class="add-btn" v-if="!$route.params.createTime"
          @click="formData.declarationpic.length == 1 ? formData.declarationpic.splice(formData.declarationpic.length - 1, 0) : formData.declarationpic.splice(formData.declarationpic.length - 1, 1)">- 删除</a>
        </div>

        <van-cell-group class="van-hairline--bottom" :border="false" style="padding-bottom: 26px;">
          <div style="display: flex;flex-wrap: wrap;">
            <upload-picture v-for="(item, index) in formData.declarationpic" :key="index" :index="index" :canUpload="!$route.params.createTime"
            :sPictureUrl="item" :fSetPicturUrl="setDeclarationPictureUrl" style="margin-left: 10px;margin-bottom: 10px;" />
          </div>
        </van-cell-group>

        <p class="title-pic" style="margin: 0;padding-top: 37px;">
          4.植物产品名称与开证量
        </p>

        <!--<van-cell-group class="van-hairline&#45;&#45;bottom" :border="false" style="padding: 20px 0;">-->
          <!--<van-field label="总量" placeholder="请输入总量" @blur="handleInputBlur('amount')"-->
          <!--v-model="formData.amount" required :error-message="errMsg.amountErrMsg" :readonly="$route.params.createTime">-->
            <!--<span slot="button" style="color: #333333;">m³</span>-->
          <!--</van-field>-->
        <!--</van-cell-group>-->

        <card v-for="(item, index) in woodList" :key="index" v-model="woodList[index]" :index="index" @del-card="handleDelCard" :plantNames="plantNames"></card>
        <div class="set-employee-add-employee flex-center-xy" @click="addFn"  v-if="!$route.params.createTime  && woodList.length<=10">
          <div class="set-employee-add-employee__text">
            <van-icon name="plus" />
            <span>
          新增一条
        </span>
          </div>
        </div>
      </div>
    </div>

    <div class="wood-cert__btn change-button-background">
      <van-button size="large" round type="primary" @click="submit" v-if="!$route.params.createTime">提交</van-button>
    </div>
  </div>
</template>

<script>
import UploadPicture from '../../components/UploadPicture';

import card from './card'
export default {
  name: 'WoodCert',
  components: {
    UploadPicture,
    card
  },
  async created() {
    await this.$store.dispatch('getCompanyInfo', this);
    await this.$store.dispatch('getPlantList', this);
    await this.$store.dispatch('getWoodList', this);
    this.plantNames = this.getPlantNameList();
    
    window.scrollTo(0, 0);
    if(this.$route.params.createTime) {
      this.formData = JSON.parse(JSON.stringify(this.$route.params));   
      this.formData.noticepic = this.$route.params.noticepic.split(',');
      this.formData.ladingpic = this.$route.params.ladingpic.split(',');
      this.formData.declarationpic = this.$route.params.declarationpic.split(',');
      this.statusObject['2'].text = `审核已通过。`;
      this.statusObject['3'].text = `审核未通过，被拒原因: ${this.formData.refuseReason}`;
      try {
        const woodJson = JSON.parse(this.$route.params.woodJson);
        this.woodList = woodJson.woodList;
      } catch (error) {
        this.woodList = [];
      }
    } else {
      this.addFn();
    }
  },
  data() {
    return {
      formData: {
        noticepic: [''],
        ladingpic: [''],
        declarationpic: [''],
        woodJson: ''
      },
      woodList: [
        // {
        //   plant_variety: '',
        //   wood_variety: '',
        //   amount: ''
        // }
      ],
      errMsg: {
        amountErrMsg: ''
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
        }
      }
    }
  },
  methods: {
    // 获取植物品种名称列表
    getPlantNameList() {
      let list = [];
      this.$store.getters.PLANT_VARIETY.map(item => {
        list.push(item.paramName);
      });
      return list;
    },
    // 根据植物名称获取对应的值
    getPlantValue(paramName) {
      let paramValue = '';
      this.$store.getters.PLANT_VARIETY.map(item => {
        if (item.paramName === paramName) {
          paramValue = item.paramValue;
        }
      });
      return paramValue;
    },
    // 根据品种名称获取对应的值
    getWOODValue(paramName) {
      let paramValue = '';
      this.$store.getters.WOOD_VARIETY.map(item => {
        if (item.paramName === paramName) {
          paramValue = item.paramValue;
        }
      });
      return paramValue;
    },
    submit() {
      if(this.validate()) {
        let data = JSON.parse(JSON.stringify(this.formData));
        data.ladingpic = data.ladingpic.toString();
        data.declarationpic = data.declarationpic.toString();
        data.noticepic = data.noticepic.toString();
        data.woodJson = JSON.stringify({woodList: this.woodList});
        data.firstVariety = 'first_variety_01';
        //data.cid = this.$store.getters.oCompanyInfo.id;

        this.$http({
          url: '/cert/authApi/addWoodCert',
          method: 'POST',
          data
        }).then((res) => {
          if(res && res.data.success) {
            this.$toast.success('添加原木类开证单成功');
            window.$storage.set('hasCert', true);
            if(window.$storage.get('isReg')) {
              this.$router.push({name: 'chooseCert'});
            }
            else {
              this.$router.push({name: 'home'});
            }
          }
        });
      }
    },
    handleInputBlur(inputName) {
      if(this.formData[inputName] == '') {
        this.errMsg[inputName + 'ErrMsg'] = '此项不能为空';
      }
      else {
        this.errMsg[inputName + 'ErrMsg'] = '';
      }
    },
    validate() {
      let bFlag = true;
      if(!this.woodList.length) {
        this.$toast('植物产品名称与开证量必须添加');
        return false;
      }
      for(let i of this.formData.noticepic) {
        if(i == '') {
          this.$toast('太仓出入境检验检疫局进境散装木材准运通知单不能有为空的项');
          return false;
        }
      }
      for(let i of this.formData.ladingpic) {
        if(i == '') {
          this.$toast('进口小提单不能有为空的项');
          return false;
        }
      }
      for(let i of this.formData.declarationpic) {
        if(i == '') {
          this.$toast('中华人民共和国海关进口货物报关单不能有为空的项');
          return false;
        }
      }

      return bFlag;
    },
    setNoticePictureUrl(index, url) {
      this.$set(this.formData.noticepic, index, url);
    },
    setLadingPictureUrl(index, url) {
      this.$set(this.formData.ladingpic, index, url);
    },
    setDeclarationPictureUrl(index, url) {
      this.$set(this.formData.declarationpic, index, url);
    },
    goBack() {
      window.history.back();
    },
    addFn() {
      // 默认值，植物数组第一个，默认选择原木
      if (this.woodList.length >= 10) {
        return;
      }
      this.woodList.push(
        {
          plant_variety: this.getPlantValue(this.plantNames[0]),
          wood_variety: this.getWOODValue('原木'),
          amount: 0
        }
      )
    },
    handleDelCard(index) {
      if(this.woodList.length != 1) {
        this.woodList.splice(index, 1);
      }
    }
  }
}
</script>
