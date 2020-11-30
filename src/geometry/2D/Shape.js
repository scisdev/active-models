import { Point } from './index'

export default class Shape {
  start = new Point()
  constructor (start = new Point()) {
    this.start = new Point(start)
  }

  get area () {
    throw new TypeError('Getter for value area not implemented')
  }

  get perimeter () {
    throw new TypeError('Getter for value perimeter not implemented!')
  }

  includeShape (shape) {
    if (!(shape instanceof Shape)) {
      throw new TypeError('Shape must be instance of Shape class')
    }
    //
  }

  crossShape (shape) {
    if (!(shape instanceof Shape)) {
      throw new TypeError('Shape must be instance of Shape class')
    }
  }

  includePoint (point) {
    //
  }
}
