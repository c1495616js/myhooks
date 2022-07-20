import React from 'react'

import { useMyHook } from 'myhooks'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App
