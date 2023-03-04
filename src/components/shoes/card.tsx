import { Button, ButtonGroup, Card, CardBody, CardFooter, Heading, Image, Stack, Text, Menu, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup, MenuDivider } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

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
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Select Size
            </MenuButton>
            <MenuList>
              <MenuItem>5</MenuItem>
              <MenuItem>5.5</MenuItem>
              <MenuItem>6</MenuItem>
              <MenuItem>6.5</MenuItem>
              <MenuItem>7</MenuItem>
              <MenuItem>7.5</MenuItem>
              <MenuItem>8</MenuItem>
              <MenuItem>8.5</MenuItem>
              <MenuItem>9</MenuItem>
              <MenuItem>9.5</MenuItem>
              <MenuItem>10</MenuItem>
              <MenuItem>10.5</MenuItem>
              <MenuItem>11</MenuItem>
              <MenuItem>11.5</MenuItem>
              <MenuItem>12</MenuItem>
              <MenuItem>12.5</MenuItem>
              <MenuItem>13</MenuItem>
              <MenuItem>13.5</MenuItem>
              <MenuItem>14</MenuItem>
              <MenuItem>14.5</MenuItem>
            </MenuList>
          </Menu>
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