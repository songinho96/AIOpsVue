<template>
  <div class="SignUpPage">
    <h1>AIOps 회원가입</h1>
    <!-- v-on: = @, prevent = 새로고침 막음-->
    <form @submit.prevent="submitForm">
      <div class="form">
        <input
          placeholder="이메일을 입력해주세요"
          type="text"
          id="username"
          v-model="email"
        />
      </div>
      <div class="form">
        <input
          placeholder="비밀번호를 입력해주세요"
          type="password"
          id="password"
          v-model="password"
        />
      </div>
      <div class="form">
        <input
          placeholder="이름을 입력해주세요"
          type="text"
          id="username"
          v-model="username"
        />
      </div>
      <button :disabled="!isEmailValid || !password || !username" type="submit">
        회원가입
      </button>
    </form>
    <!-- <p>{{ logMessage }}</p> -->
    <div class="gologin" @click="goLogin">로그인 하기</div>
  </div>
</template>

<script>
// import { reactive } from 'vue';
// import axios from 'axios';
import { signUpUser } from '@/api/index';
import { validateEmail } from '../utils/validation';
import 'vuejs-noty/dist/vuejs-noty.css';
export default {
  data() {
    return {
      email: '',
      password: '',
      username: '',
      // log
      logMessage: '',
    };
  },
  computed: {
    isEmailValid() {
      return validateEmail(this.email);
    },
  },
  methods: {
    async submitForm() {
      const userData = {
        email: this.email,
        password: this.password,
        username: this.username,
      };

      const { data } = await signUpUser(userData);
      console.log(data);
      // this.logMessage = `${data.username}님이 가입되었습니다.`;
      this.$noty.success(`${data.username}님이 가입되었습니다.`, {
        timeout: 2000,
        layout: 'topRight',
      });
      this.$router.push('login');
      this.initForm;
    },
    // input 비우기
    initForm() {
      this.email = '';
      this.password = '';
      this.username = '';
    },
    goLogin() {
      this.$router.push('/login');
    },
  },
};
</script>

<style>
.SignUpPage {
  width: 100%;
  height: 100vh;
  display: flex;
  margin: auto;
  flex-direction: column;
  justify-content: center;
  background-color: #e9ecef;
  align-items: center;
}
.gologin {
  margin-top: 20px;
  cursor: pointer;
}
</style>
