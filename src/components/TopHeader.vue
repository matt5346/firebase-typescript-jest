<template>
  <div class="top-header">
    <div class="top-header__inner">
      <h1>User status</h1>
      <h2>
        <span>Logged in </span>
        <span v-if="loggedIn" class="status"><b>Yes</b></span>
        <span v-else class="status"><b>No</b></span>
      </h2>
    </div>
    <div>
      <button @click="signOut" v-if="loggedIn">Logout</button>
    </div>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import { Vue } from 'vue-property-decorator';
import { signOut, getAuth, onAuthStateChanged } from 'firebase/auth';
import app from '../firebase';

@Component
export default class TopHeader extends Vue {
  loggedIn = false;

  auth = getAuth(app);

  mounted() {
    this.setupFirebase();
  }

  setupFirebase():void {
    onAuthStateChanged(this.auth, (user) => {
      console.log(user, 'user onAuthStateChanged');
      this.loggedIn = !!user;
    });
  }

  async signOut():Promise<void> {
    try {
      const data = await signOut(this.auth);
      this.loggedIn = false;
      console.log(data, 'data');
      this.$router.replace({ name: 'loginView' });
    } catch (err) {
      console.log(err, 'err signOut');
    }
  }
}
</script>

<style lang="scss">
.top-header {
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 20px;
  left: 0;
  width: 100%;
  padding: 20px 30px;
}

.top-header__inner {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  span {
    font-size: 20px;
    &.status {
      color: #ff4b2b;
      text-decoration: underline;
    }
  }
}
</style>
