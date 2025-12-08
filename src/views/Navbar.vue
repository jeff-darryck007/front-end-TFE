<template>
  <nav class="navbar">
    <!-- LOGO -->
    <div class="nav-left">
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/2ememain.be_logo.svg/2560px-2ememain.be_logo.svg.png" 
        alt="logo"
        class="logo"
      />
    </div>

    <!-- SEARCH + FILTERS (centre) -->
    <div class="nav-center">
      <div class="search-zone">
        <select>
          <option>Toutes les catégories...</option>
        </select>

        <input type="text" placeholder="Rechercher..." />

        <select>
          <option>Toutes les distances...</option>
        </select>

        <button class="search-btn">
          <i class="fas fa-search"></i>
        </button>
      </div>
    </div>

    <!-- RIGHT SECTION -->
    <div class="nav-right">
      <div class="user-links">
        <a href="#" class="nav-link">Messages</a>
        <a href="#" class="nav-link">Notifications</a>
        <a href="#" class="login-link">Se connecter</a>
      </div>

      <button class="yellow-btn">Placer une annonce</button>
    </div>
  </nav>
</template>

<style scoped>
:root {
  --blue: #002A66;
  --yellow: #F1B800;
}

/* NAVBAR */
.navbar {
  width: 100%;
  background: #fff;
  padding: 20px 40px; /* plus grand */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-bottom: 1px solid rgba(0,0,0,0.13);
}

/* LOGO */
.logo {
  height: 60px; /* agrandi */
  object-fit: contain;
}

/* SEARCH BAR CENTER */
.nav-center {
  display: flex;
  justify-content: center;
  flex: 1;
}

.search-zone {
  display: flex;
  align-items: center;
  gap: 12px; /* plus d'espace */
  flex-wrap: wrap;
}

.search-zone select,
.search-zone input {
  padding: 12px 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
}

.search-zone input {
  width: 250px; /* plus large */
}

.search-btn {
  padding: 12px 18px;
  border: none;
  background: var(--blue);
  color: white;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
}

/* RIGHT SIDE */
.nav-right {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.user-links {
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.nav-link {
  color: var(--blue);
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;
}

.login-link {
  color: var(--blue);
  font-weight: 700;
  font-size: 16px;
}

.yellow-btn {
  background: var(--yellow);
  border: none;
  padding: 14px 20px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
}

.yellow-btn:hover {
  background: #d9a300;
}

/* --- RESPONSIVE --- */
@media (max-width: 1024px) {
  .search-zone input { width: 200px; }
  .yellow-btn { padding: 12px 18px; font-size: 15px; }
}

@media (max-width: 768px) {
  .search-zone input { width: 150px; }
  .search-zone select, .search-zone input, .search-btn { font-size: 14px; padding: 10px 12px; }
  .yellow-btn { padding: 10px 16px; font-size: 14px; }
}

@media (max-width: 480px) {
  .logo { height: 50px; }
  .search-zone input { width: 120px; }
  .search-zone select, .search-zone input, .search-btn { font-size: 12px; padding: 6px 8px; }
  .yellow-btn { padding: 8px 12px; font-size: 12px; }
  .nav-link, .login-link { font-size: 14px; }
}
</style>
