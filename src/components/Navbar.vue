<template>
	<nav class="bg-white/90 backdrop-blur-md shadow-sm fixed w-full z-10">
		<div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between h-16">
				<div class="flex items-center">
					<router-link to="/" class="flex items-center gap-2">
						<TicketsPlane class="h-8 w-8 text-skyblue" />
						<span class="font-montserrat font-bold text-xl">Travel Vibe</span>
						<!-- <span class="font-montserrat font-bold text-xl">W³</span> -->
					</router-link>
				</div>

				<!-- Desktop-->
				<div class="hidden md:flex items-center gap-4 px-4">
					<router-link to="/weather" class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-skyblue hover:bg-gray-100">天氣查詢 ｜ Weather</router-link>
					<router-link to="/outfit" class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-skyblue hover:bg-gray-100">穿搭建議 | Outfit Guide</router-link>
					<router-link to="/travel-planner" class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-skyblue hover:bg-gray-100">旅行計劃 ｜ Travel Planner</router-link>
					<router-link to="/mini-game" class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-skyblue hover:bg-gray-100">想去哪 | Game</router-link>
				</div>

				<!-- Mobile-->
				<div class="md:hidden flex items-center">
					<button
					@click="toggleMenu"
					class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-skyblue hover:bg-gray-100 focus:outline-none"
					>
					<component :is="isOpen ? X : Menu" class="h-6 w-6" />
					</button>
				</div>
			</div>
		</div>

		<!-- Mobile -->
		<div v-if="isOpen" class="md:hidden">
			<div class="px-4 pt-2 pb-3 space-y-1 bg-white shadow-lg">
				<router-link to="/weather" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-skyblue hover:bg-gray-100">天氣查詢 ｜ Weather</router-link>
				<router-link to="/outfit" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-skyblue hover:bg-gray-100">穿搭建議 | Outfit Guide</router-link>
				<router-link to="/travel-planner" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-skyblue hover:bg-gray-100">旅行計劃 ｜ Travel Planner</router-link>
				<router-link to="/mini-game" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-skyblue hover:bg-gray-100">想去哪 | Game</router-link>
			</div>
		</div>
	</nav>
</template>

<script setup>
	import { ref } from 'vue';
	import { Menu, X, TicketsPlane } from 'lucide-vue-next';

	const isOpen = ref(false);

	const toggleMenu = () => {
		isOpen.value = !isOpen.value;
	};

	const closeMenu = () => {
		isOpen.value = false;
	};
</script>

<style scoped>
</style>
