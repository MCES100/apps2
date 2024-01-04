<script setup>
const links = [{
  label: 'Versions',
  avatar: {
    src: 'https://mces10-software.github.io/apps/ImageSources/logonbg.png'
  },
  badge: 9
}, 
{
  label: 'To-List Public Beta 1',
  icon: 'i-heroicons-home',
  to: '/getting-started/installation'
},{
  label: 'W.D.T Public Beta 6',
  icon: 'i-heroicons-home',
  to: '/getting-started/installation'
}, {
  label: 'W.D.T Public Beta 5',
  icon: 'i-heroicons-chart-bar',
  to: '/navigation/vertical-navigation'
}, {
  label: 'W.D.T Public Beta 4',
  icon: 'i-heroicons-command-line',
  to: '/navigation/command-palette'
},
{
  label: 'W.D.T Public Beta 4',
  icon: 'i-heroicons-command-line',
  to: '/navigation/command-palette'
},
{
  label: 'W.D.T Public Beta 3',
  icon: 'i-heroicons-command-line',
  to: '/navigation/command-palette'
},
{
  label: 'W.D.T Public Beta 2',
  icon: 'i-heroicons-command-line',
  to: '/navigation/command-palette'
},
{
  label: 'W.D.T Public Beta 1',
  icon: 'i-heroicons-command-line',
  to: '/navigation/command-palette'
},
{
  label: 'W.D.T Public Beta Prerelease',
  icon: 'i-heroicons-command-line',
  to: '/navigation/command-palette'
},
{
  label: 'W.D.T Developer Unstable Beta 100',
  icon: 'i-heroicons-command-line',
  to: '/navigation/command-palette'
}]
</script>

<template>
    <div>
      <h1>Download Archives</h1>
      <UVerticalNavigation :links="links" />
    </div>
  </template>
  