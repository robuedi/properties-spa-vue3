<template>
    <TabMenu  class="font-sm font-light -mx-8 md:-mx-20 lg:-mx-46 xl:-mx-56 -mt-8" :model="items" />
    <div class="pt-8">
        <router-view />
    </div>
</template>

<script setup lang="ts" >
const items = [
  {
      label: 'Messages',
      icon: 'pi pi-fw pi-inbox',
      class: 'pt-3 	md:pl-16 lg:pl-38 xl:pl-48',
      to: { name: 'messages' }
  },
  {
      label: 'My Properties',
      icon: 'pi pi-fw pi-home',
      class: 'pt-3',
      to: { name: 'my-properties' }
  },
  {
      label: 'Saved Properties',
      icon: 'pi pi-fw pi-heart',
      class: 'pt-3',
      to: { name: 'saved-properties' }
  },
  {
      label: 'Profile Details',
      icon: 'pi pi-fw pi-user-edit',
      class: 'pt-3',
      to: { name: 'profile-details' }
  }
]
</script>
