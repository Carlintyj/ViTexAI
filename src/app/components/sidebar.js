import React from 'react'
import {
    Box,
    Flex,
    Text,
} from '@chakra-ui/react'
import { FiHome, FiTrendingUp, FiCompass, FiStar, FiSettings } from 'react-icons/fi'
import Image from 'next/image'
import Logo from '../assets/Logo.png'

// Main Sidebar Component
export default function Sidebar() {
    return (
        <Box minH="100vh" bg="gray.100">
            <SidebarContent display={{ base: 'none', md: 'block' }} />
        </Box>
    )
}

// Sidebar Content
const SidebarContent = () => {
    return (
        <Box
            w={{ base: 'full', md: 60 }}
            pos="fixed"
            h="full"
            bg="gray.200"
            borderRight="1px"
            borderRightColor="gray.200"
        >
            {/* Sidebar Header */}
            <Flex h="20" alignItems="center" mx="8">
                <Image src={Logo} width={35} height={35}/>
                <Text fontSize="2xl" fontWeight="bold" color="black" ml={2}>
                    ViTexAI
                </Text>
            </Flex>

            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: 'cyan.400',
                    color: 'white',
                }}
                ml="4"
            >
                {/* Icon */}
                <FiHome 
                    mr="4"
                    fontSize="16"
                    color='black'/>
                <Text fontWeight="bold" ml="4" color='black'>Home</Text>
            </Flex>

            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: 'cyan.400',
                    color: 'white',
                }}
                ml="4"
            >
                {/* Icon */}
                <FiTrendingUp 
                    mr="4"
                    fontSize="16"
                    color='black'/>
                <Text fontWeight="bold" ml="4" color='black'>Trending</Text>
            </Flex>

            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: 'cyan.400',
                    color: 'white',
                }}
                ml="4"
            >
                {/* Icon */}
                <FiCompass 
                    mr="4"
                    fontSize="16"
                    color='black'/>
                <Text fontWeight="bold" ml="4" color='black'>Explore</Text>
            </Flex>

            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: 'cyan.400',
                    color: 'white',
                }}
                ml="4"
            >
                {/* Icon */}
                <FiStar 
                    mr="4"
                    fontSize="16"
                    color='black'/>
                <Text fontWeight="bold" ml="4" color='black'>Favourites</Text>
            </Flex>

            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: 'cyan.400',
                    color: 'white',
                }}
                ml="4"
            >
                {/* Icon */}
                <FiSettings 
                    mr="4"
                    fontSize="16"
                    color='black'/>
                <Text fontWeight="bold" ml="4" color='black'>Settings</Text>
            </Flex>
        </Box>
    )
}
