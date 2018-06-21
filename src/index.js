import Rx from 'rxjs/Rx'

const mySubject = new Rx.Subject()

const observerObj = {
  next: (o) => displayText(`observer A: ${o}`)
}

const displayText = (text) => {
  document.body.appendChild(component(text))
}

const component = (text) => {
  var element = document.createElement('div')
  element.innerHTML = text

  return element
}

/**
mySubject.subscribe(observerObj)
mySubject.subscribe({
  next: o => displayText(`observer B: ${o}`)
})
mySubject.next(1)
mySubject.next(2)
*/

const node = document.querySelector('input[type=text]')
const input$ = Rx.Observable.fromEvent(node, 'input')
  .map(event => event.target.value)
  .filter(value => value.length >= 3)
  .subscribe( value => {
    next: displayText(`You just typed: ${value}!`)
  })
