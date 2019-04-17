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
    .dddd {
      padding: 0 10px;
      font-size: 16px;
    }
  }
</style>

<template>
  <div class="wood-cert" v-if="!$route.params.createTime">
    <van-icon name="cross" class="wood-cert__icon" @click="$emit('del-card', index)" />
    <van-cell-group>
      <span class="dddd">木材种类：种类{{index+1}}</span>
    </van-cell-group>
    <van-cell-group class="change-center-y-cell__value change-cell-title-width-default" :border="false" style="margin-top: 20px">
      <van-field  label="植物来源（产地）" placeholder="请输入产地" input-align="right"
                 v-model="value.producingArea" />
    </van-cell-group>

    <van-cell-group class="change-center-y-cell__value change-cell-title-width-large" :border="false">
      <van-field label="植物产品来源（加工地）" placeholder="请输入加工地" input-align="right"
                 v-model="value.processingArea" />
    </van-cell-group>
    <!--选择品名-->
    <van-cell-group class="change-field__body change-field__error-message" :border="false">
      <van-cell title="品名(材种)" is-link :value="getWOODOneName(value.first_variety)" @click="show_wood_names = true" :border="false" />
      <van-popup v-model="show_wood_names" position="bottom" :overlay="true">
        <van-picker :columns="woodNames" @change="onChangeWoodName" />
      </van-popup>
    </van-cell-group>
    <!--选择名称-->
    <van-cell-group class="change-field__body change-field__error-message" :border="false">
      <van-cell v-show="getWOODOneName(value.first_variety) === '非原木类'" :title="getWOODOneName(value.first_variety) === '非原木类' ? ' ' : '植物产品名称'" is-link :value="getWOODName(value.wood_variety)" @click="show_materialss = true" :border="false" />
      <van-popup v-model="show_materialss" position="bottom" :overlay="true">
        <van-picker :columns="notWoodsNames" @change="onChangeMaterials" />
      </van-popup>
      <van-cell :title="getWOODOneName(value.first_variety) === '非原木类' ? '植物产品名称' : ' '" is-link :value="getPLANTName(value.plant_variety)" @click="show_product_names = true" :border="false" />
      <van-popup v-model="show_product_names" position="bottom" :overlay="true">
        <van-picker :columns="plantNames" @change="onChangePlantName" />
      </van-popup>
    </van-cell-group>

    <van-cell-group class="van-hairline--bottom" :border="false" style="padding-bottom: 20px;">
      <van-field label="总量" placeholder="请输入总量" @blur="handleInputBlur('amount')"
                 v-model="value.amount" required :error-message="errMsg.amountErrMsg" :readonly="$route.params.createTime" input-align="right">
        <span slot="button" style="color: #333333;">m³</span>
      </van-field>
    </van-cell-group>
  </div>
  <div class="wood-cert" v-else>
    <van-cell-group>
      <span class="dddd">木材种类：种类{{index+1}}</span>
    </van-cell-group>
    <van-cell-group class="change-center-y-cell__value change-cell-title-width-default" :border="false" style="margin-top: 20px">
      <van-field :readonly="$route.params.createTime" label="植物来源（产地）" placeholder="请输入产地" input-align="right"
                 v-model="value.producingArea" />
    </van-cell-group>

    <van-cell-group class="change-center-y-cell__value change-cell-title-width-large" :border="false">
      <van-field :readonly="$route.params.createTime" label="植物产品来源（加工地）" placeholder="请输入加工地" input-align="right"
                 v-model="value.processingArea" />
    </van-cell-group>
    <!--选择品名-->
    <van-cell-group class="change-field__body change-field__error-message" :border="false">
      <van-cell title="品名(材种)" is-link :value="getWOODOneName(value.first_variety)" @click="show_wood_names = true" :border="false" />
    </van-cell-group>
    <!--选择名称-->
    <van-cell-group class="change-field__body change-field__error-message" :border="false">
      <van-cell v-show="getWOODOneName(value.first_variety) === '非原木类'" :title="getWOODOneName(value.first_variety) === '非原木类' ? ' ' : '植物产品名称'" is-link :value="getWOODNameLook(value.wood_variety)" @click="show_materialss = true" :border="false" />
      <van-cell :title="getWOODOneName(value.first_variety) === '非原木类' ? '植物产品名称' : ' '" is-link :value="getPLANTNameLook(value.plant_variety)" @click="show_product_names = true" :border="false" />
    </van-cell-group>

    <van-cell-group class="van-hairline--bottom" :border="false" style="padding-bottom: 20px;">
      <van-field label="总量" placeholder="请输入总量" @blur="handleInputBlur('amount')"
                 v-model="value.amount" required :error-message="errMsg.amountErrMsg" :readonly="$route.params.createTime" input-align="right">
        <span slot="button" style="color: #333333;">m³</span>
      </van-field>
    </van-cell-group>
  </div>
