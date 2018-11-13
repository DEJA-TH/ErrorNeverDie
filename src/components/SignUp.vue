<template>
    <div class="Sign-Up">
        <p>สมัครสมาชิก !!!</p>
        <input type="text" v-model="email" placeholder="Email"><br><br>
        <input type="password" v-model="password" placeholder="Password"><br><br>
        <button :click="SignUp">Sign Up</button><br><br>
        <span>มีบัญชีอยู่แล้ว ? <router-link to="/Login">เข้าระบบ</router-link></span>
    </div>
</template>

<script>
import firebase from 'firebase'
    export default {
        name : 'SignUp',
        data : function (){
            return{
                email: '',
                password: ''
            }
        },
        methods:{
            SignUp:function() {
                firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then(
                    (user) => {
                       this.$router.replace('helloWorld')
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
    .SignUp {
        margin-top:-50px;
    }
    input {
        margin: 10px 0;
        width: 20%;
        padding: 15px;
    }
    button {
        margin-top: 10px;
        width: 15%;
        cursor: pointer;
    }
    span {
        display:block;
        margin-top: 20px;
        font-size:20px;
    }
</style>

