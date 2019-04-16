<style lang="less" scoped>
  .add-employee {
    margin-top: 46px;
  }
  .set-employee {
    background: #F8F8F8;
    margin-top: 46px;
    overflow: auto;
    height: 100vh;
    &-add-employee {
      height: 61px;
      border-radius: 10px;
      background: #FFF;
      margin: 20px 10px 0 10px;
      &__text {
        color: red;
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
  <div class="add-employee">
    <van-nav-bar title="添加业务员" left-arrow @click-left="$router.go(-1)" fixed right-text="保存" fixed @click-right="saveReq" v-if="type === 'add'" />
    <van-nav-bar title="修改业务员" left-arrow @click-left="$router.go(-1)" fixed right-text="保存" fixed @click-right="editReq" v-else />
    <employee-card ref="employee-card" v-model="employee" />

    <div class="set-employee-add-employee flex-center-xy" @click="delEmployee" v-if="type === 'edit'">
      <div class="set-employee-add-employee__text">
        <van-icon name="delete" />
        <span>
          删除此业务员
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import EmployeeCard from './EmployeeCard.vue';

export default {
  name: 'setEmployeeCard',
  components: {
    EmployeeCard
  },
  async created() {
    await this.$store.dispatch('getUserInfo', this);
    console.log(this.$route.query);
    let info = this.$route.query.info
    if (info) {
      Object.assign(this.employee, info)
      this.type = 'edit'
    }
  },
  data() {
    return {
      employee:
        {
          name: '',
          username: '',
          socialsecuritypic: '',
          cardfrontpic: '',
          cardoppositepic: '',
          boss: ''
        },
      type: 'add'
    }
  },
  methods: {
    // 保存业务员
    saveReq() {
      let flag = true;
      if(!this.$refs['employee-card'].validate()) {
        flag = false;
      }
      console.log(flag);
      console.log(this.employee);
      if(flag) {
        this.employee.boss = this.$store.getters.oUserInfo.userC.boss;
        this.$http({
          url: '/employee/authApi/addEmployee',
          method: 'POST',
          data: this.employee
        }).then((res) => {
          if(res && res.data.code == 0) {
            this.$toast.success('添加成功');
            this.$router.go(-1)
          }
        });
      }
    },
    // 修改业务员
    editReq() {
      let flag = true;
      if(!this.$refs['employee-card'].validate()) {
        flag = false;
      }
      console.log(flag);
      console.log(this.employee);
      if(flag) {
        this.$http({
          url: '/employee/authApi/alterEmployee',
          method: 'POST',
          data: this.employee
        }).then((res) => {
          if(res && res.data.success) {
            this.$toast.success('修改成功');
            this.$router.go(-1)
          }
        });
      }
    },
    // 删除业务员
    delEmployee() {
      this.$dialog.confirm({
        message: '确定删除此业务员？'
      })
        .then(() => {
          this.$http({
            url: '/employee/authApi/editEmployee',
            method: 'POST',
            data: {
              id: this.employee.id
            }
          }).then((res) => {
            if(res && res.data.success) {
              this.$toast.success('删除成功');
              this.$router.go(-1)
            }
          });
      })
        .catch(() => {
        });
    }
  }
}
</script>
