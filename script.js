  const sections = document.querySelectorAll('.section');
  let index = 0;

  function showSection(idx) {
    sections.forEach((s, i) => s.classList.toggle('active', i === idx));
  }

  function nextSection() {
    if (index < sections.length - 1) index++;
    showSection(index);
  }

  function prevSection() {
    if (index > 0) index--;
    showSection(index);
  }

  function kirimPesanWA() {
    const nomor = '6283112294396'; // Ganti dengan nomormu
    const pesan = encodeURIComponent('');
    window.open(`https://wa.me/${nomor}?text=${pesan}`, '');
  }

//   nama teman
// Ambil parameter ?nama= dari URL
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

const nama = getQueryParam("nama");
if (nama) {
  document.getElementById("namaTeman").textContent = `Haloo, ${nama}`;
}


// show gambar
  function showGambar1() {
    Swal.fire({
      title: 'ini caramu tidur',
      imageUrl: '/img/turu1.png', // Ganti sesuai kebutuhan
      imageWidth: 300,
      imageAlt: 'Gambar lucu',
    });
  }

    function showGambar2() {
    Swal.fire({
      title: 'ini caramu tidur',
      imageUrl: '/img/turu2.png', // Ganti sesuai kebutuhan
      imageWidth: 300,
      imageAlt: 'Gambar lucu',
    });
  }