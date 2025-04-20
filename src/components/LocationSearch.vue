<template>
    <form @submit.prevent="handleSearch" :class="['relative', fullWidth ? 'w-full' : 'max-w-md']">
        <div class="relative">
            <input
            type="text"
            placeholder="Search for a city or place..."
            v-model="searchTerm"
            class="px-4 py-3 w-full rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-skyblue focus:border-transparent shadow-sm font-opensans text-gray-700 pr-10"
            />
            <button
            type="submit"
            class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-skyblue p-2 rounded-full hover:bg-gray-100"
            >
            <Search class="h-5 w-5" />
            </button>
        </div>
    </form>
</template>

<script setup>
    import { ref } from 'vue';
    import { Search } from 'lucide-vue-next';

    defineProps({
        fullWidth: Boolean
    })
    const searchTerm = ref('');

    const handleSearch = () => {
        console.log('搜尋關鍵字：', searchTerm.value);
    };
</script>
