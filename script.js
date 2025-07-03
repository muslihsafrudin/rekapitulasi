function hitungTotal() {
    const listrik = parseInt(document.getElementById('listrik').value) || 0;
    const pdam = parseInt(document.getElementById('pdam').value) || 0;
  
    const listrikTambah = listrik + 3000;
    const pdamTambah = pdam + 3000;
    const total = listrikTambah + pdamTambah;
  
    const hasil = `Tagihan Listrik + 3.000: Rp${listrikTambah.toLocaleString()}
  Tagihan PDAM + 3.000: Rp${pdamTambah.toLocaleString()}
  Total Tagihan: Rp${total.toLocaleString()}`;
  
    document.getElementById('output').textContent = hasil;
  }
  