</template>

<script>

  export default {
    name: 'BoardCert',
    async mounted() {
      if(!this.$route.params.createTime) {
        await this.getWoodPlant();
        await this.getNotWoodPlant();
      }
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
      // 非原木
      notWoodsNames: {
        type: Array,
        required: true
      },
      // 非原木
      notWoods: {
        type: Array,
        required: true
      },
      // 一级菜单值
      firstVarietyList: {
        type: Array,
        required: true
      },
      // 一级菜单，原木类\非原木类名称列表
      woodNames: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        show_wood_names: false,
        show_product_names: false,
        show_materialss: false,
        errMsg: {
          amountErrMsg: ''
        },
        plantList: [],
        plantNames: []
      }
    },
    methods: {
      // 根据品种名称（比如板材）获取对应的value
      getWOODValue(paramName) {
        let paramValue = '';
        if (paramName == '原木') {
          paramValue = 'wood_variety_01';
        } else {
          this.notWoods.map(item => {
            if (item.plantVarietyName === paramName) {
              paramValue = item.plantVarietyValue;
            }
          });
        }
        return paramValue;
      },
      // 根据植物名称（比如杉树）获取对应的value
      getPLANTValue(paramName) {
        let paramValue = '';
        this.plantList.map(item => {
          if (item.plantVarietyName === paramName) {
            paramValue = item.plantVarietyValue;
          }
        });
        return paramValue;
      },
      // 原木类或非原木类
      getWOODOneName(paramValue) {
        let paramName = '';
        if (paramValue) {
          if (paramValue == 'first_variety_01') {
            paramName = '原木类';
          } else 
          if (paramValue == 'first_variety_02'){
            paramName = '非原木类';
          }
        }
        return paramName;
      },
      // 根据品种值获取对应的名称
      getWOODName(paramValue) {
        let paramName = '';
        if (paramValue) {
          if (paramValue == 'wood_variety_01') {
            paramName = '原木';
          } else {
            this.notWoods.map(item => {
              if (item.plantVarietyValue === paramValue) {
                paramName = item.plantVarietyName;
              }
            });
          }
        }
        return paramName;
      },
      // 根据品种值获取对应的名称
      getWOODNameLook(paramValue) {
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
        this.plantList.map(item => {
          if (item.plantVarietyValue === paramValue) {
            paramName = item.plantVarietyName;
          }
        });
        return paramName;
      },
      // 根据植物值获取对应的名称
      getPLANTNameLook(paramValue) {
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
      // 获取原木对应的植物品种列表
      getWoodPlants() {
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
      // 选择非原木 -> 品种 -> 获取植物品种列表
      getNotWoodPlants(secondparamValue) {
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
      // 切换到非原木时，查取非原木列表
      async getNotWoods() {
        await this.$parent.getNotWoods();
      },
      async getNotWoodPlant() {
        await this.getNotWoodPlants(this.value.wood_variety);
        this.value.plant_variety = this.plantList[0].plantVarietyValue;
      },
      async getWoodPlant() {
        await this.getWoodPlants();
        this.value.plant_variety = this.plantList[0].plantVarietyValue;
      },
      // 切换原木和非原木，切换了话，选择默认第一个值（materialss[0]）
      async onChangeWoodName(picker, value, index) {
        if (value === '原木类') {
          this.value.first_variety = 'first_variety_01';
          this.value.wood_variety = this.getWOODValue('原木');
          await this.getWoodPlant();
        } else {
          if (!this.notWoodsNames.length) {
            await this.getNotWoods();
          }
          this.value.first_variety = 'first_variety_02';
          this.value.wood_variety = this.getWOODValue(this.notWoodsNames[0]);
          await this.getNotWoodPlant();
        }
        //this.show_wood_names = false;
      },
      onChangePlantName(picker, value, index) {
        this.value.plant_variety = this.getPLANTValue(value);
      },
      async onChangeMaterials(picker, value, index) {
        this.value.wood_variety = this.getWOODValue(value);
        await this.getNotWoodPlant();
      }
    }
  }
</script>
