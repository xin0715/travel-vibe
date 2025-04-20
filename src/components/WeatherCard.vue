<template>
    <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full max-w-sm">
		<div class="relative p-6 bg-gradient-to-r from-skyblue-light to-skyblue-dark text-white">
			<div class="absolute top-0 right-0 p-4">
				<img v-if="icon" :src="icon" :alt="condition" class="w-16 h-16" />
			</div>
			<h3 class="text-2xl font-montserrat font-semibold">{{ location }}</h3>
			<p class="text-4xl font-bold mt-2">{{ temperature }}°C</p>
			<p class="text-lg mt-1 capitalize">{{ condition }}</p>

			<div class="flex space-x-4 mt-3">
				<div class="flex items-center">
					<Droplets class="w-4 h-4 mr-1" />
					<span>{{ humidity }}%</span>
				</div>
				<div class="flex items-center">
					<Wind class="w-4 h-4 mr-1" />
					<span>{{ windSpeed }} km/h</span>
				</div>
			</div>
		</div>
  
		<div class="p-6">
			<h4 class="font-semibold text-lg text-gray-800 mb-2">
				天氣如何：
			</h4>
			<p class="text-gray-600 font-opensans">{{ outfitSuggestion.description }}</p>
	
			<div class="mt-4">
				<h5 class="font-montserrat font-medium text-gray-700 mb-2">穿搭建議（Recommended）:</h5>
				<ul class="list-disc list-inside text-gray-600 font-opensans">
					<li v-for="(item, index) in outfitSuggestion.items" :key="index">
						{{ item }}
					</li>
				</ul>
			</div>
		</div>
    </div>
</template>
  
<script setup>
    import { Droplets, Wind } from 'lucide-vue-next';
    import { outfitSuggestions } from '@/utils/outfitData';
    import { computed } from 'vue';
    import { defineProps } from 'vue';
  
    const props = defineProps({
        location: String,
        temperature: Number,
        condition: String,
        humidity: Number,
        windSpeed: Number,
        icon: String,
    });

    const getOutfitSuggestion = (temp) => {
        if (temp >= 30) return outfitSuggestions.hot;
        if (temp >= 25) return outfitSuggestions.warm;
        if (temp >= 20) return outfitSuggestions.mild;
        if (temp >= 15) return outfitSuggestions.cool;
        if (temp >= 10) return outfitSuggestions.chilly;
        if (temp >= 5) return outfitSuggestions.cold;
        return outfitSuggestions.veryCold;
    };
  
  	const outfitSuggestion = computed(() => getOutfitSuggestion(props.temperature));
</script>
  