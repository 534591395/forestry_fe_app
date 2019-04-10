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
    <van-nav-bar title="板材类开证" left-arrow @click-left="goBack" fixed />

    <div class="wood-cert-status" v-if="formData.status" :style="{backgroundColor: statusObject[formData.status].backgroundColor}">
      <div class="flex-center-y wood-cert-status-top">
        <img :src="statusObject[formData.status].img" alt="" class="wood-cert-status-top__img">
        <span style="word-break: break-all;">{{ statusObject[formData.status].text }}</span>
      </div>
      <p class="wood-cert-status-bottom">{{ formData.create_time }}</p>
    </div>

    <div class="wood-cert-card">
      <div class="wood-cert-card__header flex-center-y">
        <img src="../../assets/cert.png" alt="" class="wood-cert-card__img">

        <div class="wood-cert-card__title">板材类开证单</div>
      </div>

      <div style="margin-left: 12px;">
        <p class="title-pic" style="margin: 0 0 22px 0;padding-top: 37px;">
          1.通关无纸化放行通知单
          <a href="javascript: void(0);" class="add-btn" @click="formData.noticePic.push('')" v-if="!$route.params.create_time">+新增</a>
          <a href="javascript: void(0);" class="add-btn" v-if="!$route.params.create_time"
          @click="formData.noticePic.length == 1 ? formData.noticePic.splice(formData.noticePic.length - 1, 0) : formData.noticePic.splice(formData.noticePic.length - 1, 1)">- 删除</a>
        </p>
        <van-cell-group class="van-hairline--bottom" :border="false" style="padding-bottom: 26px;">
          <div style="display: flex;flex-wrap: wrap;">
            <upload-picture v-for="(item, index) in formData.noticePic" :key="index" :index="index" :canUpload="!$route.params.create_time"
            :sPictureUrl="item" :fSetPicturUrl="setNoticePictureUrl" style="margin-left: 10px;margin-bottom: 10px;" />
          </div>
        </van-cell-group>

        <p class="title-pic" style="margin: 0;padding-top: 37px;">
          2.中华人民共和国海关进口货物报关单
        </p>

        <div style="margin-bottom: 10px;">
          <a href="javascript: void(0);" class="add-btn" @click="formData.declarationPic.push('')" v-if="!$route.params.create_time">+新增</a>
          <a href="javascript: void(0);" class="add-btn" v-if="!$route.params.create_time"
          @click="formData.declarationPic.length == 1 ? formData.declarationPic.splice(formData.declarationPic.length - 1, 0) : formData.declarationPic.splice(formData.declarationPic.length - 1, 1)">- 删除</a>
        </div>

        <van-cell-group class="van-hairline--bottom" :border="false" style="padding-bottom: 26px;">
          <div style="display: flex;flex-wrap: wrap;">
            <upload-picture v-for="(item, index) in formData.declarationPic" :key="index" :index="index" :canUpload="!$route.params.create_time"
            :sPictureUrl="item" :fSetPicturUrl="setDeclarationPictureUrl" style="margin-left: 10px;margin-bottom: 10px;" />
          </div>
        </van-cell-group>

        <div class="flex-center-y">
          <p class="title-pic" style="margin: 0 0 22px 0;padding-top: 37px;">
            3.合同或销售证明
          </p>
          <a href="javascript: void(0);" class="add-btn" @click="formData.contractPic.push('')" v-if="!$route.params.create_time">+新增</a>
          <a href="javascript: void(0);" class="add-btn" v-if="!$route.params.create_time"
          @click="formData.contractPic.length == 1 ? formData.contractPic.splice(formData.contractPic.length - 1, 0) : formData.contractPic.splice(formData.contractPic.length - 1, 1)">- 删除</a>
        </div>
        <van-cell-group class="van-hairline--bottom" :border="false" style="padding-bottom: 26px;">
          <div style="display: flex;flex-wrap: wrap;">
            <upload-picture v-for="(item, index) in formData.contractPic" :key="index" :index="index" :canUpload="!$route.params.create_time"
            :sPictureUrl="item" :fSetPicturUrl="setContractPictureUrl" style="margin-left: 10px;margin-bottom: 10px;" />
          </div>
        </van-cell-group>

        <!--新增第四点-->
        <p class="title-pic" style="margin: 0;padding-top: 37px;">
          4.植物产品名称与开证量
        </p>

        <!--<div v-for="(item, index) in product" :key="index" style="padding-top: 22px;">-->
          <!--&lt;!&ndash;选择品名&ndash;&gt;-->
          <!--<van-cell-group class="change-field__body change-field__error-message" :border="false">-->
            <!--<van-cell title="品名(材种)" is-link :value="formData.wood_name" @click="show_wood_names = true" :border="false" />-->
            <!--<van-popup v-model="show_wood_names" position="bottom" :overlay="true">-->
              <!--<van-picker :columns="woodNames" @change="onChangeWoodName" />-->
            <!--</van-popup>-->
          <!--</van-cell-group>-->
          <!--&lt;!&ndash;选择名称&ndash;&gt;-->
          <!--<van-cell-group class="change-field__body change-field__error-message" :border="false">-->
            <!--<van-cell title="植物产品名称" is-link :value="item.product_name" @click="show_product_names = true" :border="false" />-->
            <!--<van-popup v-model="show_product_names" position="bottom" :overlay="true">-->
              <!--<van-picker :columns="productNames" @change="onChangeProductName" />-->
            <!--</van-popup>-->
            <!--<van-cell v-show="item.wood_name === '非原木'" title=" " is-link :value="formData.materials" @click="show_materialss = true" :border="false" />-->
            <!--<van-popup v-model="show_materialss" position="bottom" :overlay="true">-->
              <!--<van-picker :columns="materialss" @change="onChangeMaterials" />-->
            <!--</van-popup>-->
          <!--</van-cell-group>-->

          <!--<van-cell-group class="van-hairline&#45;&#45;bottom" :border="false" style="padding-bottom: 20px;">-->
            <!--<van-field label="总量" placeholder="请输入总量" @blur="handleInputBlur('amount')"-->
                       <!--v-model="item.amount" required :error-message="errMsg.amountErrMsg" :readonly="$route.params.create_time" input-align="right">-->
              <!--<span slot="button" style="color: #333333;">m³</span>-->
            <!--</van-field>-->
          <!--</van-cell-group>-->
        <!--</div>-->
        <card v-for="(item, index) in product" :key="index" v-model="product[index]" :index="index" @del-card="handleDelCard"></card>
        <div class="set-employee-add-employee flex-center-xy" @click="addFn">
          <div class="set-employee-add-employee__text">
            <van-icon name="plus" />
            <span>
          新增一条
        </span>
          </div>
        </div>

        <p class="wood-cert-card__tips">注：此次开证总量</p>
      </div>
    </div>

    <div class="wood-cert__btn change-button-background">
      <van-button size="large" round type="primary" @click="submit" v-if="!$route.params.create_time">提交</van-button>
    </div>
  </div>
