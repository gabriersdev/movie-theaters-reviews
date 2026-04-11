<script setup>
import {onMounted} from 'vue'
import {VPBadge} from "vitepress/theme";

onMounted(async () => {
  const places = [
    {
      name: "Cine Santa Tereza",
      address: "Rua Estrela do Sul, 89 - Santa Tereza, Belo Horizonte - MG, 31010-240",
      coords: {x: "-19.9162593", y: "-43.9195692"}
    },
    // {
    //   name: "Cine TJ - Pampulha Mall",
    //   address: "Av. Pres. Antônio Carlos, 8100 - Loja 111B - Shopping Pampulha Mall, Belo Horizonte - MG, 31210-800",
    //   coords: {x: "-19.8505222", y: "-43.9638805"}
    // },
    {
      name: "Cineart - Del Rey",
      address: "Av. Pres. Carlos Luz, 3001 - Pampulha, Belo Horizonte - MG, 31250-010",
      coords: {x: "-19.889617", y: "-43.9715277"}
    },
    {
      name: "Cineart - Via Shopping",
      address: "Av. Afonso Vaz de Melo, 640 - Barreiro, Belo Horizonte - MG, 30640-070",
      coords: {x: "-19.9740266", y: "-44.0242028"}
    },
    {
      name: "Cinemark - BH Shopping",
      address: "Rod. BR-356, 3049 - Belvedere, Belo Horizonte - MG, 30320-900",
      coords: {x: "-19.9741026", y: "-43.9439023"}
    },
    {
      name: "Cinemark - Diamond Mall",
      address: "Av. Olegário Maciel, 1600 - Lourdes, Belo Horizonte - MG, 30180-111",
      coords: {x: "-19.9277742", y: "-43.9472404"}
    },
    // {
    //   name: "Cinemark - Shopping Estação",
    //   address: "Av. Cristiano Machado, 11833 - Vila Cloris, Belo Horizonte - MG, 31744-007",
    //   coords: {x: "-19.8206", y: "-43.9472"}
    // },
    {
      name: "Cinépolis - Shopping Estação BH",
      address: "Av. Cristiano Machado, 11833 - Vila Cloris, Belo Horizonte - MG, 31744-007",
      coords: {x: "-19.8206693", y: "-43.9488681"}
    },
    {
      name: "Cinesercla - Shopping Norte",
      address: "Av. Vilarinho, 1300 - Lojas 88-89-90 - Venda Nova, Belo Horizonte - MG, 31615-250",
      coords: {x: "-19.8151511", y: "-43.9561884"}
    },
    {
      name: "Una Cine Belas Artes",
      address: "Rua Gonçalves Dias, 1581 - Lourdes, Belo Horizonte - MG, 30140-092",
      coords: {x: "-19.9307586", y: "-43.9395287"}
    },
    {
      name: "Cineart - Minas Shopping",
      address: "Av. Cristiano Machado, 4000 - União, Belo Horizonte - MG, 31160-241",
      coords: {x: "-19.8941", y: "-43.9194"}
    },
    {
      name: "Cineart - Ponteio",
      address: "Rod. BR-356, 2500 - Santa Lúcia, Belo Horizonte - MG, 30330-901",
      coords: {x: "-19.9677", y: "-43.9391"}
    },
    {
      name: "Cineart - Shopping Boulevard",
      address: "Av. dos Andradas, 3000 - Santa Efigênia, Belo Horizonte - MG, 30260-070",
      coords: {x: "-19.9197", y: "-43.9155"}
    },
    {
      name: "Cineart - Shopping Cidade",
      address: "Rua dos Tupis, 337 - Centro, Belo Horizonte - MG, 30190-060",
      coords: {x: "-19.9194", y: "-43.9372"}
    },
    {
      name: "Cinemark - Pátio Savassi",
      address: "Av. do Contorno, 6061 - Savassi, Belo Horizonte - MG, 30110-044",
      coords: {x: "-19.9391", y: "-43.9283"}
    },
    {
      name: "Cinema Minas Tênis Clube",
      address: "Rua da Bahia, 2244 - Lourdes, Belo Horizonte - MG, 30160-012",
      coords: {x: "-19.9351", y: "-43.9409"}
    },
    {
      name: "Palácio das Artes - Cine Humberto Mauro",
      address: "Av. Afonso Pena, 1537 - Centro, Belo Horizonte - MG, 30130-004",
      coords: {x: "-19.9230", y: "-43.9351"}
    },
    {
      name: "Cineart - Itaú Power Shopping",
      address: "Av. David Sarnoff, 5160 - Cidade Industrial, Contagem - MG, 32210-110",
      coords: {x: "-19.9477", y: "-44.0249"},
      notPlanned: true,
    },
    {
      name: "Cineart - Shopping Contagem",
      address: "Av. Severino Ballesteros Rodrigues, 850 - Cabral, Contagem - MG, 32110-005",
      coords: {x: "-19.8824", y: "-44.0371"},
      notPlanned: true,
    },
    {
      name: "Cinesercla - Big Shopping",
      address: "Av. João César de Oliveira, 1275 - Eldorado, Contagem - MG, 32315-000",
      coords: {x: "-19.9360", y: "-44.0435"},
      notPlanned: true,
    },
    {
      name: "Cineart - Monte Carmo Shopping",
      address: "Av. Juiz Marco Túlio Isaac, 1119 - Ingá Alta, Betim - MG, 32604-165",
      coords: {x: "-19.9599", y: "-44.1862"},
      notPlanned: true,
    },
    {
      name: "Cinemark - Partage Shopping Betim",
      address: "Rod. Fernão Dias, 601 - Km 492 - São João, Betim - MG, 32655-505",
      coords: {x: "-19.9469", y: "-44.1673"},
      notPlanned: true,
    },
    {
      name: "Cinesercla - Shopping Justinópolis",
      address: "Av. Denise Cristina da Rocha, 2900 - Cerejeira, Ribeirão das Neves - MG, 33902-450",
      coords: {x: "-19.7891", y: "-44.0151"},
      notPlanned: true,
    }
  ]

  if (typeof document === 'undefined') return;

  const divListItems = document?.querySelector("#list-items")

  places
      .toSorted((a, b) => a.name.localeCompare(b.name))
      // TODO - ordenacao: os planejados true no final e os sem no começo
      .toSorted((a, b) => a.notPlanned || b.notPlanned)
      .forEach(place => {
        // L.marker([parseFloat(place.coords.x), parseFloat(place.coords.y)]).addTo(mapInstance).bindPopup(`<b>${place.name}</b>&nbsp;<a href="https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${place.coords.x},${place.coords.y}" rel="noopener noreferrer" target="_blank">Abrir</a>`)
        if (divListItems) {
          const li = document?.createElement("li")
          // TODO - component VPBadge não funciona aqui desta forma. Refatorar e implementar geração com Vue
          li.innerHTML = `<VPBagde type="tip">XXXX</VPBagde> <a href="https://www.google.com/maps/search/?api=1&query=${place.address}" target="_blank" rel="noreferrer noopener"><span>${place.name}</span></a>`
          divListItems.appendChild(li)
        }
      })
  // map.value = mapInstance
})
</script>

<template>
  <section class="mt-8 rounded-lg">
    <!-- <div id="map" class="h-[100vh] lg:h-[60vh] rounded-lg rounded-br-none"></div> -->
    <div>
      <h2>Lista</h2>
      <ul id="list-items"></ul>
    </div>
  </section>
</template>
