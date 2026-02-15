const students = [
  {
    nama: "Daffa",
    jurusan: "Teknologi Informasi",
    ipk: 3.9,
    status: "Aktif",
  },
  {
    nama: "Budi Santoso",
    jurusan: "Teknologi Informasi",
    ipk: 2.8,
    status: "Cuti",
  },
  {
    nama: "Siti Aminah",
    jurusan: "Teknologi Informasi",
    ipk: 3.7,
    status: "Aktif",
  },
  {
    nama: "Andi Wijaya",
    jurusan: "Teknologi Informasi",
    ipk: 3.2,
    status: "Aktif",
  },
  {
    nama: "Rina Kartika",
    jurusan: "Teknologi Informasi",
    ipk: 1.5,
    status: "Cuti",
  },
  {
    nama: "Bayu Saputra",
    jurusan: "Teknologi Informasi",
    ipk: 3.6,
    status: "Cuti",
  },
  {
    nama: "Citra Lestari",
    jurusan: "Teknologi Informasi",
    ipk: 4.0,
    status: "Aktif",
  },
  {
    nama: "Eko Prasetyo",
    jurusan: "Teknologi Informasi",
    ipk: 2.5,
    status: "Aktif",
  },
];

const renderTable = (data) => {
  const outputTable = data
    .map((mhs) => {
      return `
        <tr>
            <td class="p-4 border-b">${mhs.nama}</td>
            <td class="p-4 border-b">${mhs.jurusan}</td>
            <td class="p-4 border-b">${mhs.ipk}</td>
            <td class="p-4 border-b">${mhs.status}</td>
        </tr>
`;
    })
    .join("");

  document.getElementById("table-body").innerHTML = outputTable;
};

const filterMahasiswa = (kategori) => {
  let hasilFilter;

  if (kategori === "ipk") {
    hasilFilter = students.filter((mhs) => mhs.ipk > 3.5);
  } else if (kategori === "aktif") {
    hasilFilter = students.filter((mhs) => mhs.status === "Aktif");
  } else if (kategori === "cuti") {
    hasilFilter = students.filter((mhs) => mhs.status === "Cuti");
  } else {
    hasilFilter = students;
  }

  renderTable(hasilFilter);
};
