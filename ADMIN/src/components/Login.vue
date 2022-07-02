<template>
  <div>
    <div class="container">
      <!-- Outer Row -->
      <div class="row justify-content-center">
        <div class="col-xl-10 col-lg-12 col-md-9">
          <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
              <!-- Nested Row within Card Body -->
              <div class="row">
                <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                <div class="col-lg-6">
                  <div class="p-5">
                    <div class="text-center">
                      <h1 class="h4 text-gray-900 mb-4">Đăng nhập</h1>
                    </div>
                    <form class="user">
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control form-control-user"
                          id="exampleInputEmail"
                          aria-describedby="emailHelp"
                          placeholder="Enter Email Address..."
                          v-model="userName"
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="password"
                          class="form-control form-control-user"
                          id="exampleInputPassword"
                          placeholder="Password"
                          v-model="passWord"
                        />
                      </div>
                      <span
                        style="
                          color: red;
                          margin-left: 35px;
                          margin-bottom: 10px;
                        "
                        >{{ error }}</span
                      >
                      <a
                        @click="login"
                        class="btn btn-primary btn-user btn-block"
                      >
                        Login
                      </a>
                      <hr />
                      <a
                        href="index.html"
                        class="btn btn-google btn-user btn-block"
                      >
                        <i class="fab fa-google fa-fw"></i> Login with Google
                      </a>
                      <a
                        href="index.html"
                        class="btn btn-facebook btn-user btn-block"
                      >
                        <i class="fab fa-facebook-f fa-fw"></i> Login with
                        Facebook
                      </a>
                    </form>
                    <hr />
                    <div class="text-center">
                      <a class="small" href="forgot-password.html"
                        >Forgot Password?</a
                      >
                    </div>
                    <div class="text-center">
                      <a class="small" href="register.html"
                        >Create an Account!</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LoginComponent",
  data() {
    return {
      userName: "",
      passWord: "",
      error: "",
    };
  },
  methods: {
    async login() {
      try {
        const respon = await axios.post(
          "https://localhost:44309/api/Authentication/Authentication",
          { userName: this.userName, passWord: this.passWord }
        );
        localStorage.setItem(
          "adminID",
          JSON.stringify(respon.data.obj.fullName)
        );
        localStorage.setItem("token", JSON.stringify(respon.data.obj.token));

        console.log(respon.data.obj);
        this.$store.dispatch("adminID", respon.data.obj.fullName);

        this.$router.push("/");
        window.scrollTo(0, 0);
        console.log("admin", respon.data.obj);
      } catch (error) {
        console.log(error);
        this.error = "Tài khoản hoặc mật khẩu không đúng!!!";
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
