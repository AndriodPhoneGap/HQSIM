---
icon: circle-info
cover: /assets/images/cover3.jpg
---

# Intro Page

<div>
  <h2>Astrology Information</h2>
  <p>Constellation: {{ constellation }}</p>
  <p>Zodiac: {{ zodiac }}</p>
</div>

<script setup>
import { ref, onMounted } from 'vue';

const constellation = ref('');
const zodiac = ref('');

/**
 * Calculates astrology information based on date of birth.
 * @param {Date} dateOfBirth - The date of birth.
 * @returns {object} An object containing constellation and zodiac information.
 */
function calculateAstrology(dateOfBirth) {
  // Replace with your own algorithm
  return {
    constellation: 'Aries',
    zodiac: 'Dragon',
  };
}

onMounted(() => {
  const astrologyInfo = calculateAstrology(new Date()); // Use current date for testing
  constellation.value = astrologyInfo.constellation;
  zodiac.value = astrologyInfo.zodiac;
});
</script>

Place your introduction and profile here.
