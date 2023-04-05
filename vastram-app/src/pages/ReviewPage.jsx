import React, { useEffect, useState } from 'react'
import { Button, Stack, Box, Text } from '@chakra-ui/react'

import { Flex } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Spacer, StackDivider, Divider, HStack, Circle, Card, CardHeader, CardBody } from '@chakra-ui/react'
import { GiCheckMark } from "react-icons/gi";
import { useDispatch, useSelector } from 'react-redux'
import { getShipping,getPayment } from '../redux/productsRedux/actions';
import { FaCheck } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom'
import { BsChevronLeft } from 'react-icons/bs'

//import NavbarVastram from '../components/NavbarVastram'
import image from "../images/img1.png"
import WithSubnavigation from '../components/Navbar'
import LargeWithAppLinksAndSocial from '../components/Footer'
import Swal from 'sweetalert2'


let afterpay = "data:image/png;base64,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"
//const image = 'https://raw.githubusercontent.com/Pankaj-bit361/-vigorous-ticket-1895/main/vastram/src/Image/HD-Logo.png?token=GHSAT0AAAAAAB7ITQ5H66O5VXZ56VLUVLOQZBIOLLQ'

const ReviewPage = () => {
    //const [cardname, setCardname] = useState('');
    //const [cardnumber, setCardnumber] = useState('');
    //const [data, setData] = useState([])
    const { shipping,cart2 } = useSelector(store => store.productsReducer);
    const dispatch = useDispatch();
    console.log(shipping,cart2);
const navigate =useNavigate()
    useEffect(() => {
        dispatch(getShipping())
        

    }, [])
    // useEffect(() => {
    //     dispatch(getPayment())
        

    // }, [])

    // console.log(data)

const handledone=()=>{
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Payment Success',
        showConfirmButton: false,
        timer: 1500
      })
      navigate("/")
}


    return (
        <>
            
       
        <div>
            <Stack
                //border='2px solid pink'
                direction={['column', 'column', 'row']} spacing={'25px'} margin={'auto'} width={{ base: '100%', md: '100%', lg: '95%' }} mb={'20px'}>

               <Box
                    width={'30%'}
                    m={'auto'}
                
                >
                   <Link to="/">  <img src={image} alt={'logo'} width={'100%'} height={30} /> </Link>
                </Box>
                <Box width={{ base: '100%', lg: '80%' }}
                    //border={'1px solid red'} 
                    position={'relative'} alignContent={'center'} pt={'4%'}>
                    <Flex justifyContent={'space-between'} alignItems={'center'}>
                        <Text fontWeight={'600'}>Shipping</Text>
                        <Text fontWeight={'600'}>Payment</Text>
                        <Text fontWeight={'600'}>Review Order</Text>
                    </Flex>
                    <HStack justifyContent={'space-between'} alignItems={'center'} position="relative" mr={'35px'} ml={'12px'} >
                        {/* <Divider colorScheme='blackAlpha' borderColor="black.400" position={'fixed'}
                            //w={{lg:'59%',mdbase:'45%'}} 
                            w={["45%", "42%", "58%", "58%"]}
                            ml={'48px'} /> */}
                        <Circle size='40px' bg='black' color='white'  >
                            <FaCheck />
                        </Circle>


                        <Circle size='40px' bg='black' color='white'  >
                            <FaCheck />
                        </Circle>
                        <Circle size='40px' bg='black' color='white'  >
                            3
                        </Circle>
                    </HStack>
                </Box>
            </Stack>

            <Stack direction={['column', 'row']} justifyContent={'center'} margin={'auto'} spacing={'24px'}
                //border={'1px solid teal'}
                width={{ base: '100%', md: '100%', lg: '95%' }}>
                <Stack width={'95%'} spacing={'20px'} direction={['column', 'column']}>
                    <Text ml={'2.5%'} mb={'20px'}><Link to="/checkout"> <Flex alignItems={'center'} justifyContent={'flex-start'}>
                        <BsChevronLeft />
                        Return to Shopping Bag</Flex></Link></Text>
                    <Stack direction={['row']} p={2} bgColor={'white'} border={'1px solid black'} color={'black'} borderRadius={5} width={'100%'} mb={'0px'}>
                        <Box><GiCheckMark /></Box>
                        <Box
                            fontWeight={600}
                        > 1. Shipping</Box>
                    </Stack>
                    <Stack direction={['row']} p={2} bgColor={'white'} border={'1px solid black'} color={'black'} borderRadius={5} width={'100%'} mb={'0px'}>
                        <Box><GiCheckMark /></Box>
                        <Box
                            fontWeight={600}
                        > 2. Payment Method</Box>
                    </Stack>

                    <Box p={2} bgColor={'black'} color={'white'} fontWeight={500} borderRadius={5} width={'100%'} mb={'20px'}>3. review Order</Box>

                    <Stack width={'100%'} p={5} border={'0.1px solid gray'} mb={'40px'} borderRadius={5}>
                        <Text fontWeight={'500'} fontSize={'xl'} mb={'15px'}>Ship It</Text>
                    </Stack>

                    <Flex width={'100%'} alignItems={'center'} >
                        <Spacer />
                      <Link>  <Button colorScheme='blue' onClick={handledone} size={'lg'} px={'20'}>Place Order</Button></Link>
                    </Flex>
                </Stack>


                <Stack width={{ base: '100%', md: '100%', lg: '35%' }} height={'auto'} direction={['column', 'column']} spacing={'20px'}>

                    <Flex width={'100%'} alignItems={'center'} >
                        <Button colorScheme='blue' width={'100%'} >Place Order</Button>
                    </Flex>
                    <Box textAlign={'center'} fontSize={'12px'}>
                        <Text>
                            By placing your order, you agree to
                        </Text>
                        <Text as="span">
                            Vastram's <Text as="span" textDecoration={'underline'} color={'blue'} >Privacy Policy</Text> &
                            <Text as="span" textDecoration={'underline'} color={'blue'}>Terms of Use</Text>
                        </Text>
                    </Box>

                    <Card border={'1px solid black'} borderRadius={'5px'} >
                        <CardHeader>
                            <Text fontWeight={'500'} fontSize={'xl'}>Order Summary</Text>
                        </CardHeader>
                        <CardBody>
                            <Stack divider={<StackDivider />} spacing='4'>
                                <Box>
                                    <Flex alignItems={'center'} justifyContent={'space-between'} width={'100%'}>
                                        <Text fontWeight={'400'}>SubTotal (x7 items)</Text>
                                        <Text fontWeight={'400'}  >$ 4603</Text>
                                    </Flex>
                                    <Flex alignItems={'center'} justifyContent={'space-between'} width={'100%'}>
                                        <Text fontWeight={'400'}>Est. Shipping (vastram)</Text>
                                        <Text fontWeight={'400'} >FREE</Text>
                                    </Flex>
                                </Box>
                                <Box>
                                    <Flex alignItems={'center'} justifyContent={'space-between'} width={'100%'}>
                                        <Text fontWeight={'600'}>Estimated Total</Text>
                                        <Text fontWeight={'600'}  >$ 4603</Text>
                                    </Flex>
                                    <Text>
                                        or 4 interest-free payments of $ 6537.57 with
                                    </Text>
                                    <Image src={afterpay} alt='afterpay' width={'30%'} height={'60%'} />

                                </Box>
                            </Stack>

                        </CardBody>
                    </Card>

                    <Stack mt={'20px'} border={'1px solid black'} divider={<StackDivider />} spacing='4' borderRadius={'5px'} p={'15px'}>
                        <Box>
                            <Flex alignItems={'center'} justifyContent={'space-between'} width={'100%'} mb={'20px'}>
                                <Text fontWeight={'500'} fontSize={'xl'}>Shipping by Vastram</Text>
                                <Text fontWeight={'400'} color={'blue'} as='u'  >Edit</Text>
                            </Flex>

                            <Text fontWeight={'600'}>{shipping.firstname} {shipping.lastname}</Text>
                            <Text>{shipping.address1}</Text>
                            <Text>{shipping.address2}</Text>
                            <Text>{shipping.city} {shipping.state} {shipping.zipcode}</Text>
                            <Text>{shipping.phone}</Text>
                        </Box>
                        <Box>
                            <Text>Method : {shipping.order}</Text>

                        </Box>
                    </Stack>

                    <Stack mt={'20px'} border={'1px solid black'} spacing='4' borderRadius={'5px'} p={'15px'}>
                        <Box>
                            <Flex alignItems={'center'} justifyContent={'space-between'} width={'100%'} mb={'20px'}>
                                <Text fontWeight={'500'} fontSize={'xl'}>Billing Address</Text>
                                <Text fontWeight={'400'} color={'blue'} as='u'  >Edit</Text>
                            </Flex>

                            <Text fontWeight={'600'}>{shipping.firstname} {shipping.lastname}</Text>
                            <Text>{shipping.address1}</Text>
                            <Text>{shipping.address2}</Text>
                            <Text>{shipping.city} {shipping.state} {shipping.zipcode}</Text>
                            <Text>{shipping.phone}</Text>
                        </Box>

                    </Stack>

                    <Stack mt={'20px'} border={'1px solid black'} spacing='4' borderRadius={'5px'} p={'15px'}>
                        <Box>
                            <Flex alignItems={'center'} justifyContent={'space-between'} width={'100%'} mb={'20px'}>
                                <Text fontWeight={'500'} fontSize={'xl'}>Payment Method</Text>
                                <Text fontWeight={'400'} color={'blue'} as='u'  >Edit</Text>
                            </Flex>

                            <Text fontWeight={'600'}>Discover</Text>
                            {/* <Text>{cart2.cardname}</Text>
                            <Text>{cart2.cardnumber}</Text> */}
                            
                        </Box>

                    </Stack>

                </Stack>
            </Stack>


        </div>
        <LargeWithAppLinksAndSocial/>
        </>
    )
}

export default ReviewPage;