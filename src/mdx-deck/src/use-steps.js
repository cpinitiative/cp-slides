import React from 'react'
import useDeck from "../gatsby-theme-mdx-deck/src/hooks/use-deck";
// import useDeck from './use-deck'

console.log("Hey!");

export const useSteps = length => {
  const context = useDeck()
  React.useEffect(() => {
    if (typeof context.register !== 'function') return
    context.register(context.index, 'steps', length)
  }, [])
  if (context.preview) return length
  return context.step
}

export default useSteps

// export const useSteps = length => {
//   const context = useDeck()
//
//   console.trace("HELLO WORLD???");
//
//   React.useEffect(() => {
//     if (!context.main) return
//     context.setSteps(length)
//     if (context.direction < 0) context.setStep(length)
//   }, [length, context])
//
//   if (!context.main) return length
//   return context.step
// }
//
// export default useSteps
