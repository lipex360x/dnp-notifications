import type { NodePlopAPI } from 'plop'
import components from './components'

export default function (plop: NodePlopAPI) {
  plop.setGenerator('component', components)
}
