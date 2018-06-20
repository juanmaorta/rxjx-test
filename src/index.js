import _ from 'lodash'

import { Subject } from 'rxjs/Subject'
const mySubject = new Subject()

const observerObj = {
  next: (o) => displayText(`observer A: ${o}`)
}

const displayText = (text) => {
  document.body.appendChild(component(text))
}

mySubject.subscribe(observerObj)
mySubject.subscribe({
  next: o => displayText(`observer B: ${o}`)
})
mySubject.next(1)
mySubject.next(2)

function component (text) {
  var element = document.createElement('div')
 // Lodash, now imported by this script
  element.innerHTML = text

  return element
}
