<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名: </span>
        <div class="g-form-input">
          <input type="text" v-model="username" placeholder="请输入用户名">
        </div>
        <span class="g-form-error">{{userErrors.errorText}}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码：</span>
        <div class="g-form-input">
          <input type="password" v-model="password" placeholder="请输入密码">
        </div>
        <span class="g-form-error">{{passwordErrors.errorText}}</span>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="onLogin">登录</a>
        </div>
      </div>
      <p class="g-form-error">{{errorText}}</p>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        username:'',
        password:'',
        errorText:'',
        userFlag:false,
        passwordFlag:false
      }
    },
    computed: {
      userErrors(){
        let errorText,status
          if(!/@/g.test(this.username)) {
            status = false
            errorText = '用户名未包含@'
          }else {
            status = true
            errorText = ''
          }
        if (!this.userFlag) {
          errorText = ''
          this.userFlag = true
        }
          return {
            status,
            errorText
          }

      },
      passwordErrors(){
        let errorText,status
        if(!/^\w{6,13}$/g.test(this.password)) {
          status = false
          errorText = '密码必须在6-13数位之间'
        }else {
          status = true
          errorText = ''
        }
        if (!this.passwordFlag) {
          errorText = ''
          this.passwordFlag = true
        }
        return {
          status,
          errorText
        }
      }
    },
    methods: {
      onLogin(){
        if(!this.userErrors.status || !this.passwordErrors.status) {
          this.errorText = '提示： 用户名或密码不正确'
        }else {
          this.errorText = ''
          this.$http.get('/Vue-demo/db.json')
            .then((res) => {
              this.$emit('has-log',res.data.login)
          },(error => {
            console.log(error)
          }))
        }

      }
    }
  }

</script>
<style></style>
