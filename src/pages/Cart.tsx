import { Box, Button, Divider, Input, Text, VStack, Menu, MenuButton, MenuList, MenuItem, Flex } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

export default function Trail () {
    return (
        <>
        <Box display='flex' flexDirection='row'>
            <Box w='70%' h='40vh' mt='5'>
            <VStack>
                <Box w='100%'>
                    <Text fontSize='3xl' fontWeight='semibold' ps='5'>
                        Cart
                    </Text>
                </Box>
                <Box w='95%' h='10vh' display='flex' flexDirection='row' outline='1px solid gray'>
                    <Box w='20%' backgroundColor='white' h='10vh'>
                        
                    </Box>
                    <Box w='70%' h='10vh'>
                        <VStack alignItems='start' ms='4' mt='5'>
                            <Text fontWeight='semibold'> 
                                Sneaker 1
                            </Text>
                            <Text mb='2'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, doloremque.
                            </Text>


                            <Flex gap='2'>
                                <Box mt='5'>
                                    <Text border='1px' rounded='5' w='80px' h='9' align='center' pt='1' backgroundColor='white' color='blackAlpha.900'>
                                        Size
                                    </Text>
                                </Box>
                                <Box mt='5' ms='10'>
                                    <Text border='1px' rounded='5' w='80px' h='9' align='center' pt='1' backgroundColor='white' color='blackAlpha.900'>
                                        Qty
                                    </Text>
                                </Box>
                                <Box mt='5'>
                                    <Menu>
                                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} h='9' w='2'>
                                        
                                        </MenuButton>
                                        <MenuList>
                                            <MenuItem>1</MenuItem>
                                            <MenuItem>2</MenuItem>
                                            <MenuItem>3</MenuItem>
                                            <MenuItem>4</MenuItem>
                                            <MenuItem>5</MenuItem>
                                            <MenuItem>6</MenuItem>
                                            <MenuItem>7</MenuItem>
                                            <MenuItem>8</MenuItem>
                                            <MenuItem>9</MenuItem>
                                            <MenuItem>10</MenuItem>
                                        </MenuList>
                                    </Menu>
                                </Box>
                                <Box ms='10' mt='5'>
                                    <Button colorScheme='red' h='9'>Remove</Button>
                                </Box>
                            </Flex>


                        </VStack>
                    </Box>
                </Box>
            </VStack>
            </Box>


            <Box w='30%' h='40vh' mt='5'>
            <VStack>
                <Box w='100%'>
                    <Text fontSize='3xl' fontWeight='semibold' ps='5'>
                        Summary
                    </Text>
                    <Box display='flex' flexDirection='row' justifyContent='space-between' p='5' gap='3' rounded={6} mb='2'>
                        <Input
                            placeholder='COUPON CODE'
                            variant="filled"
                            type='text'
                            w='60'
                        />
                        <Button w='20' colorScheme='yellow' borderRadius='25px'>Add</Button>
                    </Box>
                    <Box display='inline-flex' justifyContent='space-between' px='5' w='100%' mb='4'>
                        <Text>Subtotal</Text>
                        <Text>price</Text>
                    </Box>
                    <Box display='inline-flex' justifyContent='space-between' px='5' w='100%' mb='4'>
                        <Text>Estimated Shipping & Handling</Text>
                        <Text>price</Text>
                    </Box>
                    <Box display='inline-flex' justifyContent='space-between' px='5' w='100%' mb='5'>
                        <Text>Estimated Tax</Text>
                        <Text>price</Text>
                    </Box>
                    <Divider mb='5'/>
                    <Box display='inline-flex' justifyContent='space-between' px='5' w='100%' mb='5'>
                        <Text>Total</Text>
                        <Text>price</Text>
                    </Box>
                    <Divider mb='5'/>
                    <Box w='100%' display='flex' justifyContent='center'>
                        <Button w='80' colorScheme='yellow' borderRadius='25px'>Checkout</Button>
                    </Box>
                </Box>
            </VStack>
            </Box>
        </Box>
        </>
    )
}