import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  Flex,
  Heading,
  Input,
  useColorMode,
  useColorModeValue,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import React, { useContext, useEffect, useState } from 'react'
import { getShoeTypes } from '../services'
import { capitalize } from '../utils'
import { LoginModal } from './modal'
import { AuthContext } from '../context'



export default function Navbar () {
  const [categories, setCategories] = useState<Array<ShoeType>>([])
  const { user, logout } = useContext(AuthContext)

  useEffect(() => {
    getShoeTypes().then(setCategories)
  }, [])

  const OverlayOne = () => (
    <ModalOverlay
      bg='blackAlpha.100'
      backdropFilter='blur(10px) hue-rotate(20deg)'
    />
  )
  const OverlayTwo = () => (
    <ModalOverlay
      bg='blackAlpha.100'
      backdropFilter='blur(10px) hue-rotate(20deg)'
    />
  )

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = React.useState(<OverlayOne />)

  const { toggleColorMode } = useColorMode()
  const formBackground = useColorModeValue("white", "gray.700")


  return (
    <>
      <header>
        <Box
          className="navbar"
          display='flex'
          flexDirection='row'
        >
          <Box className="logo">
            <NavLink to='/'>
              <h1>Untied Shoes</h1>
            </NavLink>
          </Box>
          <Box
            className="nav-links"
            alignItems='center'
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="men">Men</NavLink>
            </li>
            <li>
              <NavLink to="women">Women</NavLink>
            </li>
            <Menu>
              <MenuButton>Categories</MenuButton>
              <MenuList fontWeight='semibold'>
                {
                  categories.map(({ style }, index) => (
                    <MenuItem key={index} minH='45px' as='a' href={`/shoes/${style}`}>
                      {capitalize(style)}
                    </MenuItem>
                  ))
                }
              </MenuList>
            </Menu>
          </Box>
          <Box
            className="nav-functions"
            alignItems='center'
          >
            <Box>
              <Button borderRadius='25px' colorScheme='gray'>
                <NavLink to="search">Search</NavLink>
              </Button>
            </Box>
            <Box>
              {
                user ? (
                  <Menu>
                    <MenuButton style={{ cursor: 'pointer' }} as={"div"}>
                      <Button borderRadius='25px' colorScheme='gray'>
                        <NavLink to="profile">Profile</NavLink>
                      </Button>
                    </MenuButton>
                    <MenuList fontWeight='semibold'>
                      <MenuItem>
                        <NavLink to="profile">Profile</NavLink>
                      </MenuItem>
                      <MenuItem>
                        <NavLink to="cart">Cart</NavLink>
                      </MenuItem>
                      <MenuItem>
                        <NavLink to="orders">Orders</NavLink>
                      </MenuItem>
                      <MenuItem onClick={logout}>
                        <NavLink to="#">Logout</NavLink>
                      </MenuItem>
                    </MenuList>
                  </Menu>
                ) : (
                  <>
                    <Button
                      borderRadius='25px'
                      colorScheme='yellow'
                      onClick={() => {
                        setOverlay(<OverlayOne />)
                        onOpen()
                      }}
                    >
                      Login
                    </Button>
                    <LoginModal isOpen={isOpen} onClose={onClose} overlay={overlay} formBackground={formBackground} toggleColorMode={toggleColorMode} />
                  </>
                )
              }
            </Box>
          </Box>
        </Box>
      </header>
    </>
  )
}