const rootNode = document.querySelector('.embla')
const viewportNode = rootNode.querySelector('.embla__viewport')
// Grab button nodes
const prevButtonNode = rootNode.querySelector('.embla__prev')
const nextButtonNode = rootNode.querySelector('.embla__next')

const embla = EmblaCarousel(viewportNode)
// Add click listeners
prevButtonNode.addEventListener('click', embla.scrollPrev, false)
nextButtonNode.addEventListener('click', embla.scrollNext, false)

const emblaApi = EmblaCarousel(rootNode, options)