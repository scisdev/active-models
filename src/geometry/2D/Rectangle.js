import { Point } from './index'

export default class Rectangle {
  /**
   *
   * @param start
   * @param width
   * @param height
   */
  constructor (start = new Point(), width = 0, height = 0) {
    this.width = width
    this.height = height
    this.start = start
    this.end = new Point(this.start.x + this.width, this.start.y + this.height)

  }

  /**
   *
   * @returns {Point}
   */
  get startPoint () {
    return this.start
  }

  /**
   *
   * @returns {Point}
   */
  get endPoint () {
    return this.end
  }

  /**
   *
   * @param x
   * @param y
   * @returns {boolean}
   */
  includePoint ({ x, y }) {
    return x >= this.startPoint.x &&
      x <= this.endPoint.x &&
      y >= this.startPoint.y &&
      y <= this.endPoint.y
  }

  /**
   *
   * @param rectangle
   * @returns {boolean}
   */
  includeRect (rectangle) {
    return this.includePoint(rectangle.startPoint) && this.includePoint(rectangle.endPoint)
  }

  /**
   *
   * @param rectangle
   * @returns {boolean}
   */
  crossRect (rectangle) {
    return this.includePoint(rectangle.startPoint) || this.includePoint(rectangle.endPoint)
  }
}
