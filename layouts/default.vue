<template>
  <div>
    <nav class="align-center gap-4 p-4" display="none sm:block;">
      <nuxt-img src="/assets/icons/hamburger-menu.svg" />
      <NuxtLink to="/default"> Default layout </NuxtLink>
      <NuxtLink to="/custom"> Custom layout </NuxtLink>
      <NuxtLink to="/dynamic"> Dynamic layout </NuxtLink>
      <NuxtLink to="/other"> Other layout </NuxtLink>
    </nav>
    <slot />
  </div>
</template>
