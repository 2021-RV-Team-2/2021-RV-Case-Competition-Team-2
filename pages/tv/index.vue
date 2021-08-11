<template>
 <div id='app'>
  <TVList/>
 </div>
</template>
<script>
import TVList from '@/components/TVList'
export default {
 name: 'App',
 head: {
    title: 'TV Shows',
 },
 components: {
  TVList
 }
}
</script>