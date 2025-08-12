// Import all images
import mediterraneanLarge from './assets/images/mediterranean-chickpea-salad-large.webp'
import mediterraneanSmall from './assets/images/mediterranean-chickpea-salad-small.webp'
import avocadoToastLarge from './assets/images/avocado-tomato-wholegrain-toast-large.webp'
import avocadoToastSmall from './assets/images/avocado-tomato-wholegrain-toast-small.webp'
import salmonLarge from './assets/images/salmon-asparagus-large.webp'
import salmonSmall from './assets/images/salmon-asparagus-small.webp'
import quinoaLarge from './assets/images/quinoa-veggie-bowl-large.webp'
import quinoaSmall from './assets/images/quinoa-veggie-bowl-small.webp'
import tacosLarge from './assets/images/sweet-potato-tacos-large.webp'
import tacosSmall from './assets/images/sweet-potato-tacos-small.webp'
import yogurtLarge from './assets/images/greek-yogurt-large.webp'
import yogurtSmall from './assets/images/greek-yogurt-small.webp'
import soupLarge from './assets/images/lentil-soup-large.webp'
import soupSmall from './assets/images/lentil-soup-small.webp'
import pancakesLarge from './assets/images/banana-pancakes-large.webp'
import pancakesSmall from './assets/images/banana-pancakes-small.webp'

const imageMap = {
  "mediterranean-chickpea-salad": {
    large: mediterraneanLarge,
    small: mediterraneanSmall
  },
  "avocado-tomato-wholegrain-toast": {
    large: avocadoToastLarge,
    small: avocadoToastSmall
  },
  "one-pan-lemon-garlic-salmon-with-asparagus": {
    large: salmonLarge,
    small: salmonSmall
  },
  "quinoa-veggie-power-bowl": {
    large: quinoaLarge,
    small: quinoaSmall
  },
  "sweet-potato-black-bean-tacos": {
    large: tacosLarge,
    small: tacosSmall
  },
  "greek-yogurt-berry-parfait": {
    large: yogurtLarge,
    small: yogurtSmall
  },
  "lentil-spinach-soup": {
    large: soupLarge,
    small: soupSmall
  },
  "banana-oat-pancakes": {
    large: pancakesLarge,
    small: pancakesSmall
  }
}

// Helper function to get image by slug and size
export const getImage = (slug, size = 'large') => {
  return imageMap[slug]?.[size] || null
}

export default imageMap