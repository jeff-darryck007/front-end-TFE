<template>
  <div class="page-container">

    <!-- 🔍 BARRE DE RECHERCHE -->
    <header class="header-search">
      <div class="search-row">
        <input type="text" placeholder="Toutes les catégories..." />
      </div>

      <div class="search-row2">
        <input type="text" placeholder="Code postal" />
        <select class="distance-select">
        <option selected>Toutes les distances</option>
        <option>< 3 km</option>
        <option>< 5 km</option>
        <option>< 10 km</option>
        <option>< 20 km</option>
        <option>< 30 km</option>
        <option>< 40 km</option>
        <option>< 50 km</option>
      </select>
        <button>Rechercher</button>
      </div>
    </header>

    <div class="content">

      <!-- 📌 SIDEBAR -->
      <aside class="sidebar">
        <h3 class="sidebar-title">À la une</h3>
        <ul>
          <li>Autos</li>
          <li>Immo</li>
          <li>Payer et envoyer</li>
          <li>Envoyer avec bpost</li>
        </ul>

        <h3 class="sidebar-title sidebar-section">Catégories</h3>
        <ul>
          <li>Animaux & Accessoires</li>
          <li>Antiquités & Art</li>
          <li>Articles professionnels</li>
          <li>Autos</li>
          <li>Autos : Divers</li>
          <li>Autos : Pièces & Accessoires</li>
        </ul>
      </aside>

      <!-- 🛒 ANNONCES -->
      <main class="listing">

        <h2 class="section-title">Pour vous</h2>

        <div class="grid">

          <!-- 🔁 9 cartes produits -->
          <div class="card" v-for="n in 12" :key="n">
            <img src="../image/0ddc5b14a02b31812e9a41ea30dad92c.jpg" />

            <p class="card-title">Bureau de réunion</p>
            <p class="card-price">À donner</p>
            <button class="voir-plus-btn">
            Voir plus
            </button>
          </div>

        </div>
      </main>

    </div>
  </div>
</template>

<style>
/* GLOBAL */
.distance-select {
  appearance: none;          /* supprime le style par défaut du navigateur */
  -webkit-appearance: none;
  -moz-appearance: none;

  background-color: rgba(255, 255, 255, 0.8);  /* fond clair semi-transparent */
  color: #000;                                  /* texte noir */
  font-size: 16px;                              /* taille du texte */
  font-weight: 300;                             /* texte plus fin */
  padding: 10px 40px 10px 15px;                /* padding pour texte et icône */
  border: 2px solid #000;                       /* bordure noire */
  border-radius: 12px;                           /* coins arrondis */
  box-shadow: 0 4px 10px rgba(241, 184, 0, 0.5); /* ombre jaune */
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;
  width: 220px;                                 /* largeur fixe ou ajustable */
}

/* Hover */
.distance-select:hover {
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 6px 14px rgba(241, 184, 0, 0.7);
}

/* Focus */
.distance-select:focus {
  border-color: #f1b800;
  box-shadow: 0 0 8px rgba(241, 184, 0, 0.8);
}

/* Flèche personnalisée */
.distance-select {
  background-image: url("data:image/svg+xml;utf8,<svg fill='%23000' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 18px;
}

.voir-plus-btn {
  background-color: rgba(255, 255, 255, 0); /* fond transparent */
  color: #000;                               /* texte noir */
  font-weight: 300;                           /* texte plus fin */
  font-size: 16px;
  padding: 12px 28px;
  border: none;                               /* pas de bordure */
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(241, 184, 0, 0.6); /* ombre jaune */
  transition: all 0.3s ease;
}

.voir-plus-btn:hover {
  background-color: rgba(255, 255, 255, 0.1); /* léger fond au hover */
  transform: translateY(-2px);
  box-shadow: 0 6px 14px rgba(241, 184, 0, 0.8); /* ombre plus forte */
}

.voir-plus-btn:active {
  transform: translateY(1px);
  box-shadow: 0 3px 8px rgba(241, 184, 0, 0.5);
}

.page-container {
  background: #f3f3f3;
  min-height: 100vh;
  padding: 20px;
  font-family: Arial, sans-serif;
}

/* HEADER SEARCH ---------------------------------------------------- */
.header-search {
  max-width: 900px;
  margin: 0 auto 25px auto;
}

.search-row input {
  width: 100%;
  padding: 10px;
  border: 1px solid #bbb;
  border-radius: 6px;
  margin-bottom: 10px;
}

.search-row2 {
  display: flex;
  gap: 10px;
}

.search-row2 input {
  flex: 1;
  padding: 10px;
  border: 1px solid #bbb;
  border-radius: 6px;
}

.search-row2 button {
  background: #0054a6;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 6px;
  cursor: pointer;
}

/* CONTENT LAYOUT -------------------------------------------------- */
.content {
  display: flex;
  gap: 20px;
}

/* SIDEBAR --------------------------------------------------------- */
.sidebar {
  width: 250px;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.sidebar-title {
  font-weight: bold;
  margin-bottom: 10px;
}

.sidebar-section {
  margin-top: 25px;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  padding: 5px 0;
  color: #555;
  cursor: pointer;
}

/* LISTING --------------------------------------------------------- */
.listing {
  flex: 1;
}

.section-title {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 15px;
}

/* GRID + CARD ----------------------------------------------------- */
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.card {
  background: white;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.card img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 8px;
}

.card-title {
  font-weight: 600;
  margin-top: 8px;
  color: #333;
}

.card-price {
  color: #F1B800;
  font-weight: bold;
}
</style>
