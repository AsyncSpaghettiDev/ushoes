import { Button, ButtonGroup, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from '@chakra-ui/react'

interface CardProps {
  shoe: Shoe
}

export const ShoeCard: React.FC<CardProps> = ({ shoe: { model, image, description, price } }) => {
  return (
    <Card maxW='xs' flexBasis={250} flex={1}>
      <CardBody>
        <Image
          objectFit='cover'
          boxSize='sm'
          src={image}
          alt={model}
          borderRadius='md'
        />
        <Stack mt='3' spacing='2'>
          <Heading size='sm'>{model}</Heading>
          <Text fontSize='xs'>
            {description}
          </Text>
          <Text color='yellow.500' fontSize='xl'>
            ${price}
          </Text>
        </Stack>
      </CardBody>
      <CardFooter mt='-5'>
        <ButtonGroup spacing='2'>
          <Button variant='solid' colorScheme='yellow' size='sm'>
            Buy now
          </Button>
          <Button variant='ghost' colorScheme='yellow' size='sm'>
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}