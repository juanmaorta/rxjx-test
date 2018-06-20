/* eslint no-console: "off" */
import { Observable } from 'rxjs/Observable'

const myObservable = Observable.create((observer) => {
  console.log('Hello from Observable')
  observer.next(1)
  observer.next(2)
  observer.next(3)
  observer.complete()
})

const obs = {
  next: (o) => console.log(o),
  complete: () => console.log('complete')
}

myObservable.subscribe(obs)
