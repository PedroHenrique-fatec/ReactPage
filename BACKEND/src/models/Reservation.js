class Reservation {
    #id_user
    #id_room
    #time_start
    #time_close

    constructor(id_user, id_room, time_start, time_close) {
        this.#id_user = id_user;
        this.#id_room = id_room;
        this.#time_start = time_start;
        this.#time_close = time_close;
    }

    get id_user() {
        return this.#id_user;
    }

    get id_room() {
        return this.#id_room;
    }

    get time_start() {
        return this.#time_start;
    }

    get time_close() {
        return this.#time_close;
    }
}

export default Reservation;