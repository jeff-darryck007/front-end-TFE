<template>
  <Navbar />
  <div class="login-container">
    <div class="login-box">
      <div class="avatar animate-pop">
        <img
          src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
          alt="User avatar"
        />
      </div>

      <h2 class="site-title fade-in">Partage Gratuit</h2>
      <p class="welcome-msg fade-in-delay">
        Donnez, et trouvez des objets gratuits près de chez vous 🤍
      </p>

      <form @submit.prevent="handleLogin" class="fade-in-delay2">
        <div class="input-group">
          <i class="fas fa-user"></i>
          <input type="email" v-model="email" placeholder="Email" required />
        </div>

        <div class="input-group">
          <i class="fas fa-lock"></i>
          <input
            type="password"
            v-model="password"
            placeholder="Mot de passe"
            required
          />
        </div>

        <div class="options">
          <label>
            <input type="checkbox" v-model="rememberMe" />
            Se souvenir de moi
          </label>
          <a class="forgot" @click="goForgot">Mot de passe oublié ?</a>
        </div>

        <button type="submit" class="login-btn">Se connecter</button>

        <p class="register-msg">
          Pas encore inscrit ?
          <a @click="goToRegister">Créer un compte</a>
        </p>
      </form>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
import { ref } from "vue";
import { loginUser } from "@/controller/controllerLogin.js";
import { useRouter } from "vue-router";

const router = useRouter();

const goToRegister = () => router.push("/register");
const goForgot = () => router.push("/forgot-password");

const email = ref("");
const password = ref("");
const rememberMe = ref(false);

const handleLogin = async () => {
  try {
    const data = await loginUser(email.value, password.value);
    localStorage.setItem("token", data.token);
    router.push("/dashboard");
  } catch (error) {
    console.error(error.message);
  }
};
</script>

<style scoped>
/* --- Fond principal --- */
.login-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  padding: 20px;
}

/* --- Bloc login --- */
.login-box {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  border-radius: 20px;
  padding: 60px;
  width: 100%;
  max-width: 650px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
  text-align: center;
  color: #000;
  transition: all 0.3s ease;
}

/* --- Avatar --- */
.avatar img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 30px;
  border: 2px solid #000;
  object-fit: cover;
  transition: all 0.3s ease;
}

/* --- Titres --- */
.site-title {
  font-size: 2.8em;
  margin-bottom: 20px;
  font-weight: 700;
}
.welcome-msg {
  font-size: 18px;
  margin-bottom: 35px;
}

/* --- Champs --- */
.input-group {
  border: 1px solid #000;
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  margin: 18px 0;
  padding: 16px;
  transition: all 0.3s ease;
}

.input-group i {
  margin-right: 12px;
  color: #f1b800;
  font-size: 18px;
}

.input-group input {
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  font-size: 18px;
}

/* --- Options --- */
.options {
  display: flex;
  justify-content: space-between;
  margin: 20px 0 30px;
}
.forgot {
  color: #002a66;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
}

/* --- Boutons --- */
.login-btn {
  width: 100%;
  padding: 16px;
  border-radius: 12px;
  background: #f1b800;
  color: #000;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
}

/* --- Inscription --- */
.register-msg {
  margin-top: 30px;
  font-size: 16px;
}
.register-msg a {
  color: #f1b800;
  cursor: pointer;
  font-weight: 700;
}

/* --- Responsive --- */
@media (max-width: 1024px) {
  .login-box {
    max-width: 500px;
    padding: 50px;
  }
  .avatar img {
    width: 100px;
    height: 100px;
  }
  .site-title {
    font-size: 2.4em;
  }
  .welcome-msg {
    font-size: 16px;
  }
  .input-group input {
    font-size: 16px;
  }
  .login-btn {
    font-size: 16px;
    padding: 14px;
  }
}

@media (max-width: 768px) {
  .login-box {
    max-width: 400px;
    padding: 40px;
  }
  .avatar img {
    width: 90px;
    height: 90px;
  }
  .site-title {
    font-size: 2em;
  }
  .welcome-msg {
    font-size: 15px;
  }
  .input-group input {
    font-size: 15px;
  }
  .login-btn {
    font-size: 15px;
    padding: 12px;
  }
}

@media (max-width: 480px) {
  .login-box {
    width: 90%;
    padding: 30px;
  }
  .avatar img {
    width: 80px;
    height: 80px;
  }
  .site-title {
    font-size: 1.8em;
  }
  .welcome-msg {
    font-size: 14px;
  }
  .input-group input {
    font-size: 14px;
  }
  .login-btn {
    font-size: 14px;
    padding: 10px;
  }
}
</style>
