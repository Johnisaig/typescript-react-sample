import React, { useState, useRef } from 'react'

interface Person {
  firstName: string
  middleName: string
  lastName: string
}

interface Props {
  text: string
  ok?: boolean
  i?: number
  fn: (bob: string) => string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  person: Person
}

interface TextNode {
  text: string
}

export const TextField: React.FC<Props> = ({ handleChange }) => {
  const [count, setCount] = useState<TextNode>({ text: 'Hello' })
  const inputRef = useRef<HTMLInputElement>(null)
  const divRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={divRef}>
      <input ref={inputRef} onChange={handleChange} />
    </div>
  )
}
