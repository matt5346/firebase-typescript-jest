<template>
  <div id="app">
		<notifications group="foo" />
		<top-header />
    <nav>
      <router-link :to="{ path: '/portfolio/demo/firebase-form' }">Home</router-link> |
      <router-link :to="{ path: '/portfolio/demo/firebase-form/login' }">Login</router-link> |
      <router-link :to="{ path: '/portfolio/demo/firebase-form/secret' }">Secret info</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import { Vue } from 'vue-property-decorator';
import TopHeader from './components/TopHeader.vue';

@Component({
  components: {
    TopHeader,
  },
})
export default class AppVue extends Vue {}
</script>

<style lang="scss">
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');

* {
    box-sizing: border-box;
}

.home {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.vue-notification {
  padding: 10px;
  margin: 0 5px 5px;
  font-size: 18px;
  color: #ffffff;
  background: #44A4FC;
  border-left: 5px solid #187FE7;
  &.warn {
    background: #ffb648;
    border-left-color: #f48a06;
  }
  &.error {
    background: #E54D42;
    border-left-color: #B82E24;
  }
  &.success {
    background: #68CD86;
    border-left-color: #42A85F;
  }
}

nav {
	margin: 50px 0;

	a {
		font-size: 18px;
	}
}

.form-container {
	button {
		margin-top: 20px;
	}
}

a:hover {
	color: #ff4b2b;
	text-decoration: underline;
}

.router-link-exact-active {
	color: #ff4b2b;
	text-decoration: underline;
}

body {
    background-color: #f6f5f7;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Montserrat', sans-serif;
    margin: -20px 0 50px;
    height: 100vh;
}

h1 {
    margin: 0;
    font-weight: bold;
}

h2 {
    text-align: center;
}

p {
    font-size: 14px;
    font-weight: 100;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin: 20px 0 30px;

}

span {
    font-size: 12px;
}

a {
    text-decoration: none;
    color: #333;
    font-size: 14px;
    margin: 15px 0;
    margin-right: 5px;
}

button {
    border-radius: 20px;
    border: 1px solid rgb(255, 73, 41);
    background-color: #ff4b2b;
    color: #ffffff;
    font-size: 12px;
    width: 145px;
    height: 40px;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    transition: transform 80ms ease-in, background .15s ease, color .1s ease;

    &:hover {
      background-color: #fff;
      color: #000000;
      box-shadow: 0px 0px 7px 2px rgba(255, 73, 41, .7);
    }
}

button:active {
    transform: scale(0.92);
}

button:focus {
    outline: none;
}

button.ghost {
    border-color: #ffffff;
    background-color: transparent;

    &:hover {
      background-color: #ffffff;
      border-color: #000;
      color: #000;
    }
}

form {
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0 50px;
    height: 100%;
    flex-direction: column;
}

input {
    background: #eee;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;

		&:disabled {
			opacity: .3;
		}
}

.container {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
    0 10px 10px rgba(0, 0, 0, 0.22);
    width: 768px;
    max-width: 100%;
    min-height: 480px;
    position: relative;
    overflow: hidden;
}

.form-container {
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
}

.sign-in {
    left: 0;
    width: 50%;
    z-index: 2;
}

.sign-up {
    left: 0;
    width: 50%;
    opacity: 0;
    z-index: 1;
}

.overlay-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: all 0.6s ease-in-out;
    z-index: 100;
}

.overlay {
    background: #ff416c;
    background: linear-gradient(to right, #ff4b2b, #ff416c);
    height: 100%;
    left: -100%;
    width: 200%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 0;
    position: relative;
    color: #ffffff;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
}

.overlay-panel {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0 40px;
    flex-direction: column;
    top: 0;
    height: 100%;
    width: 50%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
}

.overlay-left {
    transform: translateX(-20%);
}

.overlay-right {
    right: 0;
    transform: translateX(0);
}

.social {
    margin: 20px 0;

}

.social a {
    display: inline-flex;
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    border: 1px solid #dddddd;
    border-radius: 50%;
    transition: transform 0.1s linear;
}

.social a:active {
    transform: scale(0.1);
}

/* MOVING properties !!! */

.container.right-panel-active .sign-in {
    transform: translateX(100%);
}

.container.right-panel-active .overlay-container {
    transform: translateX(-100%);

}

.container.right-panel-active .sign-up {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
}

.container.right-panel-active .overlay {
    transform: translateX(50%);
}

.container.right-panel-active .overlay-left {
    transform: translateX(0);
}

.container.right-panel-active .overlay-right {
    transform: translateX(0);
}
</style>
