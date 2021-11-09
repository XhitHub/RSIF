// file storage ------------------------------------------------------------------
// JSON
var fict1_KB = {
  initialFacts: {

  },
  rules: [
    {
      lhs: {},
      rhs: {},
    }
  ]
}

// DB ------------------------------------------------------------------
// tables / mongo documents
var user = {
  userID: 1,
  username: 'user 1',
  passwordHash: 'isauhieeiwruhbwer',
  auths: {
    googleAuth: {

    }
  }
}

// match record
var match = {
  charMap: {
    // should use map or list?
    char1: {
      userID: 1
    }
  },
  userMap: {
    
  },
  currFacts: {

  },
  currFictData: {
    char1: {
      visibleFictFacts: {

      },
      availableActions: [
        {
          id: 1,
          name: 'take obj-x',
          args: {}
        },
        {
          id: 2,
          name: 'pay char-x',
          args: {
            amount: 'float',
          },
        },
      ],
      chosenAction: {
        id: 2,
        params: {
          amount: 123,
        },
      }
    }
  }
}