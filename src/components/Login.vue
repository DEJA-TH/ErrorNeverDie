<template>
    <div class="login">
        <h1>Error Never Die</h1>
        <h3>เข้าสู่ระบบ</h3>
        <input type="text" v-model="email" placeholder="Email"><br><br>
        <input type="password" v-model="password" placeholder="Password"><br><br>
        <button :click="signIn">Connection</button><br>
        <p>คุณยังไม่มีบัญชีผู้ใช้งานใช่ไหม ?<router-link to="/Sign-Up">สร้าง</router-link></p>
        <br><br>
        <!-- <h4><router-link to="/HelloWorld">HOME</router-link></h4> -->
    </div>

</template>

<script>
    import firebase from 'firebase'
    export default {
        name : 'login',
        data:function () {
            return{
                email: '',
                password: ''
            }
        },
        methods:{
            signIn:function() {
                firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then(
                    (user) => {
                      this.$router.replace('HelloWorld')
                    },
                    (err) => {
                        alert('Opps.'+ err.message)
                    }
                )
            }
        }
    }
</script>
<style scoped>

</style>

