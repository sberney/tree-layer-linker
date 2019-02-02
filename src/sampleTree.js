

/*
 * The format of a node is as such:
 * {
 *   name -> string
 *   left  -> node | undefined
 *   right -> node | undefined
 *   next  -> node | undefined
 * }
 */

export const sampleTree = {
  name: 'A',
  left: {
    name: 'B',
    left: {
      name: 'D',
      left: {
        name: 'G'
      }
    },
    right: {
      name: 'E',
      left: {
        name: 'H'
      },
      right: {
        name: 'I'
      }
    }
  },
  right: {
    name: 'C',
    right: {
      name: 'F',
      right: {
        name: 'J'
      }
    }
  }
}