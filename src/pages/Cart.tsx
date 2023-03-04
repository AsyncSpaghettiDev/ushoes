import { Box, Button, Input, Text, VStack } from "@chakra-ui/react";

export default function Trail () {
    return (
        <>
        <Box display='flex' flexDirection='row' >
            <Box backgroundColor='lightpink' w='70%' h='40vh'>

            </Box>

            <Box w='30%' h='40vh'>
            <VStack>
                <Box w='100%'>
                    <Text fontSize='3xl' fontWeight='semibold' ps='5'>
                        Summary
                    </Text>
                    <Box display='flex' flexDirection='row' justifyContent='space-between' p='5' gap='3' rounded={6} mb='2'>
                        <Input
                            placeholder='Promo Code'
                            variant="filled"
                            type='text'
                        />
                        <Button colorScheme='yellow' borderRadius='25px'>Add</Button>
                    </Box>
                    <Box display='inline-flex' justifyContent='space-between' px='5' w='100%'>
                        <Text>Subtotal</Text>
                        <Text>price</Text>
                    </Box>
                </Box>
            </VStack>
            </Box>
            

        </Box>



        </>
    )
}