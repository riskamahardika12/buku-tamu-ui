// Preview live data
const nama = document.getElementById('nama');
const instansi = document.getElementById('instansi');
const keperluan = document.getElementById('keperluan');

nama.addEventListener('input', () => {
  document.getElementById('prevNama').textContent = nama.value;
});
instansi.addEventListener('input', () => {
  document.getElementById('prevInstansi').textContent = instansi.value;
});
keperluan.addEventListener('input', () => {
  document.getElementById('prevKeperluan').textContent = keperluan.value;
});

// Tampilkan waktu otomatis
function updateJam() {
  const now = new Date();
  const waktu = now.toLocaleString('id-ID');
  document.getElementById('jamSekarang').textContent = "📅 " + waktu;
}
setInterval(updateJam, 1000);

// Submit form
document.getElementById('bukuTamuForm').addEventListener('submit', function(e) {
  e.preventDefault();

  if (nama.value && instansi.value && keperluan.value) {
    document.getElementById('successMsg').classList.remove('hidden');
    this.reset();

    // Kosongkan preview
    document.getElementById('prevNama').textContent = "-";
    document.getElementById('prevInstansi').textContent = "-";
    document.getElementById('prevKeperluan').textContent = "-";

    setTimeout(() => {
      document.getElementById('successMsg').classList.add('hidden');
    }, 4000);
  } else {
    alert("Mohon lengkapi semua data!");
  }
});

// Dark mode toggle
function toggleDarkMode() {
  document.body.classList.toggle('dark');
}
