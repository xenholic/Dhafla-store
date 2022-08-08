import { defineStore } from 'pinia'
import axios from "axios"
import router from "../router/index.js"
import Swal from "sweetalert2"

export const useCustomerStore = defineStore("Customer", {
    state() {
        return {
            baseUrl: 'http://localhost:3000',
            isLogin: false,
            LoginForm: {
                email: "",
                password: "",
            },
            registerForm: {
                email: "",
                password: "",
                username: "",
                phoneNumber: ""
            },
        }
    },
    actions: {
        setLogin(status = false) {
            this.isLogin = status
        },

        async customerRegister() {
            try {
                axios.post(`${this.baseUrl}/customers/register`, {
                    email: this.registerForm.email,
                    password: this.registerForm.password,
                    username: this.registerForm.username,
                    phoneNumber: this.registerForm.phoneNumber
                })
                Swal.fire({
                    icon: "success",
                    title: `Success`,
                    text: `Success Register`,
                });
                router.push('/login')
            } catch (err) {
                Swal.fire({
                    icon: "error",
                    title: `Error`,
                    text: `${err.response.data.message}`,
                });
            } finally {
                this.email = ''
                this.password = ''
                this.username = ''
                this.phoneNumber = ''
            }
        },

        async customerLogin() {
            try {
                let custData = await axios.post(`${this.baseUrl}/customers/login`, {
                    email: this.LoginForm.email,
                    password: this.LoginForm.password
                })

                localStorage.setItem("accessToken", custData.data.data.accessToken)
                localStorage.setItem("CustomerId", custData.data.data.customerId)
                localStorage.setItem("email", custData.data.data.email)
                localStorage.setItem("username", custData.data.data.username)

                Swal.fire({
                    icon: 'success',
                    title: 'Nice!',
                    text: `${this.LoginForm.email}`,
                })
                this.isLogin = true
                router.push('/')
            } catch (err) {
                console.log(err);
                Swal.fire({
                    icon: 'error',
                    title: 'Failed!',
                    text: err.response.data.message,
                })
            }
        },

        async handleCredentialResponse(response) {
            try {
                const GsignIn = await axios.post(`${this.baseUrl}/customers/google-signIn`, {
                    credential: response.credential
                })
                console.log(GsignIn, "ini google sign in");
                localStorage.setItem("accessToken", GsignIn.data.accessToken)
                localStorage.setItem("email", GsignIn.data.email)
                localStorage.setItem("id", GsignIn.data.id)
                Swal.fire({
                    icon: 'success',
                    title: 'Signed in successfully',
                    text: 'Welcome to DHafla Store',
                })

                this.isLoginStore = true
                this.router.push("/HomePage")
            } catch (err) {
                console.log(err);
            }
        },
    },

})
