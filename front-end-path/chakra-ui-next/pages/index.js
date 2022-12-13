import { Text, Heading, Flex, Stack, useColorModeValue } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import DarkModeSwitch from '../components/DarkModeSwitch'
import styles from '../styles/Home.module.css'

export default function Home() {
  const bg = useColorModeValue('red.500', 'red.200')
  const color = useColorModeValue('gray.800', 'white')

  return (
    <Stack as='main' align='center'>
      <Flex flexDirection='column' maxWidth='700px'>
        <Flex flexDirection='row' w='700px' pt={4} justify='space-between'>
          <DarkModeSwitch />
          <Text color={color}>Home</Text>
        </Flex>
        <Heading as='h1' size='2xl' fontWeight='normal'>
          Hello World
        </Heading>
        <Text mt={4}>This is my first Chakra UI encounter</Text>
      </Flex>
    </Stack>
  )
}
