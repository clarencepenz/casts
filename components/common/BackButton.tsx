import { ArrowLeft } from 'lucide-react'
import React from 'react'

type Props = {
    back: () => void;
}

function BackButton({ back }: Props) {
  return (
    <div
    onClick={back}
    className="flex gap-1 items-center mr-auto my-2 cursor-pointer hover:ease-in hover:text-gray-400"
  >
    <ArrowLeft size="1rem" />
    <small>Go Back</small>
  </div>
  )
}

export default BackButton
