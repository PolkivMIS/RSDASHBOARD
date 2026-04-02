// script.js

// Get current user
const currentUserKey = localStorage.getItem("currentUser");
if (!currentUserKey || !users[currentUserKey]) {
  window.location.href = "login.html"; // adjust if login.html is in another folder
}
const currentUser = users[currentUserKey];

// Topbar info
document.getElementById("user-name").textContent = currentUser.name;
document.getElementById("user-role").textContent = currentUser.designation;
document.getElementById("user-pic").src = currentUser.pic;

// References
const sidebar = document.getElementById("sidebar");
const companybar = document.getElementById("companybar");
const mainFrame = document.getElementById("mainFrame");

// Define companies (must match forms.js and sheets.js exactly)
const companies = [
  "B.S.GROUP",
  "R.S.TRADE",
  "NORTHEAST FNB",
  "MEGHA AGRO",
  "PENTAGON",
  "OTHERS"
];

// Get role permissions
const userRole = roles[currentUser.roleKey];
if (!userRole) {
  alert("Role not defined for this user. Contact admin.");
}

// Populate company bar
companies.forEach(companyName => {
  // Check if this user has any sheets/forms for this company
  const hasSheets = Object.entries(sheets).some(([id, sheet]) =>
    sheet.company === companyName && userRole.sheets.includes(id)
  );
  const hasForms = Object.entries(forms).some(([id, form]) =>
    form.company === companyName && userRole.forms.includes(id)
  );

  // Only show company if user has at least one sheet or form
  if (hasSheets || hasForms) {
    const btn = document.createElement("button");
    btn.textContent = companyName;

    btn.onclick = () => {
      // Highlight active company
      companybar.querySelectorAll("button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      // Clear sidebar
      sidebar.innerHTML = "";

      // Load sheets for this company (check role permissions)
      Object.entries(sheets).forEach(([id, sheet]) => {
        if (sheet.company === companyName && userRole.sheets.includes(id)) {
          const sbtn = document.createElement("button");
          sbtn.innerHTML = `<img src="${sheet.icon}" alt="icon" /> ${sheet.name}`;

          // Build sheet URL, adjust for assigned task sheet
          let sheetUrl = sheet.url;
          if ((id === "assigned_task_rs" || id === "p_assigned_task") && currentUser.assignedTaskGid) {
            sheetUrl = sheetUrl.replace(/gid=\d+/, `gid=${currentUser.assignedTaskGid}`);
          }

          sbtn.onclick = () => {
            // Highlight active sidebar button
            sidebar.querySelectorAll("button").forEach(b => b.classList.remove("active"));
            sbtn.classList.add("active");

            mainFrame.src = sheetUrl;
          };
          sidebar.appendChild(sbtn);
        }
      });

      // Load forms for this company (check role permissions)
      Object.entries(forms).forEach(([id, form]) => {
        if (form.company === companyName && userRole.forms.includes(id)) {
          const fbtn = document.createElement("button");
          fbtn.innerHTML = `<img src="${form.icon || "icons/default.gif"}" alt="icon" /> ${form.name}`;
          fbtn.onclick = () => {
            // Highlight active sidebar button
            sidebar.querySelectorAll("button").forEach(b => b.classList.remove("active"));
            fbtn.classList.add("active");

            mainFrame.src = form.url;
          };
          sidebar.appendChild(fbtn);
        }
      });

      // ✅ Auto-select the first sidebar item when company is clicked
      const firstSidebarBtn = sidebar.querySelector("button");
      if (firstSidebarBtn) {
        firstSidebarBtn.click();
      }
    };

    companybar.appendChild(btn);
  }
});

// Auto‑select first company on load so sidebar isn’t empty
if (companybar.querySelector("button")) {
  companybar.querySelector("button").click();
}

// Logout
document.getElementById("logout").onclick = () => {
  localStorage.removeItem("currentUser");
  window.location.href = "../login.html"; // adjust path if needed
};

// Idle detection
let idleTimer;
function resetIdle() {
  clearTimeout(idleTimer);
  document.body.classList.remove("idle");
  idleTimer = setTimeout(() => {
    document.body.classList.add("idle");
  }, 10000);
}
window.onload = resetIdle;
document.onmousemove = resetIdle;
document.onkeypress = resetIdle;
