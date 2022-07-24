let entityId = -1;

function _createEntityId() {
  return entityId += 1;
}

export function queryEntityByComponents(components) {

}

export class Entity {

  constructor(tag) {
    this.id = _createEntityId();
    this.tag = tag;
    this.components = [];
  }
}
