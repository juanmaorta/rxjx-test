/* eslint no-console: "off" */
import { Subject } from 'rxjs/Subject'
const mySubject = new Subject()

const observerObj = {
  next: (o) => console.log(`observer A: ${o}`)
}

mySubject.subscribe(observerObj)
mySubject.subscribe({
  next: o => console.log(`observer B: ${o}`)
})
mySubject.next(1)
mySubject.next(2)
