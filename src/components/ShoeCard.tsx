import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, Menu, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup, MenuDivider } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

 export default function ShoeCard() {
    return (
        <>
            <Card maxW='sm'>
                <CardBody>
                    <Image
                    src='./assets/images/card1.jpg'
                    alt='Green Nike'
                    borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                    <Heading size='md'>Living room Sofa</Heading>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque similique iusto incidunt nostrum a quaerat nam dolorem modi accusantium facilis?
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                        $165
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
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                    <Button variant='filled' colorScheme='blue'>
                        Buy now
                    </Button>
                    <Button variant='ghost' colorScheme='blue'>
                        Add to cart
                    </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </>
    )
 }
 
 