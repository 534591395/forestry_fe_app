<style lang="less" scoped>
  .wood-cert {
    background: #F8F8F8;
    height: 100vh;
    padding-top: 56px;
    .group {
      background-color: #fff;
      margin: 10px 8px 0 8px;
      border-radius: 5px;
      height: 54px;
      left: 9px;
      top: 100px;
      width: 343px;
      line-height: 20px;
      text-align: center;
      box-shadow: 0px 0px 4px 2px rgba(230, 230, 230, 1);
      border: 1px solid rgba(255, 255, 255, 0);
      padding: 0 27px 0 11px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .name {
        display: flex;
        align-items: center;
        margin-right: 20px;
        .icon {
          width: 35px;
          height: 35px;
          line-height: 35px;
          text-align: center;
          background-color: #01B6AF;
          font-size: 20px;
          color: #ffffff;
          border-radius: 50%;
          margin-right: 20px;
        }
        .txt {
          color: #999999;
          font-size: 14px;
        }
      }
      .num {
        font-size: 16px;
        color: #333333;
        span {
          color: #01B6AF;
          font-size: 20px;
        }
      }
    }
  }
  .tip {
    position: fixed;
    bottom: 24px;
    text-align: center;
    width: 100%;
    color: rgba(1, 182, 175, 1);
    font-size: 14px;
    font-family: SourceHanSansSC-regular;
  }
</style>


<template>
    <div class="wood-cert">
      <van-nav-bar title="可用原木量" left-arrow @click-left="goBack" fixed />
      <div class="group">
        <div class="name">
          <div class="icon">落</div>
          <div class="txt">落叶松</div>
        </div>
        <div class="num"><span>50</span> m³</div>
      </div>
      <div class="tip" @click="$router.push({name: 'woodCert'})">余量不够？去开证></div>
    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: '',
        data() {
            return {}
        },
      methods: {
        goBack() {
          window.history.back();
        },
      }
    }
</script>
