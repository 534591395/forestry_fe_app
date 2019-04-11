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
      <van-cell title="品名(材种)" is-link :value="getWOODOneName(value.wood_variety)" @click="show_wood_names = true" :border="false" />
      <van-popup v-model="show_wood_names" position="bottom" :overlay="true">
        <van-picker :columns="woodNames" @change="onChangeWoodName" />
      </van-popup>
    </van-cell-group>
    <!--选择名称-->
    <van-cell-group class="change-field__body change-field__error-message" :border="false">
      <van-cell title="植物产品名称" is-link :value="getPLANTName(value.plant_variety)" @click="show_product_names = true" :border="false" />
      <van-popup v-model="show_product_names" position="bottom" :overlay="true">
        <van-picker :columns="plantNames" @change="onChangePlantName" />
      </van-popup>
      <!--<van-cell v-show="getWOODOneName(value.wood_variety) === '非原木'" title=" " is-link :value="getWOODName(value.wood_variety)" @click="show_materialss = true" :border="false" />-->
      <!--<van-popup v-model="show_materialss" position="bottom" :overlay="true">-->
        <!--<van-picker :columns="materialss" @change="onChangeMaterials" />-->
      <!--</van-popup>-->
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
      },
      materialss: {
        type: Array,
        required: true
      },
      plantNames: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        woodNames: ['原木', '非原木'],
        show_wood_names: false,
        show_product_names: false,
        show_materialss: false,
        errMsg: {
          amountErrMsg: ''
        }
      }
    },
    methods: {
      // 根据品种名称（比如板材）获取对应的value
      getWOODValue(paramName) {
        let paramValue = '';
        this.$store.getters.WOOD_VARIETY.map(item => {
          if (item.paramName === paramName) {
            paramValue = item.paramValue;
          }
        });
        return paramValue;
      },
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
      // 根据品种值获取对应的名称（原木和非原木）
      getWOODOneName(paramValue) {
        let paramName = '原木';
        if (paramValue) {
          this.$store.getters.WOOD_VARIETY.map(item => {
            if (item.paramValue === paramValue) {
              paramName = item.paramName;
            }
          });
          if (paramName != '原木') {
            paramName = '非原木';
          }
        }
        return paramName;
      },
      // 根据品种值获取对应的名称
      getWOODName(paramValue) {
        let paramName = '';
        this.$store.getters.WOOD_VARIETY.map(item => {
          if (item.paramValue === paramValue) {
            paramName = item.paramName;
          }
        });
        return paramName;
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
      // 切换原木和非原木，切换了话，选择默认第一个值（materialss[0]）
      onChangeWoodName(picker, value, index) {
        console.log(this.value);
        if (value === '原木') {
          this.value.wood_variety = this.getWOODValue('原木');
        } else {
          this.value.wood_variety = this.getWOODValue(this.materialss[0]);
        }
        //this.show_wood_names = false;
      },
      onChangePlantName(picker, value, index) {
        // console.log(`当前值：${value}, 当前索引：${index}`);
        this.value.plant_variety = this.getPLANTValue(value);
      },
      onChangeMaterials(picker, value, index) {
        this.value.wood_variety = this.getWOODValue(value);
      }
    }
  }
</script>
