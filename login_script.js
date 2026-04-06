document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();

  // Credentials mapping for ALL users
  const credentials = {
    issu_agarwal: "admin123",
    nishant_agarwal: "manager123",
    umesh_singh: "sales123",
    polkiv_saikia: "admin123",
    deepshikha_phukan: "ea123",
    luna_nath: "coord123",
    banashri_saikia: "coord456",
    anjali_mandal: "junior123",
    sanjay_thakur: "senior123",
    ankit_kahar: "mis123",
    subhajit_chakraborty: "op123",
    monmoy_sen: "op456",
    sumi_dutta: "junior456",
    jyoti_roy: "op789",
    shilpi_mallik: "billing123",

    // Stores
    killer_guwahati_club: "store123",
    killer_roodraksha: "store234",
    killer_central_mall: "store345",
    pepe_city_center: "store456",
    pepe_christian_basti: "store567",
    pepe_shillong: "store678"
  };

  if (credentials[user] && credentials[user] === pass) {
    // Save current user to localStorage
    localStorage.setItem("currentUser", user);
    // Redirect to dashboard
    window.location.href = "admin/admin_index.html";
  } else {
    alert("Invalid credentials.");
  }
});
