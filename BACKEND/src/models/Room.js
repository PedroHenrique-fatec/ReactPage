class Room {
  constructor(name, capacity, resources, time_open) {
    this._name_room = name;
    this._capacity_room = capacity;
    this._resources_room = resources;
    this._time_open_room = time_open;
  }

  get name() {
    return this._name_room;
  }

  get capacity() {
    return this._capacity_room;
  }

  get resources() {
    return this._resources_room;
  }

  get time_open() {
    return this._time_open_room;
  }
}

export default Room;
