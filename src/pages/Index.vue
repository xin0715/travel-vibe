<template>
    <section class="relative pt-20 pb-24 overflow-hidden">
      <div class="absolute inset-0 z-0 bg-gradient-to-b from-skyblue-light to-skyblue-dark opacity-30"></div>
      <div
        class="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2731&auto=format&fit=crop')] bg-cover bg-center opacity-30">
      </div>
  
      <div class="container mx-auto px-4 relative mt-16">
        <div class="max-w-4xl mx-auto text-center">
          <div class="flex items-center justify-center mb-6 animate-float">
            <CloudSunRain class="h-10 w-10 text-skyblue-dark mr-3" />
            <h1 class="text-3xl md:text-2xl lg:text-3xl font-bold text-gray-800">
              Style the journey. Feel the vibe.
            </h1>
          </div>
  
          <div class="flex items-center justify-center mb-6">
            <div class="text-lg md:text-l font-medium text-gray-700 mx-1">
            旅行的樣子，從你定義！
            </div>
          </div>
          
  
          <div class="mb-10">
            <LocationSearch fullWidth class="relative"/>
          </div>
  
          <div class="flex flex-wrap justify-center gap-3 md:gap-5 mt-8">
            <RouterLink
              to="/weather"
              class="flex items-center bg-white/90 backdrop-blur-sm hover:bg-white px-4 py-2 rounded-full shadow-md text-gray-700 hover:text-skyblue transition-colors">
              <CloudSunRain class="h-5 w-5 mr-2" />
              <span>Weather Forecast</span>
            </RouterLink>
  
            <RouterLink
              to="/outfit"
              class="flex items-center bg-white/90 backdrop-blur-sm hover:bg-white px-4 py-2 rounded-full shadow-md text-gray-700 hover:text-skyblue transition-colors">
              <Shirt class="h-5 w-5 mr-2" />
              <span>Outfit Guides</span>
            </RouterLink>
  
            <RouterLink
              to="/travel-planner"
              class="flex items-center bg-white/90 backdrop-blur-sm hover:bg-white px-4 py-2 rounded-full shadow-md text-gray-700 hover:text-skyblue transition-colors">
              <Compass class="h-5 w-5 mr-2" />
              <span>Travel Planner</span>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>  

    <section className="py-16 bg-gray-50">
		<div className="container mx-auto px-4">
			<h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
			熱門旅遊地點
			</h2>

			<div v-if="isLoading" class="flex justify-center">
				<div class="animate-pulse-slow text-gray-400">正在載入天氣資料...</div>
			</div>
		
			<div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
				<WeatherCard
				v-for="(weather, index) in featuredLocations"
				:key="index"
				:location="weather.location"
				:temperature="weather.temperature"
				:condition="weather.condition"
				:humidity="weather.humidity"
				:windSpeed="weather.windSpeed"
				:icon="weather.conditionIcon"
				/>
			</div>

			<div class="text-center mt-12">
				<RouterLink
					to="/weather"
					class="inline-flex items-center px-6 py-3 bg-skyblue text-white font-medium rounded-full shadow-lg hover:bg-skyblue-dark transition-colors">
					<Globe class="mr-2 h-5 w-5" />
					探索更多地點
				</RouterLink>
			</div>
		</div>
  	</section>

	<section class="py-16 bg-white">
		<div class="container mx-auto px-4">
			<h2 class="text-3xl font-bold text-center mb-16 text-gray-800">
				怎麼用？三步搞定！
			</h2>

			<div class="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
				<div class="text-center">
					<div class="w-16 h-16 bg-skyblue/10 rounded-full flex items-center justify-center mx-auto mb-4">
						<MapPin class="h-8 w-8 text-skyblue" />
					</div>
					<h3 class="text-xl font-semibold mb-3 text-gray-800">
						選個想去的地方
					</h3>
					<p>
						想去哪就去哪，輸入地點就能查天氣～
					</p>
					<h4 class="text-gray-600 font-opensans">（不提供機票，純查詢 😆）</h4>
				</div>

				<div class="text-center">
					<div class="w-16 h-16 bg-skyblue/10 rounded-full flex items-center justify-center mx-auto mb-4">
						<CloudSunRain class="h-8 w-8 text-skyblue" />
					</div>
					<h3 class="text-xl font-semibold mb-3 text-gray-800">
						看看天氣怎樣
					</h3>
					<p class="text-gray-600 font-opensans">
						太熱太冷太潮濕？一眼就幫你看出來
					</p>
					<h4 class="text-gray-600">(比前男友還懂你）。</h4>
				</div>

				<div class="text-center">
					<div class="w-16 h-16 bg-skyblue/10 rounded-full flex items-center justify-center mx-auto mb-4">
						<Shirt class="h-8 w-8 text-skyblue" />
					</div>
					<h3 class="text-xl  font-semibold mb-3 text-gray-800">
						穿搭靈感
					</h3>
					<p class="text-gray-600">
						今天穿什麼？天氣說了算。
					</p>
					<h4 class="text-gray-600">保暖跟時尚，我全都要！</h4>
				</div>
			</div>

			<div class="text-center mt-16">
				<RouterLink
				to="/mini-game"
				class="inline-flex items-center px-6 py-3 bg-sunset text-white font-medium rounded-full shadow-lg hover:bg-sunset-dark transition-colors"
				>
				選擇障礙救星“點我！“ 幫你決定旅遊地 🗺️
				</RouterLink>
			</div>
		</div>
	</section>

</template>
  
  
<script setup>
import { ref, onMounted } from 'vue'
import LocationSearch from '@/components/LocationSearch.vue'
import WeatherCard from '@/components/WeatherCard.vue'
import { getPopularDestinations, getWeatherData } from '@/utils/weatherService'
import { TicketsPlane,Shirt,Compass,CloudSunRain,Globe,MapPin } from "lucide-vue-next";

const featuredLocations = ref([])
// const isLoading = ref(false)

onMounted(async () => {
  // isLoading.value = true
  try {
    const destinations = getPopularDestinations().slice(0, 3)
    const weatherData = await Promise.all(destinations.map(getWeatherData))
    featuredLocations.value = weatherData
  } catch (error) {

  } finally {
    // isLoading.value = false
  }
})
</script>