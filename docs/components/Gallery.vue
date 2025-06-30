<template>
  <div>
    <div class="columns-2 gap-4 space-y-4">
      <img v-for="(img, index) in images" :key="index" :src="img[0]" class="w-full rounded-lg cursor-pointer" :alt="img[1] || `Foto do cinema e/ou do deslocamento para o cinema`" @click="handleCLick"/>
    </div>
  </div>
</template>

<style setup>
.modal-dialog {
  border: 1px solid #FFFFFF10;
  outline: unset;
  border-radius: 5px;
  background: #2E2E3250;
  backdrop-filter: blur(50px);

  &::backdrop {
    background: #00000085;
  }

  div {
    overflow: hidden;
  }
}

.img-dialog {
  object-fit: cover;

  @media screen and (min-width: 768px) {
      max-width: 100vh;
  }
}



</style>

<script setup lang="ts">
const images = [
  [
    "./gallery/20250322_175541.jpg",
    "Capturado quando assistia à \"Vitória\"."
  ],
  [
    "./gallery/20241114_180545.jpg",
    "Tirei a foto após a sessão de \"Ainda estou aqui\"."
  ],
  [
    "./gallery/20250322_182611.jpg",
    "Entrada do túnel que dá acesso ao outro lado da rua em frente ao Ponteio."
  ],
  [
    "./gallery/20250322_172918.jpg",
    "Capturado quando assistia ao filme \"Vitória\"."
  ],
  [
    "./gallery/20250322_160358.jpg",
    "Créditos de \"Better Man\"."
  ],
  [
    "./gallery/20250322_182938.jpg",
    "Fachada do Ponteio. Tirado do outro lado da rua."
  ],
  [
    "./gallery/20240811_171012.jpg",
    "Do filme \"Deadpool\"."
  ],
  [
    "./gallery/20250322_165809.jpg",
    "Mais uma do filme \"Vitória\"."
  ],
  [
    "./gallery/20250322_154555.jpg",
    "Mais uma do filme \"Better Man\"."
  ],
  [
    "./gallery/20250611_153643.jpg",
    "Vista de dentro da cabine do banheiro do Una Belas Artes."
  ],
  [
    "./gallery/20250611_153345.jpg",
    "Quando \"Manas\" acabou..."
  ],
  [
    "./gallery/20250611_155620.jpg",
    "Sala 3 do Una Belas Artes."
  ],
  [
    "./gallery/20250628_193118.jpg",
    "Adesivo no banheiro masculino do cinema do Minas Tenis Club."
  ]
]

const handleCLick = (e: MouseEvent): void => {
  const {src, alt} = e.target

  if (src) {
    if (typeof document === 'undefined') return;

    const dialog = document?.createElement('dialog')
    dialog.classList.add('modal-dialog')

    const onclickEvent = dialog.onclick = () => {
      if (dialog.open) dialog.close()
      console.log("Clicked outside dialog")
    }

    const div = document?.createElement('div')

    const text1 = document?.createTextNode(`${alt.trim().endsWith(".") ? alt : alt.trim() + "."}`)
    const text2 = document?.createTextNode('Clique aqui ou fora da imagem para fechar.')

    const p = document.createElement('p')
    p.appendChild(text1)
    p.innerHTML += "&nbsp;<br/>"
    p.appendChild(text2)
    p.classList.value = 'text-center text-slate-100 p-3 text-[16px] bg-black/15 text-balance m-0'

    const img = document?.createElement('img')
    img.classList.value = 'img-dialog'
    img.src = src

    img.onclick = (e) => {
      e.stopPropagation()
      e.preventDefault()
      console.log("Clicked in the image. Propagation has stopped")
    }

    div.appendChild(img)
    div.appendChild(p)
    dialog.appendChild(div)

    document?.body.appendChild(dialog)
    dialog.showModal()

    dialog.addEventListener('close', () => {
      dialog.remove()
      removeEventListener("click", onclickEvent)
    })

  }
}
</script>
