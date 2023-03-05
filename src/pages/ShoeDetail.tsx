import { Box, Button, Flex, VStack } from "@chakra-ui/react";


export default function ShoeDetail() {
    return (
        <>
        <Box mt='5' w='100%' display='flex' flexDirection='row'>
            <Box backgroundColor='lightpink' w='60%' h='40vh'>

            </Box>

            <Box backgroundColor='lightblue' w='40%' h='40vh'>
                <VStack>
                    <Box>
                        <Box>
                            Sneaker 1
                        </Box>
                        <Box>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, maiores rem sequi tenetur suscipit quos?
                        </Box>
                        <Box>
                            $165
                        </Box>
                    </Box>
                    <Box w='90%' h='20vh' outline='1px solid gray'>
                        <Flex>
                            <Box>
                                <Button>4</Button>
                            </Box>
                        </Flex>
                    </Box>
                </VStack>
            </Box>
        </Box>
        </>
    )
}