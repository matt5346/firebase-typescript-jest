<template>
  <div>
    <h1>SECRET User Info</h1>
    <table v-if="authInfo && authInfo.currentUser">
      <thead>
        <th>metadata</th>
        <th>email</th>
        <th>provider Type</th>
      </thead>
      <tbody>
        <tr>
          <td>{{ authInfo.currentUser.metadata.createdAt }}</td>
          <td>{{ authInfo.currentUser.email }}</td>
          <td>{{ authInfo.currentUser.providerData[0].providerId }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import { Vue } from 'vue-property-decorator';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import app from '../../firebase';

@Component
export default class SecretView extends Vue {
  authInfo = {};

  mounted() {
    this.authInfo = getAuth(app);
    console.log(app, this, 'app');
    console.log(getAuth(app), 'app');
    console.log(getDatabase(), 'getDatabase');
  }
}
</script>

<style lang="scss">
table {
	width: 800px;
	border-collapse: collapse;
	overflow: hidden;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
    0 10px 10px rgba(0, 0, 0, 0.22);
  margin-top: 30px;
}

th,
td {
	padding: 15px;
	background-color: rgba(255,255,255,0.2);
	color: #000;
}

th {
	text-align: left;
	color: #fff;
}

thead {
	th {
		background-color: #55608f;
	}
}

tbody {
	tr {
		&:hover {
			background-color: rgba(255,255,255,0.3);
		}
	}
	td {
		position: relative;
		&:hover {
			&:before {
				content: "";
				position: absolute;
				left: 0;
				right: 0;
				top: -9999px;
				bottom: -9999px;
				background-color: rgba(255,255,255,0.2);
				z-index: -1;
			}
		}
	}
}
</style>
