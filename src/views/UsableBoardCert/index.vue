<style lang="less" scoped>
  .wood-cert {
    background: #F8F8F8;
    height: 100vh;
    padding-top: 56px;
    .group {
      box-shadow: 0px 0px 4px 2px rgba(230, 230, 230, 1);
      border-radius: 5px;
      margin: 10px 8px 0 8px;
    }
    .title {
      border-radius: 5px 5px 0 0;
      background-color: #01B6AF;
      height: 54px;
      left: 9px;
      top: 100px;
      width: 343px;
      line-height: 20px;
      text-align: center;
      padding: 0 27px 0 11px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #ffffff;
      .name {
        display: flex;
        align-items: center;
        margin-right: 20px;
        .icon {
          width: 35px;
          height: 35px;
          line-height: 35px;
          text-align: center;
          background-color: #ffffff;
          font-size: 20px;
          color: #01B6AF;
          border-radius: 50%;
          margin-right: 20px;
        }
        .txt {
          font-size: 14px;
        }
      }
      .num {
        font-size: 16px;
        span {
          font-size: 20px;
        }
      }
    }
    .content {
      padding: 0px 27px 0px 65px;
      overflow: hidden;
      .item {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 20px 0;
        .name {
          font-size: 14px;
          color: #999999;
        }
        .num {
          font-size: 16px;
          color: #333333;
          span {
            font-size: 20px;
            color: #01B6AF;
          }
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
      <van-nav-bar title="可用非原木量" left-arrow @click-left="goBack" fixed />
      <div class="group">
        <div class="title">
          <div class="name">
            <div class="icon">落</div>
            <div class="txt">落叶松</div>
          </div>
          <div class="num"><span>50</span> m³</div>
        </div>
        <div class="content">
          <div class="item">
            <div class="name">板材</div>
            <div class="num"><span>30</span> m³</div>
          </div>
          <div class="item">
            <div class="name">方料</div>
            <div class="num"><span>20</span> m³</div>
          </div>
        </div>
      </div>
      <div class="tip" @click="$router.push({name: 'boardCert'})">余量不够？去开证></div>
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
