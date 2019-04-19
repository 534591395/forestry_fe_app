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
  <div class="wood-cert" v-if="!$route.params.createTime">
    <van-icon name="cross" class="wood-cert__icon" @click="$emit('del-card', index)" />

    <van-cell-group class="change-field__body change-field__error-message" :border="false" style="margin-top: 20px">
      <van-cell title="植物产品名称" is-link :value="getPLANTName(value.plant_variety)" @click="show_product_names = true" :border="false" />
      <van-popup v-model="show_product_names" position="bottom" :overlay="true">
        <van-picker :columns="plantNames" @change="onChangePlantName" />
      </van-popup>
    </van-cell-group>

    <van-cell-group class="van-hairline--bottom" :border="false" style="padding-bottom: 20px;">
      <van-field label="总量" placeholder="请输入总量" @blur="handleInputBlur('amount')"  type="number"
                 v-model="value.amount" required :error-message="errMsg.amountErrMsg" :readonly="$route.params.createTime" input-align="right">
        <span slot="button" style="color: #333333;">m³</span>
      </van-field>
    </van-cell-group>
  </div>
  <div class="wood-cert" v-else>
    <van-cell-group class="change-field__body change-field__error-message" :border="false" style="margin-top: 20px">
      <van-cell title="植物产品名称" is-link :value="getPLANTName(value.plant_variety)" @click="show_product_names = true" :border="false" />
    </van-cell-group>

    <van-cell-group class="van-hairline--bottom" :border="false" style="padding-bottom: 20px;">
      <van-field label="总量" placeholder="请输入总量" @blur="handleInputBlur('amount')" type="number"
                 v-model="value.amount" required :error-message="errMsg.amountErrMsg" :readonly="$route.params.createTime" input-align="right">
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
      },
      plantNames: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        show_product_names: false,
        show_materialss: false,
        errMsg: {
          amountErrMsg: ''
        }
      }
    },
    methods: {
      // 根据植物名称（比如杉树）获取对应的value
      getPLANTValue(paramName) {
        let paramValue = '';
        this.$store.getters.PLANT_VARIETY.map(item => {
          if (item.paramName === paramName) {
            paramValue = item.paramValue;
          }
        });
        return paramValue;
      },
      // 根据植物值获取对应的名称
      getPLANTName(paramValue) {
        let paramName = '';
        this.$store.getters.PLANT_VARIETY.map(item => {
          if (item.paramValue === paramValue) {
            paramName = item.paramName;
          }
        });
        return paramName;
      },
      handleInputBlur(inputName) {
        if(this.value[inputName] == '') {
          this.errMsg[inputName + 'ErrMsg'] = '此项不能为空';
        }
        else {
          this.errMsg[inputName + 'ErrMsg'] = '';
        }
      },
      onChangePlantName(picker, value, index) {
        // console.log(`当前值：${value}, 当前索引：${index}`);
        this.value.plant_variety = this.getPLANTValue(value);
      },
    }
  }
</script>
