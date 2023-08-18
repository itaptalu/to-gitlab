<template>
    <div class="flex gap-1 py-1.5 w-[1232px]">
        <section class="min-w-296px bg-white p-2 rounded-[20px] h-fit">
            <UIIcon name="logo" filled/>
        </section>
        <section class="w-full flex flex-col gap-1">
            <header class="bg-white p-1 rounded-[20px]">
                <div class="w-2.5 h-2.5 flex justify-center items-center bg-blue-200 rounded-full">{{ $t('logo') }}</div>
            </header>
            <NuxtPage class="bg-red-200 w-full"/>
        </section>
    </div>
</template>

<script setup>
const { locale } = useI18n()
useHead({
  title: 'Polygon'
})
</script>