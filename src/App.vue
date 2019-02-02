<template>
  <div id="app">
    <div class="pictures">
      <template v-for="(letterPhoto, letter) in letterPhotos">
        <div
          :key="letter"
          class="pictures--selected"
          v-if="isLetterSelected(letter)"
          :style="backgroundImageStyle(letterPhoto.url)"
        >
        </div>
      </template>
    </div>
    <ul class="alphabet">
      <li v-for="letterInAlphabet in alphabet" :key="letterInAlphabet">
        <button
          class="alphabet__letter" 
          :class="{ 'alphabet__letter--selected': isLetterSelected(letterInAlphabet) }"
          @mousedown="select(letterInAlphabet)"
        >
          {{ letterInAlphabet.toUpperCase() }}
        </button>
      </li>
    </ul>
    <span class="alphabet__word">{{ wordForLetter }}</span>
  </div>
</template>

<script>
import letterMap from './letter-map.js'

const letters = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('')

export default {
  data () {
    return {
      letterPhotos: letterMap,
      letterSelected: 'a',
      alphabet: letters
    }
  },
  created: function () {
    window.addEventListener('keydown', this.onKeyPress)
  },
  methods: {
    onKeyPress (keyEvent) {
      const { key } = keyEvent;

      if ( letters.includes(key) ) {
        this.select(key)
      }
    },
    select (letter) {
      this.letterSelected = letter
    },
    isLetterSelected (letter) {
      return (letter === this.letterSelected)
    },
    backgroundImageStyle (imageUrl) {
      return `background-image: url(${ imageUrl })`
    }
  },
  computed: {
    letterImageUrl () {
      if ( letterMap[ this.letterSelected ] ) {
        return letterMap[ this.letterSelected ].url
      } else {
        return ''
      }
    },
    wordForLetter () {
      if ( letterMap[ this.letterSelected ] ) {
        return letterMap[ this.letterSelected ].title
      } else {
        return ''
      }
    }
  }
}
</script>