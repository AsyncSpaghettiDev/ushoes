import { Wrap, Box } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { ShoeCard } from '../components'
import { getShoesByGender } from '../services'

export default function Men () {
  const [shoes, setShoes] = useState<Shoe[]>([])
  useEffect(() => {
    getShoesByGender().then(setShoes)
  }, [])
  return (
    <>
      <Box className="men">
        <Box fontSize='6xl' mb='3' mt='10' ms='10'>
          Men's shoes
        </Box>
        <Box fontSize='2xl' mb='10' ms='10'>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, assumenda veritatis ullam quas autem provident enim ea id aliquid deleniti.</p>
        </Box>
      </Box>
      <Box minH='85vh'
        backgroundColor='blackAlpha'
        w='100%'
        display='flex'
      >
        <Wrap
          spacing='20px'
          display="flex"
          flexDirection="row"
          mx='auto'
          gap='3'
          mt='5'
        >
          {
            shoes.map(shoe =>
              <ShoeCard key={shoe.id} shoe={shoe} />
            )
          }
        </Wrap>
      </Box>
    </>
  )
}