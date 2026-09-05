<script setup>
import { ref, watch } from 'vue'

// bestäm/definera props för att ta emot selectedDate från förälderkomponenten
const props = defineProps({
  selectedDate: {
    type: String,
    required: true,
  },
})
// bestäm/definera emits för att skicka tillbaka data till förälderkomponenten
const emit = defineEmits(['update-data'])

const title = ref('')
const imageUrl = ref('')
const explanation = ref('')
const copyright = ref('')
const isVideo = ref(false) // för att kontrollera om det är en video
const defaultImageUrl = ref('/favicon(1).ico') // Fallbackbild om ingen bild hämtas
const isLoading = ref(false)
const errorMessage = ref('')

// regex/ "reguljärt uttryck"/regulr expression. så detta används för att matcha youtubelänken och hämta ID:t från länk. Detta var lite extragrej för att youtubevideos ej kunde tas in pga nån tredjepartsgrej meg chrome o yt
const getVideoId = (url) => {
  const match = url.match(
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  )
  return match ? match[1] : null // om "match" hittas, returnera det. annars null
}
// funktion HÄMTA DATA från API
const fetchAPOD = async () => {
  isLoading.value = true
  errorMessage.value = ''

  const apiKey = 'bLKsuQaFpHG3mK8eo9UwyCI1RXpF9CKf8DqVYmiW'
  const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${props.selectedDate}`

  try {
    const response = await fetch(url)
    if (!response.ok) throw new Error('Failed to fetch data')
    const data = await response.json()

    // uppdatera lokala refs
    title.value = data.title || 'No Title'
    imageUrl.value = data.url || defaultImageUrl.value //  hämta url annars fallback bilden
    explanation.value = data.explanation || 'No explanation'
    copyright.value = data.copyright || 'No Title'
    isVideo.value = data.media_type === 'video'

    console.log('Fetched URL:', imageUrl.value)

    // skicka data tillbaka till förälderkomponenten
    emit('update-data', {
      title: title.value,
      imageUrl: imageUrl.value,
      explanation: explanation.value,
      copyright: copyright.value,
      isVideo: isVideo.value,
    })
  } catch (error) {
    console.error('Fetch error:', error)
    errorMessage.value = 'Failed to fetch APOD data. Please try again later.'
  } finally {
    isLoading.value = false
  }
}

//kolla efter ändringar i selectedDate, kör fetchAPOD
watch(() => props.selectedDate, fetchAPOD, { immediate: true })
</script>

<template>
  <div>
    <div v-if="isLoading">Loading...</div>
    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
    <div v-else>
      <h1>{{ title }}</h1>
      <!-- Bilden/videon visas här. v-bind används genom ":" innan "src" -->
      <div v-if="isVideo" class="video-container">
        <iframe width="480" height="270" style="border-radius: 8px; margin: 20px"
          :src="`https://www.youtube.com/embed/${getVideoId(imageUrl)}`" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      </div>
      <div v-else>
        <img :src="imageUrl || defaultImageUrl" alt="astro image" class="apod-image" />
      </div>
      <p class="explanation">{{ explanation }}</p>
      <p class="copyright"><span class="copyright-label">Copyright: </span>{{ copyright }}</p>
      <!-- använd span för att separera, för att sen göra första ordet lila. lol-->
    </div>
  </div>
</template>

<style scoped>
.error-message {
  color: #d0adf0;
  font-size: 1.6rem;
  margin: 20px;
}

.apod-image {
  max-width: 90%;
  max-height: 70vh;
  height: auto;
  width: auto;
  border-radius: 8px;
  margin: 20px;
  border: #d0adf0 solid 1px;
}

.copyright-label {
  font-weight: bold;
}

.copyright {
  color: #d0adf0;
}

.copyright,
.explanation {
  padding-top: 1rem;
}

@media only screen and (max-width: 600px) {
  .video-container iframe {
    height: 180px;
    width: auto;
  }
}
</style>
