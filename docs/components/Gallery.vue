<template>
  <div>
    <div class="columns-2 gap-4 space-y-4">
      <img v-for="(img, index) in images" :key="index" :src="img" class="w-full rounded-lg cursor-pointer" alt="Foto do cinema e/ou do deslocamento para o cinema" @click="handleCLick"/>
    </div>
  </div>
</template>

<style setup>
.modal-dialog {
  border: 1px solid #2E2E32;
  outline: unset;
  border-radius: 10px;

  &::backdrop {
    background: #00000075;
  }

  div {
    overflow: hidden;
  }
}

.img-dialog {
  max-width: 100vh;
  object-fit: cover;
}
</style>

<script setup lang="ts">
const images = [
  "./gallery/20250322_175541.jpg",
  "./gallery/20241114_180545.jpg",
  "./gallery/20250322_182611.jpg",
  "./gallery/20250322_172918.jpg",
  "./gallery/20250322_160358.jpg",
  "./gallery/20250322_182938.jpg",
  "./gallery/20240811_171012.jpg",
  "./gallery/20250322_165809.jpg",
  "./gallery/20250322_154555.jpg",
]

const handleCLick = (e: MouseEvent): void => {
  const {src} = e.target

  if (src) {
    const dialog = document.createElement('dialog')
    dialog.classList.add('modal-dialog')

    const onclickEvent = dialog.onclick = () => {
      if (dialog.open) dialog.close()
      console.log("Clicked outside dialog")
    }

    const div = document.createElement('div')

    const img = document.createElement('img')
    img.classList.value = 'img-dialog'
    img.src = src

    img.onclick = (e) => {
      e.stopPropagation()
      e.preventDefault()
      console.log("Clicked in the image. Propagation has stopped")
    }

    div.appendChild(img)
    dialog.appendChild(div)

    document.body.appendChild(dialog)
    dialog.showModal()

    dialog.addEventListener('close', () => {
      dialog.remove()
      removeEventListener("click", onclickEvent)
    })

  }
}
</script>