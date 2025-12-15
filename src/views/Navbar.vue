<template>
  <nav class="navbar" :class="{ sticky: isSticky }">

    <!-- LEFT : LOGO -->
    <div class="nav-left">
      <img 
        src="" 
        alt="logo"
        class="logo"
      />
    </div>

    <!-- BURGER -->
    <div class="burger" @click="toggleMenu">
      <i class="fas fa-bars"></i>
    </div>

    <!-- CENTER : SEARCH -->
    <div class="nav-center">
      <div class="search-zone">
        <select>
          <option>Toutes les catégories...</option>
        </select>

        <input type="text" placeholder="Rechercher..." />
        <input 
            type="text" 
            placeholder="Rechercher..." 
            pattern="\d{5}" 
            maxlength="5" 
            title="Veuillez entrer un code postal à 5 chiffres"
          />

        <select>
          <option>Toutes les distances...</option>
        </select>

        <button class="search-btn">
          <i class="fas fa-search"></i>
        </button>
      </div>

          <!-- RIGHT DESKTOP -->
    <div class="nav-right">
      <a href="#" class="nav-link">Messages</a>
      <a href="#" class="nav-link">Notifications</a>
      <a href="#" class="login-link">Se connecter</a>
    </div>
    </div>


  </nav>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
      isSticky: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    handleScroll() {
      this.isSticky = window.scrollY > 10;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style scoped>
:root {
  --blue: #002A66;
  --yellow: #F1B800;
}

/* NAVBAR MAIN */
.navbar {
  width: 100%;
  background: #fff;
  padding: 12px 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

/* LOGO */
.logo {
  height: 45px;
  object-fit: contain;
}

/* BURGER */
.burger {
  display: none;
  font-size: 28px;
  cursor: pointer;
  color: var(--blue);
}

/* SEARCH CENTER */
.nav-center {
  flex: 1;
  display: flex;
  justify-content: center;
}

.search-zone {
  display: flex;
  align-items: center;
  gap: 10px;
}

.search-zone select,
.search-zone input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
}

.search-zone input {
  width: 220px;
}

.search-btn {
  padding: 10px 16px;
  background: var(--blue);
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

/* RIGHT LINKS */
.nav-right {
  display: flex;
  align-items: center;
  gap: 25px;
}

.nav-link,
.login-link {
  font-size: 15px;
  font-weight: 600;
  color: var(--blue);
  text-decoration: none;
}

/* MOBILE MENU */
.mobile-menu {
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: #fff;
  width: 100%;
  padding: 20px;
  border-top: 1px solid #ddd;
}

/* RESPONSIVE */
@media (max-width: 950px) {

  /* Hide desktop links */
  .nav-right {
    display: none;
  }

  /* Show burger */
  .burger {
    display: block;
  }

  /* Search becomes full width */
  .search-zone {
    flex-wrap: wrap;
    justify-content: center;
  }

  .search-zone input,
  .search-zone select {
    width: 100%;
  }

  .search-zone {
    max-width: 450px;
  }
}
</style>

<style>
html, body {
  overflow-x: hidden;
}
</style>
