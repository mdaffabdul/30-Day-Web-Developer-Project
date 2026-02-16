let pokemonLengkap = [];

const typeColors = {
  fire: "bg-red-500",
  water: "bg-blue-500",
  grass: "bg-green-500",
  electric: "bg-yellow-400",
  poison: "bg-purple-500",
  bug: "bg-lime-500",
  fairy: "bg-pink-300",
  ground: "bg-amber-600",
  normal: "bg-gray-400",
};

const renderPokemon = (data) => {
  const wadah = document.getElementById("pokemon-container");

  const html = data
    .map((item) => {
      const typeName = item.types[0].type.name;
      const warna = typeColors[typeName];
      return `
        <div class="card bg-white p-4 rounded-xl shadow-lg flex flex-col items-center border hover:scale-105 transition">
            
            <img src="${item.sprites.front_default}" class="w-32 h-32" alt="${item.name}" />
            
            <h3 class="text-xl font-bold capitalize mt-2">${item.name}</h3>

            <h3 class="${warna} px-3 py-1 rounded-full text-white text-sm font-semibold capitalize mt-2">
                ${typeName}
            </h3>
            
        </div>
        `;
    })
    .join("");

  wadah.innerHTML = html;
};

const ambilDaftarPokemon = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=40");
  const dataAwal = await response.json();

  for (let p of dataAwal.results) {
    const resDetail = await fetch(p.url);

    const dataDetail = await resDetail.json();

    pokemonLengkap.push(dataDetail);
  }

  console.log("Data Lengkap:", pokemonLengkap);

  renderPokemon(pokemonLengkap);
};

ambilDaftarPokemon();

const filterPokemon = (kategori) => {
  let hasilFilter;

  if (kategori === "all") {
    hasilFilter = pokemonLengkap;
  } else {
    hasilFilter = pokemonLengkap.filter(
      (item) => item.types[0].type.name === kategori.toLowerCase(),
    );
  }

  renderPokemon(hasilFilter);
};

const searchPokemon = (keyword) => {
  const keywordKecil = keyword.toLowerCase();

  const hasilCari = pokemonLengkap.filter((item) => {
    const namaPokemon = item.name.toLowerCase();
    return namaPokemon.includes(keywordKecil);
  });

  renderPokemon(hasilCari);
};
