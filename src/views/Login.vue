
<template>
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
          <input
              type="email"
              v-model="email"
              placeholder="Email"
              required
          />
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
          <label><input type="checkbox" v-model="rememberMe" /> Se souvenir de moi</label>
          <a href="#" class="forgot">Mot de passe oublié ?</a>
        </div>

        <button type="submit" class="login-btn" >Se connecter</button>

        <p class="register-msg">
          Pas encore inscrit ? <a href="#" @click="goToRegister">Créer un compte</a>
        </p>
      </form> 
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import { loginUser } from "@/controller/controllerLogin.js";
  import { useRouter } from 'vue-router'
  const router = useRouter()
  

  const goToRegister = () => router.push('/register')

  const email = ref("");
  const password = ref("");
  const rememberMe = ref(false);

  const handleLogin = async () => {
    try {
      const data = await loginUser(email.value, password.value);
      console.log("Connexion réussie :", data);

      // Exemple : redirection ou stockage
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
  background: linear-gradient(135deg, #3a3a3a, #2c2c2c, #4a4a4a);
  background-size: 300% 300%;
  animation: gradientMove 10s ease infinite;
  padding: 20px;
  box-sizing: border-box;
}

/* --- Bloc principal --- */
.login-box {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(14px);
  border-radius: 15px;
  padding: 40px;
  width: 100%;
  max-width: 380px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
  text-align: center;
  color: #f5f5f5;
  animation: fadeIn 1s ease forwards;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.login-box:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.6);
}

/* --- Avatar --- */
.avatar img {
  width: 85px;
  height: 85px;
  border-radius: 50%;
  margin-bottom: 20px;
  border: 2px solid rgba(255, 255, 255, 0.2);
}

/* --- Titre et texte --- */
.site-title {
  font-size: 1.9em;
  margin-bottom: 10px;
  color: #ffffff;
  font-weight: 700;
}

.welcome-msg {
  font-size: 15px;
  margin-bottom: 25px;
  color: #e0e0e0;
}

/* --- Champs de saisie --- */
.input-group {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 6px;
  margin: 12px 0;
  padding: 10px;
  transition: background 0.3s ease;
}

.input-group:focus-within {
  background: rgba(255, 255, 255, 0.25);
}

.input-group i {
  margin-right: 10px;
  color: #9e9e9e;
}

.input-group input {
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  color: #fff;
  font-size: 14px;
}

/* --- Options --- */
.options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  margin: 15px 0 25px 0;
  flex-wrap: wrap;
  gap: 10px;
  color: #bdbdbd;
}

.forgot {
  color: #90caf9;
  text-decoration: none;
  transition: color 0.3s;
}

.forgot:hover {
  color: #42a5f5;
}

/* --- Bouton --- */
.login-btn {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  background: linear-gradient(90deg, #42a5f5, #1e88e5);
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.login-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(33, 150, 243, 0.5);
}

/* --- Lien d'inscription --- */
.register-msg {
  margin-top: 20px;
  font-size: 13px;
  color: #bdbdbd;
}

.register-msg a {
  color: #90caf9;
  text-decoration: none;
  font-weight: 600;
}

.register-msg a:hover {
  text-decoration: underline;
}

/* --- Animations --- */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes gradientMove {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Animation personnalisée pour avatar */
.animate-pop {
  animation: pop 0.8s ease;
}
@keyframes pop {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.fade-in {
  animation: fadeIn 1s ease forwards;
}
.fade-in-delay {
  animation: fadeIn 1.3s ease forwards;
}
.fade-in-delay2 {
  animation: fadeIn 1.6s ease forwards;
}

/* --- Responsive --- */
@media (max-width: 768px) {
  .login-box {
    max-width: 340px;
    padding: 30px;
  }
  .site-title {
    font-size: 1.7em;
  }
}

@media (max-width: 480px) {
  .login-box {
    padding: 25px;
    max-width: 300px;
  }

  .avatar img {
    width: 70px;
    height: 70px;
  }

  .input-group input {
    font-size: 13px;
  }

  .options {
    font-size: 12px;
    flex-direction: column;
    align-items: flex-start;
  }

  .login-btn {
    font-size: 14px;
  }
}
</style>
