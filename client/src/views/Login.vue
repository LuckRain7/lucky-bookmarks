<!--
 * @Description: 登录
 * @Author: LuckRain7
 * @Date: 2020-05-10 10:21:24
 -->
<template>
  <div class="l-login">
    <!-- 中心部分 -->
    <div class="center">
      <!-- 标题 -->
      <div class="title">Web Bookmarks</div>

      <!-- 登录组件 -->
      <div class="main">
        <a-form
          id="components-form-demo-normal-login"
          :form="form"
          class="login-form"
          @submit="handleSubmit"
        >
          <a-form-item>
            <a-input
              v-decorator="[
                'userName',
                {
                  rules: [
                    {
                      required: true,
                      message: 'Please input your username!',
                    },
                  ],
                },
              ]"
              placeholder="登录名"
              size="large"
            >
              <a-icon
                slot="prefix"
                type="user"
                style="color: rgba(0,0,0,.25)"
              />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input
              v-decorator="[
                'password',
                {
                  rules: [
                    {
                      required: true,
                      message: 'Please input your Password!',
                    },
                  ],
                },
              ]"
              type="password"
              placeholder="密码"
              size="large"
            >
              <a-icon
                slot="prefix"
                type="lock"
                style="color: rgba(0,0,0,.25)"
              />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-checkbox
              v-decorator="[
                'remember',
                {
                  valuePropName: 'checked',
                  initialValue: true,
                },
              ]"
            >
              记住我
            </a-checkbox>
            <a class="login-form-forgot" href="">
              忘记密码
            </a>
            <a-button
              type="primary"
              html-type="submit"
              class="login-form-button"
              style="height:40px;"
            >
              登录
            </a-button>

            <a href="">
              现在注册
            </a>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "normal_login" });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },
  },
};
</script>
