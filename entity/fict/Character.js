import '../Entity'

class Character extends Entity {
  doAction(action) {
    action.execute();
  }
}

export default Character