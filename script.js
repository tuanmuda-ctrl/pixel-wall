// Pixel Wall prototype: sample tiles only. No purchase or payment is processed here.
const sampleTiles = {
  12: { name: "Wiki", fullName: "Wikipedia", url: "https://www.wikipedia.org/" },
  23: { name: "YouTube", fullName: "YouTube", url: "https://www.youtube.com/" },
  36: { name: "GitHub", fullName: "GitHub", url: "https://github.com/" },
  48: { name: "NASA", fullName: "NASA", url: "https://www.nasa.gov/" },
  65: { name: "Mozilla", fullName: "Mozilla", url: "https://www.mozilla.org/" },
  77: { name: "Python", fullName: "Python", url: "https://www.python.org/" }
};
const grid = document.getElementById("wall-grid");
const dialog = document.getElementById("tile-dialog");
const available = 100 - Object.keys(sampleTiles).length;
document.getElementById("total-count").textContent = "100";
document.getElementById("available-count").textContent = available;
document.getElementById("year").textContent = new Date().getFullYear();

for (let i = 0; i < 100; i++) {
  const data = sampleTiles[i];
  const tile = document.createElement("button");
  tile.type = "button";
  tile.className = "tile" + (data ? " sold" : "");
  tile.setAttribute("aria-label", data ? `Buka situs contoh ${data.fullName}` : `Lihat detail blok ${i + 1}`);
  tile.innerHTML = data
    ? `<span><span class="tile-name">${data.name}</span><span class="tile-sub">KUNJUNGI ↗</span></span>`
    : `<span><span class="tile-name">+</span><span class="tile-sub">#${String(i + 1).padStart(2, "0")}</span></span>`;
  tile.addEventListener("click", () => {
    if (data) {
      // Demo links open in a new tab. These are examples, not paid placements or endorsements.
      window.open(data.url, "_blank", "noopener,noreferrer");
      return;
    }
    document.getElementById("dialog-eyebrow").textContent = "BLOK TERSEDIA · DEMO";
    document.getElementById("dialog-title").textContent = `Kotak #${String(i + 1).padStart(2, "0")}`;
    document.getElementById("dialog-description").textContent = "Satu blok mewakili unit 10 × 10 piksel pada konsep Pixel Wall.";
    document.getElementById("dialog-note").textContent = "Pembelian belum aktif. Belum ada formulir pemesanan, database, atau pembayaran.";
    dialog.showModal();
  });
  grid.appendChild(tile);
}
document.getElementById("dialog-close").addEventListener("click", () => dialog.close());
document.getElementById("dialog-ok").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
