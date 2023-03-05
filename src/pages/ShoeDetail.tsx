import { Box, Button, Flex, VStack, Text } from "@chakra-ui/react";


export default function ShoeDetail() {
    return (
        <>
        <Box mt='5' w='100%' display='flex' flexDirection='row'>
            <Box backgroundColor='lightpink' w='60%' h='40vh'>

            </Box>

            <Box w='40%' h='40vh'>
                <VStack>
                    <Box>
                        <Box ms='5' mb='3'>
                            <Text fontWeight='semibold' fontSize='3xl'>Sneaker 1</Text>
                        </Box>
                        <Box ms='5' mb='3'>
                            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, maiores rem sequi tenetur suscipit quos?</Text>
                        </Box>
                        <Box ms='5' mb='3'>
                            <Text fontWeight='semibold' fontSize='3xl' color='yellow.500'>$165</Text>
                        </Box>
                    </Box>
                    <Box w='95%' h='20vh' outline='1px solid gray' rounded='5'>
                        <Flex flexWrap='wrap' gap='7' p='4'>
                            <Box>
                                <Button size='lg' w='20'>4</Button>
                            </Box>
                            <Box>
                                <Button size='lg' w='20'>4.5</Button>
                            </Box>
                            <Box>
                                <Button size='lg' w='20'>5</Button>
                            </Box>
                            <Box>
                                <Button size='lg' w='20'>5.5</Button>
                            </Box>
                            <Box>
                                <Button size='lg' w='20'>6</Button>
                            </Box>
                            <Box>
                                <Button size='lg' w='20'>6.5</Button>
                            </Box>
                            <Box>
                                <Button size='lg' w='20'>7</Button>
                            </Box>
                            <Box>
                                <Button size='lg' w='20'>7.5</Button>
                            </Box>
                            <Box>
                                <Button size='lg' w='20'>8</Button>
                            </Box>
                            <Box>
                                <Button size='lg' w='20'>8.5</Button>
                            </Box>
                            <Box>
                                <Button size='lg' w='20'>9</Button>
                            </Box>
                            <Box>
                                <Button size='lg' w='20'>9.5</Button>
                            </Box>
                            <Box>
                                <Button size='lg' w='20'>10</Button>
                            </Box>
                            <Box>
                                <Button size='lg' w='20'>10.5</Button>
                            </Box>
                            <Box>
                                <Button size='lg' w='20'>11</Button>
                            </Box>
                            <Box>
                                <Button size='lg' w='20'>11.5</Button>
                            </Box>
                            <Box>
                                <Button size='lg' w='20'>12</Button>
                            </Box>
                            <Box>
                                <Button size='lg' w='20'>12.5</Button>
                            </Box>
                            <Box>
                                <Button size='lg' w='20'>13</Button>
                            </Box>
                            <Box>
                                <Button size='lg' w='20'>13.5</Button>
                            </Box>
                        </Flex>
                    </Box>
                    <Box w='100%' display='flex' justifyContent='center'>
                        <Button w='80' colorScheme='yellow' borderRadius='25px' mt='5'>Add to Cart</Button>
                    </Box>
                </VStack>
            </Box>
        </Box>

        <Box ms='10' mt='10'>
            <Text fontWeight='semibold' fontSize='4xl'>OVERVIEW</Text>
        </Box>
        <Box ms='10' mt='10' w='60%' mb='20'>
            <Text fontSize='xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ratione soluta! Laboriosam cupiditate aliquid necessitatibus ipsa quam sequi velit labore accusamus quasi. Quibusdam qui porro sequi cupiditate, vitae nemo aspernatur.</Text>
        </Box>
        </>
    )
}