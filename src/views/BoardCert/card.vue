<style lang="less" scoped>
  .wood-cert {
    background: #fff;
    margin-top: 30px;
    overflow: hidden;
    padding-bottom: 0;
    &__icon {
      color: #333333;
      font-size: 16px;
      position: absolute;
      left: 320px;
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
</style>

<template>
  <div class="wood-cert">
    <van-icon name="cross" class="wood-cert__icon" @click="$emit('del-card', index)" />

    <!--选择品名-->
    <van-cell-group class="change-field__body change-field__error-message" :border="false" style="margin-top: 20px">
      <van-cell title="品名(材种)" is-link :value="value.wood_name" @click="show_wood_names = true" :border="false" />
      <van-popup v-model="show_wood_names" position="bottom" :overlay="true">
        <van-picker :columns="woodNames" @change="onChangeWoodName" />
      </van-popup>
    </van-cell-group>
    <!--选择名称-->
    <van-cell-group class="change-field__body change-field__error-message" :border="false">
      <van-cell title="植物产品名称" is-link :value="value.product_name" @click="show_product_names = true" :border="false" />
      <van-popup v-model="show_product_names" position="bottom" :overlay="true">
        <van-picker :columns="productNames" @change="onChangeProductName" />
      </van-popup>
      <van-cell v-show="value.wood_name === '非原木'" title=" " is-link :value="value.materials" @click="show_materialss = true" :border="false" />
      <van-popup v-model="show_materialss" position="bottom" :overlay="true">
        <van-picker :columns="materialss" @change="onChangeMaterials" />
      </van-popup>
    </van-cell-group>

    <van-cell-group class="van-hairline--bottom" :border="false" style="padding-bottom: 20px;">
      <van-field label="总量" placeholder="请输入总量" @blur="handleInputBlur('amount')"
                 v-model="value.amount" required :error-message="errMsg.amountErrMsg" :readonly="$route.params.create_time" input-align="right">
        <span slot="button" style="color: #333333;">m³</span>
      </van-field>
    </van-cell-group>
      </div>
</template>

<script>

  export default {
    name: 'BoardCert',
    created() {
    },
    props: {
      value: {
        type: Object,
        required: true
      },
      index: {
        type: Number,
        required: true
      }
    },
    data() {
      return {
        woodNames: ['原木', '非原木'],
        show_wood_names: false,
        productNames: ['落叶松', '白松', '桦木', '铁杉', '云杉', '花旗松', '辐射松', '柳杉', '白云杉'],
        show_product_names: false,
        materialss: ['板材', '方料'],
        show_materialss: false,
        errMsg: {
          amountErrMsg: ''
        }
      }
    },
    methods: {
      handleInputBlur(inputName) {
        if(this.value[inputName] == '') {
          this.errMsg[inputName + 'ErrMsg'] = '此项不能为空';
        }
        else {
          this.errMsg[inputName + 'ErrMsg'] = '';
        }
      },
      onChangeWoodName(picker, value, index) {
        console.log(this.value);
        this.value.wood_name = value
      },
      onChangeProductName(picker, value, index) {
        // console.log(`当前值：${value}, 当前索引：${index}`);
        this.value.product_name = value
      },
      onChangeMaterials(picker, value, index) {
        this.value.materials = value
      }
    }
  }
</script>
