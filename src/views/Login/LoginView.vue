<template>
  <div>
    <div
      :class="['container', {
        'right-panel-active': panelActive,
      }]"
      id="container"
    >
        <div class="form-container sign-up">
            <form @submit.prevent="registerSubmit">
                <h1>Create account</h1>
                <div class="social">
                  <a href="#" aria-label="twitter"><i class="fab fa-twitter"></i></a>
                  <a href="#" aria-label="facebook"><i class="fab fa-facebook-f"></i></a>
                  <a href="#" aria-label="google"><i class="fab fa-google-plus-g"></i></a>
                </div>
                <span>or use your email for registration</span>
                <!-- <input
                  type="name"
                  placeholder="Name"
                  aria-label="name"
                  v-model="name"
                > -->
                <input
                  type="email"
                  placeholder="Email"
                  aria-label="email"
                  v-model="email"
                >
                <input
                  type="password"
                  placeholder="Password"
                  aria-label="password"
                  v-model="password"
                >
                <button id="sign-up">sign up</button>
            </form>
        </div>

        <div class="form-container sign-in">
          <form @submit.prevent="loginSubmit">
              <h1>Sign in</h1>
              <div class="social">
                <a href="#" aria-label="twitter"><i class="fab fa-twitter"></i></a>
                <a href="#" aria-label="facebook"><i class="fab fa-facebook-f"></i></a>
                <a href="#" aria-label="google"><i class="fab fa-google-plus-g"></i></a>
              </div>
              <span>or use your account</span>
                <input
                  :disabled="currentUserLogged"
                  type="email"
                  placeholder="Email"
                  aria-label="email"
                  v-model="email"
                >
                <input
                  :disabled="currentUserLogged"
                  type="password"
                  placeholder="Password"
                  aria-label="password"
                  v-model="password"
                >
              <!-- <a href="#" aria-label="forgot-password">forgot your password?</a> -->
              <button id="sign-in">sign in</button>
          </form>
        </div>

        <div class="overlay-container">
            <div class="overlay">
                  <div class="overlay-panel overlay-left">
                      <h1>Welcome back!</h1>
                      <p>To keep connected with us please login with your personal info</p>
                      <button
                        class="ghost"
                        @click.capture="panelActive = false"
                      >sign in</button>
                  </div>

                  <div class="overlay-panel overlay-right">
                      <h1>Hello friend</h1>
                      <p>Enter your personal details and start journey with us</p>
                      <button
                        class="ghost"
                        @click.self="panelActive = true"
                      >sign up</button>
                  </div>
            </div>
        </div>
    </div>

  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import { Vue } from 'vue-property-decorator';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import app from '../../firebase';

@Component
export default class LoginView extends Vue {
  email = '';

  password = '';

  name = '';

  panelActive = false;

  currentUserLogged = false;

  mounted() {
    onAuthStateChanged(getAuth(app), (user) => {
      this.currentUserLogged = !!user;
    });
  }

  async loginSubmit():Promise<void> {
    try {
      console.log(app, 'AITH');
      const auth = getAuth(app);
      // eslint-disable-next-line max-len
      await signInWithEmailAndPassword(auth, this.email, this.password);
      // const auth = firebaseConfigConst.firebase;
      this.$router.replace({ name: 'secretView' });
      this.$notify({
        group: 'foo',
        type: 'success',
        title: 'Important message',
        text: 'Hey, you loggin in!',
      });
    } catch (err) {
      this.$notify({
        group: 'foo',
        type: 'error',
        title: 'Important message',
        text: (err as Error).message,
      });
    }
  }

  async registerSubmit():Promise<void> {
    try {
      console.log(app, 'AITH');
      const auth = getAuth(app);
      // eslint-disable-next-line max-len
      await createUserWithEmailAndPassword(auth, this.email, this.password);
      // const auth = firebaseConfigConst.firebase;
      this.panelActive = false;
      this.$notify({
        group: 'foo',
        type: 'success',
        title: 'Important message',
        text: 'Your account succesfully created!',
      });
    } catch (err) {
      console.log((err as Error), '(err as Error)');
      this.$notify({
        group: 'foo',
        type: 'error',
        title: 'Important message',
        text: (err as Error).message,
      });
      console.log(err, 'ERROR loginSubmit');
    }
  }
}
</script>

<style>

</style>
