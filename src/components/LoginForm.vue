<template>
  <div class="LoginPage">
    <h1>AIOps 로그인</h1>

    <div class="Loginmain">
      <form @submit.prevent="submitForm">
        <div class="Loginform">
          <!-- <label for="email">아이디:</label> -->
          <input
            placeholder="이메일을 입력해주세요"
            id="email"
            type="text"
            v-model="email"
          />
          <!-- <span class="warning" v-if="!isEmailValid">
            이메일 형식으로 입력해주세요.
          </span> -->
        </div>
        <div class="Loginform">
          <!-- <label for="password">패스워드:</label> -->
          <input
            placeholder="비밀번호를 입력해주세요"
            id="password"
            type="password"
            v-model="password"
          />
        </div>
        <button v-bind:disabled="!isEmailValid || !password" type="submit">
          로그인
        </button>
        <!-- <button @click="submit()">로그인</button> -->
      </form>
      <div class="gologin" @click="goSignUp">회원가입 하기</div>
    </div>
  </div>
</template>

<script>
import { validateEmail } from '@/utils/validation';
import 'vuejs-noty/dist/vuejs-noty.css';
import { loginUser } from '@/api/index';
import { saveAuthToCookie, saveUserToCookie } from '@/utils/cookies';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  // 자동 연산
  computed: {
    isEmailValid() {
      return validateEmail(this.email);
    },
  },
  methods: {
    async submitForm() {
      try {
        const userData = {
          email: this.email,
          password: this.password,
        };

        // await this.$store.dispatch('LOGIN', userData);
        const { data } = await loginUser(userData);

        // store
        this.$store.commit('setToken', data.token);
        this.$store.commit('setUsername', data.username);
        // cookie
        saveAuthToCookie(data.token);
        saveUserToCookie(data.username);

        this.$router.push('/main');
      } catch (error) {
        this.$noty.error(`아이디나 비밀번호가 틀렸습니다. `, {
          timeout: 2000,
          layout: 'topRight',
        });
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.email = '';
      this.password = '';
    },
    goSignUp() {
      this.$router.push('/signUp');
    },
  },
};
</script>

<style>
.warning {
  color: #ff4057;
  font-size: 0.8rem;
}

.LoginPage {
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #e9ecef;
}

.Loginform {
  display: flex;
  flex-direction: column;
}

.Loginmain {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.gologin {
  margin-top: 20px;
  cursor: pointer;
}
</style>