</template>

<script>
import UploadPicture from '../../components/UploadPicture';
import card from './card'
export default {
  name: 'BoardCert',
  components: {
    UploadPicture,
    card
  },
  created() {
    window.scrollTo(0, 0);
    if(this.$route.params.create_time) {
      this.formData = this.$route.params;
      this.formData.noticePic = this.$route.params.noticePic.split(',');
      this.formData.contractPic = this.$route.params.contractPic.split(',');
      this.formData.declarationPic = this.$route.params.declarationPic.split(',');
      this.statusObject['2'].text = `审核已通过，请至城厢镇林业局${this.formData.windows}号窗口领取`;
      this.statusObject['3'].text = `审核未通过，被拒原因: ${this.formData.refuse_reason}`;
    }
  },
  data() {
    return {
      formData: {
        noticePic: [''],
        declarationPic: [''],
        contractPic: ['']
      },
      product: [
        {
          wood_name: '',
          product_name: '',
          materials: '',
          amount: '',
        }
      ],
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
    submit() {
      if(this.validate()) {
        let data = JSON.parse(JSON.stringify(this.formData));

        data.contractPic = data.contractPic.toString();
        data.declarationPic = data.declarationPic.toString();
        data.noticePic = data.noticePic.toString();

        this.$http({
          url: '/cert/addBoardCert',
          method: 'POST',
          data
        }).then((res) => {
          if(res && res.data.code == 0) {
            this.$toast.success('添加板材类开证单成功');
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
      if(this.formData.amount == '') {
        this.errMsg.amountErrMsg = '此项不能为空';
        bFlag = false;
      }
      for(let i of this.formData.noticePic) {
        if(i == '') {
          this.$toast('通关无纸化放行通知单不能有为空的项');
          return false;
        }
      }
      for(let i of this.formData.declarationPic) {
        if(i == '') {
          this.$toast('中华人民共和国海关进口货物报关单不能有为空的项');
          return false;
        }
      }
      for(let i of this.formData.contractPic) {
        if(i == '') {
          this.$toast('合同或销售证明不能有为空的项');
          return false;
        }
      }

      return bFlag;
    },
    setNoticePictureUrl(index, url) {
      this.$set(this.formData.noticePic, index, url);
    },
    setContractPictureUrl(index, url) {
      this.$set(this.formData.contractPic, index, url);
    },
    setDeclarationPictureUrl(index, url) {
      this.$set(this.formData.declarationPic, index, url);
    },
    goBack() {
      window.history.back();
    },
    addFn() {
      this.product.push(
        {
          wood_name: '',
          product_name: '',
          materials: '',
          amount: ''
        }
      )
    },
    handleDelCard(index) {
      if(this.product.length != 1) {
        this.product.splice(index, 1);
      }
    },
  }
}
</script>
