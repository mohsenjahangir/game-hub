import meh from '../assets/meh.png'
import bullEye from '../assets/bullsEye.png'
import thumbsUp from '../assets/thumbsUp.png'
import { Image, type ImageProps } from '@chakra-ui/react'

interface Props {
  rating: number
}

const Emoji = ({ rating }: Props) => {
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: 'Meh' },
    4: { src: thumbsUp, alt: 'Recomended' },
    5: { src: bullEye, alt: 'Exeptional' }
  }
  return (
    <Image marginTop={4} {...emojiMap[rating]} boxSize='35px' />
  )
}

export default Emoji