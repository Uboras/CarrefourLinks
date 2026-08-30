const dataMatrix = [
  { title: "Link nuevo - PAS", content: "https://forms.gle/bMcAcBVgDLGcn9Dj9", plataform: "Celulares y PC" },
  { title: "Productos activos sin precio", content: "https://docs.google.com/forms/d/e/1FAIpQLSfY41aHlsXRNVQs_hVqIfLQKzGsZ5B3ckJKRE-G--74ie0-_g/viewform", plataform: "Celulares y PC" },
  { title: "Bebidas Carrefour Bulnes", content: "https://forms.gle/x15t9oBErY1jfWvh8", plataform: "Solo PC" },
  { title: "Formulario PFT", content: "https://docs.google.com/forms/d/e/1FAIpQLSfz_CdCLjbi_Sbjh5KVv2a1BqoLLNuQWpc5sKNTTTgshPofCg/viewform", plataform: "Celulares y PC" },
  { title: "Próximo Vto.", content: "http://10.94.164.15:16000/pch/app/login", plataform: "Celulares y PC" },
  { title: "Rescate - Donación", content: "https://forms.gle/EUvSbrhKaSo7q7dg9", plataform: "Celulares y PC" },
  { title: "Consulta GiftCard", content: "https://www.ohgiftcard.com.ar/", plataform: "Celulares y PC" },
  { title: "Salesforce", content: "https://inccarrefourarg2021.my.salesforce.com/", plataform: "Celulares y PC" },
  { title: "Tickets Caja", content: "https://gtickets.carrefour.com.ar/frontend/", plataform: "Solo PC" },
  { title: "Etiquetas Liquidación", content: "./Etiquetas/index.html", plataform: "Solo PC" },
  { title: "Portal OYM", content: "http://10.22.176.13/cajas_oym/", plataform: "Solo PC" },
  { title: "Consulta Cupones", content: "http://10.94.164.15:21000/cupones/cupones.do", plataform: "Solo PC" }
];

const container = document.getElementById("links-container");

dataMatrix.forEach(link => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <span class="badge">${link.plataform}</span>
    <i class="fa-solid fa-link"></i>
    <h3>${link.title}</h3>
    <span>Acceso rápido</span>
  `;

  card.onclick = () => window.open(link.content, "_blank");
  container.appendChild(card);
});
const searchInput = document.getElementById("search");

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();

  document.querySelectorAll(".card").forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(value) ? "" : "none";
  });
});

document.addEventListener("DOMContentLoaded", () => {

    const banner = document.getElementById("print3decos-banner");

    if (banner) {
        banner.innerHTML = `
            <a 
                href="https://print3decos.manedev.site/"
                target="_blank"
                class="print3decos-banner"
            >
                <div class="banner-content">
                    <div class="banner-text">
                        <span class="banner-small">¿BUSCÁS PRODUCTOS ÚNICOS?</span>
                        <h2>🖨️ Print3Decos</h2>
                        <p>Impresiones 3D para decorar, regalar y mucho más.</p>
                        <strong>👉 Conocé nuestra tienda</strong>
                    </div>

                    <div class="banner-icon">
                        🧸
                    </div>
                </div>
            </a>
        `;
    }

});
