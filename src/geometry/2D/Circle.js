import { Point, Shape } from './index'

export default class Circle extends Shape {
  constructor (center = new Point(), radius = 0) {
    super(center)
    this.radius = radius
  }

  get area () {
    return Math.PI * this.radius * this.radius
  }

  get perimeter () {
    return 2 * Math.PI * this.radius
  }

  includePoint (point) {

  }
}
