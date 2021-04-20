import { act } from 'react-dom/test-utils'

// source:
// https://stackoverflow.com/questions/57006369/testing-asynchronous-useeffect
export const waitForUseEffect = async (wrapper: any) => {
  await act(async () => {
    await Promise.resolve(wrapper)
    await new Promise(resolve => setImmediate(resolve))
    wrapper.update()
  })
}
