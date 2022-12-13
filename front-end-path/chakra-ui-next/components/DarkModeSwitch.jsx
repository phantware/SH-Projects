import React from 'react'

import { useColorMode, IconButton } from '@chakra-ui/react'

const DarkModeSwitch = () => {
  const { colorMode, toggleColoMode } = useColorMode()
  return (
    <div>
      <IconButton />
    </div>
  )
}

export default DarkModeSwitch
