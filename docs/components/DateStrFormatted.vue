<!--TODO - receber param date-->

<!-- Testar e ver se funciona -->
<script setup>
const dt = "27/01/2004".split('/').reverse();
const date = new Date(`${dt[0]}-${dt[1]}-${dt[2]}T00:00:00Z`);

const months = [
  [0, "Janeiro"],
  [1, "Fevereiro"],
  [2, "Março"],
  [3, "Abril"],
  [4, "Maio"],
  [5, "Junho"],
  [6, "Julho"],
  [7, "Agosto"],
  [8, "Setembro"],
  [9, "Outubro"],
  [10, "Novembro"],
  [11, "Dezembro"]
];

const res = `${date.getDay()} de ${months.find(m => m[0] === date.getMonth() + 1)} de ${date.getFullYear()}`.toLowerCase();
console.log(res);
</script>

<template>

</template>