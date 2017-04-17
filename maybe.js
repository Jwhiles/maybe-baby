const trace = x => {
  console.log(x)
  return x
}

const maybeNull = () => {
    return Math.random() >= 0.5 ? null : 'poop';
}

const Nothing = x => ({
  map: f => Nothing(x)
});

const Just = x => ({
  map: f => Just(f(x))
})

const Maybe = (x) => {
  if (x === null || x === undefined) {
    return Nothing(x)
  }

  return Just(x)
}

Maybe(maybeNull())
  .map(s => s.split(''))
  .map(a => a.sort())
  .map(a => a.join(''))
  .map(s => s.toUpperCase())
  .map(trace)
