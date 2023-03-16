async function sleep(ms: number) {
  await new Promise(resolve => {
    setTimeout(() => {
      resolve(true)
    }, ms)
  })
}

const test = async(arg: unknown) => {
  await sleep(1000)
  console.error(arg)
}

const object = {
  test: async() => {
    await sleep(1000)
  },
}

test(object)

const isA
  = (object.toString() === '1') ? '1'
  : (object.toString() === '2') ? '2'
  : '3'

console.error(isA)
