<template>
  <div class="register-container">
    <div class="register-box">
      <div class="avatar animate-pop">
        <img
            v-if="previewImage"
            :src="previewImage"
            alt="Photo de profil"
        />
        <img
            v-else
            src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
            alt="Avatar par défaut"
        />
      </div>

      <h2 class="site-title fade-in">Créer un compte</h2>
      <p class="welcome-msg fade-in-delay">
        Rejoignez la communauté de <strong>Partage Gratuit</strong> 🤍
      </p>

      <form @submit.prevent="handleRegister" class="fade-in-delay2">
        <div class="input-group">
          <i class="fas fa-user"></i>
          <input type="text" v-model="name" placeholder="Nom" required />
        </div>

        <div class="input-group">
          <i class="fas fa-user-tag"></i>
          <input type="text" v-model="surname" placeholder="Prénom" required />
        </div>

        <div class="input-group">
          <i class="fas fa-envelope"></i>
          <input type="email" v-model="email" placeholder="Email" required />
        </div>

        <div class="input-group">
          <i class="fas fa-user-cog"></i>
          <select v-model="role" required>
            <option value="" disabled>Choisir un rôle</option>
            <option value="Donneur">Donneur</option>
            <option value="Chercheur">Chercheur</option>
            <option value="Les deux">Les deux</option>
          </select>
        </div>

        <div class="input-group">
          <i class="fas fa-lock"></i>
          <input type="password" v-model="password" placeholder="Mot de passe" required />
        </div>

        <div class="input-group file-upload">
          <i class="fas fa-camera"></i>
          <label for="profilePic" class="file-label">Choisir une photo</label>
          <input id="profilePic" type="file" accept="image/*" @change="onFileChange" />
        </div>

        <button type="submit" class="register-btn">S'inscrire</button>

        <p class="login-msg">
          Déjà un compte ? <a href="#">Se connecter</a>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const surname = ref('')
const email = ref('')
const role = ref('')
const password = ref('')
const previewImage = ref(null)

const onFileChange = (event) => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      previewImage.value = e.target.result
    }
    reader.readAsDataURL(file)
  }
}

const handleRegister = () => {
  alert(`Bienvenue ${name.value} ${surname.value} 🤍
Ton rôle : ${role.value || 'non précisé'}`)
}
</script>

<style scoped>
/* --- Fond principal --- */
.register-container {
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

/* --- Bloc d’inscription --- */
.register-box {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(14px);
  border-radius: 15px;
  padding: 40px;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
  text-align: center;
  color: #f5f5f5;
  animation: fadeIn 1s ease forwards;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.register-box:hover {
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
  object-fit: cover;
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

.input-group input,
.input-group select {
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  color: #fff;
  font-size: 14px;
}

.input-group select option {
  color: #000;
}

/* --- Upload de photo --- */
.file-upload {
  justify-content: space-between;
  cursor: pointer;
}

.file-label {
  flex: 1;
  color: #90caf9;
  text-align: left;
  cursor: pointer;
}

.file-upload input[type='file'] {
  display: none;
}

/* --- Bouton --- */
.register-btn {
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

.register-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(33, 150, 243, 0.5);
}

/* --- Lien de connexion --- */
.login-msg {
  margin-top: 20px;
  font-size: 13px;
  color: #bdbdbd;
}

.login-msg a {
  color: #90caf9;
  text-decoration: none;
  font-weight: 600;
}

.login-msg a:hover {
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
  .register-box {
    max-width: 360px;
    padding: 30px;
  }
  .site-title {
    font-size: 1.7em;
  }
}

@media (max-width: 480px) {
  .register-box {
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

  .input-group select {
    font-size: 13px;
  }

  .register-btn {
    font-size: 14px;
  }
}
</style>
